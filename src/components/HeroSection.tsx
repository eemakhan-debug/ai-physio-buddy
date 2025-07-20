import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Activity, TrendingUp, Stethoscope, Zap } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI-Powered Analysis",
      description: "Advanced symptom analysis using machine learning"
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Exercise Recommendations",
      description: "Personalized physiotherapy exercises"
    },
    {
      icon: <Stethoscope className="h-5 w-5" />,
      title: "Medical Expertise",
      description: "Based on DPT knowledge and best practices"
    }
  ];

  const stats = [
    { value: "1000+", label: "Exercises", icon: <Activity className="h-4 w-4" /> },
    { value: "95%", label: "Accuracy", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "24/7", label: "Available", icon: <Zap className="h-4 w-4" /> },
    { value: "DPT", label: "Certified", icon: <Heart className="h-4 w-4" /> }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-medical-light to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30"></div>
      
      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-healing-gradient text-white border-0 px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                AI + Medical Expertise
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Smart{" "}
                <span className="bg-trust-gradient bg-clip-text text-transparent">
                  Physiotherapy
                </span>{" "}
                Assistant
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Combining Doctor of Physiotherapy expertise with artificial intelligence to provide 
                personalized exercise recommendations and recovery guidance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-trust-gradient hover:opacity-90 text-white border-0 shadow-soft"
                onClick={() => scrollToSection("#ai-assistant")}
              >
                <Brain className="h-5 w-5 mr-2" />
                Try AI Assistant
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-medical-light"
                onClick={() => scrollToSection("#portfolio")}
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                View Portfolio
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-lg bg-trust-gradient flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card animate-pulse-glow">
              <img 
                src={heroImage} 
                alt="Modern physiotherapy clinic with AI technology" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-healing-gradient rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">DPT Student</div>
                  <div className="text-sm text-muted-foreground">University of South Asia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;