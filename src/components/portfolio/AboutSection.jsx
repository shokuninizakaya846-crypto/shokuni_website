import { motion } from "framer-motion";

const team = [
  { name: "Maya Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Daniel Roth", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Aisha Rahman", role: "Product Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Tom Becker", role: "Strategy Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-lime"></span>
              <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/60">
                About Us
              </span>
            </div>
            <h2 className="font-heading font-normal text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.03em] text-foreground mb-8">
              A small team with a big appetite for craft.
            </h2>
            <div className="space-y-5 text-sm md:text-base font-body font-light text-foreground/70 leading-relaxed">
              <p>
                Lumen Studio was founded on a simple belief: great design and great engineering
                belong together. We're a tight-knit team of designers, developers, and strategists
                who care deeply about the details.
              </p>
              <p>
                We partner with founders and teams who want to build something meaningful — not just
                shipped, but crafted. No handoffs, no silos. Just a focused team working alongside
                you from kickoff to launch.
              </p>
            </div>
          </motion.div>

          {/* Right — team */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading font-normal text-base md:text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm font-body font-light text-foreground/50">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}