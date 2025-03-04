import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleScroll = (sectionId) => {
    console.log("navbar clicked ", sectionId);
    //alert(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 onClick={() => handleScroll("home")} className="text-5xl ml-2 " style={{ fontFamily: "Great Vibes", cursor:"pointer" }}>
          Shubham
        </h1>
      </div>

      <ul className="hidden md:flex text-xl" style={{ fontFamily: "Inter", fontWeight: 300}}>
        <li
          onClick={() => handleScroll("home")}
          className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
        >
          Home
        </li>
        <li
          onClick={() => handleScroll("about")}
          className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
        >
          About
        </li>
        <li
          onClick={() => handleScroll("portfolio")}
          className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
        >
          Portfolio
        </li>
        <li
          onClick={() => handleScroll("experience")}
          className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
        >
          Experience
        </li>
        <li
          onClick={() => handleScroll("contact")}
          className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
        >
          Contact
        </li>
        {/* {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium 
                     text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          );
        })} */}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute 
        top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          <li
            onClick={() => handleScroll("home")}
            className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("about")}
            className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("portfolio")}
            className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
          >
            Portfolio
          </li>
          <li
            onClick={() => handleScroll("experience")}
            className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
          >
            Experience
          </li>
          <li
            onClick={() => handleScroll("contact")}
            className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
          >
            Contact
          </li>

          {/* {links.map(({ id, link, scroll }) => {
            return (
              <li
                key={id}
                onClick={() => handleScroll({link})}
                className="p-x-4 cursor-pointer capitalize py-6 text-4xl"
              >
                 {link}
              </li>
            );
          })} */}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
