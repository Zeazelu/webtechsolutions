import React from "react";
import "./TextWithTitle.css";

const TextWithTitle = ({ content }) => {
  return (
    <div className="textwithtitle__container">
      <div className="textwithtitle__wrapper">
        {content.map((item) => (
          <>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default TextWithTitle;
