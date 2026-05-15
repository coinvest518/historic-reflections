import { useEffect, useRef } from 'react';
import './Civilizations.css';

const civs = [
  { era: '3100 BCE – 30 BCE', name: 'Ancient Kemet (Egypt)', desc: 'The cradle of architecture, medicine, writing, and philosophy. Led by pharaohs, queens, and high priests long before Greece or Rome.', icon: '𓂀', bg: 'linear-gradient(135deg,#3D2010,#1A0A05)' },
  { era: '50,000 BCE – Present', name: 'Aboriginal Australia', desc: 'The world\'s oldest continuous culture. Keepers of the Songlines — a living map of creation encoded in music, dance, and story.', icon: '🌊', bg: 'linear-gradient(135deg,#0D2030,#051015)' },
  { era: '300 CE – 1600 CE', name: 'Mali & Songhai Empires', desc: 'Home to Timbuktu, one of the ancient world\'s greatest centers of scholarship, with over 700,000 manuscripts in its libraries.', icon: '🌿', bg: 'linear-gradient(135deg,#1D350E,#0A1A05)' },
  { era: '1400 BCE – 1533 CE', name: 'Indigenous Americas', desc: 'Aztec, Maya, Inca, and hundreds of North American nations — master astronomers, engineers, farmers, and diplomats.', icon: '🦅', bg: 'linear-gradient(135deg,#302010,#150E05)' },
  { era: '2500 BCE – 1500 BCE', name: 'Kingdom of Nubia / Kush', desc: 'The Black Pharaohs of Kush who ruled Egypt. A matrilineal society where queens — the Kandakes — held supreme power.', icon: '🏛️', bg: 'linear-gradient(135deg,#250D35,#100520)' },
  { era: '2600 BCE – 1900 BCE', name: 'Indus Valley Civilization', desc: 'Advanced urban planning, sanitation, and trade networks in South Asia — predating classical antiquity by a thousand years.', icon: '🌺', bg: 'linear-gradient(135deg,#352010,#1A1005)' },
  { era: '500 BCE – 323 BCE', name: 'Classical Greece', desc: 'The birthplace of democracy, philosophy, and theatre. Yet its intellectual roots trace directly to Kemet — Pythagoras, Plato, and Aristotle all studied in Africa.', icon: '🏛', bg: 'linear-gradient(135deg,#1A2040,#0A0F20)' },
  { era: '550 BCE – 330 BCE', name: 'Persian (Achaemenid) Empire', desc: 'The largest empire the ancient world had yet seen — pioneering religious tolerance, human rights declarations, and multi-ethnic administration under Cyrus the Great.', icon: '🔱', bg: 'linear-gradient(135deg,#2A1530,#100A18)' },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-1', 'reveal-delay-2'];

export default function Civilizations() {
  const itemRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    [headerRef.current, ...itemRefs.current].forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="civilizations">
      <div className="civ-header reveal" ref={headerRef}>
        <span className="section-label">Ancient Worlds</span>
        <h2 className="section-title">Civilizations That Shaped Humanity</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>From the cradle of humankind in East Africa to the Dreamtime of the Australian desert — these are the civilizations that textbooks forgot.</p>
      </div>
      <div className="civ-grid">
        {civs.map((c, i) => (
          <div className={`civ-card reveal ${delays[i]}`} key={i} ref={el => itemRefs.current[i] = el}>
            <div className="civ-card-bg" style={{ background: c.bg }}>{c.icon}</div>
            <div className="civ-card-overlay"></div>
            <div className="civ-card-content">
              <div className="civ-era">{c.era}</div>
              <div className="civ-name">{c.name}</div>
              <div className="civ-desc">{c.desc}</div>
            </div>
            <div className="civ-card-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
