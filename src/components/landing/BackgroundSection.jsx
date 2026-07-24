import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TicketBadge from "./TicketBadge";
import TheSoundBadge from "./TheSoundBadge";

export default function BackgroundSection() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [fontSize, setFontSize] = useState(80);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sidePadding = window.innerWidth < 768 ? 16 : window.innerWidth < 1024 ? 40 : window.innerWidth * 0.03;
    const availableWidth = window.innerWidth - sidePadding * 2;

    const measure = () => {
      const el = titleRef.current;
      if (!el) return;
      // Binary search for the right font size
      let lo = 10, hi = 300;
      el.style.fontSize = hi + "px";
      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        el.style.fontSize = mid + "px";
        if (el.scrollWidth <= availableWidth) lo = mid;
        else hi = mid;
      }
      setFontSize(lo);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Title rises from bottom to center as scroll progresses
  const titleY = useTransform(scrollYProgress, [0, 1], ["60vh", "-60vh"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Content fades out as title reaches 1/3 of its journey
  const contentOpacity = useTransform(scrollYProgress, [0.28, 0.45], [1, 0]);

  return (
    <section ref={ref} id="TheSound" className="relative" style={{ height: isMobile ? "auto" : "250vh" }}>
      {isMobile ? (
        <div className="bg-background px-4">
          {/* Badge at top */}
          <div className="py-10">
            <TheSoundBadge />
          </div>
          {/* Text content */}
          <div className="py-10">
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-heading font-light tracking-[-0.02em] text-foreground" style={{ fontSize: "32px", lineHeight: "1.05" }}>Pure Power.<br />Surgical Precision</h3>
              <p className="font-body font-light text-foreground leading-relaxed" style={{ fontSize: "14px" }}>
                A dual-driver acoustic engine that moves air more efficiently than anything in its class. By balancing raw strength with surgical precision, it achieves a richer sonic profile. It's deep, distortion-free, and shockingly powerful.
              </p>
              <motion.a
                href="#preorder"
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light border border-foreground relative overflow-hidden"
                style={{
                  borderRadius: "5px",
                  color: isHovering ? "white" : "hsl(var(--foreground))",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                <motion.div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: "hsl(var(--foreground))",
                    scaleX: isHovering ? 1 : 0,
                    transformOrigin: "left",
                  }}
                  animate={{ scaleX: isHovering ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                Choose your Mala
              </motion.a>
            </div>
          </div>

          {/* Image at 1:1 ratio */}
          <div className="w-full aspect-square overflow-hidden">
            <img
              src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/b55ebf5b5_Mala_10.jpg"
              alt="Bass You Can Breathe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <>
          {/* Desktop layout: sticky background */}
          <div
            className="sticky top-0 h-screen w-full overflow-hidden"
            style={{
              backgroundImage: "url('https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/b55ebf5b5_Mala_10.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Top-left badge — ticket shape */}
            <div className="absolute left-0 px-4 md:px-10 lg:px-[3vw]" style={{ top: "70px" }}>
              <TicketBadge />
            </div>

            {/* Title — rises from bottom */}
            <motion.h2
              ref={titleRef}
              className="absolute font-heading font-normal text-white whitespace-nowrap"
              style={{
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
                y: titleY,
                opacity: titleOpacity,
                textTransform: "capitalize",
                letterSpacing: "-0.04em",
                mixBlendMode: "difference",
                fontSize: `${fontSize}px`,
              }}
            >
              Bass You Can Breathe
            </motion.h2>

            {/* Hidden SVG defs for button fill animation */}
            <svg className="absolute" width="0" height="0" style={{ overflow: "hidden" }}>
              <defs>
                <radialGradient id="droplet-gradient">
                  <stop offset="0%" stopColor="#2a2622" />
                  <stop offset="100%" stopColor="#2a2622" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            {/* Bottom content */}
            <motion.div className="absolute left-0 px-4 md:px-10 lg:px-[3vw]" style={{ top: "calc(10rem - 30px)", opacity: contentOpacity }}>
              <div className="flex flex-col items-start gap-3" style={{ maxWidth: "456px" }}>
                <h3 className="font-heading font-light tracking-[-0.02em] text-foreground" style={{ fontSize: "45px", lineHeight: "1.05" }}>Pure Power.<br />Surgical Precision</h3>
                <p className="font-body font-light text-[#2a2622] leading-relaxed" style={{ fontSize: "16px" }}>
                  A dual-driver acoustic engine that moves air more efficiently than anything in its class. By balancing raw strength with surgical precision, it achieves a richer sonic profile. It's deep, distortion-free, and shockingly powerful.
                </p>
                <motion.a
                  href="#preorder"
                  className="inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light border border-[#2a2622] relative overflow-hidden"
                  style={{
                    borderRadius: "5px",
                    color: isHovering ? "white" : "#2a2622",
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}>
                  <motion.div
                    className="absolute inset-0 -z-10"
                    style={{
                      background: "linear-gradient(90deg, #2a2622 0%, #2a2622 100%)",
                      scaleX: isHovering ? 1 : 0,
                      transformOrigin: "left",
                    }}
                    animate={{ scaleX: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  Choose your Mala
                </motion.a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}