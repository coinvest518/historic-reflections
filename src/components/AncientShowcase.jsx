import { useEffect, useRef } from 'react';
import './AncientShowcase.css';

export default function AncientShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ancient-showcase reveal" ref={sectionRef} aria-label="Ancient civilizations thumbnail showcase">
      <div className="ancient-showcase-shell">
        <div className="ancient-showcase-copy">
          <span className="section-label">Featured Thumbnail</span>
          <h2 className="ancient-showcase-title">Ancient worlds, framed before the archive opens</h2>
          <p className="ancient-showcase-text">
            A focused visual bridge between the mission and the civilizations section, using the Ancient Civilizations artwork as a proper landing-page feature instead of leaving it unused.
          </p>
        </div>

        <figure className="ancient-showcase-frame">
          <img
            src="/images/ancient_civilizations_web_1280x720.webp"
            alt="Ancient Civilizations thumbnail featuring Egypt, Greece, Persia, and Rome"
            className="ancient-showcase-image"
          />
          <figcaption className="ancient-showcase-caption">Ancient Civilizations Study Packet thumbnail</figcaption>
        </figure>
      </div>
    </section>
  );
}