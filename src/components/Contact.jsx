import React from "react";
//only pb-8 at line-12
const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-full bg-gradient-to-b from-black to bg-gray-800
           p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-0 pt-10 mb-0"> 
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Get in Touch
          </p>
          <p className="py-6">Feel free to reach out to me for any questions or opportunities!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bkkykvob"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 
            to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
             hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
