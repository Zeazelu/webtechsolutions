import React, { useRef, useState, } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css'

const Contact = () => {

    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const form = useRef();

    function onChange(value) {
        console.log("Captcha value:", value);
        // Ustawienie recaptchaVerified na true po poprawnej weryfikacji
        setRecaptchaVerified(true);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (recaptchaVerified) {
            emailjs
                .sendForm('service_a0pwy3g', 'template_39zdmhy', form.current, {
                    publicKey: 'matlptYJCfIIR59MB',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        e.target.reset();
                        // Możesz dodać tutaj dowolne dodatkowe akcje po pomyślnym wysłaniu
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log('Proszę zweryfikować reCAPTCHA przed wysłaniem formularza.');
            // Możesz dodać tutaj obsługę błędu lub wyświetlenie komunikatu użytkownikowi
        }
    };
    return (
        <>
            <h2>Skontaktuj się z nami!</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Imię i nazwisko" name="user_name" />
                <input type="email" placeholder="Adres email" name="user_email" />
                <textarea placeholder="Treść wiadomości" name="message" />
                <ReCAPTCHA
                    sitekey="6LdhWZApAAAAAFWYvmVjB91YVg0U3J4glFAEcQaT"
                    onChange={onChange}
                />,
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
        </>
    )
}

export default Contact;