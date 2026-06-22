import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">HistoricReflections</div>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
      </ul>
      <div className="footer-copy">© 2026 Historic Reflections · Where History Is Examined, Not Assumed.</div>
    </footer>
  );
}