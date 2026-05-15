import { useEffect, useRef } from 'react';
import '../Blog.css';
import BlogTOC from './BlogTOC';

const TOC_ITEMS = [
  { href: '#early-civs', label: 'Early Civilizations' },
  { href: '#invasions', label: 'Invasions & Migrations' },
  { href: '#collapse', label: 'The Bronze Age Collapse' },
  { href: '#rise-new', label: 'Rise of New Civilizations' },
  { href: '#classical', label: 'Classical Greece' },
  { href: '#persia', label: 'Persian Empire' },
  { href: '#rome', label: 'Roman Empire' },
];

export default function AncientCivilizationsBlog() {
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = document.querySelector('.blog-view-wrapper');
    if (wrapper) wrapper.scrollTop = 0;
  }, []);

  return (
    <article id="blog-ancient-civilizations" className="blog-post">
      <header className="blog-header">
        <span className="blog-label">Learning Resource</span>
        <h1 className="blog-title">Ancient Civilizations: Rise, Collapse & Legacy</h1>
        <p className="blog-subtitle">
          From the first civilizations to classical antiquity — a journey through humanity's greatest achievements, catastrophic collapses, and the empires that shaped our world.
        </p>
        <div className="blog-meta">
          <span className="meta-item">📚 Study Packet</span>
          <span className="meta-item">📅 Updated May 2026</span>
          <span className="meta-item">⏱ 15–20 min read</span>
        </div>
      </header>

      <BlogTOC items={TOC_ITEMS} />

      <div className="blog-content" ref={contentRef}>
        <section id="early-civs" className="blog-section">
          <h2>Early Civilizations (3500 BCE – 1200 BCE)</h2>
          <p>
            Civilization emerged not in Europe, but in Africa and Asia. The first cities, the first writing systems, and the first complex governments arose in the river valleys of Mesopotamia, Egypt (Kemet), the Indus Valley, and along the Yellow River in China.
          </p>
          <h3>Ancient Kemet (Egypt): 3100 BCE – 30 BCE</h3>
          <p>
            The civilization of Kemet lasted over 3,000 years — longer than any Western European nation has existed. It was a beacon of architecture, medicine, mathematics, and philosophy.
          </p>
          <ul>
            <li><strong>Architecture:</strong> The pyramids remain among the greatest engineering feats in human history, built without modern machinery.</li>
            <li><strong>Medicine:</strong> Surgeons performed cataract operations; physicians documented diseases and treatments.</li>
            <li><strong>Mathematics:</strong> Egyptians understood geometry, algebra, and advanced calculations for construction and astronomy.</li>
            <li><strong>Philosophy & Writing:</strong> A sophisticated writing system, literature, and religious philosophy that influenced Greek thinkers.</li>
          </ul>

          <h3>Kingdom of Nubia/Kush: 2500 BCE – Present</h3>
          <p>
            Nubia (modern Sudan) was often called "the land of gold." The Kingdom of Kush was a major trade power and, remarkably, periodically ruled Egypt itself — the so-called "Black Pharaohs."
          </p>
          <ul>
            <li><strong>Political Power:</strong> Kushite dynasties ruled Egypt from the 8th–7th centuries BCE.</li>
            <li><strong>Matrilineal Succession:</strong> Unlike many ancient societies, Kush practiced matrilineal descent — the crown often passed through women, the Kandakes (queens), who held supreme authority.</li>
            <li><strong>Legacy:</strong> Kush persisted as an independent kingdom until the 4th century CE, when it fell to Aksum.</li>
          </ul>

          <h3>Indus Valley Civilization: 2600 BCE – 1900 BCE</h3>
          <p>
            Spanning modern Pakistan and India, the Indus Valley Civilization featured planned cities, advanced sanitation, standardized weights and measures, and extensive trade networks — all predating classical antiquity by a thousand years.
          </p>
          <ul>
            <li><strong>Urban Planning:</strong> Cities like Mohenjo-daro and Harappa featured grid-pattern streets, public baths, and drainage systems.</li>
            <li><strong>Trade:</strong> Evidence of commerce with Egypt, Mesopotamia, and Central Asia.</li>
            <li><strong>Writing:</strong> An undeciphered script suggests a sophisticated bureaucracy.</li>
          </ul>
        </section>

        <section id="invasions" className="blog-section">
          <h2>Invasions & Migrations (1500 BCE – 600 BCE)</h2>
          <p>
            Around 1500 BCE, Indo-European peoples migrated into Europe, the Mediterranean, and South Asia. These migrations brought new languages, technologies (particularly iron), and social structures — but also disruption and warfare.
          </p>
          <ul>
            <li><strong>Bronze Age Warriors:</strong> The Mycenaeans in Greece, the Hittites in Anatolia, and chariot-warriors across Eurasia dominated through military technology.</li>
            <li><strong>Trade Disruptions:</strong> Sea Peoples (origins disputed) attacked and destabilized Mediterranean civilizations around 1200 BCE.</li>
            <li><strong>Migration Waves:</strong> Indo-European Aryans entered India and Iran, transforming local societies and establishing Vedic and Persian cultures.</li>
          </ul>
        </section>

        <section id="collapse" className="blog-section">
          <h2>The Bronze Age Collapse (1200 BCE)</h2>
          <p>
            Around 1200 BCE, nearly every major civilization in the Mediterranean and Near East collapsed simultaneously — one of history's most mysterious events. The causes remain debated: climate change, earthquake swarms, invasion, famine, or a combination.
          </p>
          <ul>
            <li>The Mycenaean civilization of Greece fell into the "Dark Ages."</li>
            <li>The Hittite empire vanished.</li>
            <li>Egypt was weakened and fragmenting.</li>
            <li>Babylonia declined.</li>
          </ul>
          <p>
            This collapse demonstrates how interconnected ancient civilizations were — a systemic failure cascaded across the known world. Recovery took centuries.
          </p>
        </section>

        <section id="rise-new" className="blog-section">
          <h2>Rise of New Civilizations (1000 BCE – 500 BCE)</h2>
          <p>
            From the ruins of the Bronze Age, new civilizations emerged and flourished. The first half-millennium of the first millennium BCE saw the rise of the Assyrian Empire, the Hebrew kingdoms, the beginnings of classical Greece, and the rise of Persia.
          </p>
          <h3>Nok Civilization (West Africa): 1500 BCE – 500 CE</h3>
          <p>
            The Nok culture flourished in modern Nigeria, creating remarkable terracotta sculptures and developing sophisticated iron-smelting techniques independently of Eurasian influence.
          </p>

          <h3>Mali & Songhai Empires (West Africa): 300 CE – 1600 CE</h3>
          <p>
            Mali and Songhai controlled the gold trade of West Africa and created Timbuktu — one of the ancient world's greatest centers of learning.
          </p>
          <ul>
            <li><strong>Timbuktu Libraries:</strong> Over 700,000 manuscripts on medicine, astronomy, history, and philosophy — a university city before European universities fully developed.</li>
            <li><strong>Trade Networks:</strong> Connected to North Africa, the Mediterranean, and the Indian Ocean.</li>
          </ul>
        </section>

        <section id="classical" className="blog-section">
          <h2>Classical Greece (500 BCE – 323 BCE)</h2>
          <p>
            Classical Greece produced philosophy (Plato, Aristotle, Socrates), democracy, drama, and science. Yet its intellectual debt to Egypt and Africa is often obscured.
          </p>
          <ul>
            <li><strong>Philosophy Roots:</strong> Pythagoras, Thales, and others studied in Egypt and Nubia.</li>
            <li><strong>Democracy:</strong> Athens pioneered direct democracy — though only for free male citizens, not women or enslaved people.</li>
            <li><strong>Legacy:</strong> Greek thought profoundly shaped Western intellectual tradition.</li>
          </ul>
        </section>

        <section id="persia" className="blog-section">
          <h2>Persian (Achaemenid) Empire (550 BCE – 330 BCE)</h2>
          <p>
            At its height, the Persian Empire was the largest empire the ancient world had yet seen — spanning three continents.
          </p>
          <ul>
            <li><strong>Cyrus the Great:</strong> Founded the empire and established principles of religious tolerance and human rights unprecedented in the ancient world.</li>
            <li><strong>Administration:</strong> A sophisticated bureaucracy with Persian governors and local autonomy for subject peoples.</li>
            <li><strong>Multi-ethnic:</strong> Persians ruled over Babylonians, Egyptians, Ionians, and many others.</li>
            <li><strong>The Cyrus Cylinder:</strong> An early declaration of human rights, predating Western declarations by 2,500 years.</li>
          </ul>
        </section>

        <section id="rome" className="blog-section">
          <h2>Roman Empire (500 BCE – 476 CE)</h2>
          <p>
            Rome conquered and unified the Mediterranean world, created an engineering marvel of roads and aqueducts, and established a legal system that influenced Western law for millennia.
          </p>
          <ul>
            <li><strong>Republican Period (500–27 BCE):</strong> Rome was a republic with elected magistrates, though gradually dominated by wealthy aristocrats.</li>
            <li><strong>Imperial Period (27 BCE–476 CE):</strong> Emperors ruled; the empire expanded to its greatest extent under Trajan (98–117 CE).</li>
            <li><strong>Engineering:</strong> Aqueducts, roads, the Colosseum, and Pantheon showcase Roman construction genius.</li>
            <li><strong>Law:</strong> Roman law, especially the Justinian Code, became the foundation of European legal systems.</li>
            <li><strong>Fall (476 CE):</strong> The Western Roman Empire fell due to internal corruption, economic decline, and pressure from Germanic tribes. The Eastern Byzantine Empire continued until 1453.</li>
          </ul>
        </section>

        <section className="blog-section blog-conclusion">
          <h2>Legacy & Lessons</h2>
          <p>
            Ancient civilizations achieved remarkable feats in architecture, governance, trade, and knowledge creation. Yet the Western perspective often centers only on Greece and Rome, erasing the African, Asian, and Indigenous contributions that shaped these so-called "Western" civilizations.
          </p>
          <p>
            Understanding the full history of ancient civilizations — from Kemet to Kush, from the Indus Valley to Mali, from the Americas to Australia — reveals that human ingenuity and achievement are universal. Erasing non-Western civilizations was a choice, not an inevitability.
          </p>
        </section>
      </div>

      <footer className="blog-footer">
        <button onClick={() => window.history.back()} className="blog-back-btn">← Back to Resources</button>
      </footer>
    </article>
  );
}
