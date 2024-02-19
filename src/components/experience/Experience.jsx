import React from "react";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex  w-full flex-col h-auto justify-start md:items-center gap-4 p-10 md:p-20"
    >
      <p className="text-2xl text-secondary font-medium">Experience</p>
      <p className="text-5xl text-primary font-medium">Work Experience</p>
      <div className="flex flex-wrap ">
        <div className="w-full gap-1 my-4 md:bg-secondary text-primary rounded md:bg-transparent">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:bg-blue-400 md:w-11/12">
            <p className="text-md text-gray-600">
              Analyze and clarification of requirements with clients.Plan the
              process of virtual scans and 3d printing.Creating detailed reports
              and listing improvements
            </p>
          </div>
          <div className="mt-10 md:w-1/2 ">
            <h1 className="font-semibold text-2xl">Web deisgner</h1>
            <p className="text-blue-500">Tech Creator</p>
            <p className="font-semibold">December 2023-present</p>
          </div>
        </div>
        <h1 className="border-l-4 border-blue-500"></h1>
        <div className="w-full gap-1 my-4 md:ml-12 md:bg-secondary text-primary rounded md:bg-transparent">
          <div className=" md:w-1/2 ">
            <h1 className="font-semibold text-2xl ">Web Designer</h1>
            <p className="text-blue-500">i2c Inc</p>
            <p className="font-semibold">December 2023-present</p>
          </div>
          <div className="mt-10 md:ml-6 md:bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:bg-blue-400 w-full md:w-11/12">
            <p className="text-md text-gray-600">
              As a passionate web designer, I thrive on transforming creative
              visions into visually stunning and functional digital experiences.
              With a keen eye for aesthetics and a deep understanding of
              user-centric design principles, I specialize in crafting websites
              that not only captivate audiences but also deliver seamless and
              intuitive navigation. My approach involves staying abreast of the
              latest design trends and technologies to ensure that every project
              I undertake reflects contemporary styles and meets the evolving
              needs of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
