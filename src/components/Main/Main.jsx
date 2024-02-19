import React from "react";
import "./style.css";
import Profile from "../../assets/profile.png";
const Main = () => {
  return (
    <div className="left h-[100vh] w-full flex flex-col md:flex-row  justify-between pt-40 md:pt-0">
      <div className="flex flex-col items-center justify-center md:w-[40%]">
        <div className=" w-[70%] flex flex-col justify-center gap-6">
          <p className="text-3xl font-medium text-secondary">Hello I'm</p>
          <p className="text-5xl font-bold text-primary">Muhammad Ishaq</p>
          <p className="text-xl font-normal text-primary">
            Web Designer @ Tech Creator Pvt Ltd
          </p>
          <p className="text-xl font-thin text-primary">
            I design and code beautifully
          </p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4  rounded">
            <a href="www.youtube.com/@ishaq47108"> Subscribe to my youtube channel</a>
          </button>
        </div>
        {/* Additional content goes here */}
      </div>
      <div className="right h-[100vh] md:w-[60%] md:bg-secondary right">
        <div className="h-full">
          <img src={Profile} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Main;
