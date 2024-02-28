import React, { useRef } from "react";
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
        <div className="contact__container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Imię i nazwisko</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Treść wiadomości</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;