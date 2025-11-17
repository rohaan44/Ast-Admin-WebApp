import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Grazie per esserti iscritto! Riceverai presto le nostre novità.");
      setEmail("");
    }
  };

  return (
    <section id="contatti" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rimani aggiornato con le ultime novità
          </h2>
          <p className="text-muted-foreground mb-8">
            Iscriviti alla nostra newsletter per ricevere consigli di allenamento, offerte esclusive e aggiornamenti sul metodo AST®
          </p>

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

          <p className="text-xs text-muted-foreground mt-4">
            Rispettiamo la tua privacy. Nessuno spam, solo contenuti di qualità.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
