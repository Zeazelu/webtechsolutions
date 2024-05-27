import React from "react";
import Mockup from "../../assets/mockup.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__wrapper">
        <h1>
          Strony internetowe stanowią niezbędny element współczesnego świata
          biznesu. Dzięki nim firmy mogą skutecznie komunikować się z klientami,
          prezentować swoje produkty i usługi, budować markę oraz zwiększać
          swoją widoczność w internecie.
        </h1>
      </div>
      <div className="services__wrapper">
        <img src={Mockup} alt="mockup" />
      </div>
    </div>
  );
};

export default Services;
