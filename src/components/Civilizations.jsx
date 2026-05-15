import { useEffect, useRef } from 'react';
import './Civilizations.css';

const civs = [
  {
    era: '3500 BCE – 1200 BCE',
    name: 'Mesopotamia & Ancient Egypt',
    desc: 'The study packet centers the first river civilizations: Mesopotamia between the Tigris and Euphrates, and Egypt along the Nile, where irrigation, writing, law, and centralized rule shaped early state power.',
    motif: 'river-crown',
    bg: 'linear-gradient(145deg,#3b2413,#120905)',
    accent: '#E8C461',
  },
  {
    era: 'c. 1200 BCE',
    name: 'Sea Peoples & Bronze Age Collapse',
    desc: 'The archive describes migrations, invasions, trade breakdowns, and environmental stress converging into the Late Bronze Age Collapse, disrupting multiple eastern Mediterranean powers at once.',
    motif: 'collapse',
    bg: 'linear-gradient(145deg,#2c1a10,#090504)',
    accent: '#D87538',
  },
  {
    era: '1000 BCE – 323 BCE',
    name: 'Greece, Persia & Alexander',
    desc: 'After collapse, new powers emerged. The packet highlights Classical Greece, Persian imperial administration, and Alexander the Great as major carriers of political ideas, conquest, and cultural diffusion.',
    motif: 'empire',
    bg: 'linear-gradient(145deg,#1c2038,#090b14)',
    accent: '#F4DC8E',
  },
  {
    era: '3500 BCE – 400 CE',
    name: 'Mound Builders & Earthworks',
    desc: 'The North America study text points to Watson Brake, Poverty Point, and Hopewell ceremonial networks as evidence of engineering, sacred planning, and regional influence long before European invasion.',
    motif: 'mounds',
    bg: 'linear-gradient(145deg,#2b1d11,#0c0905)',
    accent: '#CFA46B',
  },
  {
    era: '1050 – 1350 CE',
    name: 'Cahokia & Urban Civilization',
    desc: 'Cahokia is presented as one of North America\'s great cities, with Monk\'s Mound, plazas, astronomical alignment, and coordinated governance demonstrating large-scale Indigenous urban civilization.',
    motif: 'cahokia',
    bg: 'linear-gradient(145deg,#23301b,#091007)',
    accent: '#D9B15E',
  },
  {
    era: 'Ancient Era – Modern Era',
    name: 'Astronomy, Trade & Indigenous Survival',
    desc: 'Your PDFs connect Woodhenge, solar tracking, long-distance trade, colonization, denationalization, and continued sovereignty movements into one long history of knowledge, disruption, resistance, and survival.',
    motif: 'constellation',
    bg: 'linear-gradient(145deg,#1a2331,#070b12)',
    accent: '#9FC4D5',
  },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];

function CivMotif({ motif }) {
  switch (motif) {
    case 'river-crown':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <path d="M18 88c9-10 17-10 26 0s17 10 26 0 17-10 26 0 17 10 26 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M32 62l12-22 16 18 16-22 12 26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
          <circle cx="60" cy="28" r="9" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      );
    case 'collapse':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <path d="M24 82h72" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M28 78l16-28 14 18 16-22 18 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
          <path d="M60 24l-8 22 12 0-8 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      );
    case 'empire':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <path d="M28 90h64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M36 90V42m24 48V42m24 48V42" fill="none" stroke="currentColor" strokeWidth="4"/>
          <path d="M28 42h64L60 22 28 42z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
          <circle cx="60" cy="56" r="6" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      );
    case 'mounds':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <path d="M18 92h84" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M28 92V76h18V62h20V48h18v44" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
          <circle cx="76" cy="38" r="7" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      );
    case 'cahokia':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <path d="M22 92h76" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M34 92V74h16V58h20V42h16v50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M20 34c14-10 28-10 40 0s26 10 40 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    case 'constellation':
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true" className="civ-motif-svg">
          <circle cx="26" cy="34" r="5" fill="currentColor"/>
          <circle cx="56" cy="24" r="4" fill="currentColor"/>
          <circle cx="84" cy="40" r="5" fill="currentColor"/>
          <circle cx="40" cy="68" r="4" fill="currentColor"/>
          <circle cx="76" cy="76" r="4" fill="currentColor"/>
          <path d="M26 34l30-10 28 16-8 36-36-8-14-34" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 92c16-10 32-10 48 0s32 10 40 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

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
        <p className="section-body" style={{ margin: '0 auto' }}>
          Rebuilt around the actual archive packets: early river civilizations, the Bronze Age collapse, Indigenous North American earthworks, Cahokia, astronomy, trade networks, colonization, and survival.
        </p>
      </div>
      <div className="civ-grid">
        {civs.map((c, i) => (
          <div
            className={`civ-card reveal ${delays[i]}`}
            key={i}
            ref={el => itemRefs.current[i] = el}
            style={{ background: c.bg, '--civ-accent': c.accent }}
          >
            <div className="civ-card-bg">
              <div className="civ-card-glyph-frame">
                <CivMotif motif={c.motif} />
              </div>
            </div>
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
