import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="px-4 md:px-10 lg:px-[3vw]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="font-heading font-semibold text-xl tracking-tight text-foreground flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime"></span>
              Lumen
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light bg-foreground text-background rounded-full hover:bg-lime hover:text-foreground transition-colors duration-300"
              >
                Let's Talk
              </motion.button>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-foreground"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-heading font-semibold text-xl text-background">Lumen</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-background"
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
                  transition={{ delay: i * 0.08 }}
                  className="text-3xl font-heading font-medium text-background"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center justify-center h-12 px-8 text-base font-heading font-light bg-lime text-foreground rounded-full"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}