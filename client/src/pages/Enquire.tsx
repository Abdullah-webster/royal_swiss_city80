import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const img = { logo: "https://royal-swiss-city-30.vercel.app/logo.png" };

function Logo() { return <img className="brand-logo" src={img.logo} alt="Royal Swiss City" /> }

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
  if (item === "ENQUIRE") {
    return <a href="/enquire">{item}</a>
  }
  if (item === "THE CITY") {
    return <a href="/the-city">{item}</a>
  }
  return <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
}

export default function Enquire() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFooter, setOpenFooter] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
    enquiryType: "",
    plotSize: "",
    message: "",
  });

  const nav = ["HOME", "THE CITY", "DEVELOPER", "FAQ", "PARTNER", "DEALER", "ENQUIRE"];
  const footerLinks = ["Residential Plots", "Commercial Plots", "The City", "Developer", "Location", "FAQ", "Partner", "Enquire"];
  const footerDescriptions = {
    "Residential Plots": " MARLA 3.5 MARLA 5 MARLA 10 KANAL 1 KANAL 2",
    "Commercial Plots": "MARLA 2\nMARLA 4\nMARLA 8",
    "The City": "Discover a considered way to experience the city at Royal Swiss City.",
    "Developer": "Discover a considered way to experience developer at Royal Swiss City.",
    "Location": "Discover a considered way to experience location at Royal Swiss City.",
    "FAQ": "Discover a considered way to experience faq at Royal Swiss City.",
    "Partner": "Discover a considered way to experience partner at Royal Swiss City.",
    "Enquire": "Discover a considered way to experience enquire at Royal Swiss City."
  };

  useEffect(() => {
    let f = 0;
    const fn = () => {
      cancelAnimationFrame(f);
      f = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 28);
      });
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => {
      cancelAnimationFrame(f);
      window.removeEventListener("scroll", fn);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="walkthrough-page">
      <header className={`walk-header ${scrolled ? "is-scrolled" : ""}`}>
        <button className="mobile-menu-trigger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
          <Menu size={22} strokeWidth={1.4} />
        </button>
        <nav className="desktop-links desktop-links--left">
          {nav.slice(0, 3).map(item => <Anchor key={item} item={item} />)}
        </nav>
        <a className="centered-brand" href="/"><Logo /></a>
        <nav className="desktop-links desktop-links--right">
          {nav.slice(3).map(item => <Anchor key={item} item={item} />)}
        </nav>
      </header>

      {/* FORM SECTION */}
      <section className="enquire-form-section">
        <div className="enquire-form-container">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="enquire-form-left">
            <p className="section-kicker">CONTACT & ENQUIRY</p>
            <h1 className="enquire-form-title">
              LET'S <span className="champagne-accent">Talk.</span>
            </h1>
            <p className="enquire-form-description">
              Whether you are a buyer, investor, or property professional, our team is here to give you clear, accurate information about Royal Swiss City.
            </p>

            <div className="enquire-contact-blocks">
              <div className="enquire-contact-block">
                <p className="enquire-contact-label">PHONE</p>
                <a href="tel:+9242111777588" className="enquire-contact-value">042 111 777 588</a>
              </div>
              <div className="enquire-contact-block">
                <p className="enquire-contact-label">EMAIL</p>
                <a href="mailto:royalswisscity@gmail.com" className="enquire-contact-value">royalswisscity@gmail.com</a>
              </div>
              <div className="enquire-contact-block">
                <p className="enquire-contact-label">OFFICE</p>
                <p className="enquire-contact-value">123-C Commercial Broadway<br />DHA Phase 5, Lahore</p>
              </div>
              <div className="enquire-contact-block">
                <p className="enquire-contact-label">HOURS</p>
                <p className="enquire-contact-value">Mon–Sat: 9AM – 6PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="enquire-form-right">
            <h2 className="enquire-form-heading">
              Send Us<br />a Message.
            </h2>
            <p className="enquire-form-subtext">
              We respond within one business day. All enquiries are handled in confidence.
            </p>

            <form onSubmit={handleSubmit} className="enquire-form">
              <div className="enquire-form-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="enquire-input"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name (if applicable)"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="enquire-input"
                />
              </div>

              <div className="enquire-form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="enquire-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="enquire-input"
                />
              </div>

              <div className="enquire-form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="enquire-input"
                />
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  required
                  className="enquire-input"
                >
                  <option value="">Enquiry Type</option>
                  <option value="buyer">Buyer / Investor</option>
                  <option value="dealer">Dealer Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="enquire-form-row">
                <input
                  type="text"
                  name="plotSize"
                  placeholder="Plot Size of Interest"
                  value={formData.plotSize}
                  onChange={handleInputChange}
                  className="enquire-input"
                />
              </div>

              <div className="enquire-form-row">
                <textarea
                  name="message"
                  placeholder="Tell us about your interest or any specific questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="enquire-input enquire-textarea"
                />
              </div>

              <button type="submit" className="enquire-button">
                SUBMIT ENQUIRY →
              </button>

              <p className="enquire-privacy-notice">
                Your information is treated in confidence and will not be shared with third parties without your consent.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="walk-footer reveal-section"><div className="footer-accordions">{footerLinks.map(item => <div className={openFooter === item ? "open" : ""} key={item}><button onClick={() => setOpenFooter(openFooter === item ? null : item)}>{item}<ChevronDown size={14} /></button>{openFooter === item && <p style={{ whiteSpace: "pre-line" }}>{footerDescriptions[item as keyof typeof footerDescriptions]}</p>}</div>)}</div><div className="footer-socials"><a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={24} /></a><a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size={24} /></a><a href="https://tiktok.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.41a5.81 5.81 0 0 0-.98-.08 6.04 6.04 0 0 0-6.04 6.04 6.04 6.04 0 0 0 6.04 6.04 6.04 6.04 0 0 0 6.04-6.04v-3.1a7.7 7.7 0 0 0 3.77 1.01V9.81a4.77 4.77 0 0 1-.77-.06z" /></svg></a><a href="https://linkedin.com/company/royalswisscity" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={24} /></a><a href="https://youtube.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube size={24} /></a><a href="https://x.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="X"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.306l7.733-8.835L2.25 2.25h6.814l4.882 6.45L18.244 2.25zM17.083 18.386h1.83L6.959 4.155H5.049l12.034 14.231z" /></svg></a></div><div className="footer-contact"><b>Where life happens.</b><span>© 2026 ROYAL SWISS CITY · PRIVACY POLICY · SITEMAP</span></div></footer>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu__top">
          <button onClick={() => setMenuOpen(false)} aria-label="Close"><ChevronDown size={22} /></button>
          <button onClick={() => setMenuOpen(false)} aria-label="Close"><X size={22} /></button>
        </div>
        <div className="mobile-menu__links">
          <a href="/" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="/#the-city" onClick={() => setMenuOpen(false)}>THE CITY</a>
          <a href="/developer" onClick={() => setMenuOpen(false)}>DEVELOPER</a>
          <a href="/#location" onClick={() => setMenuOpen(false)}>LOCATION</a>
          <a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="/#partner" onClick={() => setMenuOpen(false)}>PARTNER</a>
          <a href="/#dealer" onClick={() => setMenuOpen(false)}>DEALER</a>
          <a href="/enquire" onClick={() => setMenuOpen(false)}>ENQUIRE</a>
        </div>
      </div>
    </main>
  );
}
