import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TicketBadge from "./TicketBadge";

const colorModes = [
  {
    id: "teal",
    name: "תכלת",
    backgroundColor: "#96A3B4",
    dotColor: "#C9CCD8",
    image: "https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/1681f160f_Speaker_2_Gemini_3__Nano_Banana_Pro__2026-06-17_07-40-15.png",
    label: "Glacier\nMist"
  },
  {
    id: "orange",
    name: "כתום",
    backgroundColor: "#CA560E",
    dotColor: "#F27E3A",
    image: "https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/31ccb6fb9_Speaker_2_Gemini_3__Nano_Banana_Pro__2026-06-17_07-39-42.png",
    label: "Amber\nPulse"
  },
  {
    id: "yellow",
    name: "צהוב",
    backgroundColor: "#C1BD45",
    dotColor: "#E8FF70",
    image: "https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/0ada76515_Speaker_2_Gemini_3__Nano_Banana_Pro__2026-06-17_07-59-11.png",
    label: "Lumen\nLime"
  },
  {
    id: "white",
    name: "לבן",
    backgroundColor: "#F1F1F1",
    dotColor: "#F7F5F2",
    image: "https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/93721169a_Speaker_2_Gemini_3__Nano_Banana_Pro__2026-06-17_07-40-06.png",
    label: "Moon\nLinen"
  }
];

const SLIDE_EASE = [0.4, 0, 0.2, 1];
const DURATION = 0.8;

export default function ColorsSection() {
  const [selectedMode, setSelectedMode] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const prevModeRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (index) => {
    if (index === selectedMode) return;
    directionRef.current = index > selectedMode ? 1 : -1;
    prevModeRef.current = selectedMode;
    setSelectedMode(index);
  };

  const currentMode = colorModes[selectedMode];
  const dir = directionRef.current;

  return (
    <section id="colorways" className="w-full h-screen overflow-hidden relative">

      {/* Sliding background panels */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={currentMode.id + "-bg"}
          custom={dir}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: DURATION, ease: SLIDE_EASE }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: currentMode.backgroundColor,
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Badge and Title */}
      <div className="absolute left-0 px-4 md:px-10 lg:px-[3vw] z-20 flex flex-col gap-6" style={{ top: "70px" }}>
        <div>
          <TicketBadge text="The Colors" />
        </div>
        <h2
          style={{
            fontSize: isMobile ? "32px" : "60px",
            letterSpacing: "-0.04em",
            color: currentMode.id === "white" ? "#2a2622" : "#ffffff",
            fontWeight: "400",
            margin: 0,
            lineHeight: "1",
            transition: "color 0.3s ease"
          }}>
          Choose
          <br />
          Your Mala
        </h2>
      </div>

      {/* Circles Row */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "86px",
          alignItems: "center",
          zIndex: 10
        }}>
        {colorModes.map((mode, index) => (
          <button
            key={mode.id}
            onClick={() => handleSelect(index)}
            style={{
              width: selectedMode === index ? "32px" : "18px",
              height: selectedMode === index ? "32px" : "18px",
              borderRadius: "50%",
              backgroundColor: mode.dotColor,
              border: currentMode.id === "white" && (mode.id === "white" || mode.id === "yellow") ? "1px solid #cccccc" : "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }} />
        ))}
      </div>

      {/* Center Image — slides in from left, exits to right */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentMode.id + "-img"}
          src={currentMode.image}
          alt="Speaker"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
          style={{
            position: "absolute",
            top: isMobile ? "calc(50% + 80px)" : "50%",
            bottom: isMobile ? "auto" : "auto",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            height: isMobile ? "49vh" : "70vh",
            width: "auto",
            objectFit: "contain",
            zIndex: 10,
          }}
        />
      </AnimatePresence>

      {/* Text Label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMode + "-label"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(50% + 35vh)",
            transform: "translateY(-50%)",
            zIndex: 20,
            fontFamily: "'Google Sans Code', monospace",
            fontSize: "13px",
            color: currentMode.id === "white" ? "#2a2622" : "#ffffff",
            fontWeight: "300",
            lineHeight: "1.3",
            maxWidth: "80px",
            wordWrap: "break-word",
            whiteSpace: "pre-line"
          }}>
          {currentMode.label}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}