import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VIDEO_URL = "https://media.base44.com/videos/public/6a27d0b816cab62fde7084a1/293e1aa06_Speaker_3.mp4";

function LiquidLogo() {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);
  const turbRef = useRef(null);
  const dispRef = useRef(null);
  const currentScale = useRef(0);
  const targetScale = useRef(0);

  const timeRef = useRef(0);

  const animate = () => {
    // Decay velocity each frame
    velocityRef.current *= 0.88;

    // Wave speed: idle 0.012, boosted by velocity
    const speed = 0.012 + velocityRef.current * 0.003;
    timeRef.current += speed;

    // Ease scale toward target
    currentScale.current += (targetScale.current - currentScale.current) * 0.08;
    if (dispRef.current) dispRef.current.setAttribute("scale", currentScale.current.toFixed(2));

    // Organic turbulence drift — fewer, taller waves
    if (turbRef.current && currentScale.current > 0.5) {
      const t = timeRef.current;
      const fx = 0.004 + Math.sin(t * 0.4) * 0.002;
      const fy = 0.003 + Math.cos(t * 0.3) * 0.0015;
      turbRef.current.setAttribute("baseFrequency", `${fx.toFixed(5)} ${fy.toFixed(5)}`);
    }
    rafRef.current = requestAnimationFrame(animate);
  };

  const mousePosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Compute velocity from last position
    const dx = mx - mousePosRef.current.x;
    const dy = my - mousePosRef.current.y;
    const speed = Math.sqrt(dx * dx + dy * dy);
    // Smooth velocity: ease toward new speed
    velocityRef.current += (speed - velocityRef.current) * 0.3;

    mousePosRef.current = { x: mx, y: my };

    // Radius = half the logo width
    const radius = rect.width / 2;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const ddx = mx - cx;
    const ddy = my - cy;
    const dist = Math.sqrt(ddx * ddx + ddy * ddy);

    // Strength: proximity within radius
    const strength = Math.max(0, 1 - dist / radius);
    // Scale boosted by velocity (fast move = stronger distortion, capped at 60)
    targetScale.current = strength * Math.min(30 + velocityRef.current * 1.2, 60);
  };

  const handleMouseEnter = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    targetScale.current = 0;
    // Let the easing animation run until it reaches ~0, then stop
    const decay = () => {
      currentScale.current += (0 - currentScale.current) * 0.1;
      if (dispRef.current) dispRef.current.setAttribute("scale", currentScale.current.toFixed(2));
      if (currentScale.current > 0.2) {
        rafRef.current = requestAnimationFrame(decay);
      } else {
        currentScale.current = 0;
        if (dispRef.current) dispRef.current.setAttribute("scale", "0");
        cancelAnimationFrame(rafRef.current);
      }
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(decay);
  };

  return (
    <div
      ref={wrapRef}
      className="w-full px-4 md:px-10 lg:px-[3vw] pb-1 md:pb-2 lg:pb-[0.5vw] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden SVG filter defs */}
      <svg className="absolute" width="0" height="0" style={{ overflow: "hidden" }}>
        <defs>
          <filter id="mala-liquid" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0.015 0.01"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* The actual logo SVG with filter applied */}
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 735 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "url(#mala-liquid)" }}
      >
        <path d="M167.618 158.058C167.169 150.829 166.433 124.636 158.836 122.776C150.803 120.815 140.426 150.654 138.031 157.421L131.594 175.674C127.154 188.247 116.801 196.474 104.14 196.949C91.6296 197.411 79.6926 190.407 75.0275 177.809L63.8888 147.683C61.3442 140.791 54.2094 122.014 46.925 121.914C39.6405 121.814 38.2809 145.086 37.9441 151.042C37.2207 164.338 39.1291 193.365 19.3962 194.414C4.62766 195.188 -0.0124483 179.033 2.50674e-05 165.599L0.187126 27.7028C0.187126 18.8884 3.85431 9.05026 11.5005 4.93023C24.7473 -2.19867 41.7485 -1.58691 54.1471 6.70309C60.6831 11.0728 64.6372 19.1755 67.0321 26.6041L87.1018 88.7167C89.8709 97.2938 95.5338 113.724 104.639 114.973C112.697 116.084 119.258 100.827 121.578 93.7356L144.841 22.534C152.65 -1.3497 181.85 -4.2462 197.092 4.93023C204.102 9.15014 208.256 17.9146 208.268 26.7539L208.306 176.249C208.306 182.803 203.042 188.746 199.462 191.593C194.585 195.475 186.128 196.624 180.665 193.728C172.906 189.608 169.102 181.48 168.566 172.89L167.643 158.071L167.618 158.058Z" fill="#BBBBBB"/>
        <path d="M364.225 185.5C347.299 162.004 353.698 149.906 299.139 153.164C287.14 153.876 277.311 159.731 271.573 170.119C264.7 182.566 257.54 197.86 239.903 195.625C235.163 195.026 230.099 191.868 228.066 188.596C225.534 184.514 224.199 177.61 226.17 172.416L282.225 24.3071C287.726 9.77464 299.488 0.910333 313.721 0.797968C328.863 0.685604 340.576 9.23779 346.276 24.3695L401.883 171.879C405.051 180.281 402.057 189.945 394.71 193.678C383.921 199.159 371.198 195.176 364.238 185.513L364.225 185.5ZM326.506 94.9844C325.408 89.1789 322.701 83.673 318.286 80.7266C313.87 77.7801 308.045 79.5904 305.052 83.7479C302.407 87.4185 300.075 92.3875 299.588 96.7822C298.515 106.421 305.301 113.025 313.758 112.725C322.215 112.426 328.402 105.035 326.506 94.9844Z" fill="#BBBBBB"/>
        <path d="M698.372 187.026C680.498 165.327 691.337 149.896 632.238 153.13C619.291 153.841 609.462 160.283 603.637 171.582C597.213 184.042 589.118 198.3 572.079 195.491C565.668 194.442 559.893 189.848 559.269 183.106C558.733 177.438 559.381 171.545 561.489 165.977L611.083 34.7223C614.052 26.8568 617.22 19.241 622.035 12.649C629.519 2.4113 642.105 -0.734906 654.603 1.61226C665.567 3.67228 674.66 12.3493 679.263 24.5471L731.452 162.805C735.518 173.58 738.848 190.372 725.028 194.854C715.286 198.013 704.971 195.066 698.36 187.026H698.372ZM650.574 80.2799C648.628 79.0064 642.94 79.2561 641.119 80.6919C636.716 84.1752 634.022 89.5437 632.837 94.8873C631.428 101.292 633.847 108.059 638.986 110.856C644.125 113.652 650.462 113.315 654.915 109.857C664.158 102.678 659.243 85.9356 650.574 80.2799Z" fill="#BBBBBB"/>
        <path d="M492.325 158.199C510.199 158.199 542.443 155.777 543.715 177.526C544.551 191.784 529.184 198.051 518.444 197.989L445.762 197.577C432.527 197.502 420.254 187.763 420.241 173.993L420.066 34.723C420.066 30.5031 421.152 25.6215 421.563 21.6138C422.474 12.6871 428.024 5.45829 435.671 3.11112C443.704 0.639101 453.108 2.66166 458.26 10.0777C461.665 14.9843 464.01 21.876 464.023 28.3182L464.222 131.781C464.222 137.986 467.054 145.439 470.584 149.872C475.835 156.476 484.242 158.187 492.337 158.187L492.325 158.199Z" fill="#BBBBBB"/>
        <path d="M711.523 24.9108V10.0195H716.331C717.494 10.0195 718.444 10.2181 719.182 10.6152C719.919 10.9981 720.465 11.5157 720.82 12.1681C721.174 12.8205 721.352 13.558 721.352 14.3805C721.352 15.1747 721.167 15.9051 720.799 16.5717C720.444 17.2383 719.891 17.7701 719.139 18.1672C718.388 18.5643 717.423 18.7628 716.246 18.7628H713.31V24.9108H711.523ZM719.395 24.9108L716.118 18.2523H718.118L721.501 24.9108H719.395ZM713.31 17.3588H716.204C717.338 17.3588 718.168 17.0823 718.693 16.5291C719.231 15.976 719.501 15.2669 719.501 14.4018C719.501 13.5225 719.239 12.8276 718.714 12.317C718.203 11.7923 717.359 11.5299 716.182 11.5299H713.31V17.3588Z" fill="#BBBBBB"/>
        <path d="M729.312 16.8438C729.312 9.21585 723.128 3.03223 715.5 3.03223C707.872 3.03223 701.688 9.21585 701.688 16.8438C701.688 24.4717 707.872 30.6553 715.5 30.6553V32.5938C706.802 32.5938 699.75 25.5422 699.75 16.8438C699.75 8.14527 706.802 1.09375 715.5 1.09375C724.198 1.09375 731.25 8.14527 731.25 16.8438C731.25 25.5422 724.198 32.5938 715.5 32.5938V30.6553C723.128 30.6553 729.312 24.4717 729.312 16.8438Z" fill="#BBBBBB"/>
      </svg>
    </div>
  );
}

