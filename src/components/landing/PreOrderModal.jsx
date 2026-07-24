import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

const IMG_URL = "https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/4f17e09c3_Mala_10.jpg";

export default function PreOrderModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updates, setUpdates] = useState(false);
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
    toast.success("You're on the list. We'll be in touch.");
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Left — text + form */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-12">
              <h2 className="font-heading font-normal text-[32px] leading-tight tracking-[-0.03em] text-[#2a2622] mb-3">
                Be first to own<br />AeroBeat Pro.
              </h2>
              <p className="text-sm font-body font-light text-[#2a2622]/70 leading-relaxed mb-8">
                Reserve yours before the official launch. Early backers get exclusive pricing and priority shipping.
              </p>

              {submitted ? (
                <div className="text-center py-6">
                  <p className="font-heading text-xl text-[#2a2622]">You're on the list.</p>
                  <p className="text-sm font-body text-[#2a2622]/60 mt-2">We'll reach out when it's your turn.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 border border-[#e0e0e0] rounded-lg text-sm font-body text-[#2a2622] placeholder:text-[#2a2622]/40 focus:outline-none focus:border-[#F27823] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-11 px-4 border border-[#e0e0e0] rounded-lg text-sm font-body text-[#2a2622] placeholder:text-[#2a2622]/40 focus:outline-none focus:border-[#F27823] transition-colors"
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={updates}
                      onChange={(e) => setUpdates(e.target.checked)}
                      className="mt-0.5 accent-[#F27823] w-4 h-4 flex-shrink-0"
                    />
                    <span className="text-xs font-body font-light text-[#2a2622]/60 leading-relaxed">
                      I'd like to receive product updates, launch announcements, and exclusive offers from Mala.
                    </span>
                  </label>
                  <motion.button
                    type="submit"
                    className="mt-2 h-11 w-full bg-[#2a2622] text-white text-sm font-body font-light rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "#e8ff70", transformOrigin: "left", zIndex: 0 }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovering ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <span className="relative" style={{ zIndex: 1, color: isHovering ? "#2a2622" : "white" }}>Reserve My Spot</span>
                  </motion.button>
                </form>
              )}
            </div>

            {/* Right — image */}
            <div className="hidden md:block w-[280px] flex-shrink-0">
              <img
                src={IMG_URL}
                alt="AeroBeat Pro"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}