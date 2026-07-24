import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Northwind",
    category: "E-commerce Platform",
    description: "A headless storefront with a 3x faster checkout and 40% higher conversion.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    color: "#0F4C5C",
  },
  {
    title: "Pulse Health",
    category: "Mobile App Design",
    description: "A patient-centered wellness app with an award-winning onboarding flow.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    color: "#9D4EDD",
  },
  {
    title: "Ember Coffee",
    category: "Brand & Identity",
    description: "A warm, tactile brand system for a specialty roaster going national.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    color: "#D62828",
  },
  {
    title: "Atlas Analytics",
    category: "Web Application",
    description: "A real-time dashboard that turns complex data into clear, confident decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "#1B4332",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-foreground py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-lime"></span>
              <span className="text-xs font-body tracking-[0.2em] uppercase text-background/50">
                Selected Work
              </span>
            </div>
            <h2 className="font-heading font-normal text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.03em] text-background">
              Projects we're proud of.
            </h2>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 text-sm font-body text-lime hover:text-background transition-colors"
          >
            Start your project
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply"
                  style={{ backgroundColor: project.color }}
                />
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-body tracking-wider uppercase text-background/50">
                  {project.category}
                </span>
                <h3 className="mt-2 font-heading font-normal text-2xl md:text-3xl text-background">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-body font-light text-background/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}