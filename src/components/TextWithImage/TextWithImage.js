import React, { useEffect, useRef, useState } from "react";
import "intersection-observer"; // If using the polyfill
import "./TextWithImage.css";

const TextWithImage = ({ text, image, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`textwithimage__container ${reverse ? "reverse" : ""} ${
        isVisible ? "visible" : ""
      }`}
    >
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
