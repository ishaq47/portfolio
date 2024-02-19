import React, { useEffect } from "react";
import { SiJirasoftware } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { MdOutlinePersonalInjury } from "react-icons/md";
import "./style";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div
        id="services"
        className="flex w-full flex-col h-auto justify-start items-center gap-4 p-10 md:p-20"
      >
        <p className="text-2xl text-secondary font-medium">Services</p>
        <p className="text-5xl text-primary font-medium">Look what can I do</p>
        <div className="flex items-center justify-center w-1/12 gap-1 my-4  bg-secondary text-secondary rounded md:bg-transparent">
          <span className="w-3/5 bg-secondary h-1 rounded-sm"></span>
          <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
          <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-row mx-4 mb-4 " data-aos="flip-down">
          <div className="group">
            <a
              href="#"
              className="block md:w-[350px] md:h-[350px] max-w-sm p-8 bg-white border border-gray-200 rounded-md shadow group-hover:bg-blue-400 dark:bg-gray-800 dark:border-gray-700 group-hover:text-white"
            >
              <SiJirasoftware className="mb-4" size={50} />
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                Website Designing
              </h5>
              <p className="font-normal text-gray-500 dark:text-gray-400 group-hover:text-white mb-4">
                As a web designer, my role is centered around the artful
                integration of creativity and technology to deliver visually
                compelling and user-friendly websites.
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-row mx-4 mb-4" data-aos="flip-down">
          <div className="group">
            <a
              href="#"
              className="block md:w-[350px] md:h-[350px] max-w-sm p-8 bg-white border border-gray-200 rounded-md shadow group-hover:bg-blue-400 dark:bg-gray-800 dark:border-gray-700 group-hover:text-white"
            >
              <SiAdobeindesign className="mb-4" size={50} />
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white">
                UI/UX
              </h5>
              <p className="font-normal text-gray-500 dark:text-gray-400 group-hover:text-white mb-4">
                Designed MLSA Lahore website .Develop UI mockups and prototypes
                that clearly illustrate how sites function and look like.Conduct
                layout adjustments based on user feedback.Adhere to style
                standards on fonts, colors and images
              </p>
            </a>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Services;
