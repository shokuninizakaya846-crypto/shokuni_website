import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1600&h=1000&fit=crop";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sumi">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Shokunin Izakaya" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-sumi/60 via-sumi/30 to-sumi/80" />
      </div>

      {/* Lantern decorations */}
      <div className="absolute top-24 left-[10%] hidden md:block">
        
      </div>
      <div className="absolute top-32 right-[12%] hidden md:block">
        
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4">
          
          <span className="text-xs tracking-[0.3em] uppercase [font-family:'Abril_Fatface',_system-ui] text-[hsl(var(--obsidian))]">SHOKUNIN IZAKAYA</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-normal text-[48px] md:text-[80px] leading-[0.95] tracking-tight text-[hsl(var(--popover-foreground))] [font-family:'Great_Vibes',_system-ui]">
          
          職人居酒屋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-sm md:text-base font-body font-light text-washi/70 max-w-md mx-auto leading-relaxed">
          
          A craftsman's tavern. Where every drink is poured with intention.
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 text-washi/50 hover:text-aka transition-colors">
          
          <ArrowDown className="w-4 h-4 animate-float" />
        </motion.a>
      </div>
    </section>);

}