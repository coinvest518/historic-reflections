import { useState, useRef } from 'react';
import './Resources.css';

const documents = [
  { icon: '📄', type: 'Primary Source', title: 'The Ipuwer Papyrus — Ancient Egyptian Lamentations', meta: 'c. 1800 BCE · Kemet / Egypt' },
  { icon: '🗺️', type: 'Historical Map', title: 'The Kingdom of Mali at Its Greatest Extent', meta: 'c. 1300 CE · West Africa' },
  { icon: '📖', type: 'Academic Paper', title: 'Matrilineal Succession in Nubian Kingdoms', meta: 'Dr. Aminata Kouyaté · 2019' },
  { icon: '🪨', type: 'Archaeological Evidence', title: 'Blombos Cave Ochre Engravings — Oldest Known Art', meta: 'c. 75,000 BCE · South Africa' },
  { icon: '📜', type: 'Oral History', title: 'Dreamtime Creation Stories — Arrernte Nation', meta: 'Recorded 1988 · Central Australia' },
  { icon: '🏛️', type: 'Manuscript', title: 'Timbuktu Manuscripts — Astronomy & Mathematics', meta: 'c. 1200–1500 CE · Songhai Empire' },
];

const videos = [
  { thumb: '𓂀', title: 'The Queens of Ancient Nubia — Full Documentary', meta: 'YouTube · 58 min · Ancient History' },
  { thumb: '🦅', title: 'Indigenous Women Leaders of the Americas', meta: 'YouTube · 44 min · Indigenous History' },
  { thumb: '🌿', title: 'Songlines: Aboriginal Navigation & Knowledge Systems', meta: 'YouTube · 32 min · Aboriginal Australia' },
  { thumb: '📚', title: 'Zoom Lecture: Timbuktu and the African Intellectual Tradition', meta: 'Zoom Recording · 1h 15min · Dr. Fatima Sissoko' },
];

const lessons = [
  { icon: '🏫', type: 'K–5 Lesson Plan', title: 'Introduction to Ancient Africa: Stories for Young Learners', meta: '45 min · Grades 3–5 · Printable worksheets included' },
  { icon: '🏫', type: 'Middle School', title: 'Queens & Warriors: Women Who Led Ancient Nations', meta: '2 class periods · Grades 6–8 · Discussion guide' },
  { icon: '🎓', type: 'High School', title: 'Colonialism & Memory: Who Decides What History Gets Told?', meta: '5-day unit · Grades 9–12 · Primary sources included' },
  { icon: '🎓', type: 'College Level', title: 'African Intellectual Tradition: Timbuktu to the Present', meta: 'Seminar course · College · Full syllabus + reading list' },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState('documents');
  const [uploadName, setUploadName] = useState(null);
  const uploadRef = useRef(null);

  function handleDragOver(e) { e.preventDefault(); uploadRef.current.style.borderColor = 'rgba(201,168,76,0.8)'; }
  function handleDragLeave() { uploadRef.current.style.borderColor = ''; }
  function handleDrop(e) {
    e.preventDefault();
    uploadRef.current.style.borderColor = '';
    const files = e.dataTransfer.files;
    if (files.length) setUploadName(files[0].name);
  }

  const tabs = [
    { key: 'documents', label: '📜 Documents & Evidence' },
    { key: 'videos', label: '🎬 Video Library' },
    { key: 'upload', label: '⬆️ Upload Resources' },
    { key: 'lessons', label: '📚 Lesson Plans' },
  ];

  return (
    <section id="resources">
      <div className="resources-header">
        <span className="section-label">The Archive</span>
        <h2 className="section-title">Documents, Media & Resources</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>Explore primary sources, upload presentations, and access educational videos — all in one place.</p>
      </div>

      <div className="tab-bar">
        {tabs.map(t => (
          <button key={t.key} className={`tab-btn ${activeTab === t.key ? 'active' : ''}`} onClick={() => setActiveTab(t.key)}>{t.label}</button>
        ))}
      </div>

      {activeTab === 'documents' && (
        <div className="tab-panel active">
          <div className="doc-grid">
            {documents.map((d, i) => (
              <div className="doc-card" key={i}>
                <div className="doc-type"><span className="doc-type-icon">{d.icon}</span> {d.type}</div>
                <div className="doc-title">{d.title}</div>
                <div className="doc-meta">{d.meta}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="tab-panel active">
          <div className="video-grid">
            {videos.map((v, i) => (
              <div className="video-card" key={i}>
                <div className="video-thumb">
                  <div className="video-thumb-text">{v.thumb}</div>
                  <div className="play-btn">▶</div>
                </div>
                <div className="video-info">
                  <div className="video-title">{v.title}</div>
                  <div className="video-meta">{v.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="tab-panel active">
          <div className="doc-grid" style={{ marginBottom: '2rem' }}>
            <div className="doc-card">
              <div className="doc-type"><span className="doc-type-icon">📊</span> PowerPoint</div>
              <div className="doc-title">African Civilizations — Grade 8 Lesson Deck</div>
              <div className="doc-meta">Uploaded by Ms. Johnson · 34 slides</div>
            </div>
            <div className="doc-card">
              <div className="doc-type"><span className="doc-type-icon">📄</span> PDF</div>
              <div className="doc-title">Indigenous Women&apos;s Rights Timeline — Canada & Australia</div>
              <div className="doc-meta">Uploaded by Community Archive · 12 pages</div>
            </div>
          </div>
          <div
            className="upload-zone"
            ref={uploadRef}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-icon">⬆️</div>
            <div className="upload-text">{uploadName ? `✓ ${uploadName} ready to upload` : 'Upload Your Resources'}</div>
            <div className="upload-sub">{uploadName ? 'Admin review required before publishing' : 'PowerPoints, PDFs, Word Documents · Max 50MB · Drag & drop or click'}</div>
          </div>
        </div>
      )}

      {activeTab === 'lessons' && (
        <div className="tab-panel active">
          <div className="doc-grid">
            {lessons.map((l, i) => (
              <div className="doc-card" key={i}>
                <div className="doc-type"><span className="doc-type-icon">{l.icon}</span> {l.type}</div>
                <div className="doc-title">{l.title}</div>
                <div className="doc-meta">{l.meta}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
