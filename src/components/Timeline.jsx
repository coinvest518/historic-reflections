import './Timeline.css';

const timelineData = [
  { date: '200,000 BCE', event: 'Homo sapiens emerge in East Africa', region: 'East Africa', top: true },
  { date: '75,000 BCE', event: 'Blombos Cave art — first known human symbols', region: 'South Africa', top: false },
  { date: '50,000 BCE', event: 'Aboriginal peoples arrive in Australia', region: 'Australia', top: true },
  { date: '3100 BCE', event: 'Unification of Upper & Lower Kemet', region: 'Egypt', top: false },
  { date: '2500 BCE', event: 'Kingdom of Kush rises in Nubia', region: 'Sudan', top: true },
  { date: '1500 BCE', event: 'Queen Hatshepsut rules as Pharaoh', region: 'Egypt', top: false },
  { date: '1200 BCE', event: 'Bronze Age Collapse — great civilizations fall simultaneously', region: 'Mediterranean', top: true },
  { date: '600 BCE', event: 'Nok civilization flourishes in West Africa', region: 'Nigeria', top: false },
  { date: '550 BCE', event: 'Cyrus the Great founds Achaemenid Persian Empire', region: 'Persia', top: true },
  { date: '500 BCE', event: 'Classical Athens — democracy & philosophy flourish', region: 'Greece', top: false },
  { date: '323 BCE', event: 'Death of Alexander; Hellenistic era begins', region: 'Mediterranean', top: true },
  { date: '300 CE', event: 'Kingdom of Mali founded', region: 'Mali', top: false },
  { date: '476 CE', event: 'Fall of Western Roman Empire', region: 'Rome', top: true },
  { date: '750 CE', event: 'Timbuktu established as center of learning', region: 'West Africa', top: false },
  { date: '1000 CE', event: 'Maori arrive in New Zealand (Aotearoa)', region: 'Pacific', top: false },
  { date: '1325 CE', event: 'Aztec capital Tenochtitlan founded', region: 'Mexico', top: true },
  { date: '1498 CE', event: 'Queen Nzinga Mbande born in Angola', region: 'Angola', top: false },
  { date: '1680 CE', event: 'Pueblo Revolt — Indigenous uprising in North America', region: 'Americas', top: true },
  { date: '1900 CE', event: 'Yaa Asantewaa leads War of the Golden Stool', region: 'Ghana', top: false },
  { date: '1948 CE', event: 'Universal Declaration of Human Rights', region: 'Global', top: true },
  { date: '2007 CE', event: 'UN Declaration on Rights of Indigenous Peoples', region: 'Global', top: false },
];

function TimelineItem({ item }) {
  return (
    <div className="t-item">
      {item.top
        ? <div className="t-top"><div className="t-date">{item.date}</div><div className="t-event">{item.event}</div><span className="t-region">{item.region}</span></div>
        : <div className="t-top"></div>}
      <div className="t-dot"></div>
      {!item.top
        ? <div className="t-bottom"><div className="t-date">{item.date}</div><div className="t-event">{item.event}</div><span className="t-region">{item.region}</span></div>
        : <div className="t-bottom"></div>}
    </div>
  );
}

export default function Timeline() {
  const doubled = [...timelineData, ...timelineData];
  return (
    <section id="timeline">
      <div className="timeline-header">
        <span className="section-label">Through Time</span>
        <h2 className="section-title">200,000 Years of Human Story</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>Scroll through history — from the earliest Homo sapiens in Africa to the modern reclamation of Indigenous rights.</p>
      </div>
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {doubled.map((item, i) => <TimelineItem key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
