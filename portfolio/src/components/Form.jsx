import React, { useState } from 'react';
import '../css/contact.css';

function Form() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit 
    event.preventDefault();

    // Simulate sending a message
    alert(`Message sent:
      Name: ${formData.name}
      Email: ${formData.email}
      Comment: ${formData.comment}`);

    // Clear form fields after submitting
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
