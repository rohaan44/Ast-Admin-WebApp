import { Button } from "@/components/ui/button";
import benefitsImage from "@/assets/benefits-image.jpg";

const Benefits = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative fade-in order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={benefitsImage} 
                alt="Train better, Grow stronger, Transform yourself with AST" 
                className="w-full h-[600px] object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Cosa ottieni con <span className="text-primary">AST®</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Train better. Grow stronger. Transform yourself with{" "}
                  <span className="text-primary">AST®</span>.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Allenamenti progettati scientificamente per massimizzare la crescita muscolare, 
                  aumentare la forza e ottimizzare la composizione corporea attraverso protocolli testati.
                </p>
              </div>
            </div>

            <Button variant="hero" size="xl" className="font-bold">
              INIZIA ORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
