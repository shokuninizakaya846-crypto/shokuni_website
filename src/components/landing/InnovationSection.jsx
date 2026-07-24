import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring, motion, useTransform } from "framer-motion";
import { Radio, Zap, Radio as Volume2 } from "lucide-react";
import InnovationBadge from "./InnovationBadge";

export default function InnovationSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200
  });

  // Map progress for video to end when last feature finishes (at 0.6)
  const videoProgress = useTransform(smoothProgress, [0.35, 0.95], [0, 1]);

  // Feature animations - features come up from bottom
  const feature1Y = useTransform(smoothProgress, [0.42, 0.58], [300, 0]);
  
  const feature2Y = useTransform(smoothProgress, [0.58, 0.75], [600, 0]);
  
  const feature3Y = useTransform(smoothProgress, [0.75, 0.92], [300, 0]);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const onLoadedMetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.style.setProperty("--aspect-ratio", `${video.videoWidth}/${video.videoHeight}`);
      setIsReady(true);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, []);

  useMotionValueEvent(videoProgress, "change", (latest) => {
    requestAnimationFrame(() => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas || !isReady) return;

      video.currentTime = latest * video.duration;
      
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    });
  });

  if (isMobile) {
    return (
      <section ref={sectionRef} id="innovation" className="relative bg-[#FFFEF8]" style={{ paddingTop: "70px" }}>
        {/* Mobile: Title, Video, Features stacked vertically */}
        <div className="px-4 py-10">
          <div className="mb-6">
            <InnovationBadge />
          </div>
          <h2 className="font-heading font-normal text-[32px] text-foreground capitalize leading-[1.1] tracking-[-0.04em] mb-8" style={{ maxWidth: "200px" }}>
            Engineered to Move You
          </h2>

          {/* Video */}
          <div className="w-full overflow-hidden rounded-lg mb-8">
            <canvas 
              ref={canvasRef}
              className="rounded-lg w-full h-auto"
              style={{ display: "block", aspectRatio: "var(--aspect-ratio, 16/9)" }}
            />
            <video 
              ref={videoRef}
              className="hidden"
              muted
              autoPlay
              loop
            >
              <source src="https://media.base44.com/videos/public/6a27d0b816cab62fde7084a1/28952580b_Video_Mala_13.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Features stacked */}
          <div className="flex flex-col gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.16 106.19" className="w-10 h-10">
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M.05,21.05v-.83c0-.55.45-1,1-1,15.1-.03,30.22-1.77,45.35-5.21,5.15-1.17,15.56-4.04,31.22-8.59,24.61-7.15,49.29-7.23,74.04-.22,16.58,4.69,28.09,8.57,41.07,10.82,11.23,1.94,23.07,3.03,35.51,3.28.39,0,.7.32.7.71v.57c0,.74-.6,1.34-1.35,1.34h0c-12.71,0-25.89-1.4-39.52-4.19-15.3-3.13-34.45-9.97-50.5-12.96-18.24-3.41-36.46-2.74-54.67,2-6.13,1.6-15.64,4.23-28.53,7.9-16.81,4.79-34.63,7.19-53.47,7.22-.46,0-.84-.37-.85-.83H.05Z"/>
                <rect fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" x="0" y="51.81" width="228.86" height="2.58" rx="1.27" ry="1.27"/>
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M114.69,103.68c12.51,0,25.35-1.96,36.7-5.23,13.57-3.91,22.04-6.31,25.42-7.2,16.69-4.43,33.84-6.66,51.45-6.69.5,0,.9.4.9.9v.8c0,.46-.36.83-.82.85-16.25.55-29.78,1.94-40.58,4.15-4.19.86-12.02,2.97-23.49,6.32-16.59,4.86-32.35,8.62-49.58,8.61-17.22,0-32.98-3.77-49.57-8.63-11.47-3.36-19.29-5.47-23.48-6.34-10.8-2.21-24.33-3.6-40.58-4.17-.46-.02-.82-.39-.82-.85v-.8c0-.5.4-.9.9-.9,17.61.04,34.76,2.28,51.45,6.72,3.37.89,11.84,3.3,25.41,7.21,11.35,3.27,24.19,5.25,36.69,5.25Z"/>
              </svg>
              <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>Studio sound.<br />No studio required</h3>
              <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Custom-engineered dual drivers deliver pure high-fidelity audio.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.31 150.76" className="w-8 h-8">
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M2.53,61.06c0,.25.21.46.46.46,0,0,.01,0,.02,0,21.96-.7,43.2-5.24,63.72-13.63C92.7,37.28,114.45,21.46,131.97.44c.43-.52,1.2-.59,1.72-.16.04.03.07.06.11.1l.07.07c.57.61.59,1.54.04,2.16-11.75,13.3-23.43,23.71-35.02,31.24-29.04,18.85-61.04,28.96-96,30.31-.18,0-.33.16-.33.35v23.98c0,.2.16.36.35.37,17.4.5,34.05,3.09,49.94,7.76,11.73,3.44,23.75,8.58,36.08,15.42,16.49,9.15,31.25,21.24,44.28,36.27.48.56.46,1.39-.05,1.91l-.27.28c-.33.34-.88.35-1.22.02-.02-.02-.04-.04-.05-.06C99.65,112.81,51.99,92.35,2.84,91.61c-.18,0-.32.14-.32.32v46.77c0,.53-.43.96-.95.96h-.58c-.55,0-.99-.45-.99-1V14.74c0-.49.39-.88.88-.88h.54c.61,0,1.11.5,1.11,1.11h0v46.09Z"/>
              </svg>
              <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>Balanced stereo.<br />True spatial depth</h3>
              <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Dual-driver architecture creates perfectly calibrated left-right imaging.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.01 120.94" className="w-10 h-10">
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M0,60.43c-.04,22.65,8.84,42.83,24.01,60.1.43.49,1.17.53,1.66.1.02-.02.04-.04.06-.06l.03-.03c.5-.5.52-1.3.06-1.84C10.39,100.9,2.7,81.48,2.75,60.43c.02-21.04,7.77-40.44,23.25-58.19.46-.53.44-1.33-.05-1.84l-.03-.03c-.45-.47-1.2-.48-1.66-.03-.02.02-.05.05-.07.07C8.97,17.62.03,37.78,0,60.43Z"/>
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M203.01,60.45c-.02-22.66-8.95-42.83-24.16-60.06-.43-.49-1.17-.53-1.66-.1-.02.02-.04.04-.06.06l-.03.03c-.5.51-.53,1.31-.06,1.85,15.47,17.76,23.21,37.17,23.22,58.22.03,21.05-7.68,40.46-23.13,58.25-.47.54-.44,1.34.06,1.85l.03.03c.46.46,1.2.47,1.66.02.02-.02.04-.04.06-.06,15.19-17.26,24.08-37.43,24.07-60.09Z"/>
                <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M109.24,59.84c0-4.25-3.45-7.7-7.7-7.7-4.25,0-7.7,3.45-7.7,7.7s3.45,7.7,7.7,7.7h0c4.25,0,7.7-3.45,7.7-7.7Z"/>
              </svg>
              <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>One tap.<br />Total takeover</h3>
              <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Instant multi-room pairing. Fill your entire home with one gesture.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="innovation" className="relative" style={{ height: "220vh", backgroundColor: "#FFFEF8" }}>
      {/* Desktop: Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#FFFEF8" }}>
        <div className="absolute left-0 right-0 px-4 md:px-10 lg:px-[3vw] z-20 flex flex-col gap-6" style={{ top: "70px" }}>
          <div>
            <InnovationBadge />
          </div>
          <h2 className="font-heading font-normal text-[32px] md:text-[60px] text-foreground capitalize leading-[1.1] tracking-[-0.04em]" style={{ maxWidth: "500px" }}>
            Engineered to Move You
          </h2>
        </div>
        <div className="absolute left-0 px-4 md:px-10 lg:px-[3vw] overflow-hidden" style={{ bottom: "56px", width: "70%", backgroundColor: "#FFFEF8" }}>
          <canvas 
            ref={canvasRef}
            className="rounded-lg"
            style={{ display: "block", maxWidth: "100%", height: "auto", aspectRatio: "var(--aspect-ratio, 16/9)" }}
          />
          <video 
            ref={videoRef}
            className="hidden"
            muted
          >
            <source src="https://media.base44.com/videos/public/6a27d0b816cab62fde7084a1/28952580b_Video_Mala_13.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Features on the right */}
        <div className="absolute right-0 px-4 md:px-10 lg:px-[3vw] flex flex-col justify-between w-1/4" style={{ top: "70px", bottom: "70px" }}>
          {/* Feature 1 */}
          <motion.div className="flex flex-col items-start gap-2" style={{ y: feature1Y }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.16 106.19" className="w-12 h-12">
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M.05,21.05v-.83c0-.55.45-1,1-1,15.1-.03,30.22-1.77,45.35-5.21,5.15-1.17,15.56-4.04,31.22-8.59,24.61-7.15,49.29-7.23,74.04-.22,16.58,4.69,28.09,8.57,41.07,10.82,11.23,1.94,23.07,3.03,35.51,3.28.39,0,.7.32.7.71v.57c0,.74-.6,1.34-1.35,1.34h0c-12.71,0-25.89-1.4-39.52-4.19-15.3-3.13-34.45-9.97-50.5-12.96-18.24-3.41-36.46-2.74-54.67,2-6.13,1.6-15.64,4.23-28.53,7.9-16.81,4.79-34.63,7.19-53.47,7.22-.46,0-.84-.37-.85-.83H.05Z"/>
            <rect fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" x="0" y="51.81" width="228.86" height="2.58" rx="1.27" ry="1.27"/>
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M114.69,103.68c12.51,0,25.35-1.96,36.7-5.23,13.57-3.91,22.04-6.31,25.42-7.2,16.69-4.43,33.84-6.66,51.45-6.69.5,0,.9.4.9.9v.8c0,.46-.36.83-.82.85-16.25.55-29.78,1.94-40.58,4.15-4.19.86-12.02,2.97-23.49,6.32-16.59,4.86-32.35,8.62-49.58,8.61-17.22,0-32.98-3.77-49.57-8.63-11.47-3.36-19.29-5.47-23.48-6.34-10.8-2.21-24.33-3.6-40.58-4.17-.46-.02-.82-.39-.82-.85v-.8c0-.5.4-.9.9-.9,17.61.04,34.76,2.28,51.45,6.72,3.37.89,11.84,3.3,25.41,7.21,11.35,3.27,24.19,5.25,36.69,5.25Z"/>
          </svg>
          <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>Studio sound.<br />No studio required</h3>
          <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Custom-engineered dual drivers deliver pure high-fidelity audio.</p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div className="flex flex-col items-start gap-2" style={{ y: feature2Y }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.31 150.76" className="w-10 h-10">
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M2.53,61.06c0,.25.21.46.46.46,0,0,.01,0,.02,0,21.96-.7,43.2-5.24,63.72-13.63C92.7,37.28,114.45,21.46,131.97.44c.43-.52,1.2-.59,1.72-.16.04.03.07.06.11.1l.07.07c.57.61.59,1.54.04,2.16-11.75,13.3-23.43,23.71-35.02,31.24-29.04,18.85-61.04,28.96-96,30.31-.18,0-.33.16-.33.35v23.98c0,.2.16.36.35.37,17.4.5,34.05,3.09,49.94,7.76,11.73,3.44,23.75,8.58,36.08,15.42,16.49,9.15,31.25,21.24,44.28,36.27.48.56.46,1.39-.05,1.91l-.27.28c-.33.34-.88.35-1.22.02-.02-.02-.04-.04-.05-.06C99.65,112.81,51.99,92.35,2.84,91.61c-.18,0-.32.14-.32.32v46.77c0,.53-.43.96-.95.96h-.58c-.55,0-.99-.45-.99-1V14.74c0-.49.39-.88.88-.88h.54c.61,0,1.11.5,1.11,1.11h0v46.09Z"/>
          </svg>
          <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>Balanced stereo.<br />True spatial depth</h3>
          <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Dual-driver architecture creates perfectly calibrated left-right imaging.</p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div className="flex flex-col items-start gap-2" style={{ y: feature3Y }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.01 120.94" className="w-12 h-12">
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M0,60.43c-.04,22.65,8.84,42.83,24.01,60.1.43.49,1.17.53,1.66.1.02-.02.04-.04.06-.06l.03-.03c.5-.5.52-1.3.06-1.84C10.39,100.9,2.7,81.48,2.75,60.43c.02-21.04,7.77-40.44,23.25-58.19.46-.53.44-1.33-.05-1.84l-.03-.03c-.45-.47-1.2-.48-1.66-.03-.02.02-.05.05-.07.07C8.97,17.62.03,37.78,0,60.43Z"/>
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M203.01,60.45c-.02-22.66-8.95-42.83-24.16-60.06-.43-.49-1.17-.53-1.66-.1-.02.02-.04.04-.06.06l-.03.03c-.5.51-.53,1.31-.06,1.85,15.47,17.76,23.21,37.17,23.22,58.22.03,21.05-7.68,40.46-23.13,58.25-.47.54-.44,1.34.06,1.85l.03.03c.46.46,1.2.47,1.66.02.02-.02.04-.04.06-.06,15.19-17.26,24.08-37.43,24.07-60.09Z"/>
            <path fill="#2a2622" stroke="#2a2622" strokeWidth="0.4" d="M109.24,59.84c0-4.25-3.45-7.7-7.7-7.7-4.25,0-7.7,3.45-7.7,7.7s3.45,7.7,7.7,7.7h0c4.25,0,7.7-3.45,7.7-7.7Z"/>
          </svg>
          <h3 className="font-heading font-normal text-[22px] leading-tight" style={{ color: "#2a2622" }}>One tap.<br />Total takeover</h3>
          <p className="font-body font-light text-sm leading-relaxed" style={{ color: "#2a2622" }}>Instant multi-room pairing. Fill your entire home with one gesture.</p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}