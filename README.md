# HistoricReflections — Ancient Histories Reclaimed

> *Before the textbooks — there was truth.*

HistoricReflections is an educational web platform dedicated to restoring the untold histories of ancient Africa, Aboriginal peoples, and Indigenous civilizations — as told through the wisdom of women historians and knowledge-keepers.

Built with **React + Vite**.

---

## Live Purpose

For millennia, women were the griots, the scribes, the healers, and the queens who carried civilizations forward. Their stories were not lost — they were erased. This platform exists to restore what was taken, serving students, educators, researchers, and anyone ready to see history as it truly was.

---

## Features

### Hero
Full-viewport landing with an animated starfield, pyramid SVG silhouette, and entrance animations introducing the platform's mission: *Ancient Civilizations · Indigenous Peoples · Women in History*.

### Our Mission
Two-column layout with a living archive statement and two key stats:
- **200K+** Years of History
- **50+** Civilizations Documented

### Civilizations (6 Featured)
Interactive card grid — hover to reveal descriptions:

| Civilization | Era |
|---|---|
| Ancient Kemet (Egypt) | 3100 BCE – 30 BCE |
| Aboriginal Australia | 50,000 BCE – Present |
| Mali & Songhai Empires | 300 CE – 1600 CE |
| Indigenous Americas | 1400 BCE – 1533 CE |
| Kingdom of Nubia / Kush | 2500 BCE – 1500 BCE |
| Indus Valley Civilization | 2600 BCE – 1900 BCE |

### The Knowledge-Keepers (Women in History)
Horizontally scrollable profile cards for six women who shaped civilizations:

- **Hatshepsut** — Pharaoh of Egypt *(c. 1507–1458 BCE)*
- **Yaa Asantewaa** — Queen Mother & War Leader *(1840–1921 CE, Ashanti Empire)*
- **Amanirenas** — Kandake (Queen) of Kush *(c. 40–10 BCE, Nubia)*
- **Nzinga Mbande** — Queen of Ndongo & Matamba *(1583–1663 CE, Angola)*
- **Sacagawea** — Guide, Interpreter & Diplomat *(c. 1788–1812 CE, Lemhi Shoshone)*
- **Hypatia of Alexandria** — Mathematician & Philosopher *(c. 360–415 CE, Egypt)*

### Timeline — 200,000 Years of Human Story
Auto-scrolling ticker spanning the full arc of human history, from *Homo sapiens emerging in East Africa (200,000 BCE)* to the *UN Declaration on Rights of Indigenous Peoples (2007 CE)*. Pauses on hover. 16 key events across Africa, Australia, the Americas, and the Pacific.

### The Archive (Resources)
Tabbed resource center with four sections:

- **Documents & Evidence** — Primary sources, historical maps, academic papers, oral histories, and manuscripts (e.g. Ipuwer Papyrus, Timbuktu Manuscripts)
- **Video Library** — Curated documentaries and lectures on ancient Nubia, Indigenous women leaders, Aboriginal navigation, and African intellectual tradition
- **Upload Resources** — Drag-and-drop zone for educators to contribute PowerPoints, PDFs, and Word documents
- **Lesson Plans** — Curriculum from K–5 through college level, including a 5-day high school unit on colonialism and memory

### Quote
*"Until the lion learns to write, every story will glorify the hunter. We are the lions. And we have learned to write."* — African Proverb, adapted

### Join the Archive
Email subscription form to stay updated on new civilizations, profiles, and resources.

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Google Fonts | Cinzel · Cinzel Decorative · Cormorant Garamond |
| CSS | Component-scoped CSS (no framework) |

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx / Nav.css          # Fixed nav with mobile hamburger menu
│   ├── Hero.jsx / Hero.css        # Animated hero with starfield + pyramid
│   ├── Mission.jsx / Mission.css  # Mission statement + stats
│   ├── Civilizations.jsx / .css   # Civilization card grid
│   ├── Women.jsx / Women.css      # Women historian profile cards
│   ├── Timeline.jsx / Timeline.css # Auto-scrolling historical ticker
│   ├── Resources.jsx / .css       # Tabbed archive (docs, video, upload, lessons)
│   ├── Quote.jsx / Quote.css      # Featured quote section
│   ├── CTA.jsx / CTA.css          # Email signup
│   └── Footer.jsx / Footer.css    # Footer with nav links
├── App.jsx
├── index.css    # Global CSS variables, reset, typography, animations
└── main.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design System

All colors defined as CSS custom properties in `src/index.css`:

```css
--gold:        #E8C461
--gold-light:  #F4DC8E
--ochre:       #D87538
--black:       #050302
--deep:        #0C0805
--text-bright: #FFFAEC
--text-body:   #E8DFC8
```

**Fonts:** Cinzel Decorative (display/logo) · Cinzel (headings/labels) · Cormorant Garamond (body)

---

## Mobile Responsive

- Hamburger menu with full-screen overlay on mobile
- All sections reflow to single-column below 900px
- Civilization cards show descriptions on touch (no hover required)
- Hero CTA buttons stack vertically on small screens
- Timeline and profile cards scroll horizontally with touch support

---

## Roadmap

- [ ] Individual civilization detail pages
- [ ] Search and filter across the archive
- [ ] Backend for resource uploads with admin review
- [ ] User accounts for educators
- [ ] Multi-language support

---

© 2026 HistoricReflections · Ancient Histories Reclaimed

