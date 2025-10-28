import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

// ✅ Lazy loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // ✅ Custom loader
  const Loader = () => (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  );

  return (
    <div className={`App ${theme}`}>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* ✅ Page content wrapped in <main> to push footer bottom */}
          <main style={{ minHeight: "calc(100vh - 140px)" }}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
