import { useState } from 'react';
import './CTA.css';

// 🔑 Same key as Resources.jsx — go to web3forms.com, enter judiahmel@gmail.com, paste key here
const WEB3FORMS_KEY = '8d363fc4-7d0d-4f5b-a52e-9e06fff89702';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit() {
    if (!email || !email.includes('@')) return;
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Archive Subscriber — Historic Reflections',
          from_name: 'Historic Reflections Website',
          email,
          message: `New subscriber joined the Historic Reflections archive.\n\nEmail: ${email}`,
          replyto: email,
        }),
      });
      const data = await res.json();
      if (data.success) { setJoined(true); setEmail(''); }
      else setError(true);
    } catch { setError(true); }
    finally { setSubmitting(false); }
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
        <button className={`email-submit ${joined ? 'joined' : ''}`} onClick={handleSubmit} disabled={submitting}>
          {submitting ? '…' : joined ? '✓ Joined' : 'Subscribe'}
        </button>
      </div>
      {error && <p className="cta-error">Couldn't connect — please try again.</p>}
    </section>
  );
}
