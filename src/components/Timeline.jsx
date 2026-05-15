import './Timeline.css';

const timelineData = [
  { date: '3500 BCE', event: 'Watson Brake ceremonial earthworks show organized engineering in North America', region: 'Louisiana', top: true },
  { date: '3100 BCE', event: 'Ancient Egypt consolidates Nile-centered rule and long-term agricultural stability', region: 'Egypt', top: false },
  { date: '1700 BCE', event: 'Poverty Point expands trade and mound-building culture across the lower Mississippi', region: 'North America', top: true },
  { date: '1200 BCE', event: 'Sea Peoples, migration, and trade breakdowns contribute to the Late Bronze Age Collapse', region: 'Mediterranean', top: false },
  { date: '100 BCE–400 CE', event: 'Hopewell ceremonial networks connect regions through exchange, earthworks, and ritual sites', region: 'Eastern Woodlands', top: true },
  { date: '550 BCE–330 BCE', event: 'Persia rises as a major imperial power while Greece develops classical political and philosophical traditions', region: 'Persia & Greece', top: false },
  { date: '323 BCE', event: 'Alexander the Great dies after spreading Greek influence across Egypt, Persia, and parts of Asia', region: 'Mediterranean', top: true },
  { date: '27 BCE–476 CE', event: 'Rome leaves a major legacy in law, engineering, and imperial governance', region: 'Rome', top: false },
  { date: '800–1400 CE', event: 'Mississippian culture flourishes with temple mounds, ceremonial centers, and regional political systems', region: 'North America', top: true },
  { date: '1050–1350 CE', event: 'Cahokia reaches peak development with Monk’s Mound, plazas, and astronomical alignments', region: 'Illinois', top: false },
  { date: '1492', event: 'European colonization begins in the Caribbean, reshaping Indigenous life across the Americas', region: 'Caribbean', top: true },
  { date: '1500s', event: 'Conquest and forced labor systems expand through the Caribbean, Central America, and South America', region: 'Americas', top: false },
  { date: '1600s–1700s', event: 'Colonial settlement and land seizure intensify across Indigenous territories', region: 'Americas', top: true },
  { date: '1830', event: 'Indian Removal Act accelerates dispossession and forced migration including the Trail of Tears', region: 'United States', top: false },
  { date: '1800s–1900s', event: 'Boarding and residential schools impose denationalization through language and identity erasure', region: 'North America', top: true },
  { date: 'Modern Era', event: 'Indigenous nations continue sovereignty, treaty defense, language revitalization, and cultural renewal', region: 'Americas', top: false },
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
        <h2 className="section-title">Timeline Drawn From The Archive</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>
          This sequence now follows the actual study packets: Ancient Egypt, Bronze Age collapse, Mound Builders, Cahokia, colonization, forced removal, boarding schools, and modern Indigenous survival.
        </p>
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
