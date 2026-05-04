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
        <span className="section-label">Why HerStory</span>
        <h2 className="section-title">History was always hers to tell</h2>
        <p className="section-body">
          For millennia, women were the griots, the scribes, the healers, and the queens who carried civilizations forward. Their stories were not lost — they were erased. HerStory exists to restore what was taken, honoring the ancient Africans, Aboriginal communities, and Indigenous peoples whose knowledge shaped the world.
        </p>
        <br/>
        <p className="section-body">
          This platform is a living archive — for students, educators, researchers, and anyone ready to see history as it truly was.
        </p>
      </div>

      <div className="mission-visual reveal reveal-delay-2" ref={el => refs.current[1] = el}>
        <div className="mission-frame"></div>
        <div className="mission-inner">
          <div className="ankh-symbol">☥</div>
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
