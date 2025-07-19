import React, { useEffect } from "react";
import keerthi from "../../src/assets/image.jpg";
import { Element } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Description = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <Element name="About">
            <div className=" flex flex-col lg:flex-row gap-10 xl:w-[80%] w-[90%] mx-auto py-8 px-4 lg:py-16 lg:px-10 overflow-hidden">                
                <div className="w-full flex flex-col xl:gap-7 lg:gap-6 lg:w-[60%] pt-2">
                    <p className="font-semibold font-poppins text-[11px] md:text-[15px] pb-5 2xl:text-[27px] xl:text-[20px] lg:text-[15px]">
                        "Elegance personified, one pleat at a time. With over 1 year of experience
                        in saree draping, I bring tradition and style together.
                        With expertise in draping 100+ sarees, I ensure every client
                        looks stunning. Let me help you shine on your special occasion."
                    </p>
                    <div>
                        <p className="text-[10px] md:text-[14px] lg:text-[17px] 2xl:text-[25px] xl:text-[23px] pb-5 xl:pb-7">Our services include:</p>
                        <ul className="ml-5 lg:ml-14 text-[11px] md:text-[13px] 2xl:text-[21px] xl:text-[21px] font-semibold font-poppins lg:text-[16px] lg:space-y-5 space-y-3 xl:space-y-7">
                            <li>1. Saree Draping</li>
                            <li>2. Bridal Draping</li>
                            <li>3. Pre-pleating and Box Folding</li>
                            <li>4. Hanger Folding</li>
                            <li>5. Fluffy Pleats</li>
                            <li>6. Customized Draping according to your wish</li>
                        </ul>
                    </div>
                </div>
                <div
                    data-aos="fade-up-left"
                    className=" flex justify-center w-[90%] mx-auto my-0 xl:my-auto xl:mx-0 xl:ml-[20%] lg:w-auto px-0"
                >
                    <img
                        className="w-full xl:h-[47vh] lg:h-[60vh]   object-cover rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
                        src={keerthi}
                        alt="img1"
                    />
                </div>
            </div>
        </Element>
    );
};
