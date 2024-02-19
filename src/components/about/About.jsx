import React, { useEffect } from "react";
import "./style";
import Aos from "aos";
import "aos/dist/aos.css"
import Profile from "../../assets/profile.png";
const About = () => {
  useEffect(()=>{
  Aos.init({duration:1000})
  },[])
  return (
    <div
      id="about"
      className="flex   w-full h-[100vh] justify-center items-start p-10 md:p-20"
    >
      <div className="md:w-1/2 h-full">
        <div className="h-full "  data-aos="fade-down-left">
          <img src={Profile} alt="" className="md:w-full h-full object-cover " />
        </div>
      </div>
      <div className=" order-1 w-1/2 h-full">
        <div className="p-2 flex flex-col gap-3 ">
          <p className="text-2xl md:text-xl font-medium text-secondary  ">About</p>
          <p className="text-4xl font-medium text-primary ">
            Allow me to introduce myself
          </p>
          <div className="flex items-center justify-center w-2/12 gap-1 py-2  bg-secondary text-secondary rounded md:bg-transparent">
            <span className="w-3/5 bg-secondary h-1 rounded-sm"></span>
            <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
            <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
          </div>
          <p className="text-base text-primary font-normal">
            Hi there! I'm M ishaq, a skilled and motivated Web Designer with over 3 Months  of professional experience in fintech,
            health tech, and e-commerce projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
