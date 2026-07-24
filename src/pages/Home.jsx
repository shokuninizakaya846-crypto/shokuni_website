import Navbar from "../components/izakaya/Navbar";
import HeroSection from "../components/izakaya/HeroSection";
import AboutSection from "../components/izakaya/AboutSection";
import ChannelsSection from "../components/izakaya/ChannelsSection";
import DrinkSection from "../components/izakaya/DrinkSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChannelsSection />
      <DrinkSection />
    </div>
  );
}