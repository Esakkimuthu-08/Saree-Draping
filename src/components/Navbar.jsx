import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-scroll";
import logo1 from "../../src/assets/logo-1.png"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <div className="bg-white font-poppins z-30 fixed top-0 left-0 right-0 w-full flex justify-between items-center px-5 md:px-5 lg:px-10 ">
                <img className="w-[40%] h-[50px] lg:h-[70px] lg:w-auto" src={logo1} alt="logo" />
                <div className="flex items-center">
                    <ul className="hidden md:flex lg:text-[15px] xl:text-[20px] font-semibold md:text-[12px] md:gap-7 lg:gap-8 cursor-pointer">
                        <Link className="hover:scale-105 transition" to="Home" smooth={true} duration={2000}>Home</Link>
                        <Link className="hover:scale-105 transition" to="About" smooth={true} duration={2000}>About</Link>
                        <Link className="hover:scale-105 transition" to="Services" smooth={true} duration={2000}>Our Services</Link>
                        <Link className="hover:scale-105 transition" to="Gallery" smooth={true} duration={2000}>Gallery</Link>
                        <Link className="hover:scale-105 transition" to="ContactForm" smooth={true} duration={2000}>Contact</Link>
                    </ul>
                    <div className="md:hidden">
                        <VscThreeBars
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[24px] text-black cursor-pointer" />
                    </div>
                </div>
                {isOpen && (
                    <div className="absolute top-full right-5 mt-2 bg-white z-50 shadow-md rounded p-3 flex font-semibold flex-col gap-2 w-[150px]">
                        <Link onClick={() => setIsOpen(false)} to="Home" smooth={true} duration={2000} className="hover:bg-gray-100 px-2 py-1 text-black rounded">Home</Link>
                        <Link onClick={() => setIsOpen(false)} to="Services" smooth={true} duration={2000} className="hover:bg-gray-100 px-2 py-1 text-black rounded"> Our Services</Link>
                        <Link onClick={() => setIsOpen(false)} to="Gallery" smooth={true} duration={2000} className="hover:bg-gray-100 px-2 py-1 text-black rounded">Gallery</Link>
                        <Link onClick={() => setIsOpen(false)} to="ContactForm" smooth={true} duration={2000} className="hover:bg-gray-100 px-2 py-1 text-black rounded">Contact</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
