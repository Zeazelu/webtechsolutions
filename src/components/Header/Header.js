import React from 'react';
import './Header.css';
import Logo from '../../assets/webtech.png';

function Header({ onContactClick }) {
  return (
    <div className='header__container'>
      <img src={Logo} alt='logo' />
      <button onClick={onContactClick}>Kontakt</button>
    </div>
  );
}

export default Header;
