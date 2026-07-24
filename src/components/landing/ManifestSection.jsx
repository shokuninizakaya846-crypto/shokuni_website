import { useRef } from "react";

export default function ManifestSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  return (
    <div ref={containerRef} className="relative h-screen bg-black sticky top-0">
      <div className="h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src="https://media.base44.com/videos/public/6a27d0b816cab62fde7084a1/875ccab59_Speaker_Seedance20Reference_2026-06-09_09-33-51.mp4"
          muted
          playsInline
          preload="auto"
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}