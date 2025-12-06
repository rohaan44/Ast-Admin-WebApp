import { Search, RefreshCw } from "lucide-react";
import { useState } from "react";
import { CertificationFilterTabs, CertFilterType } from "@/components/tutor_component/certification_filter_tabs";
import { CertificationCard } from "@/components/tutor_component/certification_card";
import { Certification } from "@/pages/tutor/certification/certification_type";

interface CertificationListProps {
  certifications: Certification[];
  selectedId: string | null;
  onSelect: (certification: Certification) => void;
}

export const CertificationList = ({ certifications, selectedId, onSelect }: CertificationListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CertFilterType>("all");

  const filteredCertifications = certifications.filter((c) => {
    const matchesSearch =
      c.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.courseName.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesFilter = activeFilter === "all";
    if (activeFilter === "active") matchesFilter = c.status === "active";
    if (activeFilter === "pending") matchesFilter = c.status === "pending";
    if (activeFilter === "expired") matchesFilter = c.status === "expired" || c.status === "expiring_soon";

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gestione della certificazione</h1>
        <button className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors">
          <RefreshCw className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cerca per nome o ID."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      {/* Filters */}
      <div className="mb-4">
        <CertificationFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin -mx-2 px-2">
        <div className="flex flex-col gap-1">
          {filteredCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              isSelected={selectedId === certification.id}
              onClick={() => onSelect(certification)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
