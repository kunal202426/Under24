import ThreeScene from "@/components/ThreeScene";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
