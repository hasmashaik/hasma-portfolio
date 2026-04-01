import React from 'react';
import { education, certifications, languages } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <p className="label">Background</p>
        <h2 className="title">Education & <span className="grad">Credentials</span></h2>

        <div className="edu-grid">
          {/* Education */}
          <div className="edu-box">
            <h3 className="edu-box__title"><span>🎓</span> Education</h3>
            {education.map((e, i) => (
              <div className="edu-row" key={i}>
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-inst">{e.institution}</p>
                  <p className="edu-year">{e.year}</p>
                </div>
                <div className="edu-cgpa">
                  <span className="cgpa-n grad">{e.cgpa}</span>
                  <span className="cgpa-l">CGPA</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div className="edu-box">
            <h3 className="edu-box__title"><span>🏆</span> Certifications</h3>
            {certifications.map((c, i) => (
              <div className="cert-row" key={i}>
                <div className="cert-check">✓</div>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="edu-box">
            <h3 className="edu-box__title"><span>🌐</span> Languages</h3>
            {languages.map((l, i) => (
              <div className="lang-row" key={i}>
                <span className="lang-name">{l.name}</span>
                <div className="lang-dots">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`lang-dot ${j < l.level ? 'lang-dot--on' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
