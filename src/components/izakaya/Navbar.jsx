import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { label: "About", href: "#about" },
  { label: "Join membership", href: "#drink" }];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-washi/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="px-4 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          


          
          <div className="flex items-center gap-2 md:gap-3">
            {links.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="hover:text-aka transition-colors duration-300 px-2 md:px-3 py-1.5 rounded-full hover:bg-aka/5 text-[hsl(var(--obsidian))] [font-family:'Abril_Fatface',_system-ui] text-sm md:text-sm">
              
                {link.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>);

}