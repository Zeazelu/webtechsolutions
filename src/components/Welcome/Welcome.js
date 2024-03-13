import React from "react";
import './Welcome.css';
import background from '../../assets/background.mp4';
import poster from '../../assets/poster.png';

const Welcome = () => {

    return (
        <div className="welcome__container">
            <video src={background} poster={poster} autoPlay muted loop playsInline/>
            <div className="welcome__wrapper">
                <h1>Twoja Wizytówka w Wirtualnym Świecie</h1>
                <h2>Wspólnie przekształcimy Twoje pomysły w interaktywne i responsywne strony internetowe, które przyciągną uwagę! Z nami Twoja marka stanie się nie tylko widoczna, ale także zapamiętana.</h2>
            </div>
            <h3>Designed by Freepic</h3>
        </div>
    )
}

export default Welcome;