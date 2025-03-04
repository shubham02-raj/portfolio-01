import React, { useEffect, useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const textArray  = [
  "Full Stack Dev",
  "UI/UX Designer",
  "React Developer",
  "Web Developer",
  "Freelancer",
];


const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % headings.length);
  //   }, 2000); // Change heading every 2 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  useEffect(() => {
    const currentText = textArray[index];
    let typingSpeed = isDeleting ? 50 : 100; // Adjust speed for typing & deleting

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing characters
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting characters
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, index]);

  

  const handleScroll = (sectionId) => {
    console.log("navbar clicked ", sectionId);
    //alert(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      name="home"
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 sm:pt-0"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full w-[1000px]">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white transition-opacity duration-500"
          >
            Hello, I'm a <br />
            {text || "\u00A0"}
            
          </h2>
          {/* <h5 className=" sm:text-3xl font-bold text-white mt-5">
            🚀 Transforming Ideas into Stunning Web Experiences
          </h5> */}
          <p className="text-gray-500 py-4 max-w-md font-semibold">
            Passionate web developer crafting beautiful and functional digital
            experiences. Specializing in modern web technologies and responsive
            design.
          </p>
          <div>
            <button
              onClick={() => handleScroll("portfolio")}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My profile"
            style={{ width: "276px", height: "300px" }}
            className="rounded-2xl mx-auto w-2/3 md:full  mt-3 sm:mt-0 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <img src={HeroImage} alt="" style={{ width: "376px", height: "524px" }} /> */
}
{
  /* <MdOutlineKeyboardArrowRight /> */
}
