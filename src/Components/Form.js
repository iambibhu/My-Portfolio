import "./FormStyle.css"

import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
  return (
    <p>Message Sent</p>
  );
}

export const Form = () => {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sx72co9', 'template_e9omor5', form.current, 'OJ9RGbpwG9mOcI_jV')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true);
  };

  setTimeout (()=>{
      showResult(false)
  }, 5000)

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="user_subject" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" />
        <input className="btn" type="submit" value="Send" />
        <div className="row">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
};

export default Form