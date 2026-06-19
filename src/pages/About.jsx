import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { creatorData } from '../data/creatorData'
import './About.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About {creatorData.name}</h1>
            <p className="about-tagline">{creatorData.tagline}</p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="about-profile">
          <div className="container">
            <div className="profile-grid">
              <div className="profile-image-wrapper">
                <div className="profile-placeholder">
                  <span>📖</span>
                </div>
                <p className="profile-caption">Historian & Cultural Researcher</p>
              </div>

              <div className="profile-info">
                <h2>{creatorData.name}</h2>
                <p className="profile-title">{creatorData.title}</p>

                <div className="credentials">
                  <p><strong>Credentials:</strong></p>
                  <ul>
                    <li>{creatorData.credentials.degree}</li>
                    <li>{creatorData.credentials.university}</li>
                    <li>Specialization: {creatorData.credentials.specialization}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Narrative */}
        <section className="about-bio">
          <div className="container">
            <h2>About This Work</h2>
            <div className="bio-content">
              {creatorData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="about-expertise">
          <div className="container">
            <h2>Areas of Expertise</h2>
            <div className="expertise-grid">
              {creatorData.expertise.map((area, index) => (
                <div key={index} className="expertise-card">
                  <p>{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="about-highlights">
          <div className="container">
            <h2>Impact & Reach</h2>
            <div className="highlights-grid">
              {creatorData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-stat">{highlight.stat}</div>
                  <div className="highlight-label">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <h2>Support This Work</h2>
            <p>Join us in reclaiming and celebrating the true history of humanity. Every learner, educator, and supporter makes a difference.</p>
            <a href="/#cta-section" className="cta-button">Get Involved</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
