import worldMap from "@/assets/world-map.jpg";

const Position = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            LA NOSTRA POSIZIONE
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-2">
            Allenatori dalla parte scientifica:{" "}
            <span className="text-primary">risultati che durano nel tempo</span>
          </p>
        </div>

        {/* World Map */}
        <div className="max-w-6xl mx-auto fade-in">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={worldMap} 
              alt="Global presence" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Position;
