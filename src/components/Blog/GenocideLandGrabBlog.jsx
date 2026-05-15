import { useEffect, useRef } from 'react';
import '../Blog.css';
import BlogTOC from './BlogTOC';

const TOC_ITEMS = [
  { href: '#early-contact', label: 'Early Contact & "Discovery"' },
  { href: '#conquest', label: 'Conquest & Enslavement' },
  { href: '#disease', label: 'Disease as Weapon' },
  { href: '#removal', label: 'Forced Removal & Reservation System' },
  { href: '#cultural', label: 'Cultural Genocide & Assimilation' },
  { href: '#land-theft', label: 'Systematic Land Theft' },
  { href: '#ongoing', label: 'Ongoing Colonialism' },
  { href: '#resistance', label: 'Resistance & Reclamation' },
];

export default function GenocideLandGrabBlog() {
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = document.querySelector('.blog-view-wrapper');
    if (wrapper) wrapper.scrollTop = 0;
  }, []);

  return (
    <article id="blog-genocide-landgrab" className="blog-post">
      <header className="blog-header">
        <span className="blog-label">Historical Document</span>
        <h1 className="blog-title">Genocide, Land Grab & Denationalization in the Americas</h1>
        <p className="blog-subtitle">
          The systematic destruction of Indigenous civilizations was not accidental — it was policy. From the moment Europeans arrived, the goal was territorial conquest, resource extraction, and the erasure of Indigenous peoples as political entities.
        </p>
        <div className="blog-meta">
          <span className="meta-item">⚖️ Historical Analysis</span>
          <span className="meta-item">📅 Updated May 2026</span>
          <span className="meta-item">⏱ 25–30 min read</span>
          <span className="blog-warning">⚠️ This content discusses genocide, violence, and trauma.</span>
        </div>
      </header>

      <BlogTOC items={TOC_ITEMS} />

      <div className="blog-content" ref={contentRef}>
        <section id="early-contact" className="blog-section">
          <h2>Early Contact & "Discovery" (1492 Onward)</h2>
          <p>
            When Columbus reached the Caribbean in 1492, he encountered millions of Indigenous people living in organized societies. His journals reveal immediate plans for exploitation: "They ought to make good and skilled servants, for they appear to have very acute intelligence" — code for enslavement.
          </p>
          <p>
            Within decades, the Indigenous populations of the Caribbean were decimated.
          </p>
          <h3>Hispaniola (Haiti & Dominican Republic)</h3>
          <ul>
            <li><strong>Pre-1492:</strong> ~1 million Taíno people</li>
            <li><strong>1510:</strong> ~60,000 Taíno remained</li>
            <li><strong>1550:</strong> The Taíno were effectively extinct as a distinct population — through slavery, starvation, disease, and forced assimilation</li>
          </ul>
          <p>
            This was not an accident. Bartolomé de las Casas documented the systematic murder of enslaved Indigenous peoples. His accounts describe encomienda (a system of forced labor disguised as Christian conversion) and the deliberate killing of those who resisted.
          </p>
        </section>

        <section id="conquest" className="blog-section">
          <h2>Conquest & Enslavement (1500s–1700s)</h2>
          <p>
            Across the Americas, European powers — Spain, Portugal, France, England — conquered territory and enslaved Indigenous peoples.
          </p>
          <h3>Spanish Conquest of Mexico & South America</h3>
          <p>
            Hernán Cortés conquered the Aztec Empire (1519–1521) with only 600 men. How? Partly through alliances with subject peoples resentful of Aztec rule, partly through disease, but crucially, through psychological warfare and the Aztec's own religious beliefs about foreigners.
          </p>
          <ul>
            <li><strong>Aztec Empire population before conquest:</strong> ~25 million</li>
            <li><strong>Aztec population by 1600:</strong> ~1 million (a 96% decline)</li>
          </ul>
          <p>
            Francisco Pizarro conquered the Inca Empire (1532–1572). Similar patterns: initial military advantage through firearms, horses, and psychological shock; later, systemic enslavement and exploitation.
          </p>

          <h3>Encomienda System</h3>
          <p>
            "Encomenderos" (Spanish landowners) were granted "encomiendas" — Indigenous communities and their labor. In exchange, they were supposedly responsible for Christian conversion and protection. In reality:
          </p>
          <ul>
            <li>Indigenous people were forced into labor (mining, agriculture, construction)</li>
            <li>They were worked to death</li>
            <li>Those who resisted were killed or enslaved</li>
            <li>The encomenderos were granted virtual absolute power over the Indigenous people under their control</li>
          </ul>
          <p>
            The encomienda system continued for centuries and was the primary mechanism of Indigenous genocide and cultural destruction in Spanish America.
          </p>
        </section>

        <section id="disease" className="blog-section">
          <h2>Disease as Weapon (Intended or Not)</h2>
          <p>
            Old World diseases (smallpox, measles, influenza) decimated Indigenous populations because they had no immunity. But disease alone did not cause collapse.
          </p>
          <p>
            Indigenous peoples were killed by:
          </p>
          <ul>
            <li><strong>Violence:</strong> Direct killing in war and massacre</li>
            <li><strong>Starvation:</strong> Disruption of food systems through land seizure and warfare</li>
            <li><strong>Exploitation:</strong> Overwork, forced labor, malnutrition</li>
            <li><strong>Disease compounded by neglect:</strong> Conquerors did not provide care; some deliberately infected Indigenous peoples (documented cases of intentional disease transmission)</li>
          </ul>
          <p>
            The "virgin soil epidemic" theory — that Indigenous peoples simply died from disease — erases the active role of colonizers in destruction through warfare, enslavement, and dispossession.
          </p>
        </section>

        <section id="removal" className="blog-section">
          <h2>Forced Removal & The Reservation System (1800s)</h2>
          <p>
            By the 1800s, the United States had adopted a policy of "Indian Removal" — forcibly relocating Indigenous nations from their ancestral lands.
          </p>

          <h3>Indian Removal Act (1830)</h3>
          <p>
            President Andrew Jackson signed legislation authorizing the forced relocation of thousands of Indigenous people from the Southeast to "Indian Territory" (modern Oklahoma) — over a thousand miles away.
          </p>

          <h3>The Trail of Tears</h3>
          <p>
            The Cherokee Nation was forced on a 1,200-mile journey from North Carolina and Georgia to Oklahoma in 1838–1839. Approximately 4,000 of 15,000 Cherokee died en route from disease, starvation, and cold.
          </p>
          <p>
            Similar forced relocations affected the Creek, Seminole, Chickasaw, and Choctaw nations — the entire "Five Civilized Tribes." The death toll was catastrophic.
          </p>

          <h3>The Reservation System</h3>
          <p>
            Survivors were confined to reservations — small parcels of often-barren land, a fraction of original territories. The reservation system served multiple purposes:
          </p>
          <ul>
            <li><strong>Territorial control:</strong> Open land for American settlers and resource extraction</li>
            <li><strong>Political containment:</strong> Confine Indigenous nations and limit their autonomy</li>
            <li><strong>Economic control:</strong> Restrict Indigenous self-sufficiency and create dependency on government rations</li>
          </ul>
          <p>
            Reservations were often placed on the worst land — deserts, mountains, swamps — unsuitable for agriculture.
          </p>
        </section>

        <section id="cultural" className="blog-section">
          <h2>Cultural Genocide & Assimilation (1870s–1970s)</h2>
          <p>
            After physical removal and confinement, colonizers pursued systematic cultural destruction.
          </p>

          <h3>Indian Boarding Schools</h3>
          <p>
            The U.S. and Canadian governments established boarding schools where Indigenous children were forcibly placed, often separated from their families for years.
          </p>
          <ul>
            <li><strong>Language suppression:</strong> Children were punished for speaking their native languages; English (or French in Canada) was mandatory</li>
            <li><strong>Cultural erasure:</strong> Traditional clothing, hairstyles, ceremonies, and beliefs were forbidden</li>
            <li><strong>Psychological trauma:</strong> Children experienced abuse, exploitation, and cultural alienation</li>
            <li><strong>Deaths:</strong> Thousands died in these schools from disease, malnutrition, and abuse</li>
          </ul>
          <p>
            The motto of the Carlisle Indian Industrial Training School (founded 1879): <em>"Kill the Indian, and save the man."</em>
          </p>
          <p>
            Over 100,000 Indigenous children were forced into these schools between 1870–1970s. Some never returned home.
          </p>

          <h3>Religious Suppression</h3>
          <p>
            Indigenous spiritual ceremonies were outlawed. The Indian Religious Freedom Act Amendments (1978) were needed to restore the right to practice Indigenous religions.
          </p>

          <h3>Language Endangerment</h3>
          <p>
            Of ~1,000 Indigenous languages spoken in North America in 1500, fewer than 300 remain, and most have fewer than 10,000 speakers. The youngest native speakers of many languages are over 60 years old — extinction is imminent without intervention.
          </p>
        </section>

        <section id="land-theft" className="blog-section">
          <h2>Systematic Land Theft</h2>
          <p>
            Perhaps the most damaging act: the systematic theft of Indigenous land. Throughout colonial history, land was seized through:
          </p>
          <ul>
            <li><strong>Military conquest:</strong> Take it by force</li>
            <li><strong>Broken treaties:</strong> Sign agreements guaranteeing land, then revoke them when valuable resources (gold, uranium, oil) are discovered</li>
            <li><strong>Legal fraud:</strong> Use colonial law systems to claim Indigenous land was "unclaimed" or "abandoned"</li>
            <li><strong>Forced sales:</strong> Pressure Indigenous communities to sell land at below-market rates</li>
          </ul>

          <h3>The Indian Appropriations Act & Land Theft</h3>
          <p>
            The Dawes Act (1887) broke up communal tribal lands into individual plots, supposedly to promote "civilization." In reality, surplus lands were sold to settlers. Indigenous peoples lost ~90 million acres — 65% of what they held — in a single generation.
          </p>

          <h3>Sacred Sites & Resource Extraction</h3>
          <p>
            Mining, logging, and dam projects have desecrated sacred Indigenous sites (e.g., Black Hills, Bears Ears, pipeline crossings of ancestral burial grounds and water sources).
          </p>
        </section>

        <section id="ongoing" className="blog-section">
          <h2>Ongoing Colonialism (Present Day)</h2>
          <p>
            Colonialism did not end in the 1970s. It continues through:
          </p>
          <ul>
            <li><strong>Poverty:</strong> Reservations have unemployment rates 2–3x national average; median household income is 25–50% of national average</li>
            <li><strong>Health disparities:</strong> Type 2 diabetes, suicide, and alcoholism rates are catastrophically high (intentional policies created dependency on commodity foods high in sugar)</li>
            <li><strong>Environmental racism:</strong> Toxic waste, uranium tailings, and polluting industries are disproportionately placed on or near Indigenous lands</li>
            <li><strong>Missing & Murdered Indigenous Women:</strong> Indigenous women and girls go missing at 4–10x the rate of white women; many cases receive little investigation</li>
            <li><strong>Police violence:</strong> Indigenous people are killed by police at 3x the rate of white Americans</li>
            <li><strong>Political marginalization:</strong> Despite constituting 2% of the U.S. population, Indigenous peoples have limited political representation</li>
          </ul>
        </section>

        <section id="resistance" className="blog-section">
          <h2>Resistance & Reclamation</h2>
          <p>
            Despite centuries of genocide, dispossession, and cultural suppression, Indigenous peoples have resisted, survived, and are now reclaiming their power.
          </p>

          <h3>Legal & Political Victories</h3>
          <ul>
            <li><strong>Indian Self-Determination Act (1975):</strong> Affirmed tribal sovereignty and self-governance</li>
            <li><strong>United Nations Declaration on the Rights of Indigenous Peoples (2007):</strong> International affirmation of Indigenous rights</li>
            <li><strong>Land Back movements:</strong> Reclamation of sacred sites and treaty lands (e.g., Bears Ears National Monument, Black Hills legal battles)</li>
            <li><strong>Indigenous political leadership:</strong> Indigenous politicians, judges, and activists are reshaping law and policy</li>
          </ul>

          <h3>Cultural Resurgence</h3>
          <ul>
            <li><strong>Language revitalization:</strong> Immersion schools teaching Indigenous languages; youth reclaiming their heritage</li>
            <li><strong>Ceremony & spirituality:</strong> Renewed practice of traditional ceremonies and spiritual traditions</li>
            <li><strong>Arts & literature:</strong> Indigenous artists, writers, and filmmakers telling their own stories</li>
          </ul>

          <h3>Environmental Leadership</h3>
          <p>
            Indigenous peoples are leading the fight against climate change and environmental destruction. From Standing Rock (opposing pipeline construction) to Amazon rainforest defense, Indigenous communities are protecting the planet for all humanity.
          </p>

          <h3>The Road Ahead</h3>
          <p>
            Justice requires:
          </p>
          <ul>
            <li>Recognition of Indigenous sovereignty and treaty rights</li>
            <li>Land return and reparations</li>
            <li>Investment in Indigenous education, healthcare, and economic development</li>
            <li>Dismantling systems of racism and police violence</li>
            <li>Teaching true history — unfiltered, unexcused history — in schools</li>
          </ul>
        </section>

        <section className="blog-section blog-conclusion">
          <h2>Conclusion: History & Accountability</h2>
          <p>
            The genocide of Indigenous peoples in the Americas was not an inevitable tragedy of "civilizational collision." It was a deliberate project — driven by greed, racism, and the desire to erase entire peoples from their own lands.
          </p>
          <p>
            Acknowledging this history is not about assigning guilt or shame to modern people — it is about understanding how present inequities and injustices are rooted in historical policies and systems that persist today.
          </p>
          <p>
            <em>We are still here. We are still Indigenous. We are North America.</em>
          </p>
        </section>
      </div>

      <footer className="blog-footer">
        <button onClick={() => window.history.back()} className="blog-back-btn">← Back to Resources</button>
      </footer>
    </article>
  );
}
