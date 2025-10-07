import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        {/* Left side - Name */}
        <div className="navbar-brand">
          Nishad Jankei
        </div>

        {/* Right side - Links */}
        <ul className="navbar-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skills">Skills</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
