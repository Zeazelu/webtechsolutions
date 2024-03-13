import React from "react";
import './Services.css';
import background from '../../assets/background1440p.mov'

const Services = () => {

    return (
        <div className="services__container">
            <video src={background} autoPlay muted loop/>
            <div className="services__wrapper">
                <h1>Twoja Wizytówka w Wirtualnym Świecie</h1>
                <h2>Przekształćmy razem Twoje pomysły w interaktywne i responsywne strony internetowe, które przyciągną uwagę! Z nami Twoja marka stanie się nie tylko widoczna, ale także pamiętana.</h2>
            </div>
            <h3>Designed by Freepic</h3>
        </div>
    )
}

export default Services;