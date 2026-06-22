import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // Helper to check if link is active
  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img
          src="/images/logoimage.png"
          alt=""
          aria-hidden="true"
          className="nav-logo-mark"
        />
        <span className="nav-logo-text">Historic<span>Reflections</span></span>
      </Link>
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
        <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>About</Link></li>
        <li><Link to="/mission" className={isActive('/mission') ? 'active' : ''} onClick={closeMenu}>Mission</Link></li>
        <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''} onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/podcast" className={isActive('/podcast') ? 'active' : ''} onClick={closeMenu}>Podcast</Link></li>
      </ul>
    </nav>
  );
}