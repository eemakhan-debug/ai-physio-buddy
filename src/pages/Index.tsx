import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatInterface from "@/components/ChatInterface";
import ExerciseLibrary from "@/components/ExerciseLibrary";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* AI Assistant Section */}
      <section id="ai-assistant" className="py-20 bg-background">
        <div className="container space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">AI Physiotherapy Assistant</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Describe your symptoms and get personalized exercise recommendations powered by AI and medical expertise.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ChatInterface />
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Exercise Library Section */}
      <section id="exercise-library" className="py-20 bg-medical-light/30">
        <div className="container">
          <ExerciseLibrary />
        </div>
      </section>

      <Separator className="my-0" />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container">
          <PortfolioSection />
        </div>
      </section>

      <Separator className="my-0" />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">PA</span>
            </div>
            <div>
              <h3 className="font-bold">PhysioAI</h3>
              <p className="text-sm opacity-80">Smart Physiotherapy Assistant</p>
            </div>
          </div>
          
          <p className="text-sm opacity-80 max-w-md mx-auto">
            Combining medical expertise with artificial intelligence to revolutionize physiotherapy and patient care.
          </p>
          
          <div className="text-xs opacity-60">
            <p>&copy; 2024 PhysioAI. Built for portfolio and educational purposes.</p>
            <p className="mt-1">
              <strong>Disclaimer:</strong> This is a demonstration app. Always consult qualified healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;