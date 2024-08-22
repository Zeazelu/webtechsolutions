import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

const Slider = ({ sites }) => {
  return (
    <div className="slider__container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
      >
        {sites.map((item) => (
          <div>
            <img src={item.image} alt="" />
            <p className="legend">
              <a href={item.link}>Kliknij aby odwiedzić witrynę</a>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
