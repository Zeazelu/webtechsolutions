import React, { useRef, useState, } from "react";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css'
import './Contact.css';

const Contact = () => {

    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const form = useRef();

    function onChange(value) {
        console.log("Captcha value:", value);
        // Ustawienie recaptchaVerified na true po poprawnej weryfikacji
        setRecaptchaVerified(true);
    }
    const [formError, setFormError] = useState(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, message } = e.target.elements;

        // Prosta walidacja - sprawdzamy, czy pola są wypełnione
        if (!user_name.value || !user_email.value || !message.value) {
            setFormError("Wypełnij wszystkie pola formularza.");
            return;
        }

        // Walidacja adresu email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email.value)) {
            setFormError("Podaj poprawny adres email.");
            return;
        }

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
        emailjs
            .sendForm('service_a0pwy3g', 'template_39zdmhy', form.current, {
                publicKey: 'matlptYJCfIIR59MB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    setFormError(null); // Wyczyszczenie błędu po udanym wysłaniu
                    setIsFormSubmitted(true);

                    // Ukryj komunikat po 3 sekundach
                    setTimeout(() => {
                        setIsFormSubmitted(false);
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
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
            {formError && <p className="error__message">{formError}</p>}
            {isFormSubmitted && <p className="success__message">Formularz został pomyślnie wysłany!</p>}
        </>
    )
}

export default Contact;
