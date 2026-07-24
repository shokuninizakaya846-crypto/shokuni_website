import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/50">About</span>
          <h2 className="mt-4 font-heading font-normal text-[32px] md:text-[48px] leading-tight tracking-tight text-foreground">
            一杯、一期一会
          </h2>
          <p className="mt-6 text-sm md:text-base font-body font-light text-foreground/70 leading-relaxed">
            Shokunin Izakaya is born from the spirit of the craftsman — the <em>shokunin</em> who
            devotes a lifetime to mastering one thing. Here, that one thing is hospitality.
          </p>
          <p className="mt-4 text-sm md:text-base font-body font-light text-foreground/70 leading-relaxed">
            Each cup is poured slowly. Each guest is welcomed like family. No rush, no noise —
            just good drink, good food, and good company under the lantern light.
          </p>
          <div className="mt-10 inline-block px-8 py-4 rounded-full border border-border">
            <span className="font-heading text-lg text-aka">ようこそ</span>
            <span className="ml-3 text-sm font-body text-foreground/50">Welcome</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}