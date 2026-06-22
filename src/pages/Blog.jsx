import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogData'
import './Blog.css'

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Nav />
      <main className="blog-page">
        {/* Minimal Header - Substack style */}
        <section className="blog-header">
          <div className="blog-header-inner">
            <h1 className="blog-title">Historic Reflections</h1>
            <p className="blog-subtitle">Research, Analysis & Historical Inquiry</p>
            <p className="blog-description">
              Examining the historical record as completely as possible — recovering overlooked voices, 
              and encouraging every reader to investigate the evidence for themselves.
            </p>
            {/* "Past Policies" banner */}
            <div className="blog-brand-banner">
              <img 
                src="/images/past policies.png" 
                alt="Past Policies - Historical Examination" 
                className="blog-brand-img"
              />
            </div>
          </div>
        </section>

        {/* Category Filter - Clean pills */}
        <section className="blog-filter-section">
          <div className="blog-container">
            <div className="filter-pills">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Article List - Substack-style full width */}
        <section className="blog-articles-section">
          <div className="blog-container blog-layout">
            {/* Main content */}
            <div className="blog-main">
              {filteredPosts.length === 0 ? (
                <p className="no-posts">No articles in this category yet.</p>
              ) : (
                filteredPosts.map(post => (
                  <article key={post.id} className="blog-article-item">
                    <div className="article-meta-line">
                      {post.category && (
                        <span className="article-category-tag">{post.category}</span>
                      )}
                      <span className="article-date">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="article-read-time">{post.readTime}</span>
                    </div>
                    <h2 className="article-item-title">{post.title}</h2>
                    <p className="article-item-excerpt">{post.excerpt}</p>
                    <div className="article-item-footer">
                      <span className="article-author">By {post.author}</span>
                      <a href={`#article-${post.id}`} className="article-read-link">Read more →</a>
                    </div>
                    {post.image && (
                      <div className="article-item-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}
                  </article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget about-widget">
                <h3 className="widget-title">About</h3>
                <p className="widget-text">
                  Independent historical research, analysis, and education. Exploring 
                  Indigenous history, sovereignty, the African Diaspora, and the 
                  historical record.
                </p>
              </div>

              <div className="sidebar-widget mission-widget">
                <img 
                  src="/images/past policies.png" 
                  alt="Past Policies - Historical Examination" 
                  className="sidebar-brand-img"
                />
                <p className="mission-statement-sidebar">
                  Our History. Our Lands. Our Nations. Our Future.
                </p>
                <p className="mission-statement-sub">We Are Still Here.</p>
              </div>

              <div className="sidebar-widget newsletter-widget">
                <h3 className="widget-title">Stay Connected</h3>
                <p className="widget-text">
                  Get new articles and research updates delivered to your inbox.
                </p>
                <form className="sidebar-newsletter" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="blog-closing">
          <div className="blog-container">
            <p className="blog-closing-text">
              Every generation inherits a version of history. Every generation also has 
              a responsibility to examine that inheritance.
            </p>
            <div className="blog-closing-links">
              <a href="/podcast" className="closing-link">Listen to the Podcast →</a>
              <a href="/about" className="closing-link">About the Founder →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}