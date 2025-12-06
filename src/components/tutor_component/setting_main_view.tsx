import { User, KeyRound, Languages, LogOut } from "lucide-react";
import { ProfileCard } from "@/components/tutor_component/profile_card";
import { SettingsMenuItem } from "@/components/tutor_component/settings_menu_item";

interface SettingsMainViewProps {
  onNavigate: (view: string) => void;
}

export function SettingsMainView({ onNavigate }: SettingsMainViewProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-responsive-2xl font-bold mb-4 sm:mb-6">Profilo e impostazioni</h1>
      
      <ProfileCard 
        name="Timothy Doe"
        role="Allenatore di forza certificato"
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
      />

      <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
        <SettingsMenuItem 
          icon={User} 
          label="Modifica profilo" 
          onClick={() => onNavigate("profile")}
        />
        <SettingsMenuItem 
          icon={KeyRound} 
          label="Cambiare la password" 
          onClick={() => onNavigate("password")}
        />
        <SettingsMenuItem 
          icon={Languages} 
          label="Selettore della lingua" 
          onClick={() => onNavigate("language")}
        />
        <SettingsMenuItem 
          icon={LogOut} 
          label="Esci" 
          variant="danger"
          onClick={() => onNavigate("logout")}
        />
      </div>
    </div>
  );
}
