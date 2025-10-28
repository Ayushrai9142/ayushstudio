import React, { useState } from 'react';
import './Navbar.css';
import resumePdf from '../assets/resume/resume.pdf';
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

        <button 
          className="hamburger" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <FaBars />
        </button>

        <nav className={open ? 'show' : ''}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <a className="btn" href={resumePdf} download>Resume</a>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
