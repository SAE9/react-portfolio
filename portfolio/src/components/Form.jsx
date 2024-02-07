import React, { useState } from 'react';
import '../css/contact.css';

function Form() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleInputChange = (event) => {
    
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
   
    event.preventDefault();

   
    alert(`Message sent:
      Name: ${formData.name}
      Email: ${formData.email}
      Comment: ${formData.comment}`);

    
    setFormData({
      name: '',
      email: '',
      comment: '',
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          value={formData.comment}
          name="comment"
          onChange={handleInputChange}
          placeholder="Your Comment"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
