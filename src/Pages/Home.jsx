import React from "react";
import { Element } from "react-scroll";

export default function Home() {
    return (
        <Element name="Home" className="pt-[40px] lg:pt-[70px]">
            <div className="bg-[url('/pexels-bhaskar-rao-484311955-32917688.jpg')] bg-center bg-cover w-full min-h-screen text-white flex items-center justify-center px-5 lg:px-16 overflow-hidden">
                <div className="flex flex-col items-center text-center gap-6 w-full max-w-5xl">
                    <h1 className="text-[22px] md:text-[30px] lg:text-[50px] xl:text-[70px] font-bold font-serif animate-pulse leading-tight">
                        Welcome to "Tenkasi Saree Draping"
                    </h1>
                </div>
            </div>
        </Element>
    );
}
