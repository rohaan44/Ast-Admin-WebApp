import { cn } from "@/lib/utils";

export type FilterType = "all" | "pending" | "approved" | "rejected";

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "Tutto" },
  { id: "pending", label: "In attesa di" },
  { id: "approved", label: "Approvare" },
  { id: "rejected", label: "Respinto" },
];

export const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
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
