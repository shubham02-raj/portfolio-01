import {React, useEffect} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer/Footer";

function App() {
  // useEffect(() => {
  //   document.title = "👨‍💻 My Portfolio";
  // }, []);

  return (
    <>
      {/* <div className="text-4xl font-bold" style={{fontFamily: 'Great Vibes'}}>Hi there!!!!!!!!!!!!!!</div> */}
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  );
}

export default App;
