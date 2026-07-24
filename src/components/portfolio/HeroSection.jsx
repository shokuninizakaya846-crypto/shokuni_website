import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw] pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-lime animate-pulse-glow"></span>
          <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/60">
            Creative Digital Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-heading font-normal text-[42px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.04em] text-foreground max-w-4xl"
        >
          We craft digital experiences that{" "}
          <span className="relative">
            move people
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
              <path d="M2 8C60 3 120 2 180 4C240 6 270 8 298 5" stroke="hsl(72 100% 72%)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          .
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-base md:text-lg font-body font-light text-foreground/70 leading-relaxed max-w-xl"
        >
          Lumen Studio is a design and development agency helping ambitious brands
          build beautiful, functional products — from first sketch to final launch.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-12 px-7 text-sm font-body font-light bg-foreground text-background rounded-full hover:bg-lime hover:text-foreground transition-colors duration-300"
          >
            View Our Work
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center h-12 px-7 text-sm font-body font-light border border-foreground/20 text-foreground rounded-full hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            Start a Project
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16 max-w-2xl"
        >
          {[
            { num: "10+", label: "Years of craft" },
            { num: "80+", label: "Projects shipped" },
            { num: "30+", label: "Happy partners" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading font-normal text-3xl md:text-4xl text-foreground">{s.num}</div>
              <div className="mt-1 text-xs md:text-sm font-body text-foreground/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}