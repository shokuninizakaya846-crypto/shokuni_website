import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import ServicesSection from "../components/portfolio/ServicesSection";
import WorkSection from "../components/portfolio/WorkSection";
import ProcessSection from "../components/portfolio/ProcessSection";
import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";
import FooterSection from "../components/portfolio/FooterSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}