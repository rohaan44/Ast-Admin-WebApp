import { Settings } from "lucide-react";

export function SettingsIcon() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center">
      <div className="relative">
        <Settings className="w-24 h-24 xl:w-32 xl:h-32 text-muted-foreground stroke-[1.5]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center">
            <div className="w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </div>
      <span className="text-responsive-xl font-semibold text-muted-foreground mt-4">Impostazioni</span>
    </div>
  );
}
