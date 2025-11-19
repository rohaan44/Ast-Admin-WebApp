import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import AppButton from "@/components/ui/landing_page/app_button";

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto a iniziare la tua trasformazione?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Scarica l'app <span className="text-primary font-bold">AST®</span> e inizia oggi il tuo percorso verso una versione migliore di te stesso. 
              Unisciti a migliaia di atleti che hanno già trasformato il loro corpo e la loro vita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <AppButton
              label="Iscrizione"
              onClick={() => console.log("Desktop pressed")}
            />
              
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Nessuna carta di credito richiesta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cancellazione gratuita</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="Download AST App" 
                className="w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
