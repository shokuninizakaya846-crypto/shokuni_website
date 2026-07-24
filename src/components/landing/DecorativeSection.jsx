import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function DecorativeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative w-screen -mx-[calc((100vw-100%)/2)]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        
        


        
        
      </motion.div>
    </section>);

}