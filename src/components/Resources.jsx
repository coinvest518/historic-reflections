import { useState, useEffect, useRef, useCallback } from 'react';
import './Resources.css';
import AncientCivilizationsBlog from './Blog/AncientCivilizationsBlog';
import MelanatedPeoplesBlog from './Blog/MelanatedPeoplesBlog';
import GenocideLandGrabBlog from './Blog/GenocideLandGrabBlog';

// 🔑 FREE email setup: go to web3forms.com → enter judiahmel@gmail.com → paste the key you receive here
const WEB3FORMS_KEY = '8d363fc4-7d0d-4f5b-a52e-9e06fff89702';

const blogPosts = [
  {
    id: 'ancient-civilizations',
    icon: '📚',
    type: 'Study Packet',
    title: 'Ancient Civilizations: Rise, Collapse & Legacy',
    meta: 'Mesopotamia · Egypt · Bronze Age Collapse · Greece · Persia · Rome',
    image: '/images/ancient_civilizations_web_1280x720.webp',
    imageAlt: 'Ancient Civilizations study thumbnail showing Egypt, Greece, Persia, and Rome',
    component: AncientCivilizationsBlog,
  },
  {
    id: 'melanated-peoples',
    icon: '🌎',
    type: 'Historical Record',
    title: 'The Melanated Peoples of North America: The Original Nations',
    meta: 'Mound Builders · Cahokia · Trade Networks · Colonization & Survival',
    image: '/images/melanatedpeopleofnorth.png',
    imageAlt: 'Collage for The Melanated Peoples of North America',
    component: MelanatedPeoplesBlog,
  },
  {
    id: 'genocide-landgrab',
    icon: '⚖️',
    type: 'Historical Document',
    title: 'Genocide, Land Grab & Denationalization in the Americas',
    meta: 'Doctrine of Discovery · Indian Removal Act · Boarding Schools · Resistance',
    component: GenocideLandGrabBlog,
  },
];

const videos = [
  { thumb: '𓂀', title: 'The Queens of Ancient Nubia — Full Documentary', meta: 'YouTube · 58 min · Ancient History' },
  { thumb: '🦅', title: 'Indigenous Leaders of the Americas', meta: 'YouTube · 44 min · Indigenous History' },
  { thumb: '🌿', title: 'Songlines: Aboriginal Navigation & Knowledge Systems', meta: 'YouTube · 32 min · Aboriginal Australia' },
  { thumb: '📚', title: 'Timbuktu & African Intellectual Tradition', meta: 'Zoom Recording · 1h 15min · Dr. Fatima Sissoko' },
];

// Lesson plans built from the 3 study PDFs
const lessons = [
  {
    icon: '📚',
    image: '/images/ancient_civilizations_web_1280x720.webp',
    imageAlt: 'Ancient Civilizations study packet thumbnail',
    type: 'From: Ancient Civilizations Study Packet',
    title: 'Ancient Civilizations Study Packet',
    meta: 'Grades 6–12 · Packet-aligned lesson',
    objectives: [
      'Mesopotamia: irrigation, writing, city-states, law codes, and the risks of open geography',
      'Ancient Egypt: Nile agriculture, centralized government, and the stability created by natural barriers',
      'Sea Peoples & Collapse: migrations, invasions, trade breakdowns, and environmental stress around 1200 BCE',
      'Rise of New Civilizations: Phoenicians, Neo-Assyrians, Neo-Babylonians, Greeks, Persians, and Romans',
      'Classical Greece, Persia, Rome, and Alexander the Great as key legacy units in the packet',
    ],
    keyTopics: 'Mesopotamia · Ancient Egypt · Sea Peoples · Late Bronze Age Collapse · Classical Greece · Persia · Rome · Alexander the Great',
    concepts: ['Civilization', 'Empire', 'Democracy', 'Collapse', 'Cultural Diffusion'],
  },
  {
    icon: '🌎',
    image: '/images/melanatedpeopleofnorth.png',
    imageAlt: 'Melanated Peoples of North America lesson thumbnail',
    type: 'From: Melanated Peoples of North America',
    title: 'Indigenous North America: Cities, Knowledge & Survival',
    meta: 'Grades 6–12 · 3 class periods',
    objectives: [
      'Describe the engineering and governance of Cahokia — one of North America\'s largest pre-contact cities',
      'Identify how Indigenous nations used astronomy, trade networks, and agriculture',
      'Trace the timeline from Watson Brake (3500 BCE) through Mississippian culture to European contact',
      'Analyze how Indigenous peoples have preserved sovereignty and culture despite colonization',
    ],
    keyTopics: 'Mound Builders · Cahokia · Woodhenge · Hopewell Networks · Long-Distance Trade · Colonization & Resilience',
  },
  {
    icon: '⚖️',
    type: 'From: Genocide, Land Grab & Denationalization',
    title: 'Colonialism & Its Consequences in the Americas',
    meta: 'Grades 9–12 · 5-day unit',
    objectives: [
      'Explain the Doctrine of Discovery and how it was used to justify land theft',
      'Analyze the Indian Removal Act (1830) and Trail of Tears as documented genocide',
      'Examine how boarding schools were used as tools of cultural erasure ("Denationalization")',
      'Connect historical policies to modern Indigenous sovereignty and land rights movements',
    ],
    keyTopics: 'Doctrine of Discovery · Taíno & Maya · Encomienda · Indian Removal Act · Boarding Schools · Modern Resistance',
  },
];

