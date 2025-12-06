import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChangePasswordViewProps {
  onBack: () => void;
}

export function ChangePasswordView({ onBack }: ChangePasswordViewProps) {
  return (
    <div className="animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors md:hidden"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-responsive-sm">Indietro</span>
      </button>
      
      <h1 className="text-responsive-2xl font-bold mb-6 sm:mb-8">Cambiare la password</h1>
      
      <form className="flex flex-col gap-3 sm:gap-4 max-w-md">
        <Input 
          type="password"
          placeholder="Password attuale"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />
        <Input 
          type="password"
          placeholder="Nuova password"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />
        <Input 
          type="password"
          placeholder="Conferma nuova password"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />
        
        <Button 
          type="submit"
          className="mt-4 sm:mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 sm:h-12 text-responsive-base font-medium"
        >
          Aggiorna password
        </Button>
      </form>
    </div>
  );
}
