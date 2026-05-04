import { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function closeMenu() { setMenuOpen(false); }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={closeMenu}>Historic<span>Reflections</span></a>
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#mission" onClick={closeMenu}>Our Mission</a></li>
        <li><a href="#civilizations" onClick={closeMenu}>Civilizations</a></li>
        <li><a href="#women" onClick={closeMenu}>Historians</a></li>
        <li><a href="#timeline" onClick={closeMenu}>Timeline</a></li>
        <li><a href="#resources" onClick={closeMenu}>Resources</a></li>
        <li><a href="#cta-section" onClick={closeMenu}>Join</a></li>
      </ul>
    </nav>
  );
}
