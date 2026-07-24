import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      toast.error("Tell us a little about your project.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative bg-foreground overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw] py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-lime"></span>
              <span className="text-xs font-body tracking-[0.2em] uppercase text-background/50">
                Let's Talk
              </span>
            </div>
            <h2 className="font-heading font-normal text-[36px] md:text-[64px] leading-[1.0] tracking-[-0.04em] text-background mb-8">
              Have a project in mind?
            </h2>
            <p className="text-base md:text-lg font-body font-light text-background/60 leading-relaxed max-w-md mb-10">
              Tell us what you're building. We'll get back to you within 24 hours
              with next steps — no pressure, no sales pitch.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-lime" />
                </div>
                <span className="text-sm font-body text-background/80">hello@lumenstudio.co</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-lime" />
                </div>
                <span className="text-sm font-body text-background/80">Remote — working worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-background/10 bg-background/[0.03]">
                <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mb-6">
                  <ArrowRight className="w-7 h-7 text-lime" />
                </div>
                <h3 className="font-heading font-normal text-2xl text-background mb-2">
                  Message received.
                </h3>
                <p className="text-sm font-body font-light text-background/60">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-body tracking-wider uppercase text-background/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full h-12 px-4 bg-background/5 border border-background/15 rounded-lg text-sm font-body text-background placeholder:text-background/30 focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body tracking-wider uppercase text-background/50 mb-2">
                    Project Details
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What are you building? What do you need help with?"
                    rows={5}
                    className="w-full px-4 py-3 bg-background/5 border border-background/15 rounded-lg text-sm font-body text-background placeholder:text-background/30 focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 bg-lime text-foreground text-sm font-body font-light rounded-full hover:bg-background hover:text-foreground transition-colors duration-300"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}