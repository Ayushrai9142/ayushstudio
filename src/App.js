import React, { useState, Suspense, lazy } from 'react';
import './App.css';

// ✅ Lazy loading for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ✅ Custom spinner loader
  const Loader = () => (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  );

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback={<Loader />}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
