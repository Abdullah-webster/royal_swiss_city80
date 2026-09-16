import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

const projects = [
  { eyebrow: "INFRASTRUCTURE", title: "Lahore Ring Road", body: "Major infrastructure development project spanning multiple phases with integrated utilities and modern design.", image: "/lahore-ring-road-package-3-wide.webp" },
  { eyebrow: "BUILDINGS", title: "High-Rise Development", body: "State-of-the-art commercial and residential towers with world-class amenities and sustainable design.", image: "/hrl-highrise.jpg" },
  { eyebrow: "HOUSING", title: "Master Planned Community", body: "Comprehensive residential development with complete infrastructure, utilities, and community facilities.", image: "/infrastructure.jpg" },
];

export function ProjectsCarousel({ isMobileView }: { isMobileView: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(isMobileView ? 0 : null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    if (isMobileView) {
      const cardWidth = window.innerWidth * 0.7;
      const gap = 14;
      const cardTotalWidth = cardWidth + gap;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);

      gsap.to(container, {
        x: -(currentIndex * cardTotalWidth),
        duration: 0.8,
        ease: "power2.inOut",
      });

      return () => clearInterval(interval);
    } else {
      const cardWidth = 500;
      const gap = 15;
      const cardTotalWidth = cardWidth + gap;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);

      gsap.to(container, {
        x: -(currentIndex * cardTotalWidth),
        duration: 0.8,
        ease: "power2.inOut",
      });

      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobileView]);

  const containerMaxWidth = isMobileView ? "70vw" : "500px";
  const cardWidth = isMobileView ? "70vw" : "500px";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: containerMaxWidth,
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        className="projects-rail"
        style={{
          display: "flex",
          gap: isMobileView ? "14px" : "15px",
          willChange: "transform",
          width: "fit-content",
        }}
      >
        {projects.map((project, i) => (
          <article 
            className="project-showcase-card" 
            key={`${project.title}-${i}`}
            style={{
              flex: `0 0 ${cardWidth}`,
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: isMobileView ? "default" : "pointer",
            }}
            onMouseEnter={() => !isMobileView && setHoveredCard(i)}
            onMouseLeave={() => !isMobileView && setHoveredCard(null)}
          >
            <img src={project.image} alt={project.title} style={{ width: "100%", height: isMobileView ? "280px" : "240px", objectFit: "cover" }} />
            <div style={{ 
              padding: (isMobileView || hoveredCard === i) ? (isMobileView ? "18px" : "16px") : "0",
              background: (isMobileView || hoveredCard === i) ? "rgba(255, 255, 255, 0.7)" : "transparent",
              opacity: (isMobileView || hoveredCard === i) ? 1 : 0,
              maxHeight: (isMobileView || hoveredCard === i) ? "200px" : "0",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}>
              <span style={{ fontSize: "7px", letterSpacing: ".18em", color: "#999", textTransform: "uppercase", display: "block" }}>0{i + 1} / {projects.length}</span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "18px", fontWeight: 400, lineHeight: 1.1, margin: "8px 0 6px", color: "#111" }}>{project.title}</h3>
              <p style={{ fontSize: "10px", lineHeight: 1.5, color: "#666", margin: "6px 0" }}>{project.body}</p>
              <a href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8px", letterSpacing: ".14em", color: "#111", textDecoration: "none", fontWeight: 500, textTransform: "uppercase", marginTop: "8px" }}>
                EXPLORE ALL <ChevronRight size={11} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
