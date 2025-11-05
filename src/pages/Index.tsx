import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Preloader } from "@/components/Preloader";
import { ChatbotWidget } from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="min-h-screen relative">
        <ParticleBackground />
        <ScrollProgress />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </div>
        <BackToTop />
        <ChatbotWidget />
      </div>
    </ThemeProvider>
  );
};

export default Index;
