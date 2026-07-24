import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, Battery, Radio } from "lucide-react";

const EXPLODED_IMAGE = "https://media.base44.com/images/public/6a27c8f30cf14255c1f76d8d/6477f3f34_generated_6fdad08b.png";

const features = [
  {
    id: "01",
    icon: Headphones,
    title: "Studio sound. No studio required.",
    description: "Custom-engineered dual drivers deliver pure high-fidelity audio.",
  },
  {
    id: "02",
    icon: Battery,
    title: "Outlasts the party. And the afterparty.",
    description: "30 hours of continuous playback on a single charge.",
  },
  {
    id: "03",
    icon: Radio,
    title: "One tap. Total takeover.",
    description: "Instant multi-room pairing. Fill your entire home with one gesture.",
  },
];

function FeatureCard({ feature, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
    >
      {/* Number tag */}
      <span className="text-[10px] font-heading font-medium tracking-[0.2em] uppercase text-primary/60 mb-6 block">
        {feature.id}
      </span>

      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
        <feature.icon className="w-5 h-5 text-primary" />
      </div>

      <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3 leading-tight">
        {feature.title}
      </h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Waveform edge on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-700" />
    </motion.div>
  );
}

export default function InnovationGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return null;
}