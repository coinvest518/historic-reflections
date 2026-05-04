import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const x = Math.random() * 100;
      const y = Math.random() * 70;
      const dur = (3 + Math.random() * 4).toFixed(1) + 's';
      const op = (0.2 + Math.random() * 0.5).toFixed(2);
      star.style.cssText = `left:${x}%;top:${y}%;--dur:${dur};--base-op:${op};animation-delay:${(Math.random()*4).toFixed(1)}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="stars" ref={starsRef}></div>

      <div className="pyramid-container">
        <svg className="pyramid-svg" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="400,20 700,380 100,380" fill="url(#pyrGrad)" />
          <polygon points="400,20 580,250 220,250" fill="rgba(201,168,76,0.08)" />
          <line x1="400" y1="20" x2="400" y2="380" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
          <polygon points="560,380 700,380 580,250 460,380" fill="rgba(0,0,0,0.3)" />
          <defs>
            <linearGradient id="pyrGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,168,76,0.5)"/>
              <stop offset="100%" stopColor="rgba(181,97,42,0.3)"/>
            </linearGradient>
          </defs>
          <polygon points="620,380 750,380 685,290" fill="rgba(201,168,76,0.06)" />
          <polygon points="130,380 260,380 195,310" fill="rgba(201,168,76,0.05)" />
          <ellipse cx="400" cy="380" rx="320" ry="4" fill="rgba(201,168,76,0.08)" />
        </svg>
      </div>

      <div className="horizon"></div>

      <div className="hero-content">
        <span className="hero-eyebrow">Ancient Civilizations · Indigenous Peoples · Women in History</span>
        <h1 className="hero-title">
          Historic<em>Reflections</em>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-subtitle">
          Before the textbooks — there was truth. Discover the untold histories of ancient Africa, Aboriginal peoples, and Indigenous civilizations, as told through the wisdom of women historians and knowledge-keepers.
        </p>
        <div className="hero-cta">
          <a href="#civilizations" className="btn-primary">Explore Civilizations</a>
          <a href="#resources" className="btn-secondary">View Resources</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
