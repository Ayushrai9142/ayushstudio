import React from 'react';
import './Hero.css';
import profileImg from '../assets/images/profile.webp';
import resumePdf from '../assets/resume/resume.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-text">
        <div className="eyebrow">Hello — I build web interfaces</div>

        <h1>
          Hi, I'm <span className="accent">Ayush Rai</span> — Web Developer
        </h1>

        <h2>
          <Typewriter
            words={['React Developer', 'UI/UX Designer', 'AI Explorer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <div className="cta">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn-secondary" href="mailto:ayushraistudio@gmail.com">Contact Me</a>
          <a className="btn" href={resumePdf}download>Download Resume</a>
        </div>
      </div>

      <aside className="profile-card">
        {/* ✅ Lazy loading + width/height added to prevent layout shift */}
        <img
          src={profileImg}
          alt="Ayush Rai Profile"
          loading="lazy"
          width="320"
          height="320"
          decoding="async"
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />

        <div className="profile-info">
          <h3>Ayush Rai</h3>
          <p>B.Tech CS • Web Developer • UI/UX Enthusiast</p>
          <div className="socials">
            <a
              href="https://github.com/ayushraistudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ayushraistudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
