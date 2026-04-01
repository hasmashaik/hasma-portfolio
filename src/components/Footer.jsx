import React from 'react';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="logo__bracket">&lt;</span>HS<span className="logo__bracket">/&gt;</span>
          </span>
          <span className="footer__copy">
            © {year} Hasma Shaik. Built with React.js &amp; ❤️
          </span>
        </div>
        <div className="footer__links">
          <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="footer__link">Email</a>
        </div>
      </div>
    </footer>
  );
}
