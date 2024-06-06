import React, { useRef, useEffect } from "react";
import "./LandingPage.css";
import Header from "../../components/LandingPage/Header/Header.js";
import Ambassadors from "../../components/LandingPage/Ambassadors/Ambassadors.js";
import Footer from "../../components/LandingPage/Footer/Footer.js";
import { ambasadors } from "../../data/ambasadors.js";
import Contact from "../../components/LandingPage/Contact/Contact.js";
import Quiz from "../../components/LandingPage/Quiz/Quiz.js";
import Welcome from "../../components/LandingPage/Welcome/Welcome.js";
import TextWithImage from "../../components/TextWithImage/TextWithImage.js";
import Mockup from "../../assets/mockup.png";

function LandingPage() {
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.requestAnimationFrame(scrollToTop);

    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="landingpage__container">
      <Header contactRef={contactRef} />
      <Welcome />
      <TextWithImage
        text="Strony internetowe stanowią niezbędny element współczesnego świata biznesu. Dzięki nim firmy mogą skutecznie komunikować się z klientami, prezentować swoje produkty i usługi, budować markę oraz zwiększać swoją widoczność w internecie."
        image={Mockup}
      />
      <TextWithImage
        text="WEBTECH SOLUTIONS specjalizuje się w tworzeniu nowoczesnych i funkcjonalnych sklepów internetowych, które pomagają naszym klientom osiągać sukcesy w handlu online."
        image={Mockup}
        reverse
      />
      <TextWithImage
        text="Korzystamy z najnowszych technologii i profesjonalnego sprzętu, aby zapewnić najwyższą jakość usług. Nasz zespół doświadczonych specjalistów dba o każdy detal, od projektowania po wdrożenie, gwarantując, że Twoja platforma e-commerce będzie działać sprawnie i niezawodnie."
        image={Mockup}
      />
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
