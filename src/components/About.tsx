import gymInterior from "@/assets/gym-interior.jpg";

const About = () => {
  return (
    <section id="chisiamo" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
            CHI SIAMO
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            <span className="text-primary">AST®</span> è molto più di un semplice allenamento.
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            È un sistema scientifico che unisce biomeccanica, periodizzazione e nutrizione per 
            trasformare completamente il tuo approccio al fitness e raggiungere risultati straordinari.
          </p>
        </div>

        {/* Image */}
        <div className="max-w-6xl mx-auto fade-in mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={gymInterior} 
              alt="Our team and community" 
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-3">10K+</div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">Atleti Trasformati</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-3">15+</div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">Anni di Ricerca</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-3">98%</div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">Soddisfazione</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-3">50+</div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">Coach Certificati</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
