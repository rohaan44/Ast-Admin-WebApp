import { ChevronRight } from "lucide-react";
import { CertificationStatusBadge } from "@/components/tutor_component/certification_status_badge";
import { Certification } from "@/pages/tutor/certification/certification_type";
import { cn } from "@/lib/utils";

interface CertificationCardProps {
  certification: Certification;
  isSelected: boolean;
  onClick: () => void;
}

export const CertificationCard = ({ certification, isSelected, onClick }: CertificationCardProps) => {
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
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-muted-foreground">
            {certification.studentInitials}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {certification.studentName}
          </h3>
          <p className="text-sm text-muted-foreground truncate">
            Corso: {certification.courseName}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Data di scadenza: {certification.expiryDate}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <CertificationStatusBadge status={certification.status} />
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </button>
  );
};
