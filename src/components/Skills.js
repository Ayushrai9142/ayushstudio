import React, { useEffect } from 'react';
import './Skills.css';

const skills = [
  { name: "HTML", percent:"95%" },
  { name: "CSS", percent:"92%" },
  { name: "JavaScript", percent:"86%" },
  { name: "React", percent:"80%" },
];

const Skills = () => {
  useEffect(()=>{
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll('.skill-progress i').forEach(i=>{
            i.style.width = i.getAttribute('data-width');
          });
          observer.unobserve(e.target);
        }
      });
    }, {threshold:0.3});
    if(skillsSection) observer.observe(skillsSection);
  },[]);

  return (
    <section id="skills">
      <h2>Skills & Proficiency</h2>
      <div className="skills-grid">
        {skills.map((s,i)=>(
          <div key={i}>
            <div className="skill-pill">{s.name}</div>
            <div className="skill-progress"><i data-width={s.percent}></i></div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Skills;
