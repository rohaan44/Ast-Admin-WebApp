import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "@/assets/Logo.png";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

const Footer = () => {
    const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Grazie per esserti iscritto! Riceverai presto le nostre novità.");
      setEmail("");
    }
  };
  return (
    
    <footer className="bg-background py-16">

    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Il tuo indirizzo email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background border-border"
            />
            <Button type="submit" variant="hero" size="lg">
              ISCRIVITI
            </Button>
          </form>


      <div className="flex items-center justify-center py-10">
            <a href="#home">
              <img src={Logo} alt="AST Logo" className="h-10 w-auto" />
            </a>
          </div>
           <div className="flex justify-center">
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>


        {/* Copyright */}
        <div className="pt-8  text-center text-sm text-muted-foreground">
          <p>© 2024 AST®. Tutti i diritti riservati.</p>
        </div>
    
    </footer>
  );
};

export default Footer;
