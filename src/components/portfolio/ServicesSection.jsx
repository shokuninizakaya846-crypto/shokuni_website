import { motion } from "framer-motion";
import { Palette, Code2, Sparkles, LineChart } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Identity",
    description: "Logo systems, visual language, and brand guidelines that make you unforgettable.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, accessible websites and web apps built with modern frameworks and clean code.",
  },
  {
    icon: Sparkles,
    title: "Product Design",
    description: "End-to-end UX research, wireframes, and high-fidelity prototypes that users love.",
  },
  {
    icon: LineChart,
    title: "Growth Strategy",
    description: "Data-driven roadmaps, SEO, and conversion optimization to scale your impact.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-lime"></span>
            <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/60">
              What We Do
            </span>
          </div>
          <h2 className="font-heading font-normal text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.03em] text-foreground">
            Everything you need to launch something great.
          </h2>
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-lime/40 hover:bg-lime/[0.03] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-lime/20 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-heading font-normal text-xl md:text-2xl text-foreground mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base font-body font-light text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}