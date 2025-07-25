import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [formData, setFormdata] = useState({ name: "", phone: "", email: "", comment: "" });
    const [active, setActive] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setActive(true);

        emailjs.sendForm(
            'service_dv1e6ij',
            'template_dkc7luw',
            formRef.current,
            'e9Pb0KK3qll0L1YL7'
        )
            .then(() => {
                toast.success("Message sent!");
                setFormdata({ name: "", phone: "", email: "", comment: "" });
                setActive(false);
            })
            .catch((error) => {
                toast.error("Failed to send. Please try again.");
                console.error(error);
                setActive(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            const onlyNums = value.replace(/\D/g, "");
            if (onlyNums.length <= 10) {
                setFormdata((prevData) => ({ ...prevData, [name]: onlyNums }));
            }
        } else {
            setFormdata((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Element name="ContactForm">
                <div className="bg-gray-50 w-full overflow-hidden py-10">
                    <h1 className="font-bold lg:text-[27px] font-serif md:text-[27px] text-[20px] xl:text-[38px] pt-8 text-center">CONTACT</h1>
                    <hr className="w-[35%] md:w-[21%] lg:w-[15%] xl:w-[9%] text-black font-semibold border-t-8 mx-auto my-0 pb-10" />

                    <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto mb-4 py-5">
                        <form ref={formRef} onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-col gap-4 md:flex-row md:gap-4 justify-between w-full">
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full md:w-[32%] lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold focus:outline-none rounded-md border px-6 py-2"
                                    type="text"
                                    placeholder="* Name"
                                />
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full md:w-[32%] lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold focus:outline-none rounded-md border px-6 py-2"
                                    type="tel"
                                    placeholder="* Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                />
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full md:w-[32%] lg:text-[14px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold focus:outline-none rounded-md border px-6 py-2"
                                    type="email"
                                    placeholder="* Email Address"
                                />
                            </div>

                            <textarea
                                required
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="w-full lg:text-[16px] xl:text-[22px] bg-white transform transition duration-300 hover:scale-105 font-light lg:font-semibold focus:outline-none rounded-md border px-6 py-4"
                                placeholder="* Leave a Message"
                            ></textarea>

                            <button
                                disabled={active}
                                type="submit"
                                className="w-full md:w-[40%] lg:w-[25%] xl:w-[20%] mx-auto lg:text-[16px] xl:text-[25px] transform transition duration-300 hover:scale-105 font-bold bg-orange-500 border-none rounded-md py-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </Element>
        </>
    );
};
