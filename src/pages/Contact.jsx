import React from 'react';
import Form from '../components/Form';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me through any of the following methods:
      </p>
      <ul>
        <li>Email: s.emama@hotmail.com</li>
        <li>GitHub: <a href="https://github.com/SAE9">github.com/yourusername</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sumayyah-e-9ab4bb192/">linkedin.com/in/yourprofile</a></li>
        
      </ul>
      <hr />
      <h3>Send me a message:</h3>
      <Form />
    </div>
  );
};

export default Contact;
