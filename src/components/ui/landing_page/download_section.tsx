import appMockup from "@/assets/app_mockup.png";
import StoreButtonsIT from "@/components/ui/landing_page/store_button"; 
const DownloadSection = () => {
  return (
    <section
      className="container-custom w-[95%] py-16 mx-auto"
      style={{
        backgroundColor: "#191919",
        borderRadius: 20,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto a iniziare la tua trasformazione?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 text-gray-300">
            Scarica subito l’app AST® e accedi al metodo più avanzato per
            costruire muscoli, forza e consapevolezza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <StoreButtonsIT />
          </div>

          {/* Optional features section */}
          {/*
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
          */}
        </div>

        {/* Image */}
        <div className="relative fade-in">
          <div className="relative">
            <img
              src={appMockup}
              alt="Download AST App"
              className="w-full max-w-md mx-auto hover-lift transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
