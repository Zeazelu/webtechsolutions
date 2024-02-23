import React from "react";
import './Ambassadors.css';
import Ambasador from "./Ambasador/Ambasador";
import szefu from "../../assets/szefu.JPG";

const Ambassadors = ({ ambasador }) => (
        <div className="ambassadors__container" id="ambassadors">
            <h3>WŁAŚCICIEL</h3>
            <Ambasador 
                key = '0'
                image = {szefu}
                name = 'Danielek Szwajkowski'
                description = 'CEO WEBTECH SOLUTIONS / Kielce'
            />
            <h3>AMBASADORZY</h3>
            {ambasador.map(item => (
                <Ambasador
                    key = {item.id}
                    image = {item.image}
                    name = {item.name}
                    description = {item.description}
                />
            ))}
        </div>
)


export default Ambassadors;