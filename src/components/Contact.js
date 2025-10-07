import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:jankeinishad@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/nishadjankei/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><FaGithub /> <a href="https://github.com/jankeinishad" target="_blank" rel="noreferrer">GitHub</a></p>
          <p><FaEnvelope /> <a href="mailto:jankeinishad@gmail.com">jankeinishad@gmail.com</a></p>
          <p><FaPhone /> +91 7671074592</p>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
