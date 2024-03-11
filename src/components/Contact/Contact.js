import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css';

const Contact = () => {
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const [formError, setFormError] = useState(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
    const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
    const SITEKEY_LOCALHOST = process.env.REACT_APP_RECAPTCHA_SITE_KEY_LOCALHOST;

    const onChange = (value) => {
        console.log("Captcha value:", value);
        setRecaptchaVerified(true);
    };

    const resetForm = () => {
        setFormError(null);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const { user_name, user_email, message } = e.target.elements;

        if (!user_name.value || !user_email.value || !message.value) {
            setFormError("Wypełnij wszystkie pola formularza.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email.value)) {
            setFormError("Podaj poprawny adres email.");
            return;
        }

        if (recaptchaVerified) {
            try {
                await emailjs.sendForm(SERVICE, TEMPLATE, e.target, { publicKey: PUBLIC_KEY });
                console.log('SUCCESS!');
                resetForm();
                setIsFormSubmitted(true);
                setFormError("Formularz został pomyślnie wysłany!");
                setTimeout(() => {
                    setIsFormSubmitted(false);
                }, 5000);
            } catch (error) {
                console.log('FAILED...', error.text);
            }
        } else {
            console.log('Proszę zweryfikować reCAPTCHA przed wysłaniem formularza.');
            setFormError("Proszę zweryfikować reCAPTCHA przed wysłaniem formularza.");
        }
    };

    return (
        <>
            <h2>Skontaktuj się z nami!</h2>
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Imię i nazwisko" name="user_name" />
                <input type="email" placeholder="Adres email" name="user_email" />
                <textarea placeholder="Treść wiadomości" name="message" />
                <ReCAPTCHA sitekey={SITEKEY_LOCALHOST} onChange={onChange} />
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
            {formError && <p className="error__message">{formError}</p>}
            {isFormSubmitted && <p className="success__message">Formularz został pomyślnie wysłany!</p>}
        </>
    );
};

export default Contact;
