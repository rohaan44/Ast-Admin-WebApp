import { ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/tutor_component/status_badge";
import { Presentation } from "@/pages/tutor/presentations/presentation";
import { cn } from "@/lib/utils";

interface PresentationCardProps {
  presentation: Presentation;
  isSelected: boolean;
  onClick: () => void;
}

export const PresentationCard = ({ presentation, isSelected, onClick }: PresentationCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl text-left transition-all duration-200 group",
        isSelected
          ? "bg-card border border-border"
          : "bg-transparent hover:bg-card/50"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {presentation.studentName}
          </h3>
          <p className="text-sm text-muted-foreground truncate mt-0.5">
            {presentation.courseName} – {presentation.moduleName}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {presentation.type} • {presentation.date}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <StatusBadge status={presentation.status} />
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </button>
  );
};
