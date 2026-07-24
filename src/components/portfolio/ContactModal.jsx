import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function ContactModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsHovering(false);
    setSubmitted(false);
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 bg-background rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            <div className="px-8 py-10">
              <h2 className="font-heading font-normal text-[28px] leading-tight tracking-[-0.03em] text-foreground mb-3">
                Let's build something.
              </h2>
              <p className="text-sm font-body font-light text-foreground/60 leading-relaxed mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-6">
                  <p className="font-heading text-xl text-foreground">Message received.</p>
                  <p className="text-sm font-body text-foreground/50 mt-2">
                    We'll reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 border border-border rounded-lg text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-11 px-4 border border-border rounded-lg text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition-all"
                  />
                  <textarea
                    placeholder="What are you building?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition-all resize-none"
                  />
                  <motion.button
                    type="submit"
                    className="mt-2 h-11 w-full bg-foreground text-background text-sm font-body font-light rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "hsl(72 100% 72%)", transformOrigin: "left", zIndex: 0 }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovering ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <span className="relative" style={{ zIndex: 1, color: isHovering ? "hsl(var(--foreground))" : "hsl(var(--background))" }}>
                      Send Message
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}