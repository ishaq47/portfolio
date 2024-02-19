import React from "react";
import "./style";
const Blog = () => {
  return (
    <>
      <div
        id="articles"
        className="flex w-full flex-col md:h-[100vh] justify-start items-center gap-4 p-10 md:p-20 md:mb-[150px]"
      >
        <p className="text-2xl text-secondary font-medium">Articles</p>
        <p className="text-5xl text-primary font-medium">
          Things I wrote about
        </p>
        <div className="flex items-center justify-center w-1/12 gap-1 my-4  bg-secondary text-secondary rounded md:bg-transparent">
          <span className="w-3/5 bg-secondary h-1 rounded-sm"></span>
          <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
          <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
        </div>

        <div className="flex flex-wrap flex-row justify-center">
          <div className="card m-4">
            <img
              src="src\assets\git-cover.jpg"
              alt=""
              className="md:w-[550px] h-[200px] rounded-lg"
            />
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-center text-gray-600 font-bold text-xl hover:text-blue-500"
              >
                An Introduction to Git and Github
              </a>
            </div>
            <div>
              <p className="text-center text-gray-600">Git and Github</p>
            </div>
          </div>

          <div className="card m-4">
            <img
              src="src\assets\0.png"
              alt=""
              className="w-[550px] h-[200px] rounded-lg"
            />
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-center  text-gray-600 font-bold text-xl hover:text-blue-500"
              >
                Configuring custom domain
              </a>
            </div>
            <div>
              <p className="text-center text-gray-600">Git and Github</p>
            </div>
          </div>

          <div className="card m-4">
            <img
              src="src\assets\interview2.png"
              alt=""
              className="w-[550px] h-[200px] rounded-lg"
            />
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-center  text-gray-600 font-bold text-xl hover:text-blue-500"
              >
                Technical Interview Preparation
              </a>
            </div>
            <div>
              <p className="text-center text-gray-600">Git and Github</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
