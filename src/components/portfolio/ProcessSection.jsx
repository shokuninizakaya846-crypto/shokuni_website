import { motion } from "framer-motion";

const steps = [
{
  num: "01",
  title: "Discover",
  description: "We dig deep into your goals, audience, and competition to find the right problem to solve."
},
{
  num: "02",
  title: "Design",
  description: "We sketch, prototype, and refine — turning ideas into tangible, testable experiences."
},
{
  num: "03",
  title: "Build",
  description: "We develop with clean, modern code — fast, accessible, and built to last."
},
{
  num: "04",
  title: "Launch",
  description: "We ship, measure, and iterate — making sure your product keeps growing after go-live."
}];


export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-background py-24 md:py-32 hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-lime"></span>
            <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/60">
              How We Work
            </span>
          </div>
          <h2 className="font-heading font-normal text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.03em] text-foreground">
            A clear path from idea to impact.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) =>
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative">
            
              <span className="font-heading font-normal text-5xl md:text-6xl text-lime/80">
                {step.num}
              </span>
              <h3 className="mt-4 font-heading font-normal text-xl md:text-2xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-body font-light text-foreground/60 leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 &&
            <div className="hidden lg:block absolute top-7 -right-3 w-6 h-px bg-border"></div>
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}