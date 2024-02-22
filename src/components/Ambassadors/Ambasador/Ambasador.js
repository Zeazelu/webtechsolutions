import React from "react";
import './Ambasador.css';

const Ambasador = (props) => (
        <div className="ambassador__container">
            <img src={props.image} />
            <div className="ambassador__wrapper">
                <h2>{props.name}</h2>
                <h1>{props.description}</h1>
            </div>
        </div>
)

export default Ambasador;