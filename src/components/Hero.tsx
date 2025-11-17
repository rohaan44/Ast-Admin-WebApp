import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Athletic training" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in">
            Allena con metodo, cresci con scienza, trasforma con{" "}
            <span className="text-primary">AST</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed fade-in">
            Un metodo rivoluzionario basato sulla scienza dell'allenamento che unisce biomeccanica, periodizzazione e recupero attivo per trasformare radicalmente il tuo fisico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in">
            <Button variant="hero" size="xl" className="font-bold">
              INIZIA ORA
            </Button>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-6 fade-in">
            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" 
                alt="User 1"
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop" 
                alt="User 2"
                className="w-12 h-12 rounded-full border-2 border-primary -ml-4 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" 
                alt="User 3"
                className="w-12 h-12 rounded-full border-2 border-primary -ml-4 object-cover"
              />
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                5.0 • 10.000+ trasformazioni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
