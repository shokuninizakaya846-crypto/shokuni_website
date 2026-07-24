import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ManifestTextSection from "../components/landing/ManifestTextSection";
import DecorativeSection from "../components/landing/DecorativeSection";
import BassIntroSection from "../components/landing/BassIntroSection";
import SoundwaveSection from "../components/landing/SoundwaveSection";
import InnovationGrid from "../components/landing/InnovationGrid";
import BackgroundSection from "../components/landing/BackgroundSection";
import InnovationSection from "../components/landing/InnovationSection";
import BeautyClarityDepthSection from "../components/landing/BeautyClarityDepthSection";
import ColorsSection from "../components/landing/ColorsSection";
import CloserSection from "../components/landing/CloserSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ManifestTextSection />
      <BackgroundSection />
      <InnovationSection />
      <BeautyClarityDepthSection />
      <ColorsSection />
      <BassIntroSection />
      <DecorativeSection />
      <SoundwaveSection />
      <InnovationGrid />
      <CloserSection />
    </div>
  );
}