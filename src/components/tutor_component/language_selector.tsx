import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LanguageSelectorViewProps {
  onBack: () => void;
}

const languages = [
  { code: "en", label: "English (US)" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "(Arabic) العربية" },
  { code: "hi", label: "हिन्दी (Hindi)" },
];

export function LanguageSelectorView({ onBack }: LanguageSelectorViewProps) {
  const [selected, setSelected] = useState("it");

  return (
    <div className="animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors md:hidden"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-responsive-sm">Indietro</span>
      </button>

      <h1 className="text-responsive-2xl font-bold mb-2">Selettore della lingua</h1>
      <p className="text-responsive-sm text-muted-foreground mb-4 sm:mb-6">
        Scegli la lingua preferita per l'interfaccia dell'app.
      </p>
      
      <div className="flex flex-col gap-2 sm:gap-3 max-w-md">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            className={cn(
              "flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-200",
              "bg-secondary/50 hover:bg-secondary",
              selected === lang.code && "ring-1 ring-accent"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                selected === lang.code ? "border-accent bg-accent" : "border-muted-foreground"
              )}>
                {selected === lang.code && (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-foreground" />
                )}
              </div>
              <span className="text-responsive-base">{lang.label}</span>
            </div>
            {selected === lang.code && (
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            )}
          </button>
        ))}
        
        <Button 
          className="mt-4 sm:mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 sm:h-12 text-responsive-base font-medium"
        >
          Salva e continua
        </Button>
      </div>
    </div>
  );
}
