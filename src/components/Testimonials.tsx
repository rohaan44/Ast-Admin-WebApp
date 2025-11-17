import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Atleta Professionista",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "AST® ha completamente trasformato il mio approccio all'allenamento. I risultati sono stati incredibili e il supporto del team è sempre presente."
    },
    {
      name: "Sofia Bianchi",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      text: "Mai avrei pensato di raggiungere questi risultati. Il metodo AST® è scientificamente provato e funziona davvero. Lo consiglio a tutti!"
    },
    {
      name: "Andrea Ferrari",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Come trainer, ho provato molti metodi, ma AST® è superiore a tutti. La personalizzazione e l'attenzione ai dettagli fanno la differenza."
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            MEMBRO CHE DICE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ascolta dalla parte scientifica: risultati che durano nel tempo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-lg fade-in hover-lift border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
