import { Award } from "lucide-react";

export const CertificationEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 animate-fade-in">
      <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mb-6">
        <Award className="w-12 h-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Seleziona uno studente
      </h3>
      <p className="text-muted-foreground max-w-xs">
        Scegli uno studente dalla lista per visualizzare i dettagli della certificazione.
      </p>
    </div>
  );
};
