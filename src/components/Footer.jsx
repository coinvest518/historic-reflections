import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">HistoricReflections</div>
      <ul className="footer-links">
        <li><a href="#mission">Mission</a></li>
        <li><a href="#civilizations">Civilizations</a></li>
        <li><a href="#north-america">Nations</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#resources">Archive</a></li>
        <li><a href="#cta-section">Join</a></li>
      </ul>
      <div className="footer-copy">© 2026 HistoricReflections · Ancient Histories Reclaimed</div>
    </footer>
  );
}
