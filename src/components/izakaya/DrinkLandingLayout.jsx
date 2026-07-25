import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function DrinkLandingLayout({ drink }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${drink.image})` }} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <Link
        to="/#drink"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-washi/70 hover:text-washi transition-colors">
        
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to home</span>
      </Link>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase [font-family:'Abril_Fatface',_system-ui] text-[hsl(var(--sidebar-background))]">
          
          Shokunin Izakaya
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-4 font-normal text-[56px] md:text-[96px] leading-[0.9] tracking-tight [font-family:'Abril_Fatface',_system-ui] text-[hsl(var(--card))]">
          
          {drink.jp}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-sm md:text-base font-body font-light max-w-md mx-auto leading-relaxed text-[hsl(var(--card))]">
          
          {drink.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3">
          
          <span className="text-3xl [font-family:'Abril_Fatface',_system-ui] text-[hsl(var(--popover))]">
            {drink.price}
          </span>
          <button
            onClick={() =>
            toast.success(`ありがとうございます! You bought a ${drink.name}.`)
            }
            className="px-8 py-3 rounded-full bg-aka text-white text-sm font-medium tracking-wide hover:bg-aka/90 transition-colors">
            
            Buy me this drink
          </button>
        </motion.div>
      </div>
    </section>);

}