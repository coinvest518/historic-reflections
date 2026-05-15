import { useState, useEffect } from 'react';

export default function BlogTOC({ items }) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(() => window.innerWidth < 1001);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 1001);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <nav className="blog-toc">
      <button
        className="blog-toc-toggle"
        onClick={() => setOpen(o => !o)}
        aria-expanded={!mobile || open}
        aria-label="Toggle table of contents"
      >
        <span className="blog-toc-title">Table of Contents</span>
        <span className={`blog-toc-arrow${open ? ' open' : ''}`} aria-hidden="true">▾</span>
      </button>
      {(!mobile || open) && (
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
