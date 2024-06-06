import React from "react";
import "./Header.css";
import Logo from "../../../assets/logo.svg";

function Header({ contactRef }) {
  const onClick = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header__container">
      <img src={Logo} alt="logo" />
      <button onClick={onClick}>Kontakt</button>
    </div>
  );
}

export default Header;
