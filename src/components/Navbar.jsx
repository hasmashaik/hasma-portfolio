import React, { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href.slice(1));
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__logo" onClick={() => go('#hero')}>
          <span className="logo__bracket">&lt;</span>HS<span className="logo__bracket">/&gt;</span>
        </button>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map(l => (
            <li key={l.href}>
              <button
                className={`nav__link ${active === l.href.slice(1) ? 'nav__link--active' : ''}`}
                onClick={() => go(l.href)}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href="https://github.com/hasmashaik" target="_blank" rel="noopener noreferrer" className="nav__cta">
              GitHub ↗
            </a>
          </li>
        </ul>

        <button className={`hamburger ${open ? 'hamburger--open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
