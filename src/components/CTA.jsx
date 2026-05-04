import { useState } from 'react';
import './CTA.css';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function handleSubmit() {
    if (email && email.includes('@')) {
      setJoined(true);
      setEmail('');
    }
  }

  return (
    <section id="cta-section">
      <h2 className="cta-title">Join the Archive</h2>
      <p className="cta-sub">Be first to know when new civilizations, profiles, and resources are added.</p>
      <div className="email-form">
        <input
          type="email"
          className="email-input"
          placeholder={joined ? 'Thank you for joining the archive.' : 'Your email address'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />
        <button className={`email-submit ${joined ? 'joined' : ''}`} onClick={handleSubmit}>
          {joined ? '✓ Joined' : 'Subscribe'}
        </button>
      </div>
    </section>
  );
}