const ebooks = [
  {
    id: 'melanated-peoples-ebook',
    cover: '/images/ebook%20image.png',
    title: 'The History of the Melanated Peoples of North America',
    subtitle: 'Ancient Civilizations, Indigenous Nations & Cultural Legacy',
    description: 'A comprehensive journey through the pre-contact civilizations, mound-builder societies, trade networks, and enduring cultural legacies of melanated peoples across North America.',
    tags: ['Indigenous History', 'North America', 'Mound Builders'],
    price: 'Free',
    downloadUrl: '/pdfdata/history_melanated_peoples_north_america.pdf',
    featured: true,
  },
];


export default function Resources() {
  const [activeTab, setActiveTab] = useState('documents');
  const [activeBlog, setActiveBlog] = useState(null);
  const [progress, setProgress] = useState(0);
  const [ebookSearch, setEbookSearch] = useState('');
  const [ebookModal, setEbookModal] = useState(false);
  const [modalForm, setModalForm] = useState({ name: '', email: '' });
  const [modalState, setModalState] = useState('idle'); // idle | submitting | done | error
  const wrapperRef = useRef(null);

  const closeBlog = useCallback(() => {
    setActiveBlog(null);
    // After React re-renders the section, scroll back to #resources
    setTimeout(() => {
      document.getElementById('resources')?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 0);
  }, []);

  // Lock body scroll and handle Escape key when blog is open
  useEffect(() => {
    if (!activeBlog) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') closeBlog(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeBlog, closeBlog]);

  // Close ebook modal on Escape + lock body scroll
  useEffect(() => {
    if (!ebookModal) { document.body.style.overflow = ''; return; }
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setEbookModal(false);
        setModalForm({ name: '', email: '' });
        setModalState('idle');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [ebookModal]);

  // Reading progress bar
  const handleScroll = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setProgress(Math.min(100, Math.round(pct * 100)));
  }, []);

  // If a blog is active, show it
  if (activeBlog) {
    const blog = blogPosts.find(b => b.id === activeBlog);
    if (blog) {
      const BlogComponent = blog.component;
      return (
        <div className="blog-view-wrapper" ref={wrapperRef} onScroll={handleScroll}>
          <div className="blog-progress-bar" style={{ width: `${progress}%` }} />
          <div className="blog-nav-bar">
            <a href="#resources" className="blog-nav-logo" onClick={closeBlog} aria-label="Back to HistoricReflections">
              <img
                src="/images/logoimage.png"
                alt=""
                aria-hidden="true"
                className="blog-nav-logo-mark"
              />
              <span className="blog-nav-logo-text">Historic<span>Reflections</span></span>
            </a>
            <button
              className="blog-close-btn"
              onClick={closeBlog}
              aria-label="Close article and return to resources"
            >
              ← Back to Resources
            </button>
          </div>
          <BlogComponent />
        </div>
      );
    }
  }

  function closeEbookModal() {
    setEbookModal(false);
    setModalForm({ name: '', email: '' });
    setModalState('idle');
  }

  async function handleEbookDownload(e) {
    e.preventDefault();
    setModalState('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Free eBook Request — Historic Reflections',
          from_name: 'Historic Reflections Website',
          name: modalForm.name,
          email: modalForm.email,
          message: `${modalForm.name} requested the free eBook download.\n\nSend follow-up to: ${modalForm.email}`,
          replyto: modalForm.email,
        }),
      });
      const data = await res.json();
      setModalState(data.success ? 'done' : 'error');
    } catch {
      setModalState('error');
    }
  }

  const filteredEbooks = ebooks.filter(book => {
    const q = ebookSearch.toLowerCase();
    return !q ||
      book.title.toLowerCase().includes(q) ||
      book.subtitle.toLowerCase().includes(q) ||
      book.description.toLowerCase().includes(q) ||
      book.tags.some(t => t.toLowerCase().includes(q));
  });

  const tabs = [
    { key: 'documents', label: '📚 Study Resources' },
    { key: 'videos', label: '🎬 Video Library' },
    { key: 'lessons', label: '🏫 Lesson Plans' },
    { key: 'ebooks', label: '📖 eBooks' },
  ];

  return (
    <section id="resources">
      <div className="resources-header">
        <span className="section-label">The Archive</span>
        <h2 className="section-title">Documents, Media & Learning</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>Explore comprehensive learning resources, primary sources, and video documentaries grounded in historical evidence and scholarship.</p>
      </div>

      <div className="tab-bar">
        {tabs.map(t => (
          <button 
            key={t.key} 
            className={`tab-btn ${activeTab === t.key ? 'active' : ''}`} 
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'documents' && (
        <div className="tab-panel active">
          <div className="doc-grid">
            {blogPosts.map((b, i) => (
              <button
                key={i}
                className="doc-card doc-card-blog"
                onClick={() => setActiveBlog(b.id)}
                aria-label={`Open: ${b.title}`}
              >
                <div className={`doc-thumb-frame${b.image ? '' : ' doc-thumb-frame-fallback'}`}>
                  {b.image ? (
                    <img src={b.image} alt={b.imageAlt} className="doc-thumb-image" />
                  ) : (
                    <div className="doc-thumb-fallback" aria-hidden="true">{b.icon}</div>
                  )}
                </div>
                <div className="doc-type"><span className="doc-type-icon">{b.icon}</span> {b.type}</div>
                <div className="doc-title">{b.title}</div>
                <div className="doc-meta">{b.meta}</div>
                <div className="doc-blog-badge">→ Read Article</div>
              </button>
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

      {activeTab === 'lessons' && (
        <div className="tab-panel active">
          <div className="doc-grid">
            {lessons.map((l, i) => (
              <div className="doc-card lesson-card" key={i}>
                {l.image && (
                  <div className="doc-thumb-frame lesson-thumb-frame">
                    <img src={l.image} alt={l.imageAlt} className="doc-thumb-image" />
                  </div>
                )}
                <div className="doc-type"><span className="doc-type-icon">{l.icon}</span> {l.type}</div>
                <div className="doc-title">{l.title}</div>
                <div className="doc-meta">{l.meta}</div>
                <ul className="lesson-objectives">
                  {l.objectives.map((obj, j) => (
                    <li key={j}>{obj}</li>
                  ))}
                </ul>
                {l.concepts && (
                  <div className="lesson-concepts-wrap">
                    <div className="lesson-concepts-label">Key Concepts Tracker</div>
                    <div className="lesson-concepts">
                      {l.concepts.map((concept) => (
                        <span className="lesson-concept-chip" key={concept}>{concept}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="lesson-topics">{l.keyTopics}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'ebooks' && (
        <div className="tab-panel active">
          <div className="ebook-search-wrap">
            <span className="ebook-search-icon" aria-hidden="true">🔍</span>
            <input
              className="ebook-search-input"
              type="text"
              placeholder="Search titles, topics, keywords…"
              value={ebookSearch}
              onChange={e => setEbookSearch(e.target.value)}
              aria-label="Search eBooks"
            />
            {ebookSearch && (
              <button className="ebook-search-clear" onClick={() => setEbookSearch('')} aria-label="Clear search">✕</button>
            )}
          </div>
          {filteredEbooks.length === 0 && (
            <div className="ebook-empty">No eBooks found matching "{ebookSearch}"</div>
          )}
          <div className="ebook-grid">
            {filteredEbooks.map(book => (
              <div className={`ebook-card${book.featured ? ' ebook-card--featured' : ''}`} key={book.id}>
                <div className="ebook-cover-frame">
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} className="ebook-cover-img" />
                  ) : (
                    <div className="ebook-cover-placeholder">
                      <span className="ebook-placeholder-icon" aria-hidden="true">📖</span>
                      <span className="ebook-placeholder-title">{book.title}</span>
                    </div>
                  )}
                  {book.featured && <span className="ebook-featured-badge">Featured</span>}
                </div>
                <div className="ebook-body">
                  <div className="ebook-tags">
                    {book.tags.map(tag => <span className="ebook-tag" key={tag}>{tag}</span>)}
                  </div>
                  <div className="ebook-title">{book.title}</div>
                  <div className="ebook-subtitle">{book.subtitle}</div>
                  <p className="ebook-desc">{book.description}</p>
                  <div className="ebook-footer">
                    <span className="ebook-price">{book.price}</span>
                    <button
                      className="ebook-cta-btn"
                      onClick={() => setEbookModal(true)}
                      aria-label={`Get free copy: ${book.title}`}
                    >
                      ↓ Get Free Copy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {ebookModal && (
        <div className="ebook-modal-backdrop" onClick={closeEbookModal} role="dialog" aria-modal="true" aria-label="Get free eBook">
          <div className="ebook-modal" onClick={e => e.stopPropagation()}>
            <button className="ebook-modal-close" onClick={closeEbookModal} aria-label="Close">✕</button>
            {modalState !== 'done' ? (
              <>
                <div className="ebook-modal-preview">
                  <img src="/images/ebook%20image.png" alt="eBook cover" className="ebook-modal-cover" />
                </div>
                <div className="ebook-modal-body">
                  <div className="ebook-modal-label">Free Digital Download</div>
                  <h3 className="ebook-modal-title">The History of the Melanated Peoples of North America</h3>
                  <p className="ebook-modal-sub">Enter your details below to access your free copy.</p>
                  <form className="ebook-modal-form" onSubmit={handleEbookDownload}>
                    <input
                      className="ebook-modal-input"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={modalForm.name}
                      onChange={e => setModalForm(f => ({ ...f, name: e.target.value }))}
                    />
                    <input
                      className="ebook-modal-input"
                      type="email"
                      placeholder="Your email address"
                      required
                      value={modalForm.email}
                      onChange={e => setModalForm(f => ({ ...f, email: e.target.value }))}
                    />
                    {modalState === 'error' && (
                      <p className="ebook-modal-error">Something went wrong — please try again.</p>
                    )}
                    <button
                      type="submit"
                      className="ebook-modal-submit"
                      disabled={modalState === 'submitting'}
                    >
                      {modalState === 'submitting' ? 'Please wait…' : '↓ Get Free Download'}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="ebook-modal-success">
                <div className="ebook-modal-success-icon">✓</div>
                <h3 className="ebook-modal-title">Your download is ready!</h3>
                <p className="ebook-modal-sub">Thank you, {modalForm.name}. Click below to save your copy.</p>
                <a
                  href="/pdfdata/history_melanated_peoples_north_america.pdf"
                  className="ebook-modal-submit"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↓ Download PDF Now
                </a>
                <button className="ebook-modal-dismiss" onClick={closeEbookModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
