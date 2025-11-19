import { Button } from "@/components/ui/button";
import methodImage from "@/assets/method-image.png";
import AppButton from "@/components/ui/landing_page/app_button";
const Method = () => {
  return (
    <section className="section-padding">
      {/* Red accent border */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary hidden lg:block"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Il metodo <span className="text-primary">AST®</span>
            </h2>

            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              style={{
                color: "white",
              }}
            >
              Al centro del nostro progetto c'è il Metodo AST®, un approccio
              unico e adattabile per massimizzare la crescita muscolare e le
              prestazioni:
              {/* Il metodo <span className="text-primary font-bold">AST®</span> combina i più recenti 
              studi scientifici sull'ipertrofia muscolare con tecniche di periodizzazione ava0nzata per 
              garantire progressi costanti e duraturi nel tempo. */}
            </p>

            <div className="space-y-6 mb-10 text-white">
  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="leading-relaxed">
      Personalizzazione Scientifica → Ogni programma è calibrato in base al tuo livello, obiettivi
      e capacità di recupero.
    </p>
  </div>

  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="leading-relaxed">
      Progressione Garantita → Sistema di tracciamento avanzato per monitorare ogni aspetto
      della tua evoluzione.
    </p>
  </div>

  <div className="flex items-start gap-4">
    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="leading-relaxed">
      Supporto Continuo → Team di esperti sempre disponibili per ottimizzare il tuo percorso.
    </p>
  </div>

  <p className="text-lg mb-8 leading-relaxed">
    Ogni piano si basa su progressione, gestione del carico e recupero, garantendo
    risultati misurabili senza sprechi di energie.
  </p>
</div>


            <AppButton
              label="Iscrizione"
              onClick={() => console.log("Desktop pressed")}
            />
          </div>

          {/* Image */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden shadow-2xl shadow-primary/20">
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
