import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import tomato from "../assets/portfolio/tomato.png";
import portfolio from "../assets/portfolio/portfolio.png";
import ana_clock from "../assets/portfolio/ana_clock.png";
import imgery from "../assets/portfolio/imgery.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Food Delivery App",
      image: tomato,
      demo: "https://food-del-tomato-frontend.onrender.com/",
      code: "https://github.com/shubham02-raj/food-del-tomato",
    },
    {
      id: 2,
      name: "Portfolio Website",
      image: portfolio,
      demo: null, // Add correct link
      code: null // Add correct link
    },
    {
      id: 3,
      name: "Analog Clock",
      image: ana_clock,
      demo: "https://analog-clockk-01.netlify.app/",
      code: "https://github.com/shubham02-raj/Analog-clock",
    },
    {
      id: 4,
      name: "Imagery App",
      image: imgery,
      demo: "https://image-ry.netlify.app/",
      code: "https://github.com/shubham02-raj/imagery",
    },
    {
      id: 5,
      name: "React Parallax",
      image: reactParallax,
      demo: null, // Add correct link if available
      code: null
    },
    {
      id: 6,
      name: "Array Destructuring",
      image: arrayDestruct,
      demo: null,
      code: null
    },
  ];

  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Link not available!"); // Alert for missing URLs
    }
  };

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Featured Projects
          </p>
          <p className="py-6 text-2xl" style={{ fontFamily: "Inter", fontWeight: 300}}>
            Explore some of my recent projects that showcase my expertise in web development and problem-solving abilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={image} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClick(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClick(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
