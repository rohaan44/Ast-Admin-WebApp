import { Button } from "@/components/ui/button";
import methodImage from "@/assets/method-image.jpg";

const Method = () => {
  return (
    <section className="section-padding bg-background relative">
      {/* Red accent border */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary hidden lg:block"></div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Il metodo <span className="text-primary">AST®</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Il metodo <span className="text-primary font-bold">AST®</span> combina i più recenti 
              studi scientifici sull'ipertrofia muscolare con tecniche di periodizzazione avanzata per 
              garantire progressi costanti e duraturi nel tempo.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Personalizzazione Scientifica</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ogni programma è calibrato in base al tuo livello, obiettivi e capacità di recupero.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Progressione Garantita</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistema di tracciamento avanzato per monitorare ogni aspetto della tua evoluzione.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Supporto Continuo</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Team di esperti sempre disponibili per ottimizzare il tuo percorso.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="xl" className="font-bold">
              SCOPRI IL METODO
            </Button>
          </div>

          {/* Image */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary shadow-2xl shadow-primary/20">
              <img 
                src={methodImage} 
                alt="The AST method" 
                className="w-full h-[600px] object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
