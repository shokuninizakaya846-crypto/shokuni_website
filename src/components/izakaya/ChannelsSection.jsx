import { motion } from "framer-motion";
import { Youtube, Instagram, MessageCircle } from "lucide-react";

const channels = [
  { icon: Youtube, name: "YouTube", handle: "@shokunin.izakaya", href: "#" },
  { icon: Instagram, name: "Instagram", handle: "@shokunin.izakaya", href: "#" },
  { icon: MessageCircle, name: "Discord", handle: "Shokunin Tavern", href: "#" },
];

export default function ChannelsSection() {
  return (
    <section id="channels" className="bg-foreground py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-washi/50">Channels</span>
          <h2 className="mt-4 font-heading font-normal text-[32px] md:text-[48px] leading-tight tracking-tight text-washi">
            つながり
          </h2>
          <p className="mt-4 text-sm font-body font-light text-washi/60 max-w-md mx-auto">
            Follow the tavern. Stories, recipes, and late-night tales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.name}
              href={ch.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-washi/10 bg-washi/[0.03] hover:bg-aka/10 hover:border-aka/30 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-washi/10 flex items-center justify-center mb-4 group-hover:bg-aka transition-colors duration-500">
                <ch.icon className="w-5 h-5 text-washi" />
              </div>
              <h3 className="font-heading text-lg text-washi">{ch.name}</h3>
              <p className="mt-1 text-xs font-body text-washi/50">{ch.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}