import { Trophy, TrendingUp, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Risultati Garantiti",
      description: "Il nostro metodo scientifico garantisce progressi misurabili e duraturi nel tempo, supportati da anni di ricerca e risultati comprovati."
    },
    {
      icon: TrendingUp,
      title: "Crescita Costante",
      description: "Programmi di allenamento progressivi che si adattano al tuo livello, assicurando una crescita continua e sostenibile dei tuoi risultati."
    },
    {
      icon: Target,
      title: "Obiettivi Raggiungibili",
      description: "Definiamo insieme obiettivi realistici e raggiungibili, con un piano d'azione concreto per trasformare il tuo corpo e la tua vita."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center fade-in hover-lift p-8 rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
