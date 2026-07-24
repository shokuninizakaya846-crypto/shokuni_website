export default function FooterSection() {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[3vw] py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime"></span>
            <span className="font-heading font-semibold text-lg text-background">Lumen</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="/terms" className="text-sm font-body text-background/50 hover:text-background transition-colors duration-300">
              Terms & Conditions
            </a>
            <a href="/refund-policy" className="text-sm font-body text-background/50 hover:text-background transition-colors duration-300">
              Refund Policy
            </a>
            <a href="/accessibility" className="text-sm font-body text-background/50 hover:text-background transition-colors duration-300">
              Accessibility
            </a>
            <a href="/privacy" className="text-sm font-body text-background/50 hover:text-background transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10">
          <p className="text-xs font-body text-background/40">
            Lumen Studio © 2026. All rights reserved. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}