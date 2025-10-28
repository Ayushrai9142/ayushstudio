import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {

  useEffect(() => {
    // ✅ Add JSON-LD structured data for Google
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ayush Rai",
      "url": "https://ayushstudio.netlify.app/",
      "image": "https://ayushstudio.netlify.app/portfolio-preview.png",
      "jobTitle": "Web Developer & Designer",
      "sameAs": [
        "https://github.com/Ayushrai9142",
        "https://linkedin.com/in/ayushrai9142",
        "mailto:ayushrai9142@gmail.com"
      ],
      "description": "Creative web developer skilled in React, Firebase, and UI/UX design."
    });
    document.head.appendChild(script);
  }, []);

  return (
    <footer>
      <p>© {new Date().getFullYear()} <strong>Ayush Rai</strong> • Built with ❤️ using React</p>

      <div className="footer-links">
        <a href="https://github.com/Ayushrai9142" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/ayushrai9142" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:ayushrai9142@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
