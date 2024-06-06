import React from "react";
import "./TextWithImage.css";

const TextWithImage = ({ text, image, reverse }) => {
  return (
    <div className={`textwithimage__container ${reverse ? "reverse" : ""}`}>
      <div className={`textwithimage__wrapper ${reverse ? "reverse" : ""}`}>
        <h1>{text}</h1>
      </div>
      <div className={`textwithimage__wrapper ${reverse ? "reverse" : ""}`}>
        <img src={image} alt="mockup" />
      </div>
    </div>
  );
};

export default TextWithImage;
