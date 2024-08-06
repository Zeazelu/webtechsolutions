import React, { useEffect, useRef, useState } from "react";
import "intersection-observer";
import "./Ambassadors.css";
import Ambasador from "./Ambasador/Ambasador";
import szefu from "../../../assets/szefu.JPG";

const Ambassadors = ({ ambasador }) => {
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

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ambassadors__container ${isVisible ? "visible" : ""}`}
      id="ambassadors"
    >
      <h3>WŁAŚCICIEL</h3>
      <Ambasador
        key="0"
        image={szefu}
        name="Danielek Szwajkowski"
        description="CEO WEBTECH SOLUTIONS / Kielce"
      />
      <h3>AMBASADORZY</h3>
      {ambasador.map((item) => (
        <Ambasador
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Ambassadors;
