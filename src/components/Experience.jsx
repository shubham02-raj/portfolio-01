import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import nextjs from "../assets/experience/nextjs.png";
import node from "../assets/experience/node.png";
import tailwind from "../assets/experience/tailwind.png";
import mongodb from '../assets/experience/mongodb.png';
import ts_img from '../assets/experience/ts_img.png';


const Experience = () => {
  return (
    <div
      name="experience"
      // id="experience"
      className="bg-gradient-to-b from-gray-800 
    to-black w-full h-fit border-2 border-green-500"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center 
      w-full h-full text-white" id="experience"
      >
        <div className="sm:pt-60 pt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
            Technical Expertise
          </p>
          <p className="py-6">A showcase of my technical proficiency and the tools I use to create exceptional web experiences.</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center 
        py-8 px-12 sm:px-0"
        >
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={javascript} alt="" className="w-20 mx-auto" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-300">
            <img src={reactImage} alt="" className="w-20 mx-auto" />
            <p>REACT</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white">
            <img src={nextjs} alt="" className="w-20 mx-auto" />
            <p>NEXT JS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={ts_img} alt="" className="w-20 mx-auto" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-400">
            <img src={node} alt="" className="w-20 mx-auto" />
            <p>NODE JS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p>TAILWIND</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
            <img src={mongodb} alt="" className="w-20 mx-auto" />
            <p>MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
