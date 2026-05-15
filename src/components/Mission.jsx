import { useEffect, useRef } from 'react';
import './Mission.css';

export default function Mission() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission">
      <div className="mission-text reveal" ref={el => refs.current[0] = el}>
        <span className="section-label">Our Mission</span>
        <h2 className="section-title">History reclaimed, as it truly was</h2>
        <p className="section-body">
          For millennia, griots, scribes, healers, philosophers, warriors, and knowledge-keepers—across all genders—carried civilizations forward. Their truths were not lost — they were systematically erased from textbooks and academic records. HistoricReflections exists to restore what was taken: the complete, unfiltered histories of ancient Africa, Aboriginal Australia, and Indigenous Americas.
        </p>
        <br/>
        <p className="section-body">
          This platform is a living archive—built from primary sources, archaeological evidence, and the wisdom of descendants. For students, educators, researchers, and anyone ready to see history without the filter of colonialism and bias.
        </p>
      </div>

      <div className="mission-visual reveal reveal-delay-2" ref={el => refs.current[1] = el}>
        <div className="mission-frame"></div>
        <div className="mission-inner">
          {/* Decorative SVG ankh — museum display case style */}
          <svg className="mission-ankh" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Loop (top oval) */}
            <ellipse cx="60" cy="48" rx="28" ry="34" stroke="rgba(201,168,76,0.45)" strokeWidth="3" fill="none"/>
            {/* Vertical shaft */}
            <line x1="60" y1="82" x2="60" y2="152" stroke="rgba(201,168,76,0.45)" strokeWidth="3"/>
            {/* Horizontal crossbar */}
            <line x1="22" y1="102" x2="98" y2="102" stroke="rgba(201,168,76,0.45)" strokeWidth="3"/>
            {/* Inner oval glow */}
            <ellipse cx="60" cy="48" rx="18" ry="22" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="none"/>
          </svg>

          <div className="mission-inscription">
            <span>Est. in Truth</span>
            <span className="mission-inscription-divider">·</span>
            <span>Guided by Descendants</span>
          </div>
        </div>

        <div className="mission-stat stat-first">
          <span className="stat-num">200K+</span>
          <span className="stat-label">Years of History</span>
        </div>
        <div className="mission-stat stat-second">
          <span className="stat-num">50+</span>
          <span className="stat-label">Civilizations Documented</span>
        </div>
      </div>
    </section>
  );
}
