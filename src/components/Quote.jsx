import './Quote.css';

export default function Quote() {
  return (
    <section id="quote">
      <span className="quote-mark">&ldquo;</span>
      <blockquote className="quote-text">
        Until the lion learns to write, every story will glorify the hunter. We are the lions. And we have learned to write.
      </blockquote>
      <div className="quote-attr">— African Proverb, adapted</div>
    </section>
  );
}
