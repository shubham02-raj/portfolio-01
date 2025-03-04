import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-b bg-black">
      <p className="text-xl" style={{ fontFamily: "Inter", fontWeight: 300}}>Copyright © 2025 MyPortfolio | Designed and Developed with ❤️ by Shubham Kumar Raj</p>
      <div className="social-links text-xl" style={{ fontFamily: "Inter", fontWeight: 300}}>
        <a href="https://github.com/shubham02-raj" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/shubham-kumar-raj-604812205" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
