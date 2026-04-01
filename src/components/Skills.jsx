import React from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__bg-strip" />
      <div className="container">
        <p className="label">What I Work With</p>
        <h2 className="title">Technical <span className="grad">Skills</span></h2>
        <p className="skills__sub">A toolkit built through real projects and hands-on internship experience.</p>

        <div className="skills__grid">
          {skills.map((g, i) => (
            <div
              key={i}
              className="skill-card"
              style={{ '--c': g.color, animationDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__header">
                <span className="skill-card__icon">{g.icon}</span>
                <span className="skill-card__cat">{g.category}</span>
              </div>
              <div className="skill-card__tags">
                {g.items.map((item, j) => (
                  <span className="skill-tag" key={j}>{item}</span>
                ))}
              </div>
              <div className="skill-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
