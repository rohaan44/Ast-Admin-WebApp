import { cn } from "@/lib/utils";

export type CertFilterType = "all" | "active" | "pending" | "expired";

interface CertificationFilterTabsProps {
  activeFilter: CertFilterType;
  onFilterChange: (filter: CertFilterType) => void;
}

const filters: { id: CertFilterType; label: string }[] = [
  { id: "all", label: "Tutto" },
  { id: "active", label: "Attiva" },
  { id: "pending", label: "In attesa di" },
  { id: "expired", label: "Scaduta" },
];

export const CertificationFilterTabs = ({ activeFilter, onFilterChange }: CertificationFilterTabsProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeFilter === filter.id
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
