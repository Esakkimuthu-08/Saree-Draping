import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";

export const ContactForm = () => {
    const [formData, setFormdata] = useState({ name: "", phone: "", email: "", comment: "" })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7b472219-15f8-4f4d-87a3-58163c0ed044");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success('Successfully toasted!')
            setFormdata({ name: "", phone: "", email: "", comment: "" })
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Element name="ContactForm">
                <div className="bg-gray-50  w-full overflow-hidden py-10 ">
                    <h1 className=" font-bold lg:text-[27px] font-serif md:text-[27px] text-[20px] xl:text-[38px] pt-8 text-center">CONTACT</h1>
                    <hr className=" w-[35%] md:w-[21%] lg:w-[15%] xl:w-[9%] text-black font-semibold border-t-8 mx-auto my-0 pb-10 "></hr>
                    <div className=" w-[80%] xl:w-[90%] md:w-full mx-auto my-0 mb-4 py-5">
                        <form action="" onSubmit={handleSubmit}  className=" md:w-[80%] xl:w-[80%] 2xl:w-[60%] mx-auto my-0 flex flex-col gap-2 md:gap-4 lg:gap-8">
                            <div className=" flex flex-col gap-2  w-full md:flex-row justify-between mx-auto my-0">
                                <input required name="name" value={formData.name} onChange={handleChange} className=" lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold xl:pr-14 2xl:pr-28 xl:py-3 focus:outline-none rounded-md border lg:pr-14 lg:py-1 pr-7 pl-6  py-0.5 " type="text" placeholder="* Name" />
                                <input required name="phone" value={formData.phone} onChange={handleChange} className=" lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold xl:pr-14 2xl:pr-28 xl:py-3 focus:outline-none rounded-md border lg:pr-14 lg:py-1 pr-7 pl-6  py-0.5 " type="phone" placeholder="* Phone Number" />
                                <input required name="email" value={formData.email} onChange={handleChange} className=" lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold xl:pr-14 2xl:pr-28 xl:py-3 focus:outline-none rounded-md border lg:pr-14 lg:py-1 pr-7 pl-6  py-0.5 " type="email" placeholder="* Email Address" />
                            </div>
                            <textarea required name="comment" value={formData.comment} onChange={handleChange} className=" lg:text-[16px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold xl:pr-20 focus:outline-none rounded-md border lg:pr-10 lg:pb-10 pr-7 pl-6  py-0.5 " id="" placeholder="* Leave a Message"></textarea>
                            <button type="submit" className=" lg:text-[16px] xl:text-[25px] transform transition duration-300 hover:scale-105 font-bold bg-orange-500 border-none w-[25%] xl:w-[20%] xl:py-2 rounded-md py-1">Send</button>
                        </form>
                    </div>
                </div>
            </Element>
        </>
    )
}