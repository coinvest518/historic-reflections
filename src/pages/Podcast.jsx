import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { podcastData } from '../data/podcastData'
import './Podcast.css'

export default function Podcast() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredEpisode = podcastData.episodes.find(ep => ep.featured)
  const otherEpisodes = podcastData.episodes.filter(ep => !ep.featured)

  return (
    <>
      <Nav />
      <main className="podcast-page">
        {/* Hero Section - Bold, striking */}
        <section className="podcast-hero">
          <div className="podcast-hero-inner">
            <div className="podcast-hero-icon">🎙️</div>
            <h1 className="podcast-hero-title">Historic Reflections<br /><span className="podcast-hero-sub">Podcast</span></h1>
            <p className="podcast-hero-tagline">{podcastData.description}</p>
            <div className="podcast-hero-actions">
              <button className="podcast-play-btn">▶ Listen to Latest Episode</button>
            </div>
          </div>
        </section>

        {/* About the Podcast */}
        <section className="podcast-about">
          <div className="podcast-container">
            <div className="podcast-about-grid">
              <div className="podcast-about-text">
                <h2 className="section-heading">About the Podcast</h2>
                <p className="podcast-about-intro">{podcastData.intro}</p>
                <div className="podcast-host-bio">
                  <p><strong>Hosted by Sista Judiah</strong> — independent historical researcher, writer, and educator dedicated to examining the historical record, recovering overlooked voices, and challenging inherited narratives.</p>
                </div>
              </div>
              <div className="podcast-about-image">
                <img 
                  src="/images/we are stil here.png" 
                  alt="We Are Still Here - Historic Reflections" 
                  className="podcast-brand-img"
                />
                <p className="podcast-brand-tagline">Our History. Our Lands. Our Nations. Our Future.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Episode - Featured */}
        {featuredEpisode && (
          <section className="podcast-featured">
            <div className="podcast-container">
              <div className="section-label-bar">
                <span className="section-label-text">Latest Episode</span>
              </div>
              <div className="featured-episode">
                <div className="featured-episode-badge">New</div>
                <h2 className="featured-episode-title">{featuredEpisode.title}</h2>
                <div className="featured-episode-meta">
                  <span className="feat-date">
                    {new Date(featuredEpisode.date).toLocaleDateString('en-US', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </span>
                  <span className="feat-duration">{featuredEpisode.duration}</span>
                </div>
                <p className="featured-episode-desc">{featuredEpisode.description}</p>
                <div className="featured-episode-topics">
                  {featuredEpisode.topics.map((topic, idx) => (
                    <span key={idx} className="topic-pill">{topic}</span>
                  ))}
                </div>
                <button className="listen-button">▶ Listen Now</button>
              </div>
            </div>
          </section>
        )}

        {/* Episode Archive */}
        <section className="podcast-archive">
          <div className="podcast-container">
            <div className="section-label-bar">
              <span className="section-label-text">Episode Archive</span>
            </div>
            <div className="episodes-list">
              {otherEpisodes.map((episode, idx) => (
                <div key={episode.id} className={`episode-row ${idx === 0 ? 'first' : ''}`}>
                  <div className="episode-row-left">
                    <span className="episode-number">Ep. {episode.id}</span>
                    <div className="episode-row-info">
                      <h3 className="episode-row-title">{episode.title}</h3>
                      <p className="episode-row-desc">{episode.description}</p>
                      <div className="episode-row-meta">
                        <span className="ep-row-date">
                          {new Date(episode.date).toLocaleDateString('en-US', { 
                            month: 'short', day: 'numeric', year: 'numeric' 
                          })}
                        </span>
                        <span className="ep-row-duration">{episode.duration}</span>
                        <div className="ep-row-topics">
                          {episode.topics.map((topic, tIdx) => (
                            <span key={tIdx} className="mini-topic">{topic}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="episode-play-btn" aria-label={`Play episode ${episode.id}`}>▶</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="podcast-subscribe">
          <div className="podcast-container">
            <h2 className="section-heading centered">Never Miss an Episode</h2>
            <p className="subscribe-intro">New episodes exploring history, evidence, and overlooked narratives. Subscribe on your favorite platform.</p>
            <div className="subscribe-platforms">
              <button className="platform-btn apple">Apple Podcasts</button>
              <button className="platform-btn spotify">Spotify</button>
              <button className="platform-btn youtube">YouTube</button>
              <button className="platform-btn rss">RSS Feed</button>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="podcast-closing">
          <div className="podcast-container">
            <p className="podcast-closing-text">
              "History does not change. Our understanding of history does."
            </p>
            <p className="podcast-closing-author">— Sista Judiah, Historic Reflections</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}