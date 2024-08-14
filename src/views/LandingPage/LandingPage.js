import React, { useRef, useEffect } from "react";
import "./LandingPage.css";
import Header from "../../components/LandingPage/Header/Header.js";
import Footer from "../../components/LandingPage/Footer/Footer.js";
import Contact from "../../components/LandingPage/Contact/Contact.js";
import Welcome from "../../components/LandingPage/Welcome/Welcome.js";
//import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider.js";
import InteractiveHeaders from "../../components/InteractiveHeaders/InteractiveHeaders.js";
import TextWithTitle from "../../components/TextWithTitle/TextWithTitle.js";
import {
  location,
  portfolio,
  services,
} from "../../data/LandingPage.js/Content.js";
import { aboutus } from "../../data/LandingPage.js/Content.js";

function LandingPage() {
  const contactRef = useRef(null);
  //const navigate = useNavigate();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.requestAnimationFrame(scrollToTop);

    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  /*const handleButtonClick = () => {
    navigate("/blog");
  };
  */
  return (
    <div className="landingpage__container">
      <Header contactRef={contactRef} />
      <Welcome />
      <InteractiveHeaders headers={services} />
      <TextWithTitle content={portfolio} />
      <TextWithTitle content={aboutus} />
      <TextWithTitle content={location} />
      <div className="contact__container">
        <Contact ref={contactRef} />
      </div>
      {/*<button onClick={handleButtonClick}>Blog</button>*/}
      <Footer />
    </div>
  );
}

export default LandingPage;
