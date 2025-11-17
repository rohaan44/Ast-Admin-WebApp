import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-foreground">AST</span>
              <span className="text-primary">®</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              HOME
            </a>
            <a href="#allenati" className="text-foreground hover:text-primary transition-colors">
              ALLENATI
            </a>
            <a href="#chisiamo" className="text-foreground hover:text-primary transition-colors">
              CHI SIAMO
            </a>
            <a href="#storia" className="text-foreground hover:text-primary transition-colors">
              STORIA
            </a>
            <a href="#contatti" className="text-foreground hover:text-primary transition-colors">
              CONTATTI
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              ISCRIVITI ORA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#allenati"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ALLENATI
            </a>
            <a
              href="#chisiamo"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CHI SIAMO
            </a>
            <a
              href="#storia"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              STORIA
            </a>
            <a
              href="#contatti"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTATTI
            </a>
            <Button variant="hero" size="lg" className="w-full">
              ISCRIVITI ORA
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
