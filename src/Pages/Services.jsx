import React, { useEffect } from "react";
import { Element } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Saree1 from "../../src/assets/Saree1.jpg";
import Saree2 from "../../src/assets/Saree2.jpg";
import Saree3 from "../../src/assets/Saree3.jpg";
import Saree4 from "../../src/assets/Saree4.jpg";
import Saree5 from "../../src/assets/Saree5.jpg";
import Saree6 from "../../src/assets/Saree6.jpg";
import Saree7 from "../../src/assets/Saree7.jpg";
import Saree8 from "../../src/assets/Saree8.jpg";
import Saree9 from "../../src/assets/Saree9.jpg";
import Saree10 from "../../src/assets/saree10.jpg";
import Saree11 from "../../src/assets/Saree11.jpg";
import Saree12 from "../../src/assets/Saree12.jpg";


const serviceData = [
  { image: Saree10, label: "Bridal Draping" },
  { image: Saree1, label: "Saree Draping" },
  { image: Saree2, label: "Saree Pre Pleating" },
  { image: Saree3, label: "Box Folding" },
  { image: Saree4, label: "Bridal Draping" },
  { image: Saree5, label: "Fluffy Pleats" },
  { image: Saree6, label: "Customized Pleats" },
  { image: Saree7, label: "Bridal Draping" },
  { image: Saree8, label: "Hanger Folding" },
  { image: Saree9, label: "Fluffy" },
  { image: Saree11, },
  { image: Saree12, }
];

export const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <Element name="Services" className=" bg-gray-50 w-full overflow-hidden lg:py-8">
      <div className=" font-poppins w-[80%] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-[20px] md:text-[30px] lg:text-[27px] xl:text-[45px] text-black text-center mb-10 lg:py-12">
          Services
          <hr className=" w-[35%] md:w-[21%] lg:w-[15%] xl:w-[9%] text-black font-semibold border-t-8 mx-auto my-0 pb-10 "></hr>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up-right"
              className="relative overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 w-full h-[220px] lg:h-[250px]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <p className="text-white font-bold text-[14px] md:text-[16px] lg:text-[20px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};
