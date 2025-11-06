import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { TechStackCarousel } from "@/components/TechStackCarousel";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Preloader } from "@/components/Preloader";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Zain Ul Haq – Data Science Student & Developer</title>
        <meta name="description" content="Portfolio of Zain Ul Haq, a Data Science student at IST specializing in Python, C++, SQL, Machine Learning, and AI. Explore projects, skills, and achievements." />
        <meta name="keywords" content="Zain Ul Haq, Data Science, Machine Learning, AI, Python, C++, SQL, Portfolio, IST Student, Developer" />
        <meta name="author" content="Zain Ul Haq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zain Ul Haq – Data Science Student & Developer" />
        <meta property="og:description" content="Explore the portfolio of Zain Ul Haq featuring data science projects, skills, and achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://yoursite.lovable.app" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zain Ul Haq – Data Science Student & Developer" />
        <meta name="twitter:description" content="Portfolio of Zain Ul Haq showcasing data science expertise and projects." />
        <meta name="twitter:image" content="/preview.png" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Zain Ul Haq",
            "jobTitle": "Data Science Student",
            "affiliation": {
              "@type": "EducationalOrganization",
              "name": "IST"
            },
            "url": "https://yoursite.lovable.app",
            "sameAs": [
              "https://linkedin.com/in/zain-ul-haq",
              "https://github.com/Code-with-zaini"
            ],
            "knowsAbout": ["Data Science", "Machine Learning", "Python", "C++", "SQL", "Artificial Intelligence"],
            "description": "Data Science student specializing in Machine Learning, AI, and software development."
          })}
        </script>
      </Helmet>
      
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
          <TechStackCarousel />
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
