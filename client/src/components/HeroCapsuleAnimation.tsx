import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const img = { hero: "/city-aerial.jpg" };

// Preload image
const preloadImage = (src: string) => {
  const image = new Image();
  image.src = src;
};

export function HeroCapsuleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    preloadImage("/where-life-unfolds.jpg");
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-capsule-stage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".hero-capsule-pin",
        anticipatePin: 1,
      },
    });

    if (!isMobile) {
      // DESKTOP ANIMATION
      tl.to(".art-capsule-desktop", {
        bottom: "10vh",
        duration: 1,
      });

      tl.to(
        ".art-capsule-desktop",
        {
          width: "76vw",
          height: "38vh",
          bottom: "8vh",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "calc(1.8rem + 15px)",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "0.8rem",
          opacity: 1,
          duration: 1,
        },
        0
      );

      tl.to(".art-capsule-desktop", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "calc(4rem + 15px)",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "1rem",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.35"
      );
    } else {
      // MOBILE ANIMATION (3 STAGES - SMOOTHER & FASTER)
      tl.to(".art-capsule-mobile", {
        width: "90vw",
        height: "80vh",
        bottom: "6vh",
        borderRadius: "150px 150px 0px 0px",
        duration: 1.2,
        ease: "power1.inOut",
      });

      tl.to(".art-capsule-mobile", {
        width: "96vw",
        height: "90vh",
        bottom: "3vh",
        borderRadius: "80px 80px 0px 0px",
        duration: 1.1,
        ease: "power1.inOut",
      });

      tl.to(".art-capsule-mobile", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.0,
        ease: "power1.inOut",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-capsule-stage"
      style={{
        height: "240vh",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .art-capsule-desktop {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .art-capsule-mobile {
            display: none !important;
          }
        }
      `}</style>
      {/* PRELOAD IMAGE - Render immediately but hide off-screen */}
      

      <div
        className="hero-capsule-pin"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* HERO BACKGROUND - The main hero section */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/city-aerial.jpg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            >
              <source src={typeof window !== "undefined" && window.innerWidth <= 768 ? "/hero-mobile-bg.mp4" : "/home_desktop_bg.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="hero-shade"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.35))",
            }}
          />
          <div
            className="hero-copy"
            style={{
              position: "absolute",
              zIndex: 2,
              color: "white",
              textAlign: "center",
              padding: "30px",
              top: window.matchMedia("(max-width: 768px)").matches ? "70%" : "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "90vw",
            }}
          >
            <p
              className="hero-kicker"
              style={{
                fontSize: "clamp(8px, 1.5vw, 10px)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                whiteSpace: window.matchMedia("(max-width: 768px)").matches ? "normal" : "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              RAVI RIVERFRONT · LAHORE · PAKISTAN
            </p>
            <h1
              style={{
                fontSize: window.matchMedia("(max-width: 768px)").matches ? "clamp(3rem, 10vw, 8rem)" : "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 400,
                letterSpacing: "-0.06em",
                lineHeight: 1.1,
                marginBottom: "20px",
                textAlign: "center",
                fontStyle: "normal",
              }}
            >
              ROYAL SWISS CITY
            </h1>
          </div>
          <div
            className="hero-scroll"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "35px",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div
          className="art-capsule art-capsule-desktop"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-18vh",
            width: "30vw",
            height: "18vh",
            borderRadius: "999px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            backgroundImage: "url(/desktop_city_aerial.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center 0.15%",
          }}
        >
          <div
            className="art-content-desktop"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                maxWidth: "920px",
                margin: "0 auto",
                padding: "20px 30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "calc(clamp(1.5rem, 3vw, 2rem) + 15px)",
                  fontWeight: 400,
                  letterSpacing: "-0.06em",
                  marginBottom: "22px",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  fontFamily: "var(--serif)",
                }}
              >
                Where{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontStyle: "italic",
                    color: "#b2996a",
                    fontSize: "calc(1em + 30px)",
                    verticalAlign: "baseline",
                  }}
                >
                  Life
                  <svg
                    viewBox="0 0 900 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "calc(-0.22em + 8px)",
                      width: "142%",
                      height: "0.32em",
                      pointerEvents: "none",
                      overflow: "visible",
                    }}
                  >
                    <path
                      d="M 20 125 C 145 46, 278 16, 410 37 C 540 58, 610 98, 720 108 C 790 114, 850 90, 885 55 C 850 100, 788 126, 720 122 C 608 112, 538 72, 410 53 C 278 34, 145 64, 20 125 Z"
                      fill="#b2996a"
                    />
                  </svg>
                </span>{" "}
                Happens
              </h2>
              <p
                style={{
                  fontSize: "clamp(0.72rem, 0.95vw, 0.86rem)",
                  lineHeight: 1.6,
                  color: "#b2996a",
                  marginTop: "12px",
                  marginBottom: "12px",
                  maxWidth: "920px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  Royal Swiss City brings a different kind of presence to Lahore's next horizon.
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  Set within the Ravi Riverfront vision, it pairs a secure, planned setting with generous landscapes,
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  carefully considered streets, and the everyday ease of a complete community.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div
          className="art-capsule art-capsule-mobile"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-65vh",
            width: "85vw",
            height: "65vh",
            borderRadius: "200px 200px 0px 0px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            backgroundImage: "url(/mobile_city_aerial.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="art-content-mobile"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#111",
              opacity: 1,
              transform: "translateY(0)",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div
              className="art-content-inner"
              style={{
                width: "100%",
                padding: "34px 22px",
                paddingTop: "54px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 7vw, 2.75rem)",
                  marginBottom: "24px",
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--serif)",
                  fontWeight: 300,
                }}
              >
                Where{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontStyle: "italic",
                    color: "#b2996a",
                    fontSize: "calc(1em + clamp(14px, 3.5vw, 24px))",
                    verticalAlign: "baseline",
                  }}
                >
                  Life
                  <svg
                    viewBox="0 0 900 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "calc(-0.22em + 8px)",
                      width: "142%",
                      height: "0.32em",
                      pointerEvents: "none",
                      overflow: "visible",
                    }}
                  >
                    <path
                      d="M 20 125 C 145 46, 278 16, 410 37 C 540 58, 610 98, 720 108 C 790 114, 850 90, 885 55 C 850 100, 788 126, 720 122 C 608 112, 538 72, 410 53 C 278 34, 145 64, 20 125 Z"
                      fill="#b2996a"
                    />
                  </svg>
                </span>{" "}
                Happens
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  maxWidth: "100%",
                  color: "#b2996a",
                  marginTop: "14px",
                }}
              >
                Royal Swiss City brings a different kind of presence to
                Lahore's next horizon. Set within the Ravi Riverfront vision,
                it pairs a secure, planned setting with generous landscapes,
                carefully considered streets, and the everyday ease of a
                complete community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
