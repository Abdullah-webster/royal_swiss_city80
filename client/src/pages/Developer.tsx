import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { animateFooter } from "@/utils/sectionAnimations";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png", heroDesktop: "/dev-hero-desktop.png", heroMobile: "/hero-dev-mobile.jpg", chairman: "/chairman.png", ceo: "/ceo.png", md: "/md.png" };
const nav = ["HOME", "THE CITY", "DEVELOPER", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
const navMobile = ["HOME", "THE CITY", "DEVELOPER", "PROJECTS", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];

const projectsByCategory = {
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

function Logo() { return <img className="brand-logo" src={img.logo} alt="Royal Swiss City" /> }
function Anchor({ item }: { item: string }) { 
  if (item === "DEVELOPER") {
    return <a href="/developer">{item}</a>
  }
  if (item === "HOME") {
    return <a href="/">{item}</a>
  }
  if (item === "THE CITY") {
    return <a href="/the-city">{item}</a>
  }
  return <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a> 
}

export default function Developer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFooterItem, setOpenFooterItem] = useState<string | null>(null);
  const isMobileView = typeof window !== "undefined" ? window.innerWidth <= 760 : false;

  useEffect(() => { 
    let f = 0; 
    const fn = () => { 
      cancelAnimationFrame(f); 
      f = requestAnimationFrame(() => { 
        setScrollY(window.scrollY); 
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
  }, []);

  useEffect(() => {
    const footerElement = document.querySelector(".walk-footer.reveal-section");

    if (footerElement) animateFooter(footerElement);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const heroProgress = Math.min(scrollY / Math.max(vh, 800), 1);

  return <main className="walkthrough-page developer-page" style={{ "--hero-progress": heroProgress } as React.CSSProperties}>
    <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}>
      <button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={22} strokeWidth={1.4} /></button>
      <nav className="desktop-links desktop-links--left">{nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}</nav>
      <a className="centered-brand" href="/"><Logo /></a>
      <nav className="desktop-links desktop-links--right">{nav.slice(3).map(item => <Anchor key={item} item={item} />)}</nav>
    </header>

    <section id="home" className="walk-hero reveal-section">
      <picture>
        <source media="(max-width: 760px)" srcSet={img.heroMobile} />
        <source media="(min-width: 761px)" srcSet={img.heroDesktop} />
        <img src={img.heroDesktop} alt="Habib Rafiq Engineering - 60 Years of Excellence" />
      </picture>
      <img src="/HRL LOGO.jpeg" alt="HRL Logo" style={{ position: "absolute", top: "60px", left: "50%", transform: "translateX(-50%)", zIndex: 10, maxWidth: "120px", height: "auto" }} />
      <div className="hero-copy" style={{ color: "#1a3a52", position: "absolute", zIndex: 5 }}>
        <h1 style={{ color: "#1a3a52", fontVariant: "small-caps", letterSpacing: "0.05em", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>HABIB RAFIQ<br />CONSTRUCTION<br />PVT LTD</h1>
        <p style={{ color: "#1a3a52", fontSize: "22px" }}>ENGINEERING THE NATION SINCE 1962</p>
      </div>
    </section>

    <section className="legacy-quotes-section reveal-section" style={{ background: "#ffffff", backgroundColor: "#ffffff", marginTop: "-5vh", paddingBottom: "60px" }}>
        {/* Section Header */}
        <div className="legacy-section-header">
          <div className="header-title">
            <h2>PEOPLE WHO<br /><em>BUILD FORWARD.</em></h2>
          </div>
          <p className="header-subtitle">LEADERSHIP & VISION</p>
          <div className="header-divider">
            <span></span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span></span>
          </div>
        </div>

        {/* Desktop Version - Full Cards */}
        {!isMobileView && (
          <div className="legacy-quotes">
            {/* Chairman Card */}
            <article className="legacy-card legacy-card--chairman reveal-item">
              <div className="legacy-card__image-wrapper">
                <img src={img.chairman} alt="Shahid Rafiq" />
                <div className="legacy-card__image-label">
                  <span>CHAIRMAN</span>
                </div>
              </div>
              <div className="legacy-card__divider"></div>
              <div className="legacy-card__content">
                <small>CHAIRMAN</small>
                <h3>Shahid Rafiq</h3>
                <div className="legacy-card__decoration">
                  <span></span>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                  <span></span>
                </div>
                <div className="legacy-card__quote-section">
                  <div className="legacy-card__quote-mark">"</div>
                  <p className="legacy-quote" style={{ fontSize: "14px" }}>For over six decades, Habib Rafiq (Pvt) Ltd has transformed vision into reality through innovation, quality, and dedication. Renowned for delivering excellence across industrial, infrastructure, power, oil & gas, aviation, and high-rise projects, we have consistently exceeded client expectations. Building on this legacy, we now bring the same expertise to modern housing society — designed with world-class infrastructure, sustainable planning, and premium amenities, reflecting our commitment to exceptional living spaces and lasting value for generations to come.</p>
                </div>
                <div className="legacy-card__signature">
                  <p><strong>Shahid Rafiq</strong></p>
                  <p>CHAIRMAN, HABIB RAFIQ (PVT.) LTD.</p>
                </div>
                <div className="legacy-card__watermark">HRL</div>
              </div>
            </article>

            {/* CEO Card */}
            <article className="legacy-card legacy-card--ceo reveal-item">
              <div className="legacy-card__image-wrapper legacy-card__image-wrapper--right">
                <img src={img.ceo} alt="Sohaib Hassan" />
                <div className="legacy-card__image-label legacy-card__image-label--ceo">
                  <span>CHIEF EXECUTIVE</span>
                </div>
              </div>
              <div className="legacy-card__divider legacy-card__divider--right"></div>
              <div className="legacy-card__content legacy-card__content--left">
                <small>CHIEF EXECUTIVE</small>
                <h3>Sohaib Hassan</h3>
                <div className="legacy-card__decoration">
                  <span></span>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                  <span></span>
                </div>
                <div className="legacy-card__quote-section">
                  <div className="legacy-card__quote-mark">"</div>
                  <p className="legacy-quote" style={{ fontSize: "14px" }}>It is a privilege to carry forward the legacy of Habib Rafiq Engineering (Pvt) Ltd. For over six decades, we set benchmarks in engineering excellence before expanding into real estate — making quality developments our trademark. Today, we develop well-planned, sustainable communities combining modern infrastructure with affordable living through Royal Swiss City. We remain committed to creating developments that enhance lifestyles and deliver lasting value for homeowners, investors, and future generations.</p>
                </div>
                <div className="legacy-card__signature">
                  <p><strong>Sohaib Hassan</strong></p>
                  <p>CHIEF EXECUTIVE</p>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Mobile Version - All 3 Cards */}
        {isMobileView && (
          <div className="legacy-quotes" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", margin: "30px 0 40px 0" }}>
            {/* Chairman Card Mobile */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden", marginBottom: "12px", height: "180px" }}>
                <img src={img.chairman} alt="Shahid Rafiq" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h4 style={{ fontSize: "13px", fontWeight: 400, color: "#1a3a52", margin: "0", fontFamily: "var(--serif)", letterSpacing: "0.06em" }}>Shahid Rafiq</h4>
            </div>

            {/* CEO Card Mobile */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden", marginBottom: "12px", height: "180px" }}>
                <img src={img.ceo} alt="Sohaib Hassan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h4 style={{ fontSize: "13px", fontWeight: 400, color: "#1a3a52", margin: "0", fontFamily: "var(--serif)", letterSpacing: "0.06em" }}>Sohaib Hassan</h4>
            </div>
          </div>
        )}
      </section>

    <section className="impact-timeline-section reveal-section" style={{ backgroundImage: !isMobileView ? "url('/Six Decades of Impact — Timeline.png')" : "url('/Six Decades of Impact — Timeline_mobile.png')", backgroundSize: isMobileView ? "cover" : "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#2C3F5E", color: "#ffffff", padding: isMobileView ? "0" : "40px 20px", minHeight: !isMobileView ? "300px" : "80vh", height: !isMobileView ? "300px" : "auto", width: isMobileView ? "100vw" : "auto", marginLeft: isMobileView ? "calc(-50vw + 50%)" : "0" }}>
      
      {/* Timeline content will go here */}
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        {/* Timeline items will be added here */}
      </div>
    </section>

    {/* Desktop Version */}
    {!isMobileView && (
      <section className="sectors-expertise-section reveal-section" style={{ padding: "0px 40px 80px 40px", background: "#f4f4f4" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.23em", textTransform: "uppercase", color: "rgba(150, 148, 148, 0.797)", margin: "0 0 4px 0", fontWeight: 600 }}>OUR EXPERTISE</p>
          <h2 style={{ fontSize: "clamp(40px, 5vw, 70px)", fontWeight: 300, letterSpacing: "0.08em", lineHeight: 1.15, margin: "0 0 12px 0", fontFamily: "var(--serif)", color: "#1a3a52" }}>BUILDING<br />ACROSS SECTORS</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#666", maxWidth: "600px", margin: "0 auto" }}>Our multidisciplinary expertise enables us to deliver complex projects of national and international significance, with a focus on quality, safety and sustainability.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px", maxWidth: "1400px", margin: "0 auto" }}>
          {[
            { name: "INFRASTRUCTURE", image: "/bahria-heights.webp", category: "infrastructure" },
            { name: "BUILDINGS", image: "/grand-jamia-mosque-bahria-town-lahore.webp", category: "buildings" },
            { name: "INDUSTRIAL", image: "/infrastructure.jpg", category: "buildings" },
            { name: "AVIATION", image: "/multan-international-airport-card.webp", category: "aviation" },
            { name: "POWER & ENERGY", image: "/green-energy.jpg", category: "buildings" },
            { name: "OIL & GAS", image: "/convention-centre-islamabad.webp", category: "buildings" },
            { name: "ENVIRONMENTAL & WATER", image: "/kohat tunnel and access roads.webp", category: "infrastructure" },
          ].map((sector) => (
            <div key={sector.name} onClick={() => setActiveModal(sector.category)} style={{ position: "relative", height: "180px", borderRadius: "2px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
              <img src={sector.image} alt={sector.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2))" }}></div>
              <div style={{ position: "absolute", bottom: "30px", right: "14px", color: "white", textAlign: "right" }}>
                <p style={{ fontSize: "10px", letterSpacing: "1.5px", margin: "0", opacity: 0.85, textTransform: "uppercase", fontFamily: "var(--serif)", fontWeight: 400 }}></p>
                <p style={{ fontSize: "12px", fontWeight: 500, margin: "2px 0 0 0", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "var(--serif)" }}>{sector.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Mobile Version */}
    {isMobileView && (
      <section className="sectors-expertise-section reveal-section" style={{ padding: "40px 20px", background: "#f4f4f4" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.23em", textTransform: "uppercase", color: "rgba(150, 148, 148, 0.797)", margin: "0 0 16px 0", fontWeight: 600 }}>OUR EXPERTISE</p>
          <h2 style={{ fontSize: "28px", fontWeight: 300, letterSpacing: "0.08em", lineHeight: 1.15, margin: "0 0 20px 0", fontFamily: "var(--serif)", color: "#1a3a52" }}>BUILDING<br />ACROSS SECTORS</h2>
          <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#666", maxWidth: "100%" }}>Our multidisciplinary expertise enables us to deliver complex projects of national and international significance, with a focus on quality, safety and sustainability.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", maxWidth: "100%" }}>
          {[
            { name: "INFRASTRUCTURE", image: "/bahria-heights.webp", category: "infrastructure" },
            { name: "BUILDINGS", image: "/grand-jamia-mosque-bahria-town-lahore.webp", category: "buildings" },
            { name: "INDUSTRIAL", image: "/infrastructure.jpg", category: "buildings" },
            { name: "AVIATION", image: "/multan-international-airport-card.webp", category: "aviation" },
            { name: "POWER & ENERGY", image: "/green-energy.jpg", category: "buildings" },
            { name: "OIL & GAS", image: "/convention-centre-islamabad.webp", category: "buildings" },
          ].map((sector) => (
            <div key={sector.name} onClick={() => setActiveModal(sector.category)} style={{ position: "relative", height: "140px", borderRadius: "6px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}>
              <img src={sector.image} alt={sector.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))" }}></div>
              <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", color: "white" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, margin: "0", textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "var(--serif)", lineHeight: 1.2 }}>{sector.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Royal Swiss Multan Section */}
    <section className="reveal-section" style={{ padding: isMobileView ? "40px 20px 20px 20px" : "150px 40px", background: "#ffffff", backgroundImage: isMobileView ? "url(/royal_swiss_multan_mobile)" : "url(/royal_swiss_multan.webp)", backgroundSize: "cover", backgroundPosition: isMobileView ? "center 95%" : "center", backgroundRepeat: "no-repeat", position: "relative", minHeight: isMobileView ? "650px" : "700px" }}>
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: isMobileView ? "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%)" : "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0) 100%)", pointerEvents: "none" }}></div>
      
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: isMobileView ? "100%" : "550px" }}>
          <p style={{ fontSize: isMobileView ? "10px" : "12px", letterSpacing: "0.23em", textTransform: "uppercase", color: "rgba(150, 148, 148, 0.797)", margin: "0", fontWeight: 600 }}>A MILESTONE IN OUR JOURNEY</p>
          <h2 style={{ fontSize: isMobileView ? "24px" : "clamp(32px, 4vw, 56px)", fontWeight: 300, letterSpacing: "0.08em", lineHeight: 1.15, margin: "0", fontFamily: "var(--serif)", color: "#1a3a52" }}>ROYAL SWISS<br />MULTAN</h2>
          <p style={{ fontSize: isMobileView ? "13px" : "16px", lineHeight: 1.8, color: "#666", margin: "0" }}>Royal Swiss Housing Multan represents an important chapter in our evolution — combining decades of engineering expertise with the creation of a thoughtfully planned residential community.</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: isMobileView ? "10px 20px" : "12px 28px", background: "#b2996a", color: "#111", borderRadius: "999px", textDecoration: "none", fontSize: isMobileView ? "11px" : "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", transition: "all 0.3s ease" }} onMouseEnter={(e) => { if (!isMobileView) { (e.currentTarget as HTMLElement).style.opacity = "0.7"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; } }} onMouseLeave={(e) => { if (!isMobileView) { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; } }}>
              EXPLORE PROJECTS
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer className="walk-footer reveal-section" style={{ backgroundImage: window.innerWidth > 768 ? "url('/footer_bg_desktop.jpeg')" : "url('/footer_bg_mobile.jpeg')", backgroundSize: "cover", backgroundPosition: window.innerWidth > 768 ? "center -300px" : "center", backgroundRepeat: "no-repeat" }}>
      <div className="footer-accordions">
        {[
          { title: "ABOUT HRL", description: "Habib Rafiq (Pvt) Ltd has been at the forefront of engineering and construction in Pakistan for over 60 years. Our expertise spans infrastructure, buildings, industrial, aviation, power & energy, oil & gas, and environmental projects.", link: "" },
          { title: "OUR EXPERTISE", description: "We have successfully delivered complex projects including motorways, airports, high-rise buildings, housing schemes, and infrastructure across national and international scale. Our portfolio demonstrates excellence in engineering, quality, and sustainability.", link: "" },
          { title: "ROYAL SWISS CITY", description: "Royal Swiss City represents our evolution into premium residential development. Combining decades of engineering expertise with modern planning, we've created a master-planned community with world-class infrastructure and amenities.", link: "/projects" },
          { title: "SUSTAINABILITY", description: "We are committed to sustainable development. Royal Swiss City features solar infrastructure, comprehensive water management, and environmental conservation as core principles.", link: "" },
          { title: "PARTNERSHIP", description: "We welcome strategic partnerships in real estate development and infrastructure projects. Our track record and expertise make us a trusted partner for large-scale initiatives.", link: "" },
          { title: "CONTACT", description: "For inquiries about our projects, partnerships, or development services, please reach out to us at 042-111-777-588 or royalswisscity@gmail.com.", link: "" }
        ].map(item => (
          <div className={openFooterItem === item.title ? "open" : ""} key={item.title}>
            <button onClick={() => setOpenFooterItem(openFooterItem === item.title ? null : item.title)}>
              {item.title}
              <ChevronDown size={14} />
            </button>
            {openFooterItem === item.title && (
              <div>
                <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                {item.link && (
                  <a href={item.link} style={{ display: "inline-block", marginTop: "12px", color: "#b2996a", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>LEARN MORE →</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="footer-socials">
        <a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={24} /></a>
        <a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size={24} /></a>
        <a href="https://tiktok.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.41a5.81 5.81 0 0 0-.98-.08 6.04 6.04 0 0 0-6.04 6.04 6.04 6.04 0 0 0 6.04 6.04 6.04 6.04 0 0 0 6.04-6.04v-3.1a7.7 7.7 0 0 0 3.77 1.01V9.81a4.77 4.77 0 0 1-.77-.06z" /></svg></a>
        <a href="https://linkedin.com/company/royalswisscity" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={24} /></a>
        <a href="https://youtube.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube size={24} /></a>
        <a href="https://x.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="X"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.306l7.733-8.835L2.25 2.25h6.814l4.882 6.45L18.244 2.25zM17.083 18.386h1.83L6.959 4.155H5.049l12.034 14.231z" /></svg></a>
      </div>
      <div className="footer-contact"><b>Engineering the Nation Since 1962</b><span>© 2026 HABIB RAFIQ · PRIVACY POLICY · SITEMAP</span></div>
    </footer>

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <div className="mobile-menu__top">
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button>
        <button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button>
      </div>
      <div className="mobile-menu__links">
        {navMobile.map(item => {
          let href = "";
          if (item === "HOME") href = "/";
          else if (item === "THE CITY") href = "/the-city";
          else if (item === "DEVELOPER") href = "/developer";
          else if (item === "PROJECTS") href = "/projects";
          else if (item === "ENQUIRE") href = "/enquire";
          else if (item === "FAQ") href = "/#faq";
          else if (item === "PARTNER") href = "/#partner";
          else if (item === "DEALER") href = "/#dealer";
          
          return <a href={href} onClick={() => setMenuOpen(false)} key={item}>{item}</a>;
        })}
      </div>
      <div className="mobile-menu__bottom">
        <Logo /><span>HABIB RAFIQ</span>
      </div>
    </div>

    {activeModal && (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={() => setActiveModal(null)}>
        <div style={{ background: "#fff", borderRadius: "8px", maxWidth: isMobileView ? "100%" : "900px", width: "100%", maxHeight: isMobileView ? "85vh" : "80vh", overflow: "auto", padding: isMobileView ? "30px 20px" : "40px", position: "relative", scrollbarWidth: "none", msOverflowStyle: "none" }} onClick={(e) => e.stopPropagation()} className="hide-scrollbar">
          <button onClick={() => setActiveModal(null)} style={{ position: "absolute", top: isMobileView ? "16px" : "20px", right: isMobileView ? "16px" : "20px", background: "none", border: "none", fontSize: isMobileView ? "20px" : "24px", cursor: "pointer" }}>×</button>
          
          <h2 style={{ fontFamily: "var(--serif)", fontSize: isMobileView ? "24px" : "32px", fontWeight: 300, letterSpacing: "0.08em", lineHeight: 1.15, margin: isMobileView ? "0 0 20px 0" : "0 0 30px 0", textTransform: "uppercase", color: "#1a3a52", paddingRight: isMobileView ? "30px" : "0" }}>
            {activeModal === "buildings" && "BUILDINGS"}
            {activeModal === "housing" && "HOUSING"}
            {activeModal === "infrastructure" && "INFRASTRUCTURE"}
            {activeModal === "aviation" && "AVIATION"}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: isMobileView ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", gap: isMobileView ? "16px" : "20px" }}>
            {projectsByCategory[activeModal as keyof typeof projectsByCategory]?.map((project) => (
              <div key={project.name} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #e0d9d1" }}>
                <img src={project.image} alt={project.name} style={{ width: "100%", height: isMobileView ? "180px" : "200px", objectFit: "cover" }} />
                <div style={{ padding: isMobileView ? "12px" : "16px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: isMobileView ? "14px" : "16px", fontWeight: 600, margin: "0 0 6px 0", color: "#1a3a52" }}>{project.name}</h3>
                  <p style={{ fontSize: isMobileView ? "12px" : "13px", color: "#b2996a", margin: "0 0 8px 0", fontWeight: 500 }}>{project.location}</p>
                  <p style={{ fontSize: isMobileView ? "12px" : "13px", lineHeight: 1.6, color: "#666", margin: 0 }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </main>
}
