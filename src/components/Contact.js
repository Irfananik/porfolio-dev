import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3sy2ml9', 'template_i1toxr9', form.current, '0ppBKL-AUxVpAaNX-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div className="bg-base-200 py-3">
            <h1 className="text-5xl font-bold text-center mt-8">Contact Me</h1>
            <div className="flex justify-center items-center my-6">
                <form ref={form} onSubmit={sendEmail}>
                    <label className="text-xl font-bold">Name</label><br />
                    <input className="w-80 p-3 rounded-lg" type="text" name="from_name" /><br /> <br />
                    <label className="text-xl font-bold">Email</label><br />
                    <input className="w-80 p-3 rounded-lg" type="email" name="from_email" /><br /><br />
                    <label className="text-xl font-bold">Message</label><br />
                    <textarea name="message" /><br /><br />
                    <button class="btn btn-primary w-48"><input type="submit" value="Send" /></button>
                </form>
            </div>
        </div>
    );
};

export default Contact;