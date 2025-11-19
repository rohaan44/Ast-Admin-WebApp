import Logo from "@/assets/Logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import AppButton from "@/components/ui/landing_page/app_button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home">
              <img src={Logo} alt="AST Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            className="flex flex-1 mx-6 h-12 rounded-full items-center justify-around px-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <a
              href="#home"
              className="text-foreground font-normal hover:font-semibold hover:text-white transition-all"
            >
              Casa
            </a>

            <a
              href="#allenati"
              className="text-foreground font-normal hover:font-semibold hover:text-white transition-all"
            >
              Le nostre caratteristiche
            </a>

            <a
              href="#chisiamo"
              className="text-foreground font-normal hover:font-semibold hover:text-white transition-all"
            >
              Prezzi
            </a>

            <a
              href="#storia"
              className="text-foreground font-normal hover:font-semibold hover:text-white transition-all"
            >
              Contattaci
            </a>

            <a
              href="#contatti"
              className="text-foreground font-normal hover:font-semibold hover:text-white transition-all"
            >
              Domande frequenti
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <AppButton
              label="Registrati"
              onClick={() => console.log("Desktop pressed")}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
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

            {/* Mobile CTA Button */}
            <AppButton
              label="Registrati"
              onClick={() => {
                console.log("Mobile pressed");
                setMobileMenuOpen(false);
              }}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
