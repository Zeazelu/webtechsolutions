import './LandingPage.css';
import Header from '../../components/Header/Header.js';
import Ambassadors from '../../components/Ambassadors/Ambassadors.js';
import Footer from '../../components/Footer/Footer.js';
import { ambasadors } from '../../data/ambasadors.js';
import Contact from '../../components/Contact/Contact.js';

function LandingPage() {
  return (
    <div className='landingpage__container'>
      <Header />
      <Ambassadors ambasador={ambasadors} />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
