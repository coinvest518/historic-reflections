import { useEffect, useRef } from 'react';
import '../Blog.css';
import BlogTOC from './BlogTOC';

const TOC_ITEMS = [
  { href: '#overview', label: 'Overview' },
  { href: '#eastern', label: 'Eastern Woodlands Peoples' },
  { href: '#plains', label: 'Great Plains Peoples' },
  { href: '#southwest', label: 'Southwestern Peoples' },
  { href: '#pacific', label: 'Pacific Northwest & Coast' },
  { href: '#achievements', label: 'Achievements & Governance' },
  { href: '#persistence', label: 'Persistence & Presence' },
];

export default function MelanatedPeoplesBlog() {
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = document.querySelector('.blog-view-wrapper');
    if (wrapper) wrapper.scrollTop = 0;
  }, []);

  return (
    <article id="blog-melanated-peoples" className="blog-post">
      <header className="blog-header">
        <span className="blog-label">Historical Record</span>
        <h1 className="blog-title">The Melanated Peoples of North America</h1>
        <p className="blog-subtitle">
          The original nations and peoples of North America — before colonization, before erasure. These sovereign civilizations built cities, governed themselves, and maintained spiritual and cultural systems of extraordinary sophistication.
        </p>
        <div className="blog-meta">
          <span className="meta-item">🌎 Historical Record</span>
          <span className="meta-item">📅 Updated May 2026</span>
          <span className="meta-item">⏱ 20–25 min read</span>
        </div>
      </header>

      <BlogTOC items={TOC_ITEMS} />

      <div className="blog-content" ref={contentRef}>
        <section id="overview" className="blog-section">
          <h2>Overview: The First Peoples of North America</h2>
          <p>
            Long before Christopher Columbus, before European colonization, before the United States and Canada existed, the continents of North America were home to hundreds of sovereign nations and peoples. These civilizations had:
          </p>
          <ul>
            <li><strong>Organized governance systems</strong> — from confederacies to chiefdoms to democracies</li>
            <li><strong>Agricultural innovations</strong> — the cultivation of maize, beans, and squash sustained millions</li>
            <li><strong>Trade networks</strong> — spanning from the Atlantic to the Pacific, the Arctic to the Gulf</li>
            <li><strong>Architectural achievements</strong> — mounds, pueblos, longhouses, and more</li>
            <li><strong>Spiritual and cultural systems</strong> — rich traditions, art, music, and ceremonies that persisted through genocide</li>
            <li><strong>Language families</strong> — over 1,000 distinct languages spoken before colonization</li>
          </ul>
          <p>
            The arrival of Europeans in 1492 did not discover "empty land." It initiated a process of systematic colonization, genocide, displacement, and cultural erasure that continues to reverberate today.
          </p>
        </section>

        <section id="eastern" className="blog-section">
          <h2>Eastern Woodlands Peoples</h2>
          <p>
            The forests of the eastern half of North America were home to some of the continent's most organized and populous civilizations.
          </p>

          <h3>Haudenosaunee Confederacy (Iroquois)</h3>
          <p>
            The Haudenosaunee — comprising the Mohawk, Oneida, Onondaga, Cayuga, and Seneca nations — formed one of the most sophisticated political systems in the pre-Columbian world.
          </p>
          <ul>
            <li><strong>The Great Law of Peace:</strong> A constitution governing the confederacy, predating the U.S. Constitution. It featured separation of powers, checks and balances, and democratic processes.</li>
            <li><strong>Women's Council:</strong> Women held significant political power — they could remove leaders who failed their responsibilities.</li>
            <li><strong>Population:</strong> Estimated at 50,000–100,000 people at peak.</li>
          </ul>

          <h3>Muscogee (Creek) Confederacy</h3>
          <p>
            A powerful southeastern confederacy of towns and villages with a sophisticated system of law enforcement (the Lighthorse Guard).
          </p>

          <h3>Cherokee Nation</h3>
          <p>
            The Cherokee held vast territories in the southeastern mountains and developed a written syllabary in the 19th century (Sequoyah's syllabary) — demonstrating sophisticated literacy without prior European contact.
          </p>

          <h3>Wampanoag</h3>
          <p>
            Based in modern Massachusetts, the Wampanoag maintained extensive trade networks and diplomatic relationships. Despite popular mythology, their interaction with Pilgrims in 1620 was complex and later led to conflict.
          </p>
        </section>

        <section id="plains" className="blog-section">
          <h2>Great Plains Peoples</h2>
          <p>
            The vast grasslands of the Great Plains supported both nomadic buffalo-hunting cultures and settled agricultural societies.
          </p>

          <h3>Blackfoot Confederacy</h3>
          <p>
            The Blackfoot (Siksika) peoples of the northern plains were master hunters and warriors with a sophisticated system of bands, clans, and governance.
          </p>

          <h3>Lakota/Dakota (Sioux)</h3>
          <p>
            One of the largest and most powerful nations of the plains, the Lakota developed horse-based warfare and maintained a complex social structure.
          </p>

          <h3>Comanche</h3>
          <p>
            Masters of the southern plains, the Comanche became renowned warriors and formed a powerful empire in the 18th–19th centuries.
          </p>
        </section>

        <section id="southwest" className="blog-section">
          <h2>Southwestern Peoples</h2>
          <p>
            The desert Southwest was home to ancient civilizations and their descendants, featuring remarkable architecture and agricultural innovation.
          </p>

          <h3>Ancestral Puebloans (Anasazi)</h3>
          <p>
            Built sophisticated multi-story stone dwellings (pueblos) and developed an extensive road network and trade system throughout the Southwest. Their descendants are the modern Pueblo peoples.
          </p>

          <h3>Hopi</h3>
          <p>
            Known for their agricultural innovation (dry farming techniques in arid environments), weaving, katsina ceremonies, and philosophy emphasizing harmony with nature.
          </p>

          <h3>Navajo (Diné)</h3>
          <p>
            The largest Indigenous nation by population in modern North America, the Navajo developed a rich culture of weaving, silverwork, and spiritual traditions (Navajo philosophy and cosmology remain central to their identity).
          </p>

          <h3>Apache</h3>
          <p>
            Apache peoples adapted to life in the Southwest and became renowned warriors. Leaders like Geronimo and Victorio organized resistance to American expansion.
          </p>
        </section>

        <section id="pacific" className="blog-section">
          <h2>Pacific Northwest & Pacific Coast Peoples</h2>
          <p>
            The rich salmon runs and abundant sea resources of the Pacific coast supported some of the densest pre-Columbian populations and most culturally sophisticated societies north of Mesoamerica.
          </p>

          <h3>Haida</h3>
          <p>
            The Haida of the Pacific Northwest (modern British Columbia and Alaska) were renowned artists, sailors, and merchants. They created magnificent totem poles and cedar art and had a sophisticated trade economy.
          </p>

          <h3>Tlingit, Kwakwaka'wakw, and Other Northwest Coast Peoples</h3>
          <p>
            These nations developed elaborate potlatch ceremonies (gift-giving feasts establishing social hierarchy), intricate wood carving, and advanced maritime technology.
          </p>

          <h3>Lummi, Salish, and Coastal Peoples</h3>
          <p>
            Peoples of the Salish Sea and Pacific coast developed sophisticated fishing techniques, boat building, and trade networks.
          </p>
        </section>

        <section id="achievements" className="blog-section">
          <h2>Achievements & Governance</h2>
          <p>
            Indigenous peoples of North America achieved remarkable things that challenge the narrative of "primitive" or "uncivilized" peoples.
          </p>

          <h3>Agriculture</h3>
          <p>
            <strong>Domestication of corn (maize), beans, and squash</strong> — called the "Three Sisters" — sustained millions and transformed North American societies. Corn agriculture was so productive that it freed people to specialize in other roles: governance, art, warfare, and trade.
          </p>

          <h3>Architecture</h3>
          <ul>
            <li><strong>Mound cities:</strong> Cahokia, near modern St. Louis, may have been larger than London in the year 1200.</li>
            <li><strong>Pueblo architecture:</strong> Multi-story stone structures engineered for efficient climate control.</li>
            <li><strong>Longhouses:</strong> Large communal dwellings in the Eastern Woodlands and Pacific Northwest, housing extended families.</li>
            <li><strong>Earthworks:</strong> Geometric earthen mounds and enclosures across the eastern half of North America.</li>
          </ul>

          <h3>Governance & Law</h3>
          <ul>
            <li><strong>Confederacies:</strong> Complex political systems combining sovereignty with collective decision-making.</li>
            <li><strong>Women's power:</strong> In many societies, women held significant political authority; some were matrilineal.</li>
            <li><strong>Diplomacy:</strong> Treaties, trade agreements, and peace ceremonies regulated relationships between nations.</li>
          </ul>

          <h3>Trade</h3>
          <p>
            Trade networks spanned the continent — obsidian from the West, copper from the Great Lakes, shells from the coasts, and corn from the agricultural heartland circulated across vast distances.
          </p>

          <h3>Art & Culture</h3>
          <p>
            Sophisticated traditions of pottery, textiles, carving, painting, music, and ceremony expressed spiritual beliefs, historical narratives, and aesthetic values.
          </p>
        </section>

        <section id="persistence" className="blog-section">
          <h2>Persistence & Presence</h2>
          <p>
            <em>We are still here. We are still Indigenous. We are North America.</em>
          </p>
          <p>
            Despite centuries of genocide, forced displacement (the Trail of Tears, the Indian Removal Act, the reservation system), and cultural suppression, Indigenous peoples persist.
          </p>
          <ul>
            <li><strong>587+ federally recognized tribes</strong> in the United States; First Nations in Canada.</li>
            <li><strong>Over 300 languages</strong> still spoken (though many are endangered).</li>
            <li><strong>Resurgence:</strong> Indigenous youth are reclaiming languages, traditions, and political power.</li>
            <li><strong>Land Back movements:</strong> Reclamation of treaty rights and sacred lands.</li>
            <li><strong>Political representation:</strong> Indigenous politicians, judges, and activists reshaping policy and law.</li>
          </ul>
          <p>
            The history of the original peoples of North America is not a past-tense history of loss and vanished civilizations. It is an ongoing story of resilience, resistance, and reclamation.
          </p>
        </section>
      </div>

      <footer className="blog-footer">
        <button onClick={() => window.history.back()} className="blog-back-btn">← Back to Resources</button>
      </footer>
    </article>
  );
}
