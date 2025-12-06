import { cn } from "@/lib/utils";

type StatusType = "pending" | "approved" | "rejected";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  pending: {
    label: "In attesa di",
    className: "status-pending",
  },
  approved: {
    label: "Approvare",
    className: "status-approved",
  },
  rejected: {
    label: "Respinto",
    className: "status-rejected",
  },
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];
  return (
    <span className={cn("status-badge", config.className, className)}>
      {config.label}
    </span>
  );
};
