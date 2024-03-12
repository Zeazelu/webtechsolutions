import React, { useRef } from 'react';
import './LandingPage.css';
import Header from '../../components/Header/Header.js';
import Ambassadors from '../../components/Ambassadors/Ambassadors.js';
import Footer from '../../components/Footer/Footer.js';
import { ambasadors } from '../../data/ambasadors.js';
import Contact from '../../components/Contact/Contact.js';
import Quiz from '../../components/Quiz/Quiz.js';

function LandingPage() {
  const contactRef = useRef(null);
  return (
    <div className='landingpage__container'>
      <Header contactRef={contactRef} />
      <Ambassadors ambasador={ambasadors} />
      <Quiz />
      <div className="contact__container">
        <Contact ref={contactRef} />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