export default function ManifestTextSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end end"]
  });

  // ─── Video ───
  const videoY       = useTransform(scrollYProgress, [0, 0.013, 0.364], ["100vh", "100vh", "0vh"]);
  const videoLeft    = useTransform(scrollYProgress, [0.26, 0.52], isMobile ? ["50%", "50%"] : ["50%", "25%"]);
  const videoTX      = useTransform(scrollYProgress, [0.26, 0.354], ["-50%", "-50%"]);
  const videoSize    = useTransform(scrollYProgress, [0.26, 0.52], isMobile ? ["90vw", "90vw"] : ["80vw", "38vw"]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.013, 0.91], [0, 1, 1]);

  // ─── Phrase 1 — top center ───
  const title1Op = useTransform(scrollYProgress, [0, 0.031, 0.26, 0.325], [0, 1, 1, 0]);
  const title1Y  = useTransform(scrollYProgress, [0, 0.031, 0.26, 0.325], [60, 0, 0, -60], { clamp: false });

  // ─── Phrase 2 — right of video ───
  const title2Op = useTransform(scrollYProgress, [0.286, 0.416, 0.52, 0.65], [0, 1, 1, 0]);
  const title2Y  = useTransform(scrollYProgress, [0.286, 0.416, 0.52, 0.65], [60, 0, 0, -60], { clamp: false });

  // ─── Phrase 3 — right of video ───
  const title3Op = useTransform(scrollYProgress, [0.624, 0.728, 0.962, 0.988], [0, 1, 1, 0]);
  const title3Y  = useTransform(scrollYProgress, [0.624, 0.728, 0.962, 0.988], [60, 0, 0, -60], { clamp: false });

  // ─── Video fade out ───
  const videoOp  = useTransform(scrollYProgress, [0.676, 0.728], [1, 0]);

  // ─── Yellow wash + Logo + Phrase 4 — same movement ───
  const washY  = useTransform(scrollYProgress, [0.7, 1.0], ["100%", "0%"]);
  const waveOp = useTransform(scrollYProgress, [0.864, 0.865], [0, 1]);

  return (
    <section ref={ref} className="relative h-[500vh] bg-[#fcfefe]">
      <div className="sticky top-0 h-screen w-full bg-[#fcfefe]" style={{ overflow: "clip" }}>

        {/* ── Video ── */}
        <motion.div
          className="absolute top-1/2"
          style={{
            left: videoLeft,
            y: videoY,
            translateX: videoTX,
            translateY: isMobile ? "-70%" : "-50%",
            width: videoSize,
            opacity: videoOpacity,
            pointerEvents: "none",
          }}
          initial={{ opacity: videoOpacity }}
          animate={{ opacity: [videoOpacity, videoOp] }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            preload="auto"
            autoPlay
            loop
            className="w-full object-contain"
            style={{ display: "block" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 55%, #fcfefe 90%)" }}
          />
        </motion.div>

        {/* ── Phrase 1 — top center ── */}
        <motion.div
          className="absolute top-[12%] left-0 w-full flex justify-center px-6"
          style={{ opacity: title1Op, y: title1Y }}
        >
          <p className="font-heading font-light tracking-[-0.02em] leading-tight text-foreground text-center" style={{ fontSize: isMobile ? "28px" : "45px" }}>
            We didn't just build a speaker.
          </p>
        </motion.div>

        {/* ── Phrase 2 — right of video ── */}
        <motion.div
          className="absolute -translate-y-1/2"
          style={{
            opacity: title2Op,
            y: title2Y,
            top: isMobile ? "72%" : "45%",
            left: isMobile ? "50%" : "50%",
            width: isMobile ? "90vw" : "38vw",
            translateX: isMobile ? "-50%" : "0%",
          }}
        >
          <p className={`font-heading font-light tracking-[-0.02em] leading-tight text-foreground ${isMobile ? "text-center" : "text-left"}`} style={{ fontSize: isMobile ? "28px" : "38px" }}>
            We obsessed over every<br />millimeter of it.
          </p>
        </motion.div>

        {/* ── Phrase 3 — right of video ── */}
        <motion.div
          className="absolute -translate-y-1/2"
          style={{
            opacity: title3Op,
            y: title3Y,
            top: isMobile ? "72%" : "45%",
            left: isMobile ? "50%" : "50%",
            width: isMobile ? "90vw" : "38vw",
            translateX: isMobile ? "-50%" : "0%",
          }}
        >
          <p className={`font-heading font-light tracking-[-0.02em] leading-tight text-foreground ${isMobile ? "text-center" : "text-left"}`} style={{ fontSize: isMobile ? "28px" : "38px" }}>
            Beautiful on your shelf.<br />
            <span className="opacity-60">Generous to your ears.</span>
          </p>
        </motion.div>

        {/* ── Yellow wash ── */}
        <motion.div
          className="absolute inset-x-0 bottom-0"
          style={{ translateY: washY, zIndex: 10, backgroundColor: "#e8ff70", height: "100vh" }}
        />

        {/* ── Logo reveal + Phrase 4 ── */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center"
          style={{ translateY: washY, zIndex: 12, height: "100vh", backgroundColor: "#e8ff70" }}
        >
          <motion.p
            className="font-heading font-light tracking-[-0.02em] text-[#2a2622] text-left w-full px-4 md:px-10 lg:px-[3vw] mb-8"
            style={{ fontSize: isMobile ? "28px" : "38px" }}
          >
            This is
          </motion.p>
          <LiquidLogo />
        </motion.div>

      </div>
    </section>
  );
}