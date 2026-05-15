import { useEffect, useRef } from 'react';
import './NorthAmerica.css';

const nations = [
  { name: 'Muscogee (Creek)', region: 'Southeastern Woodlands' },
  { name: 'Hopi', region: 'Southwestern Plateau' },
  { name: 'Cherokee', region: 'Southeastern Woodlands' },
  { name: 'Blackfoot', region: 'Plains' },
  { name: 'Haida', region: 'Northwest Coast' },
  { name: 'Lummi Nation', region: 'Northwest Coast' },
  { name: 'Tuscarora', region: 'Southeastern Woodlands' },
  { name: 'Wampanoag', region: 'Northeastern Woodlands' },
  { name: 'Louisiana Creole Indigenous', region: 'Gulf Coast' },
  { name: 'Seminole', region: 'Southeastern Woodlands' },
  { name: 'Navajo', region: 'Southwestern Plateau' },
  { name: 'Ottawa', region: 'Great Lakes Region' },
];

export default function NorthAmerica() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    [textRef.current, imgRef.current, tagsRef.current].forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="north-america" ref={sectionRef}>
      <div className="na-text reveal" ref={textRef}>
        <span className="section-label">The Original Nations</span>
        <h2 className="section-title">The Melanated Peoples of North America</h2>
        <p className="section-body">
          Long before colonization, these nations built cities, raised families, traded across continents,
          and maintained deep spiritual and cultural systems. They were not primitive — they were sovereign.
          From the Gulf Coast to the Northwest, from the Great Plains to the Southeastern Woodlands,
          the original peoples of North America represent thousands of years of continuous civilization,
          governance, science, and art.
        </p>
        <p className="section-body na-body-2">
          Today, these nations persist. Their languages, traditions, and knowledge systems survive
          despite centuries of displacement, erasure, and genocide. <em>We are still here. We are still
          Indigenous. We are North America.</em>
        </p>
      </div>

      <div className="na-image-wrap reveal reveal-delay-2" ref={imgRef}>
        <img
          src="/images/melanatedpeopleofnorth.png"
          alt="The Melanated Peoples of North America — The Original Nations and Peoples"
          className="na-image"
        />
        <div className="na-image-overlay"></div>
      </div>

      <div className="na-nations reveal reveal-delay-3" ref={tagsRef}>
        <span className="na-nations-label">Nations Featured</span>
        <div className="na-tags">
          {nations.map((n, i) => (
            <div className="na-tag" key={i}>
              <span className="na-tag-name">{n.name}</span>
              <span className="na-tag-region">{n.region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
