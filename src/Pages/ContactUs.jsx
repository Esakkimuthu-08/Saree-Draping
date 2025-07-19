import React, { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from "react-scroll";
export const ContactUs = () => {
    return (
        <div className=" bg-black flex  gap-8 items-center w-full flex-col md:flex-row py-8 text-white">
            <div className=" mx-auto my-0 w-full">
                <ul className=" text-[14px] text-center flex flex-col gap-2 lg:text-[20px] md:text-[14px] cursor-pointer">
                    <Link to="Home" smooth={true} duration={2000} className="transform hover:text-orange-400 transition font-bold duration-300 hover:scale-105" >Home</Link>
                    <Link to="Gallery" smooth={true} duration={2000} className="transform hover:text-orange-400 transition font-bold duration-300 hover:scale-105" >Gallery</Link>
                    <Link to="ContactForm" smooth={true} duration={2000} className="transform hover:text-orange-400 transition font-bold duration-300 hover:scale-105" >Contact</Link>
                    <div className=" text-[14px] text-center flex flex-col gap-2 lg:text-[20px] hover:text-orange-400 md:text-[14px] mx-auto my-0 w-[70%]  cursor-pointer">
                        <p className="transform transition font-bold duration-300 hover:text-orange-400 hover:scale-105">Privacy Policy</p>
                        <p className="transform transition font-bold duration-300 hover:text-orange-400 hover:scale-105">Terms & Conditions</p>
                    </div>
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-3 items-center w-full mx-auto my-0 ">
                <h1 className=" hidden md:flex lg:text-[20px] md:text-[12px] text-[9px] justify-center lg:w-[80%] items-center text-center font-semibold">147/A, samba street, tenkasi tamilnadu-627811, India.</h1>
                <h1 className=" lg:text-[20px] md:text-[14px] text-[14px] font-semibold text-orange-400">+91 9629413698</h1>
                <h1 className=" lg:text-[20px] md:text-[14px] text-[14px] font-semibold text-orange-400">+91 8903434982</h1>
                <p className=" lg:text-[23px] md:text-[14px] text-[14px] font-bold text-orange-400">saranyaoff7@gmail.com</p>
            </div>
            <div className="w-full mx-auto my-0  gap-10 flex-row lg:flex-col flex md:text-[19px] lg:text-[23px] md:pl-4 justify-center items-center md:gap-10  cursor-pointer ">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-white cursor-pointer hover:text-orange-400 transform transition duration-300 hover:scale-105" />
                </a>
                <a href="https://www.instagram.com/_planning_pros?igsh=MjExNjZhbTl3YjBm" target="_blank" rel="noopener noreferrer">
                    <GrInstagram className="text-white cursor-pointer hover:text-orange-400 transform transition duration-300 hover:scale-105" />
                </a>
                <a href="" to="saranyaoff7@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdOutlineLocalPostOffice className="text-white cursor-pointer hover:text-orange-400 transform transition duration-300 hover:scale-105" />
                </a>
            </div>

        </div>
    )
}