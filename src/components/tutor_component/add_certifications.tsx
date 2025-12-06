import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddCertificationViewProps {
  onBack: () => void;
}

export function AddCertificationView({ onBack }: AddCertificationViewProps) {
  return (
    <div className="animate-fade-in">
      <button 
  onClick={onBack}
  className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
>
  <ArrowLeft className="w-4 h-4 text-white" />
</button>


      <h1 className="text-responsive-2xl font-bold mb-6 sm:mb-8">Aggiungi certificazione</h1>
      
      <form className="flex flex-col gap-3 sm:gap-4 max-w-md">
        <Select>
          <SelectTrigger className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4">
            <SelectValue placeholder="Nome della certificazione" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="pt">Personal Trainer</SelectItem>
            <SelectItem value="nutrition">Nutrition Specialist</SelectItem>
            <SelectItem value="strength">Strength Coach</SelectItem>
          </SelectContent>
        </Select>

        <Input 
          placeholder="Organizzazione emittente"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />
        <Input 
          placeholder="Data di emissione"
          type="date"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />
        <Input 
          placeholder="Data di scadenza (facoltativa)"
          type="date"
          className="bg-secondary border-border rounded-xl h-11 sm:h-12 text-responsive-base px-4"
        />

        <div className="mt-2">
          <p className="text-responsive-base font-medium mb-3">Carica file di certificato</p>
          <div className="border-2 border-dashed border-border rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer hover:border-muted-foreground transition-colors">
            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground mb-2" />
            <p className="text-responsive-base font-medium">Tocca per caricare</p>
            <p className="text-responsive-xs text-muted-foreground">PDF, JPG, PNG fino a 5 MB</p>
          </div>
        </div>
        
        <Button 
          type="submit"
          className="mt-4 sm:mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 sm:h-12 text-responsive-base font-medium"
        >
          Salva le certificazioni
        </Button>
      </form>
    </div>
  );
}
