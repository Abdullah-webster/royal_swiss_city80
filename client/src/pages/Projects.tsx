import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { animateFooter } from "@/utils/sectionAnimations";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png" };
const nav = ["HOME", "THE CITY", "DEVELOPER", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const navMobile = ["HOME", "THE CITY", "DEVELOPER", "PROJECTS", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];

const footerContent = {
  "ABOUT": "Habib Rafiq (Pvt.) Limited: 60+ years of engineering excellence delivering projects across infrastructure, housing, buildings, and industrial sectors.",
  "SERVICES": "Engineering • Procurement • Construction • Project Management • Infrastructure Development",
  "CONTACT": "042 111 777 588 | royalswisscity@gmail.com",
  "LINKS": "Habib Rafiq Official Website"
};

const projectsData = {
  buildings: [
    { name: "Convention Center Islamabad", location: "Islamabad, Pakistan", description: "An EPC contract completed in record 11 months. Seating capacity of 2,000 seats plus 350 VIP seats, covering 18,000 m² with central air-conditioning, security systems, and advanced audio-visual facilities.", image: "/convention-centre-islamabad.webp", category: "buildings" },
    { name: "Bahria Icon Tower", location: "Clifton, Karachi", description: "A 60-storey mixed-use development in Karachi featuring 30 residential floors, 6 commercial floors, 24 office floors, and parking for 1,566 vehicles. Titanium and glass façade with self-power generation and advanced HVAC systems.", image: "/bahria-icon-tower-karachi.webp", category: "buildings" },
    { name: "101 Tower Lahore", location: "Lahore, Pakistan", description: "A premium high-rise building combining residential and commercial spaces with modern architectural design and comprehensive MEP services.", image: "/101-tower-lahore.webp", category: "buildings" },
    { name: "Grand Jamia Mosque", location: "Bahria Town, Lahore", description: "Majestic mosque with capacity of 70,000 persons including open compound. Features 25,000 indoor prayer capacity, four 165-ft minarets, one principal grand dome, and 20 smaller surrounding domes.", image: "/grand-jamia-mosque-bahria-town-lahore.webp", category: "buildings" },
    { name: "Creek Vistas at Creek City", location: "DHA Phase VIII, Karachi", description: "Three apartment blocks with combined covered area of 585,366 sq. ft. Each block comprises one basement and 14 storeys with complete civil works, MEP, fire-fighting systems, and landscaping.", image: "/creek-vista-at-creek-city.webp", category: "buildings" },
  ],
  housing: [
    { name: "Bahria Heights", location: "Islamabad, Pakistan", description: "Large-scale housing development featuring comprehensive infrastructure including roads, water supply systems, sewerage networks, and storm-water drainage.", image: "/bahria-heights.webp", category: "housing" },
    { name: "Cabinet Division Employees Cooperative Housing Society", location: "Islamabad, Pakistan", description: "Complete infrastructure development covering 4,500 kanals with 2,937 residential plots, 49.9 km of roads, comprehensive utilities, and sewerage treatment facility.", image: "/Cabinet Division Employees Cooperative Housing Society.webp", category: "housing" },
    { name: "Lake City - Bella Vista Phase-I", location: "Lahore, Pakistan", description: "Infrastructure development across 9,000 kanals with residential and commercial areas, comprehensive earthworks, internal roads, walkways, and complete utility infrastructure.", image: "/Lake City - Infrastructure Development Works of Bella Vista (Phase-I).webp", category: "housing" },
    { name: "Tariq Gardens Housing Scheme", location: "Lahore, Pakistan", description: "Modern housing development with complete infrastructure including roads, utilities, drainage systems, and landscaping for residential community.", image: "/Tariq Gardens Housing Scheme.webp", category: "housing" },
    { name: "Flower Valley - Commoners Sky Garden", location: "Islamabad, Pakistan", description: "Premium housing development featuring comprehensive landscape design and modern amenities integrated with natural surroundings.", image: "/Flower Valley (Commoners Sky Garden), Islamabad.webp", category: "housing" },
  ],
  infrastructure: [
    { name: "M1 Islamabad-Peshawar Motorway", location: "Islamabad–Peshawar, Pakistan", description: "Major infrastructure project including 720,000 m³ earthwork, six multispan bridges, five multispan flyovers, and 30,000 tons of asphalt works.", image: "/m1-islamabad-peshawar-motorway-wide.webp", category: "infrastructure" },
    { name: "Lahore-Sheikhupura-Faisalabad Dual Carriageway", location: "Khurrianwala–Faisalabad, Pakistan", description: "120 km dual carriageway project featuring earthwork, base and sub-base construction, concrete structures, and asphalt concrete construction.", image: "/lahore sheikhupura faisalabad dual carriageway.webp", category: "infrastructure" },
    { name: "Lahore Ring Road - Package 3", location: "Lahore, Pakistan", description: "Major infrastructure upgrade including extensive earthwork, structural excavation, embankment formation, and complete electrification works.", image: "/lahore-ring-road-package-3-wide.webp", category: "infrastructure" },
    { name: "Kohat Tunnel and Access Roads", location: "Kohat, Pakistan", description: "Strategic infrastructure project featuring tunnel construction and comprehensive access road network development.", image: "/kohat tunnel and access roads.webp", category: "infrastructure" },
  ],
  aviation: [
    { name: "Multan International Airport", location: "Multan, Pakistan", description: "Complete MEP services including external and internal electrification systems, fire-alarm and fire-fighting systems, HVAC system, scanning and security systems, elevators and escalators, 2,000 kVA standby generator system, and passenger boarding and docking systems.", image: "/multan-international-airport-card.webp", category: "aviation" },
  ],
};

function Logo() { 
  return <img className="brand-logo" src={img.logo} alt="Royal Swiss City" /> 
}

function Anchor({ item }: { item: string }) { 
  if (item === "DEVELOPER") {
    return <a href="/developer">{item}</a>
  }
  if (item === "HOME") {
    return <a href="/">{item}</a>
  }
  if (item === "PROJECTS") {
    return <a href="/projects">{item}</a>
  }
  if (item === "THE CITY") {
    return <a href="/the-city">{item}</a>
  }
  return <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a> 
}

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "buildings" | "housing" | "infrastructure" | "aviation">("all");
  const [openFooter, setOpenFooter] = useState<string | null>(null);

  const allProjects = [...projectsData.buildings, ...projectsData.housing, ...projectsData.infrastructure];
  const filteredProjects = activeCategory === "all" ? allProjects : projectsData[activeCategory as keyof typeof projectsData];

  useEffect(() => { 
    let f = 0; 
    const fn = () => { 
      cancelAnimationFrame(f); 
      f = requestAnimationFrame(() => { 
        setScrolled(window.scrollY > 28) 
      }) 
    }; 
    fn(); 
    window.addEventListener("scroll", fn, { passive: true }); 
    return () => { 
      cancelAnimationFrame(f); 
      window.removeEventListener("scroll", fn) 
    } 
  }, []);

  useEffect(() => { 
    const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12, rootMargin: "0px 0px -10% 0px" }); 
    document.querySelectorAll(".reveal-section,.reveal-item").forEach(n => o.observe(n)); 
    return () => o.disconnect() 
  }, [filteredProjects]);

  useEffect(() => {
    const footerElement = document.querySelector(".walk-footer.reveal-section");
    if (footerElement) animateFooter(footerElement);
  }, []);

  return <main className="walkthrough-page">
    <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}>
      <button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={22} strokeWidth={1.4} /></button>
      <nav className="desktop-links desktop-links--left">{nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}</nav>
      <a className="centered-brand" href="/"><Logo /></a>
      <nav className="desktop-links desktop-links--right">{nav.slice(3).map(item => <Anchor key={item} item={item} />)}</nav>
    </header>

    <section id="projects" className="projects-hero reveal-section">
      <div className="projects-header">
        <p className="section-kicker">PORTFOLIO</p>
        <h1>PROJECTS THAT<br /><span>SHAPE NATIONS</span></h1>
        <p>Decades of engineering excellence across buildings, housing, and infrastructure development across the region.</p>
      </div>
    </section>

    <section className="projects-section reveal-section">
      <div className="projects-filters">
        <button className={`filter-btn ${activeCategory === "all" ? "active" : ""}`} onClick={() => setActiveCategory("all")}>ALL</button>
        <button className={`filter-btn ${activeCategory === "buildings" ? "active" : ""}`} onClick={() => setActiveCategory("buildings")}>BUILDINGS</button>
        <button className={`filter-btn ${activeCategory === "housing" ? "active" : ""}`} onClick={() => setActiveCategory("housing")}>HOUSING</button>
        <button className={`filter-btn ${activeCategory === "infrastructure" ? "active" : ""}`} onClick={() => setActiveCategory("infrastructure")}>INFRASTRUCTURE</button>
        <button className={`filter-btn ${activeCategory === "aviation" ? "active" : ""}`} onClick={() => setActiveCategory("aviation")}>AVIATION</button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.name} className="project-card reveal-item" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.name} />
            <div className="project-overlay">
              <h3>{project.name}</h3>
              <p>{project.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer className="walk-footer reveal-section">
      <Logo />
      <div className="footer-accordions">
        <div>
          <button onClick={() => setOpenFooter(openFooter === "ABOUT" ? null : "ABOUT")}>ABOUT<ChevronDown size={14} /></button>
          {openFooter === "ABOUT" && <p>{footerContent.ABOUT}</p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "SERVICES" ? null : "SERVICES")}>SERVICES<ChevronDown size={14} /></button>
          {openFooter === "SERVICES" && <p>{footerContent.SERVICES}</p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "CONTACT" ? null : "CONTACT")}>CONTACT<ChevronDown size={14} /></button>
          {openFooter === "CONTACT" && <p>{footerContent.CONTACT}</p>}
        </div>
        <div>
          <button onClick={() => setOpenFooter(openFooter === "LINKS" ? null : "LINKS")}>LINKS<ChevronDown size={14} /></button>
          {openFooter === "LINKS" && <p><a href="https://www.habibrafiq.com/" target="_blank" rel="noopener noreferrer">{footerContent.LINKS}</a></p>}
        </div>
      </div>
      <div className="footer-contact"><b>Building Tomorrow, Today</b><span>© 2026 HABIB RAFIQ · PRIVACY POLICY · SITEMAP</span></div>
    </footer>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <div className="mobile-menu__top">
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button>
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button>
      </div>
      <div className="mobile-menu__links">
        {navMobile.map(item => { 
          const href = item === "DEVELOPER" ? "/developer" : item === "PROJECTS" ? "/projects" : item === "HOME" ? "/" : `#${item.toLowerCase().replaceAll(" ", "-")}`; 
          return <a href={href} onClick={() => setMenuOpen(false)} key={item}>{item}</a> 
        })}
      </div>
      <div className="mobile-menu__bottom">
        <Logo /><span>HABIB RAFIQ</span>
      </div>
    </div>

    {selectedProject && (
      <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
        <div className="project-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedProject(null)}><X size={24} /></button>
          <img src={selectedProject.image} alt={selectedProject.name} />
          <div className="modal-content">
            <h2>{selectedProject.name}</h2>
            <p className="modal-location">{selectedProject.location}</p>
            <p className="modal-description">{selectedProject.description}</p>
          </div>
        </div>
      </div>
    )}
  </main>
}
