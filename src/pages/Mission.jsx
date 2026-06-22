import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './Mission.css'

export default function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const evidenceItems = [
    "The destruction of Indigenous cities, villages, ceremonial centers, and sacred sites.",
    "The burning, confiscation, or loss of Indigenous books, codices, manuscripts, and historical records.",
    "The seizure of Indigenous lands through conquest, colonization, treaties, and legal doctrines.",
    "Laws and policies that restricted Indigenous languages, religions, ceremonies, and systems of government.",
    "Boarding and residential schools established to assimilate Indigenous children and suppress their cultures.",
    "The renaming of Indigenous peoples, nations, rivers, mountains, and places.",
    "The omission or underrepresentation of Indigenous voices, achievements, and historical perspectives in textbooks, museums, and public memory.",
    "Historical maps, treaties, court decisions, census records, military records, and government documents that reveal how Indigenous nations were affected by changing legal and political systems."
  ]

  return (
    <>
      <Nav />
      <main className="mission-page">
        {/* Hero Section */}
        <section className="mission-hero">
          <div className="mission-hero-inner">
            <h1 className="mission-hero-title">Historic Reflections</h1>
            <p className="mission-hero-sub">Mission Statement</p>
            <p className="mission-hero-quote">
              "Question the Narrative. Examine the Evidence. Follow the Truth."
            </p>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="mission-opening">
          <div className="mission-container">
            <p className="mission-opening-text">
              At Historic Reflections, we believe history should be examined through evidence, 
              intellectual honesty, and independent inquiry. Throughout history, powerful institutions 
              have shaped how the past has been recorded, preserved, and taught. Our mission is to 
              investigate the historical record by examining evidence of conquest, dispossession, 
              cultural destruction, suppression, and historical erasure.
            </p>
          </div>
        </section>

        {/* Evidence List */}
        <section className="mission-evidence">
          <div className="mission-container">
            <h2 className="section-heading">That evidence includes, but is not limited to:</h2>
            <div className="evidence-list">
              {evidenceItems.map((item, idx) => (
                <div key={idx} className="evidence-item">
                  <span className="evidence-bullet">•</span>
                  <p className="evidence-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Purpose Statement */}
        <section className="mission-purpose">
          <div className="mission-container">
            <div className="purpose-card">
              <p className="purpose-text">
                Historic Reflections encourages readers to examine primary sources, compare competing 
                historical interpretations, distinguish evidence from opinion, and think critically about 
                how history has been constructed and transmitted across generations.
              </p>
              <p className="purpose-text">
                Our purpose is not to tell people what to believe, but to preserve knowledge, recover 
                overlooked histories, encourage respectful dialogue, and inspire every reader to 
                investigate the historical record for themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Tagline Banner */}
        <section className="mission-tagline-banner">
          <div className="mission-container">
            <div className="tagline-block">
              <p className="tagline-line">Question the Narrative.</p>
              <p className="tagline-line">Examine the Evidence.</p>
              <p className="tagline-line highlight">Follow the Truth.</p>
            </div>
          </div>
        </section>

        {/* "We Are Still Here" Image */}
        <section className="mission-image-banner">
          <div className="image-banner-container">
            <img 
              src="/images/we are stil here.png" 
              alt="We Are Still Here - Our History. Our Lands. Our Nations. Our Future." 
              className="image-banner-img"
            />
            <div className="image-banner-overlay">
              <div className="overlay-text">
                <p className="overlay-line">Our History. Our Lands.</p>
                <p className="overlay-line">Our Nations. Our Future.</p>
                <p className="overlay-line strong">We Are Still Here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mission-cta">
          <div className="mission-container">
            <p className="cta-invite">Begin your own investigation. Read the sources, examine the evidence, and follow the truth wherever it leads.</p>
            <div className="cta-buttons">
              <a href="/about" className="cta-button primary">About the Founder</a>
              <a href="/blog" className="cta-button secondary">Read the Blog</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}