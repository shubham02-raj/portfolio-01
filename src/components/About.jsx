import React from "react";

const About = () => {
  return (
    <div
      name="about"
      // id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white pb-20 pt-180 sm:pt-0 border-2 border-blue-500"
    >
      <div className="max-w-screen-lg px-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" id="about">
            About
          </p>
        </div>

        <h4 className="text-2xl mt-10">
          🚀 Transforming Ideas into Stunning Web Experiences 🚀
        </h4>

        <p className="text-xl mt-10">
          With over 3 years of hands-on experience in frontend development, I
          specialize in building high-performance, scalable, and visually
          engaging web applications. Passionate about crafting seamless user
          experiences, I thrive on blending creativity with clean, maintainable
          code. I have expertise in <span style={{color:'#1E90FF'}}>React.js</span>, <span style={{color:'#FFFF00'}}>JavaScript (ES6+)</span>, <span style={{color:'#00CED1'}}> Tailwind CSS</span>, 
          and modern frontend technologies, ensuring that every pixel serves a
          purpose. Whether it’s optimizing performance, implementing smooth UI
          animations, or creating responsive layouts, I focus on delivering
          fast, accessible, and dynamic web applications that leave a lasting
          impression.
        </p>

        <br />
        <h4 className="text-2xl mt-7">💡 What I Bring to the Table:</h4>

        <p className="text-xl mt-10">
          ✅ <strong>Expertise in Modern Frontend Technologies :</strong> <i><span style={{color:'#1E90FF',}}>&nbsp;&nbsp;  React.js</span>, <span style={{color:'#FF69B4'}}>Next.js</span>, 
           <span style={{color:'#00CED1'}}> Tailwind CSS</span> ,<span style={{color:'#1E90FF'}}> TypeScript</span> ,<span style={{color:'#FFFF00'}}> JavaScript</span>  and more.</i>
          <br />
          ✅<strong> Pixel-Perfect UI Development : </strong><i> &nbsp;&nbsp; Bringing <span style={{color:'#DC143C'}}> Figma</span>  designs to life with
          precision.</i>
          <br />
          ✅ <strong>Performance-Optimized Web Apps : </strong> &nbsp;&nbsp;<i>Fast-loading, SEO-friendly, and
          scalable applications.</i>
          <br />
          ✅ <strong>Problem Solver & Debugging Enthusiast : </strong>&nbsp;&nbsp;<i>Fixing issues before they
          even exist.</i>
          <br />
          ✅ <strong>Passionate About UI/UX : </strong>&nbsp;&nbsp;<i>Aiming for intuitive, engaging, and
          accessible designs.</i>
        </p>
        <h4 className="text-2xl mt-7" style={{fontStyle: 'italic'}}>
        🎯Beyond coding, I believe in continuous learning and staying ahead of
          trends, ensuring <span style={{marginLeft: '30px'}}>that</span> every project I work on is built with the latest
          and most efficient web technologies.
        </h4>
      </div>
    </div>
  );
};

export default About;
