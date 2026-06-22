import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { creatorData } from '../data/creatorData'
import './About.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState('purpose')

  const tabs = [
    { id: 'purpose', label: 'Our Purpose' },
    { id: 'founder', label: 'About the Founder' },
    { id: 'invitation', label: 'Invitation & Closing' }
  ]

  return (
    <>
      <Nav />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <h1 className="about-hero-title">{creatorData.name}</h1>
            <p className="about-hero-founder">by Judiah Moore El</p>
            <p className="about-hero-tagline">{creatorData.tagline}</p>
            <p className="about-hero-quote">{creatorData.welcome.quote}</p>
          </div>
        </section>

        {/* Welcome Intro */}
        <section className="about-intro">
          <div className="container">
            <p className="about-intro-text">{creatorData.welcome.intro}</p>
          </div>
        </section>

        {/* Tab Navigation - Clean 3-tab design */}
        <section className="about-tabs-section">
          <div className="container">
            <div className="tabs-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="about-content-section">
          <div className="container">
            {/* Tab 1: Our Purpose (welcome + purpose + central question) */}
            {activeTab === 'purpose' && (
              <div className="tab-content animate-in">
                <div className="tab-section">
                  <p className="tab-section-intro">{creatorData.purpose.content[0]}</p>
                </div>

                <div className="tab-section highlighted">
                  <p className="emphasis-text">{creatorData.purpose.content[1]}</p>
                  <p>{creatorData.purpose.content[2]}</p>
                </div>

                <div className="tab-section">
                  <h3 className="tab-subheading">{creatorData.centralQuestion.title}</h3>
                  <blockquote className="central-question-block">
                    {creatorData.centralQuestion.content}
                  </blockquote>
                  <p className="tab-section-intro">{creatorData.centralQuestion.description}</p>
                </div>
              </div>
            )}

            {/* Tab 2: About the Founder */}
            {activeTab === 'founder' && (
              <div className="tab-content animate-in">
                <div className="founder-intro">
                  <h3 className="founder-name">Judiah Moore El</h3>
                  <p className="founder-title">Independent Historical Researcher, Writer & Educator</p>
                  <p className="founder-greeting">{creatorData.philosophy.intro}</p>
                </div>

                {creatorData.philosophy.sections.map((section, idx) => (
                  <div key={idx} className="tab-section">
                    <h3 className="tab-subheading">{section.heading}</h3>
                    {section.content.map((para, pIdx) => (
                      <p key={pIdx} className="founder-text">{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Invitation & Closing */}
            {activeTab === 'invitation' && (
              <div className="tab-content animate-in">
                <div className="tab-section">
                  <h3 className="tab-subheading">{creatorData.invitation.title}</h3>
                  <div className="invitation-list">
                    {creatorData.invitation.content.map((item, idx) => (
                      <p key={idx} className="invitation-item">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="tab-section closing-section">
                  <h3 className="tab-subheading">{creatorData.closing.title}</h3>
                  <p className="closing-text">{creatorData.closing.content}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* "Past Policies" Image Statement */}
        <section className="about-image-banner">
          <div className="image-banner-container portrait">
            <img 
              src="/images/past policies.png" 
              alt="Past Policies - Historical Examination" 
              className="image-banner-img"
            />
            <div className="image-banner-overlay">
              <p className="mission-statement-large">{creatorData.closing.missionStatement}</p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="about-expertise">
          <div className="container">
            <h2 className="section-title-centered">Areas of Research & Focus</h2>
            <div className="expertise-grid">
              {creatorData.expertise.map((area, index) => (
                <div key={index} className="expertise-card">
                  <p>{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <h2>Our History. Our Lands. Our Nations. Our Future.</h2>
            <p>Explore the blog, listen to the podcast, and become a researcher of history.</p>
            <div className="cta-buttons">
              <a href="/blog" className="cta-button primary">Read the Blog</a>
              <a href="/podcast" className="cta-button secondary">Listen to Podcast</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}