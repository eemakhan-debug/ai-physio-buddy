import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Activity, Menu, Brain, BookOpen, User, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "AI Assistant", href: "#ai-assistant", icon: Brain },
    { name: "Exercise Library", href: "#exercise-library", icon: Activity },
    { name: "Portfolio", href: "#portfolio", icon: BookOpen },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-trust-gradient rounded-lg flex items-center justify-center">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">PhysioAI</h1>
            <p className="text-xs text-muted-foreground">Smart Physiotherapy Assistant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="flex items-center gap-2 hover:bg-medical-light hover:text-medical-blue"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-trust-gradient rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">PhysioAI</h1>
                <p className="text-xs text-muted-foreground">Smart Physiotherapy Assistant</p>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 justify-start h-12 hover:bg-medical-light hover:text-medical-blue"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;