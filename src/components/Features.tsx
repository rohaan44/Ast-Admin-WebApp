import HatIcon from "@/assets/svg/hat.svg?react";
import TrendingUpIcon from "@/assets/svg/trading_up.svg?react";
import TargetIcon from "@/assets/svg/badge.svg?react";

const Features = () => {
  const features = [
    {
      icon: HatIcon,
      title: "Risultati Garantiti",
      description:
        "Il nostro metodo scientifico garantisce progressi misurabili e duraturi nel tempo.",
    },
    {
      icon: TrendingUpIcon,
      title: "Crescita Costante",
      description:
        "Programmi di allenamento progressivi che si adattano al tuo livello.",
    },
    {
      icon: TargetIcon,
      title: "Obiettivi Raggiungibili",
      description:
        "Obiettivi realistici con un piano d'azione concreto.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
             <div
  key={index}
  className=" text-center p-8 rounded-lg bg-card border border-transparent
  hover:border-primary hover:shadow-lg hover:scale-[1.02]
  transition-all duration-300"
>
  <div className="flex justify-center mb-6">
    <Icon className="w-full h-auto max-w-[120px] text-primary" />
  </div>

  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
  <p className="text-muted-foreground">{feature.description}</p>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
