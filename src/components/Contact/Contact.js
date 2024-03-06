import React, { useRef, } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a0pwy3g', 'template_39zdmhy', form.current, {
                publicKey: 'matlptYJCfIIR59MB',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
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
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
        </>
    )
}

export default Contact;