import { Search, RefreshCw } from "lucide-react";
import { useState } from "react";
import { FilterTabs, FilterType } from "@/components/tutor_component/filter_tabs";
import { PresentationCard } from "@/components/tutor_component/presentation_card";
import { Presentation } from "@/pages/tutor/presentations/presentation";

interface PresentationListProps {
  presentations: Presentation[];
  selectedId: string | null;
  onSelect: (presentation: Presentation) => void;
}

export const PresentationList = ({ presentations, selectedId, onSelect }: PresentationListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredPresentations = presentations.filter((p) => {
    const matchesSearch =
      p.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter =
      activeFilter === "all" || p.status === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Presentazioni</h1>
        <button className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors">
          <RefreshCw className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
       {/* <input
  id="presentationSearch"
  name="presentationSearch"
  type="text"
  placeholder="Cerca contributi..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="w-full pl-11 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
/> */}

      </div>

      {/* Filters */}
      <div className="mb-4">
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin -mx-2 px-2">
        <div className="flex flex-col gap-1">
          {filteredPresentations.map((presentation) => (
            <PresentationCard
              key={presentation.id}
              presentation={presentation}
              isSelected={selectedId === presentation.id}
              onClick={() => onSelect(presentation)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
