import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const OBSIDIAN_SPEAKER = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/5b83a1b50_generated_299e4b72.png";
const ARCTIC_SPEAKER = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/ae7cb1a10_generated_720f283c.png";
const OBSIDIAN_TEXTURE = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/c70b5242b_generated_b3278d14.png";
const ARCTIC_TEXTURE = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/dc5c3af9b_generated_ff811262.png";

const colorways = [
  {
    id: "obsidian",
    name: "Obsidian Black",
    desc: "Deep matte black with dark steel accents",
    speaker: OBSIDIAN_SPEAKER,
    texture: OBSIDIAN_TEXTURE,
    bg: "bg-[#0A0A0B]",
    textColor: "text-[#E2E2E2]",
  },
  {
    id: "arctic",
    name: "Arctic White",
    desc: "Pure chalk white with sandblasted aluminum accents",
    speaker: ARCTIC_SPEAKER,
    texture: ARCTIC_TEXTURE,
    bg: "bg-[#F5F5F7]",
    textColor: "text-[#1D1D1F]",
  },
];

export default function ColorwaySection() {
  const [active, setActive] = useState("obsidian");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const current = colorways.find((c) => c.id === active);

  return (
    <section id="colorways" className="relative py-24 md:py-40 overflow-hidden transition-colors duration-700" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[10vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-xs font-heading font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Colorways
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.9] text-foreground">
            Pick your frequency.
          </h2>
        </motion.div>

        {/* Color switcher */}
        <div className="flex justify-center gap-4 mb-12 md:mb-20">
          {colorways.map((cw) => (
            <button
              key={cw.id}
              onClick={() => setActive(cw.id)}
              className={`group flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 ${
                active === cw.id
                  ? "border-primary bg-primary/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 transition-colors ${
                  cw.id === "obsidian" ? "bg-[#0A0A0B] border-white/20" : "bg-[#F5F5F7] border-[#1D1D1F]/20"
                } ${active === cw.id ? "ring-2 ring-primary ring-offset-2 ring-offset-[#0A0A0B]" : ""}`}
              />
              <span className="text-sm font-heading font-medium text-foreground">
                {cw.name}
              </span>
            </button>
          ))}
        </div>

        {/* Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texture panel */}
          <motion.div
            key={current.id + "-texture"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src={current.texture}
              alt={`${current.name} texture close-up`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-heading tracking-[0.15em] uppercase text-white/60 mb-1">
                Material Detail
              </p>
              <p className="font-heading font-bold text-xl text-white">
                {current.name}
              </p>
              <p className="text-sm font-body text-white/60 mt-1">
                {current.desc}
              </p>
            </div>
          </motion.div>

          {/* Speaker */}
          <motion.div
            key={current.id + "-speaker"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/5 blur-[60px]" />
              </div>
              <img
                src={current.speaker}
                alt={`Mala AeroBeat Pro in ${current.name}`}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}