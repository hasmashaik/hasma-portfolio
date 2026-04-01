import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { personal } from '../data/portfolio';
import './Hero.css';

const ROLES = [
  'Java Full Stack Developer',
  'Spring Boot Engineer',
  'React.js Developer',
  'REST API Builder',
  'Cloud Developer',
];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Hero() {
  const typed = useTypewriter(ROLES);

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero grid-bg">
      {/* Background orbs */}
      <div className="orb orb--purple" />
      <div className="orb orb--cyan" />
      <div className="orb orb--pink" />

      {/* Animated scan line */}
      <div className="scan-line" />

      <div className="container hero__inner">
        {/* ── LEFT ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge__dot" />
            Open to Full-time Opportunities
          </div>

          <h1 className="hero__name">
            Hasma<br /><span className="grad">Shaik</span>
          </h1>

          <p className="hero__role">
            <span className="role__prefix">$ </span>
            <span className="role__typed">{typed}</span>
            <span className="cursor__bar">|</span>
          </p>

          <p className="hero__summary">{personal.summary}</p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scroll('#projects')}>
              View Projects →
            </button>
            <button className="btn-ghost" onClick={() => scroll('#contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero__socials">
            <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="social"><GithubIcon />  GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social"><LinkedinIcon /> LinkedIn</a>
            <a href={`mailto:${personal.email}`} className="social"><MailIcon /> Email</a>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero__visual">
          <div className="avatar-wrap">
            {/* Rings */}
            <div className="ring ring--1" />
            <div className="ring ring--2" />
            <div className="ring ring--3" />

            {/* Avatar */}
            <div className="avatar">
              <span className="avatar__text">HS</span>
              <div className="avatar__shine" />
            </div>

            {/* Floating tech chips */}
            {[
              { label: 'Java',      c: '#f72585', pos: { top: '5%',  left: '-18%' } },
              { label: 'React',     c: '#00f5d4', pos: { top: '5%',  right: '-18%' } },
              { label: 'Spring',    c: '#8b5cf6', pos: { bottom: '18%', left: '-22%' } },
              { label: 'Node.js',   c: '#ffd60a', pos: { bottom: '18%', right: '-18%' } },
              { label: 'AWS',       c: '#ff6b35', pos: { bottom: '-3%', left: '30%' } },
            ].map((chip, i) => (
              <div
                key={chip.label}
                className="chip"
                style={{ ...chip.pos, '--chip-c': chip.c, animationDelay: `${i * 0.5}s` }}
              >
                {chip.label}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="stats">
            {[
              { n: '5+',  l: 'Projects' },
              { n: '9.1', l: 'CGPA' },
              { n: '3',   l: 'Certs' },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                <div className="stat">
                  <span className="stat__num grad">{s.n}</span>
                  <span className="stat__lbl">{s.l}</span>
                </div>
                {i < 2 && <div className="stat__div" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-hint__line" />
      </div>
    </section>
  );
}
