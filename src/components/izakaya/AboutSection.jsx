import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/50">About</span>
          <h2 className="mt-4 font-heading font-normal text-[32px] md:text-[48px] leading-tight tracking-tight text-foreground">
            一杯、一期一会
          </h2>
          <p className="mt-6 text-sm md:text-base font-body font-light text-foreground/70 leading-relaxed">專為職場新人與骨幹打造的避風港 💼 圍爐|吹水|分享真實職場生態|拒絕所有職場 PUA 🙅‍♂️ 亂世之中，一齊向上、自我增值 ✨


          </p>
          <p className="mt-4 text-sm md:text-base font-body font-light text-foreground/70 leading-relaxed">


          </p>
          <div className="mt-10 inline-block px-8 py-4 rounded-full border border-border hidden">
            <span className="font-heading text-lg text-aka">ようこそ</span>
            <span className="ml-3 text-sm font-body text-foreground/50">Welcome</span>
          </div>
        </motion.div>
      </div>
    </section>);

}