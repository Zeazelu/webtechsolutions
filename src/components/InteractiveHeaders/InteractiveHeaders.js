import React, { useState } from "react";
import "./InteractiveHeaders.css";

function InteractiveHeaders({ headers }) {
  const [selectedHeader, setSelectedHeader] = useState(0);

  const handleHeaderClick = (headerIndex) => {
    setSelectedHeader(headerIndex);
  };

  return (
    <div className="interactiveheaders__container">
      <div className="interactiveheaders__headers">
        {headers.map((header, index) => (
          <h2 key={index} onClick={() => handleHeaderClick(index)}>
            {header.title}
          </h2>
        ))}
      </div>
      <div className="interactiveheaders__content">
        {headers.map(
          (header, index) =>
            selectedHeader === index && (
              <p key={index} className="interactiveheaders__fade-in">
                {header.content}
              </p>
            )
        )}
      </div>
    </div>
  );
}

export default InteractiveHeaders;
