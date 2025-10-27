import React, { useEffect } from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

const projects = [
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio with dark mode, animations and accessibility-first design.",
    img: project1,
    tags: ["HTML", "CSS", "JS"],
    demo: "https://ayushrai-portfolio.netlify.app",
    code: "https://github.com/ayushrai9142/portfolio-2"
  },
  {
    title: "Exam Portal",
    desc: "Secure exam system using JS + Firebase Auth — simple UI & robust flow.",
    img: project2,
    tags: ["HTML", "CSS","JS", "Firebase"],
    demo: "https://exam-porta.netlify.app",
    code: "https://github.com/ayushrai9142/exam-portal"
  },
  {
    title: "Love Letter Maker",
    desc: "Lightweight JS tool to create minimalist posters — drag, edit, export.",
    img: project3,
    tags: ["HTML", "CSS", "JS","firebase"],
    demo: "https://143-letter.netlify.app",
    code: "https://github.com/ayushrai9142/love-letter"
  },
];

const Projects = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('visible'); 
          observer.unobserve(e.target);
        }
      });
    }, { threshold:0.1 });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section id="projects">
      <h2>Selected Projects</h2>
      <div className="grid">
        {projects.map((p,i)=>(
          <article className="card" key={i}>
            <img src={p.img} alt={`${p.title} screenshot`} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t,j)=><span className="tag" key={j}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={p.code} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
};

export default Projects;
