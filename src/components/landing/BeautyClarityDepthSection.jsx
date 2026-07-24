import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export default function BeautyClarityDepthSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // === BEAUTY (appears first, continuous movement up) ===
  const beautyYBase = useTransform(scrollYProgress, [0, 0.1], [100, -100]);
  const beautyY = useSpring(beautyYBase, { stiffness: 200, damping: 120 });
  
  const beautyParaYBase = useTransform(scrollYProgress, [0, 0.1], [100, -100]);
  const beautyParaY = useSpring(beautyParaYBase, { stiffness: 200, damping: 120 });

  // === CLARITY (appears second with gap, continuous movement up) ===
  const clarityYBase = useTransform(scrollYProgress, [0, 0.3], [400, -400]);
  const clarityY = useSpring(clarityYBase, { stiffness: 200, damping: 120 });
  
  const clarityParaYBase = useTransform(scrollYProgress, [0, 0.3], [200, -200]);
  const clarityParaY = useSpring(clarityParaYBase, { stiffness: 200, damping: 120 });

  // === DEPTH (appears third with gap, continuous movement up) ===
  const depthYBase = useTransform(scrollYProgress, [0.2, 0.4], [400, -500]);
  const depthY = useSpring(depthYBase, { stiffness: 200, damping: 120 });

  // Typewriter effect — reusable hook
  function useTypewriter(text, delay = 0) {
    const ref = useRef(null);
    const [revealedCount, setRevealedCount] = useState(0);
    const startedRef = useRef(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            setTimeout(() => {
              let i = 0;
              const interval = setInterval(() => {
                i++;
                setRevealedCount(i);
                if (i >= text.length) clearInterval(interval);
              }, 72);
            }, delay);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    return { ref, revealedCount };
  }

  const { ref: beautyRef, revealedCount: beautyCount } = useTypewriter("Beauty", 500);
  const { ref: clarityRef, revealedCount: clarityCount } = useTypewriter("Clarity");
  const { ref: depthRef, revealedCount: depthCount } = useTypewriter("Depth");

  // Images — continuous cascade motion + paragraph 1 synced to image 1 Y
  const imageYBase = useTransform(scrollYProgress, [0, 0.50], [400, -1000]);
  const imageY = useSpring(imageYBase, { stiffness: 200, damping: 120 });
  const beautyParaSyncY = imageY;
  
  const image2YBase = useTransform(scrollYProgress, [0, 0.35], [200, -800]);
  const image2Y = useSpring(image2YBase, { stiffness: 200, damping: 120 });
  
  const image3YBase = useTransform(scrollYProgress, [0.2, 0.9], [0, -1200]);
  const image3Y = useSpring(image3YBase, { stiffness: 300, damping: 220 });

  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        id="beauty-clarity-depth"
        style={{ backgroundColor: "#083B68", paddingBottom: "0", position: "relative" }}
      >
        <div className="relative space-y-8 px-4 py-12">
          {/* Beauty */}
          <div className="space-y-4">
            <h2 className="font-heading font-normal text-[48px] leading-tight tracking-[-0.03em] text-lime">Beauty</h2>
            <p className="font-body font-light text-sm text-lime leading-relaxed max-w-xs">
              Designed to be seen as much as heard. A sculptural presence that elevates every room.
            </p>
            <img
              src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/76264b865_Mala_3.jpg"
              alt="Mala"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Clarity */}
          <div className="space-y-4">
            <h2 className="font-heading font-normal text-[48px] leading-tight tracking-[-0.03em] text-lime">Clarity</h2>
            <p className="font-body font-light text-sm text-lime leading-relaxed max-w-xs">
              Every note, every texture, every detail. Tuned for remarkable precision.
            </p>
            <img
              src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/db03dc362_Mala_6.jpg"
              alt="Mala"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Depth */}
          <div className="space-y-4 pb-8">
            <h2 className="font-heading font-normal text-[48px] leading-tight tracking-[-0.03em] text-lime">Depth</h2>
            <p className="font-body font-light text-sm text-lime leading-relaxed max-w-xs">
              Sound that reaches beyond the surface. Rich, immersive audio that fills the space.
            </p>
            <img
              src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/3fd97ca96_Mala_7.jpg"
              alt="Mala"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="beauty-clarity-depth"
      style={{ height: "300vh", backgroundColor: "#083B68", paddingBottom: "0", position: "relative" }}
    >
      <div
        className="sticky top-0 h-full w-full overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* === BEAUTY === */}
        <motion.h1
          style={{
            fontSize: "210px",
            letterSpacing: "-10px",
            color: "#e8ff70",
            fontWeight: "400",
            margin: 0,
            lineHeight: "1.2",
            position: "absolute",
            top: "calc(8vh - 100px)",
            left: "calc(3vw - 15px)",
            zIndex: 10,
            y: beautyY,
          }}
          ref={beautyRef}
        >
          {"Beauty".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={i < beautyCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          style={{
            fontSize: "18px",
            color: "#e8ff70",
            fontWeight: "300",
            maxWidth: "280px",
            lineHeight: "1.5",
            position: "absolute",
            top: "calc(8vh + 130px)",
            left: "3vw",
            zIndex: 10,
            y: beautyY,
          }}
        >
          Designed to be seen as much as heard. A sculptural presence that elevates every room, even before the music begins.
        </motion.p>

        {/* === CLARITY === */}
        <motion.div
          style={{
            position: "absolute",
            top: "calc(50% - 360px)",
            left: "50%",
            x: "-50%",
            y: clarityParaY,
            zIndex: 10,
            display: "flex",
            alignItems: "flex-start",
            gap: "3vw",
          }}
        >
          <motion.h2
            ref={clarityRef}
           style={{
              fontSize: "210px",
               letterSpacing: "-10px",
               color: "#e8ff70",
               fontWeight: "400",
               margin: 0,
               lineHeight: "1",
               whiteSpace: "nowrap",
               flexShrink: 0,
            }}
           >
            {"Clarity".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={i < clarityCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            style={{
              fontSize: "18px",
              color: "#e8ff70",
              fontWeight: "300",
              width: "280px",
              lineHeight: "1.6",
              textAlign: "left",
              margin: 0,
              marginTop: "auto",
              transform: "translateY(60px)",
            }}
          >
            Every note, every texture, every detail. Tuned for remarkable precision and effortless listening.
          </motion.p>
        </motion.div>

        {/* === DEPTH === */}
        <motion.div
          style={{
            position: "absolute",
            right: "calc(3vw + 15px)",
            bottom: "-10vh",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            y: depthY,
          }}
        >
          <motion.h3
            ref={depthRef}
            style={{
              fontSize: "210px",
              letterSpacing: "-10px",
              color: "#e8ff70",
              fontWeight: "400",
              margin: 0,
              lineHeight: "1",
              marginBottom: "8px",
              position: "relative",
              left: "-15px",
            }}
          >
            {"Depth".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={i < depthCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <motion.p
            style={{
              fontSize: "18px",
              color: "#e8ff70",
              fontWeight: "300",
              maxWidth: "290px",
              lineHeight: "1.35",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            Sound that reaches beyond the surface. Rich, immersive audio that fills the space and stays with you.
          </motion.p>
        </motion.div>

        {/* === IMAGES === */}
        <motion.div
          className="absolute"
          style={{ y: imageY, zIndex: 0, right: '-25%', top: 'calc(-5% - 150px)' }}
        >
          <img
            src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/76264b865_Mala_3.jpg"
            alt="Mala"
            className="h-auto"
            style={{ transform: "scale(0.425)" }}
          />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ y: image2Y, zIndex: 5, left: '-20vw', top: 'calc(15vh + 750px)' }}
        >
          <img
            src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/db03dc362_Mala_6.jpg"
            alt="Mala"
            className="h-auto"
            style={{ transform: "scale(0.35)" }}
          />
        </motion.div>

        {/* Image 3 - inside sticky */}
        <motion.div
          className="absolute"
          style={{ y: image3Y, zIndex: 20, left: 'calc(3vw - 920px)', top: 'calc(80vh + 1730px)' }}
        >
          <img
            src="https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/3fd97ca96_Mala_7.jpg"
            alt="Mala"
            className="h-auto"
            style={{ transform: "scale(0.238)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}