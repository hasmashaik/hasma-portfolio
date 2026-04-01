import React from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <p className="label">Work History</p>
        <h2 className="title">My <span className="grad">Experience</span></h2>

        <div className="exp-timeline">
          {experience.map((job, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-dot">
                <div className="exp-dot__core" />
                <div className="exp-dot__ring" />
              </div>
              <div className="exp-card">
                <div className="exp-card__top">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                      </svg>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>

                <ul className="exp-list">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="exp-list__item">
                      <span className="exp-arrow">▹</span>{h}
                    </li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {job.tech.map((t, k) => <span key={k} className="exp-tech__tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
