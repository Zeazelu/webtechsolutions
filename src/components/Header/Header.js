import React from "react";
import './Header.css'
import Logo from '../../assets/webtech.png'

function Header () {
    return (
        <div className="header__container">
            <img src={Logo} alt="logo" />
        </div>
    )
}


export default Header;