import React, { useEffect } from "react";
import { Element } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

import mSaree1 from "../../src/assets/msaree1.jpg";
import mSaree2 from "../../src/assets/msaree2.jpg";
import mSaree3 from "../../src/assets/msaree3.jpg";
import mSaree4 from "../../src/assets/msaree4.jpg";
import mSaree5 from "../../src/assets/msaree5.jpg";
import mSaree6 from "../../src/assets/msaree6.jpg";
import mSaree8 from "../../src/assets/msaree8.jpg";
import mSaree9 from "../../src/assets/msaree9.jpg";
import mSaree10 from "../../src/assets/msaree10.jpg";
import mSaree11 from "../../src/assets/msaree11.jpg";
import mSaree12 from "../../src/assets/msaree12.jpg";
import mSaree13 from "../../src/assets/msaree13.jpg";



export const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const images = [
    mSaree1, mSaree2, mSaree3, mSaree4, mSaree5,
    mSaree6, mSaree8, mSaree9, mSaree10, mSaree11, mSaree12, mSaree13
  ];

  return (
    <Element name="Gallery" className="bg-white w-full overflow-hidden">
      <div className="w-[80%] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold font-poppins text-[20px] md:text-[30px] lg:text-[27px] xl:text-[45px] lg:py-7 text-center text-gray-800 mb-10">
          Gallery
          <hr className=" w-[35%] md:w-[21%] lg:w-[15%] xl:w-[9%] text-black font-semibold border-t-8 mx-auto my-0 pb-10 "></hr>
        </h1>


        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              data-aos="fade-up-left"
              className="overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] w-full h-[220px] lg:h-[250px]"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};
