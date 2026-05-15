import { useEffect, useRef } from 'react';
import './Women.css';

const profiles = [
  { icon: '👑', name: 'Hatshepsut', title: 'Pharaoh of Egypt', era: 'c. 1507–1458 BCE · Ancient Kemet', bio: "One of Egypt's most successful pharaohs, who ruled for over 20 years and launched one of the greatest trading expeditions in history to the land of Punt." },
  { icon: '⚔️', name: 'Yaa Asantewaa', title: 'Queen Mother & War Leader', era: '1840–1921 CE · Ashanti Empire, Ghana', bio: 'Led the War of the Golden Stool — one of the last major African-led wars against British colonialism — when male chiefs hesitated to act.' },
  { icon: '🌟', name: 'Amanirenas', title: 'Kandake (Queen) of Kush', era: 'c. 40–10 BCE · Kingdom of Kush, Nubia', bio: 'The one-eyed warrior queen who fought and defeated multiple Roman legions, negotiating a peace treaty so favorable it stands as a diplomatic masterpiece.' },
  { icon: '📜', name: 'Nzinga Mbande', title: 'Queen of Ndongo & Matamba', era: '1583–1663 CE · Angola', bio: 'A brilliant diplomat and military strategist who resisted Portuguese colonization for decades, forming alliances and leading her people with unmatched skill.' },
  { icon: '🌿', name: 'Sacagawea', title: 'Guide, Interpreter & Diplomat', era: 'c. 1788–1812 CE · Lemhi Shoshone Nation', bio: 'A Shoshone woman whose knowledge of the land, languages, and peoples of the American West made the Lewis and Clark Expedition possible.' },
  { icon: '🔥', name: 'Hypatia of Alexandria', title: 'Mathematician & Philosopher', era: 'c. 360–415 CE · Alexandria, Egypt', bio: 'The head of the Neoplatonist school in Alexandria — mathematician, astronomer, and philosopher whose murder by a Christian mob symbolized the destruction of ancient knowledge.' },
];

const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', ''];

export default function Women() {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    [headerRef.current, ...cardRefs.current].forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="women">
      <div className="women-header reveal" ref={headerRef}>
        <span className="section-label">Influential Leaders & Scholars</span>
        <h2 className="section-title">Transformative Figures in History</h2>
        <p className="section-body">Kings, queens, warriors, mathematicians, diplomats, and griots — visionary leaders whose brilliance shaped civilizations and reshaped history.</p>
      </div>
      <div className="profiles-row">
        {profiles.map((p, i) => (
          <div className={`profile-card reveal ${delays[i]}`} key={i} ref={el => cardRefs.current[i] = el}>
            <div className="profile-icon">{p.icon}</div>
            <div className="profile-name">{p.name}</div>
            <div className="profile-title">{p.title}</div>
            <div className="profile-era">{p.era}</div>
            <div className="profile-bio">{p.bio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
