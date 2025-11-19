import { Apple, Smartphone } from "lucide-react";
import AppButton from "@/components/ui/landing_page/app_button";
import BenefitsList from "@/components/ui/landing_page/benifit_list";
import appMockup from "@/assets/app-mockup.png";
 const items = [ "Metodo basato sulla scienza, non sul caso", "Piani completamente personalizzati",
     "Automazioni intelligenti che fanno risparmiare tempo",
                  "Supporto reale da coach qualificati", "Una community di atleti e professionisti in crescita"
                  ];
const App = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="AST Mobile App" 
                className="w-full h-full md-h[694] max-w-md mx-auto hover-lift"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in">
            <h2 className="text-5xl md:text-5xl font-bold mb-6">
            
              Perché scegliere <span className="text-primary">AST®</span>?
            </h2>
            
            <div className="space-y-6 mb-8">


              <div>

                <BenefitsList
                    items={items}
                    textClassName="text-muted-foreground text-base"
                  />
               
              </div>

         

            

         
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <AppButton
              label="Iscrizione"
              onClick={() => console.log("Desktop pressed")}
            />
              {/* <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Google Play
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
