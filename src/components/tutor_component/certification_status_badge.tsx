import { cn } from "@/lib/utils";
import { CertificationStatus } from "@/pages/tutor/certification/certification_type";

interface CertificationStatusBadgeProps {
  status: CertificationStatus;
  className?: string;
}

const statusConfig: Record<CertificationStatus, { label: string; className: string }> = {
  active: {
    label: "Attiva",
    className: "bg-success text-success-foreground",
  },
  pending: {
    label: "In attesa di",
    className: "bg-warning text-warning-foreground",
  },
  expired: {
    label: "Scaduta",
    className: "bg-destructive text-destructive-foreground",
  },
  expiring_soon: {
    label: "In scadenza a breve",
    className: "bg-destructive text-destructive-foreground",
  },
};

export const CertificationStatusBadge = ({ status, className }: CertificationStatusBadgeProps) => {
  const config = statusConfig[status];
  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", config.className, className)}>
      {config.label}
    </span>
  );
};
