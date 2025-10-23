import React, { useState } from 'react';
import './Navbar.css'; // optional if you want modular CSS
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="brand">
          <div className="dot">AR</div>
          <div>Ayush Rai</div>
        </div>

        <nav>
          <button 
            className="hamburger" 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            <FaBars />
          </button>
          <ul className={open ? "show" : ""}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a className="btn" href="resume.pdf" download>Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;  