import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTelegram,  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nishad Jankei | All Rights Reserved</p>

      <div className="social-links">
        <a href="https://github.com/jankeinishad" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nishadjankei/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:jankeinishad@gamil.com">
          <MdEmail />
        </a>
        <a href="https://t.me/JankeiNishad" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
