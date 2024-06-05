import React from "react";
import "./TextWithImage.css";

const TextWithImage = (props) => {
  return (
    <div className="textwithimage__container">
      <div className="textwithimage__wrapper">
        <h1>{props.text}</h1>
      </div>
      <div className="textwithimage__wrapper">
        <img src={props.image} alt="mockup" />
      </div>
    </div>
  );
};

export default TextWithImage;
