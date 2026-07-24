import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import PreOrderModal from "./PreOrderModal";

export default function CloserSection() {
  const [isHoveringPreorder, setIsHoveringPreorder] = useState(false);
  const [isHoveringSubscribe, setIsHoveringSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("You're in the loop. We'll be in touch.");
    setEmail("");
  };

  return (
    <>
    <PreOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    <section id="preorder" className="relative overflow-hidden" style={{ height: "150vh", backgroundImage: "url('https://media.base44.com/images/public/6a27d0b816cab62fde7084a1/c56fcc75a_Malla_All_4.jpg')", backgroundSize: "cover", backgroundPosition: "bottom" }}>
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none z-[1]" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)" }} />

      {/* Top waveform */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      </div>

      {/* Top 50vh — CTA block */}
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-[3vw] flex items-center justify-center" style={{ height: "50vh" }}>
        <div className="text-center">
          <h2 className="font-heading font-normal text-[32px] md:text-[60px] tracking-[-0.04em] leading-[1.1] text-white mb-6 capitalize" style={{ maxWidth: "500px", margin: "0 auto 24px" }}>
           Upgrade your air
          </h2>
          <p className="font-body font-light text-white leading-relaxed mb-6" style={{ fontSize: "18px", maxWidth: "500px", margin: "0 auto 24px" }}>
            Mala AeroBeat Pro. Available today. Shipping next month.
          </p>
          <motion.button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-body font-light border border-white relative overflow-hidden"
            style={{ borderRadius: "5px", color: isHoveringPreorder ? "#2a2622" : "white" }}
            onMouseEnter={() => setIsHoveringPreorder(true)}
            onMouseLeave={() => setIsHoveringPreorder(false)}>
            <motion.div
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(90deg, white 0%, white 100%)", transformOrigin: "left" }}
              animate={{ scaleX: isHoveringPreorder ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} />
            Pre-Order Now
          </motion.button>
        </div>
      </div>

      {/* Bottom 100vh — footer block */}
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-[3vw]" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Divider + content at top */}
        <div className="border-t border-white/20 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* Email capture */}
            <div>
              <h3 className="text-2xl md:text-3xl text-white mb-3 [font-family:'DM_Sans',_ui-sans-serif,_system-ui,_sans-serif] font-normal">Stay in the loop.</h3>
              <p className="text-sm font-body mb-6 text-[hsl(var(--background))]">Be the first to know about drops, updates, and exclusive access.</p>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-10 px-4 bg-white/5 backdrop-blur-md border border-white/30 rounded-lg text-sm font-body placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-[hsl(var(--background))]"
                    aria-label="Email address for newsletter" />
                </div>
                <motion.button
                  type="submit"
                  disabled={submitted}
                  className="h-10 px-5 bg-white text-[#2a2622] rounded-lg flex items-center gap-2 text-sm font-heading font-light disabled:opacity-50 relative overflow-hidden"
                  onMouseEnter={() => setIsHoveringSubscribe(true)}
                  onMouseLeave={() => setIsHoveringSubscribe(false)}>
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "#2a2622", transformOrigin: "left", zIndex: 0 }}
                    animate={{ scaleX: isHoveringSubscribe ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} />
                  <span className="relative" style={{ zIndex: 1, color: isHoveringSubscribe ? "white" : "#2a2622" }}>
                    <span className="hidden sm:inline">{submitted ? "Subscribed" : "Subscribe"}</span>
                    <ArrowRight className="w-4 h-4 sm:hidden" />
                  </span>
                </motion.button>
              </form>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 md:justify-end md:items-start md:pt-2">
              <a href="/terms" className="text-sm font-body hover:text-white transition-colors duration-300 text-[hsl(var(--background))]">
                Terms & Conditions
              </a>
              <a href="/refund-policy" className="text-sm font-body hover:text-white transition-colors duration-300 text-[hsl(var(--background))]">
                Refund Policy
              </a>
              <a href="/accessibility" className="text-sm font-body hover:text-white transition-colors duration-300 text-[hsl(var(--background))]">
                Accessibility Statement
              </a>
              <a href="/privacy" className="text-sm font-body hover:text-white transition-colors duration-300 text-[hsl(var(--background))]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Logo + copyright — pinned to bottom of footer block */}
        <div className="mt-auto pb-6 flex flex-col md:flex-row items-start md:items-end md:justify-between gap-4">
        <a href="#" aria-label="Back to top"><svg width="145" height="38" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.9272 30.1063C31.8417 28.7294 31.7015 23.7402 30.2546 23.3859C28.7245 23.0125 26.7478 28.6961 26.2916 29.9851L25.0656 33.4618C24.2198 35.8566 22.2478 37.4237 19.8363 37.5141C17.4533 37.6021 15.1796 36.268 14.291 33.8685L12.1693 28.1301C11.6846 26.8174 10.3256 23.2408 8.9381 23.2218C7.55058 23.2028 7.29161 27.6355 7.22746 28.7699C7.08966 31.3025 7.45317 36.8316 3.69451 37.0313C0.88146 37.1788 -0.00237111 34.1015 4.77475e-06 31.5427L0.0356431 5.27672C0.0356431 3.59779 0.734155 1.72386 2.19058 0.939093C4.71377 -0.418796 7.95211 -0.302269 10.3137 1.27678C11.5587 2.10911 12.3119 3.65249 12.768 5.06745L16.5908 16.8984C17.1183 18.5322 18.1969 21.6617 19.9313 21.8996C21.4662 22.1112 22.7159 19.2052 23.1578 17.8544L27.5888 4.2922C29.0761 -0.257086 34.6381 -0.808802 37.5414 0.939093C38.8767 1.74289 39.6679 3.4123 39.6702 5.09599L39.6774 33.5712C39.6774 34.8197 38.6747 35.9517 37.9929 36.4939C37.0639 37.2335 35.453 37.4523 34.4124 36.9005C32.9346 36.1158 32.2099 34.5676 32.1078 32.9315L31.932 30.1087L31.9272 30.1063Z" fill="#F9F8F6" />
<path d="M69.3752 35.334C66.1511 30.8584 67.3699 28.5541 56.9778 29.1747C54.6922 29.3103 52.82 30.4256 51.7271 32.4042C50.418 34.7751 49.0542 37.6883 45.6947 37.2626C44.7918 37.1485 43.8272 36.5468 43.44 35.9238C42.9577 35.1461 42.7034 33.831 43.0788 32.8417L53.7561 4.63049C54.8038 1.8624 57.0443 0.173955 59.7552 0.152552C62.6395 0.131149 64.8705 1.76014 65.9563 4.64238L76.548 32.7395C77.1515 34.3399 76.5812 36.1806 75.1818 36.8916C73.1267 37.9356 70.7033 37.177 69.3776 35.3364L69.3752 35.334ZM62.1905 18.0928C61.9814 16.987 61.4658 15.9383 60.6248 15.3771C59.7837 14.8158 58.6742 15.1607 58.104 15.9526C57.6003 16.6517 57.156 17.5982 57.0633 18.4353C56.859 20.2712 58.1515 21.5292 59.7623 21.4721C61.3732 21.415 62.5516 20.0072 62.1905 18.0928Z" fill="#F9F8F6" />
<path d="M133.022 35.6254C129.618 31.4923 131.682 28.5529 120.425 29.1689C117.959 29.3044 116.087 30.5315 114.977 32.6837C113.754 35.057 112.212 37.7728 108.966 37.2377C107.745 37.038 106.645 36.1628 106.526 34.8787C106.424 33.799 106.548 32.6765 106.949 31.6159L116.396 6.61509C116.961 5.11689 117.565 3.66626 118.482 2.41063C119.907 0.460598 122.305 -0.13868 124.685 0.3084C126.774 0.700784 128.506 2.35355 129.382 4.67695L139.323 31.0119C140.098 33.0642 140.732 36.2627 138.099 37.1164C136.244 37.7181 134.279 37.1569 133.02 35.6254H133.022ZM123.918 15.2927C123.547 15.0502 122.464 15.0977 122.117 15.3712C121.278 16.0347 120.765 17.0573 120.539 18.0751C120.271 19.295 120.732 20.584 121.711 21.1167C122.689 21.6494 123.896 21.5851 124.745 20.9264C126.505 19.559 125.569 16.37 123.918 15.2927Z" fill="#F9F8F6" />
<path d="M93.7753 30.1338C97.1799 30.1338 103.322 29.6724 103.564 33.815C103.723 36.5308 100.796 37.7246 98.7504 37.7127L84.9061 37.6342C82.3852 37.62 80.0474 35.7651 80.045 33.142L80.0117 6.61447C80.0117 5.81068 80.2184 4.88084 80.2968 4.11748C80.4703 2.41715 81.5275 1.04023 82.984 0.593152C84.514 0.122291 86.3055 0.507541 87.2867 1.92013C87.9353 2.85471 88.382 4.16742 88.3844 5.39451L88.4224 25.1017C88.4224 26.2836 88.9617 27.7034 89.6341 28.5476C90.6343 29.8056 92.2357 30.1314 93.7776 30.1314L93.7753 30.1338Z" fill="#F9F8F6" />
<path d="M138.867 7.61389V2.98438H140.362C140.723 2.98438 141.019 3.0461 141.248 3.16956C141.477 3.2886 141.647 3.44953 141.757 3.65235C141.868 3.85517 141.923 4.08444 141.923 4.34016C141.923 4.58707 141.865 4.81414 141.751 5.02136C141.64 5.22859 141.469 5.39393 141.235 5.51738C141.001 5.64084 140.701 5.70256 140.335 5.70256H139.423V7.61389H138.867ZM141.314 7.61389L140.296 5.54384H140.917L141.969 7.61389H141.314ZM139.423 5.26607H140.322C140.675 5.26607 140.933 5.18009 141.096 5.00814C141.264 4.83618 141.347 4.61573 141.347 4.34678C141.347 4.07341 141.266 3.85737 141.103 3.69864C140.944 3.53551 140.682 3.45394 140.316 3.45394H139.423V5.26607Z" fill="#F9F8F6" />
<path d="M144.397 5.10352C144.397 2.73209 142.475 0.80968 140.104 0.80968C137.732 0.80968 135.81 2.73209 135.81 5.10352C135.81 7.47494 137.732 9.39735 140.104 9.39735V10C137.399 10 135.207 7.80777 135.207 5.10352C135.207 2.39926 137.399 0.207031 140.104 0.207031C142.808 0.207031 145 2.39926 145 5.10352C145 7.80777 142.808 10 140.104 10V9.39735C142.475 9.39735 144.397 7.47494 144.397 5.10352Z" fill="#F9F8F6" />
</svg></a>
        <p className="text-xs font-body text-white">
          Mala © 2026. All rights reserved.
        </p>
        </div>
      </div>
    </section>
    </>);

}