import { useEffect, useState } from "react";

export function ShowcaseCarousel({ cards }: { cards: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Listen for navigation events from parent
  useEffect(() => {
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };
    
    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    document.addEventListener("carousel-prev", handlePrev);
    document.addEventListener("carousel-next", handleNext);

    return () => {
      document.removeEventListener("carousel-prev", handlePrev);
      document.removeEventListener("carousel-next", handleNext);
    };
  }, [cards.length]);

  if (!cards || cards.length === 0) return null;

  const getPrevIndex = (i: number) => (i - 1 + cards.length) % cards.length;
  const getNextIndex = (i: number) => (i + 1) % cards.length;

  const prevCard = cards[getPrevIndex(currentIndex)];
  const currentCard = cards[currentIndex];
  const nextCard = cards[getNextIndex(currentIndex)];

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      {/* Carousel Container with peek effect */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            alignItems: "stretch",
            paddingLeft: "calc((100% - 300px) / 2 - 120px)",
            paddingRight: "calc((100% - 300px) / 2 - 120px)",
          }}
        >
          {/* Previous Card (Peeking Left) */}
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "280px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              opacity: 0.5,
            }}
          >
            <img 
              src={prevCard.image} 
              alt="Previous project"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>

          {/* Current Card (Center - Main) */}
          <article
            style={{
              position: "relative",
              width: "300px",
              height: "280px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img 
              src={currentCard.image} 
              alt={currentCard.title} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                display: "block" 
              }}
              loading="eager"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, .76))" }}></div>
            <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", zIndex: 1, color: "white" }}>
              <span style={{ fontSize: "8px", letterSpacing: ".2em" }}>0{(currentIndex % cards.length) + 1} / {cards.length}</span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "20px", fontWeight: 300, lineHeight: .92, margin: "8px 0" }}>{currentCard.title}</h3>
              <p style={{ fontSize: "10px", lineHeight: 1.4, margin: "0", maxWidth: "100%" }}>{currentCard.body.substring(0, 50)}...</p>
            </div>
          </article>

          {/* Next Card (Peeking Right) */}
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "280px",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              opacity: 0.5,
            }}
          >
            <img 
              src={nextCard.image} 
              alt="Next project"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "16px" }}>
        {cards.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#8B6F47" : "#d4c5a9",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
