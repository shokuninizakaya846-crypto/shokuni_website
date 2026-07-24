import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLogo from "./NavLogo";
import PreOrderModal from "./PreOrderModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringPreorder, setIsHoveringPreorder] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [whiteText, setWhiteText] = useState(false);
  const [mobileInHero, setMobileInHero] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Hero section is at the top; once user scrolls past ~screen height, we're out
      setMobileInHero(window.scrollY < window.innerHeight * 0.85);
      const preorder = document.getElementById("preorder");
      if (preorder) {
        const rect = preorder.getBoundingClientRect();
        setHidden(rect.top <= 80);
      }
      const bcd = document.getElementById("beauty-clarity-depth");
      if (bcd) {
        const rect = bcd.getBoundingClientRect();
        setWhiteText(rect.top <= 80 && rect.bottom > 80);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sound", href: "#TheSound" },
    { label: "Features", href: "#innovation" },
    { label: "Colors", href: "#colorways" },
  ];

  return (
    <>
      <PreOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent"
      >
        <div className="px-4 md:px-10 lg:px-[3vw]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="font-heading font-bold text-xl tracking-tight text-foreground">
              <NavLogo />
            </a>

            <div className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2 px-5 py-3 rounded-lg bg-white/15 backdrop-blur-md border border-white/30">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body transition-colors duration-300 ${whiteText ? "text-white hover:text-white/80" : "text-black hover:text-black/80"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setModalOpen(true)}
                className="hidden md:inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light bg-lime relative overflow-hidden shadow-none"
                style={{ borderRadius: "5px", color: isHoveringPreorder ? "white" : "#2a2622", transition: "color 0.3s" }}
                onMouseEnter={() => setIsHoveringPreorder(true)}
                onMouseLeave={() => setIsHoveringPreorder(false)}>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "#2a2622", transformOrigin: "left", zIndex: 0 }}
                  animate={{ scaleX: isHoveringPreorder ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} />
                <span className="relative" style={{ zIndex: 1 }}>Pre-Order Now</span>
              </motion.button>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2"
                style={{ color: mobileInHero ? "white" : "hsl(var(--foreground))" }}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0B]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-heading font-bold text-xl text-foreground">Mala</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-heading font-bold text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#preorder"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center justify-center h-12 px-8 text-base font-heading font-medium bg-primary text-primary-foreground rounded-full"
              >
                Pre-Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}