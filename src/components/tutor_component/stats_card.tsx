import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  isActive?: boolean;
  delay?: number;
}

export function StatsCard({ title, subtitle, icon, gradient, isActive, delay = 0 }: StatsCardProps) {
  return (
    <div
      className={cn(
        "relative w-full h-48 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in",
        isActive && "ring-2 ring-accent shadow-glow"
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        background: gradient 
      }}
    >
      {/* Icon */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-secondary/30 backdrop-blur-sm flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
        <h3 className="text-foreground font-semibold text-lg leading-tight">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-muted-foreground text-sm">{subtitle}</span>
          <button className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
            <ArrowRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
