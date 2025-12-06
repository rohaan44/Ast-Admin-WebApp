import { cn } from "@/lib/utils";
import { ChevronRight, LucideIcon } from "lucide-react";

interface SettingsMenuItemProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: "default" | "danger";
}

export function SettingsMenuItem({ icon: Icon, label, onClick, variant = "default" }: SettingsMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl transition-all duration-200",
        "bg-secondary/50 hover:bg-secondary",
        variant === "danger" && "text-accent"
      )}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      <span className="text-responsive-base font-medium flex-1 text-left">{label}</span>
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
    </button>
  );
}
