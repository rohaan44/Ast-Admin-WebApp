import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const App = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="AST Mobile App" 
                className="w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perché scegliere <span className="text-primary">AST®</span>?
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">📱 App Mobile Avanzata</h3>
                <p className="text-muted-foreground">
                  Accedi ai tuoi allenamenti personalizzati ovunque tu sia con la nostra app mobile intuitiva.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">📊 Tracking dei Progressi</h3>
                <p className="text-muted-foreground">
                  Monitora ogni dettaglio della tua evoluzione con statistiche avanzate e grafici dettagliati.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🎯 Obiettivi Personalizzati</h3>
                <p className="text-muted-foreground">
                  Imposta e raggiungi i tuoi obiettivi con piani di allenamento adattati al tuo livello.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">💪 Community Motivante</h3>
                <p className="text-muted-foreground">
                  Unisciti a migliaia di atleti che ogni giorno si allenano e si motivano a vicenda.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
