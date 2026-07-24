import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import LeftLogo from "./LeftLogo";
import PreOrderModal from "./PreOrderModal";

const HERO_SPEAKER = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/5b83a1b50_generated_299e4b72.png";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Kinetic rotation logic
  const [isHoveringPreorder, setIsHoveringPreorder] = useState(false);
  const [isHoveringFilm, setIsHoveringFilm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastYRef = useRef(null);
  const lastXRef = useRef(null);
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = performance.now();
      const currentY = e.clientY;
      const currentX = e.clientX;

      if (lastYRef.current !== null && lastTimeRef.current !== null) {
        const dt = now - lastTimeRef.current;
        if (dt > 0) {
          const dy = currentY - lastYRef.current;
          const dx = currentX - lastXRef.current;
          // Y: up = clockwise (+), down = counter-clockwise (-)
          // X: right = clockwise (+), left = counter-clockwise (-)
          velocityRef.current = ((-dy + dx) / dt) * 20;
        }
      }

      lastYRef.current = currentY;
      lastXRef.current = currentX;
      lastTimeRef.current = now;
    };

    const handleScroll = () => {
      velocityRef.current += 5;
    };

    const animate = () => {
      velocityRef.current *= 0.95; // inertia damping
      rotationRef.current += velocityRef.current;
      setRotation(rotationRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Title scrolls faster, paragraph scrolls slower
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const paraY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <PreOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Desktop layout */}
      <div className="hidden md:flex relative min-h-screen items-start justify-center overflow-hidden" style={{ backgroundImage: "url('https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/84f9e478a_Speaker_Gemini_3__Nano_Banana_Pro__2026-06-09_08-21-39.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Background ripple rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.03] animate-ripple" />
          <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/[0.05] animate-ripple" style={{ animationDelay: "1s" }} />
          <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-white/[0.07] animate-ripple" style={{ animationDelay: "2s" }} />
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw] pt-40 self-start">
          <div className="flex justify-end">
            <div className="flex flex-col items-start gap-6 max-w-lg w-full md:w-auto">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: titleY }}
                className="font-heading font-normal text-[45px] leading-[0.9] tracking-[-0.04em] text-[#434141]">
                Sound, Shaped.
              </motion.h1>

              {/* Subheadline — slower parallax, shorter text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y: paraY }}
                className="text-[15px] font-body text-[#434141] leading-relaxed max-w-[280px]">
                Immersive 360° audio engineered to be felt, not just heard.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ y: ctaY }}
                className="flex flex-row items-center gap-4">
                
                <motion.button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light relative overflow-hidden"
                  style={{ backgroundColor: "#e8ff70", borderRadius: "5px", color: isHoveringPreorder ? "white" : "#2a2622", transition: "color 0.3s", zIndex: 0 }}
                  onMouseEnter={() => setIsHoveringPreorder(true)}
                  onMouseLeave={() => setIsHoveringPreorder(false)}>
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "#2a2622", transformOrigin: "left", zIndex: 0 }}
                    animate={{ scaleX: isHoveringPreorder ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} />
                  <span className="relative" style={{ zIndex: 1 }}>Pre-Order Now</span>
                </motion.button>
                <motion.button
                  className="inline-flex items-center gap-2 h-10 px-5 text-sm font-body font-light relative overflow-hidden backdrop-blur-md bg-white/20 border border-neutral-500/60"
                  style={{ borderRadius: "5px", color: isHoveringFilm ? "white" : "hsl(var(--foreground))", transition: "color 0.3s" }}
                  onMouseEnter={() => setIsHoveringFilm(true)}
                  onMouseLeave={() => setIsHoveringFilm(false)}>
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "#2a2622", transformOrigin: "left", zIndex: 0 }}
                    animate={{ scaleX: isHoveringFilm ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} />
                  <span className="relative" style={{ zIndex: 1 }}>Watch the Film</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom waveform edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-waveform" />
        
        {/* Logo */}
        <LeftLogo />
      </div>

      {/* Mobile layout - split into 2 sections */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Top section - black background with text */}
        <div className="flex-1 min-h-[32vh] bg-[#1a1a1a] flex flex-col items-start justify-center px-4 pt-20 pb-10">
          <div className="w-full flex flex-col items-start gap-6">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-normal text-[48px] leading-[0.9] tracking-[-0.04em] text-white">
              Sound, Shaped.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[14px] font-body text-white/80 leading-relaxed max-w-[220px]">
              Immersive 360° audio engineered to be felt, not just heard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row gap-3 w-auto">
              
              <motion.button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light relative overflow-hidden"
                style={{ backgroundColor: "#e8ff70", borderRadius: "5px", color: "#1a1a1a", transition: "color 0.3s", zIndex: 0 }}>
                <span className="relative" style={{ zIndex: 1 }}>Pre-Order Now</span>
              </motion.button>
              <motion.button
                className="inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-body font-light relative overflow-hidden backdrop-blur-md border border-white"
                style={{ borderRadius: "5px", color: isHoveringFilm ? "#1a1a1a" : "white", transition: "color 0.3s" }}
                onMouseEnter={() => setIsHoveringFilm(true)}
                onMouseLeave={() => setIsHoveringFilm(false)}>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "#e8ff70", transformOrigin: "left", zIndex: 0 }}
                  animate={{ scaleX: isHoveringFilm ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} />
                <span className="relative" style={{ zIndex: 1 }}>Watch the Film</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom section - image and logo */}
        <div className="relative flex-1 min-h-[55vh] bg-background" style={{ backgroundImage: "url('https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/84f9e478a_Speaker_Gemini_3__Nano_Banana_Pro__2026-06-09_08-21-39.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))" }} />
          <LeftLogo isHero={false} logoWidth="full" />
        </div>
      </div>
    </section>);

}