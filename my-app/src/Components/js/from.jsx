import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../css/form.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Form() {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        toast.promise(
            new Promise((resolve, reject) => {
            emailjs.sendForm('service_z8t1nn9', 'template_vwgwc8w', form.current, 'IshnMMztVs03TrGgV')
                .then((response) => {
                  resolve(response);
                  document.querySelector('form').reset();
                })
                .catch((error) => {
                  reject(error);
                  document.querySelector('form').reset();
                });
            }),
            {
              pending: 'Sending your message. Please wait a moment.',
              success: 'Your message has been sent successfully. I will contact you as soon as possible. Thank you for your patience.',
              error: 'An error occurred while sending your message. Please try again later.',
            }
          )
            .then((response) => {
              console.log('Email sent successfully!', response);
            })
            .catch((error) => {
              console.error('Error sending email:', error.text);
            });
      };
    return (
        <form ref={form} onSubmit={sendEmail} >
            <label>_name :</label>
            <input placeholder='Your Name' type="text" name="user_name" required/>
            <label>_email :</label>
            <input placeholder='Your e-mail' type="email" name="user_email" required/>
            <label>_message :</label>
            <textarea placeholder='I wanna hire you now !!! 👀' name="message" required/>
            <input type="submit" value="submit-message" />
            <ToastContainer theme='dark' />
        </form>
        
    );
}

export default Form;