
import React, { useState } from 'react'
import logo from '../MBP LOGO.png';


const Booknow = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log('Form Data Submitted:', formData);
    // You can send formData to an API or perform further processing here
  };
  //  onScreen display
  return (
    <form onSubmit={handleSubmit}>
      <div className='formContainer'>
        <div>
        <img className="logo" src={logo}/>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>


        <div>
        <label htmlFor="phone">Phone:</label>
        <textarea
          id="phone"
          name="phone"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Booknow;