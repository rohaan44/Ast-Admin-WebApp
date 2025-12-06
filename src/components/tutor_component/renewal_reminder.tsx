import { ArrowLeft, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Certification } from "@/pages/tutor/certification/certification_type";
import { cn } from "@/lib/utils";

type RenewalFilterType = "30days" | "7days" | "expired";

interface RenewalReminderProps {
  certifications: Certification[];
  onBack: () => void;
  onRenew: (certification: Certification) => void;
  onRenewAll: () => void;
}

const filters: { id: RenewalFilterType; label: string }[] = [
  { id: "30days", label: "Scadenza tra 30 giorni" },
  { id: "7days", label: "Scade tra 7 giorni" },
  { id: "expired", label: "Scaduta" },
];

export const RenewalReminder = ({ certifications, onBack, onRenew, onRenewAll }: RenewalReminderProps) => {
  const [activeFilter, setActiveFilter] = useState<RenewalFilterType>("30days");

  const expiringCount = certifications.filter(
    (c) => c.status === "expiring_soon" || c.status === "expired"
  ).length;

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Promemoria di Rinnovo</h2>
      </div>

      {/* Count Card */}
      <div className="bg-card rounded-xl p-4 mb-4 flex items-center justify-between">
        <span className="text-foreground">Prossime scadenze (prossimi 30 giorni)</span>
        <span className="text-primary font-bold text-xl">{expiringCount}</span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
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

      {/* Alert Banner */}
      <div className="bg-card rounded-xl p-4 mb-4 flex items-center gap-3 border border-border">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <span className="text-foreground">
          I certificati di {expiringCount} studenti sono già scaduti: agisci subito.
        </span>
      </div>

      {/* Expiring List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-2">
        {certifications
          .filter((c) => c.status === "expiring_soon" || c.status === "expired")
          .map((cert) => (
            <div key={cert.id} className="bg-card rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{cert.studentInitials}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{cert.studentName}</h4>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-destructive text-destructive-foreground">
                      In scadenza a breve
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Corso: {cert.courseName}</p>
                  <p className="text-xs text-muted-foreground">Scadenza: {cert.expiryDate}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-success text-success hover:bg-success/10"
                onClick={() => onRenew(cert)}
              >
                Rinnovare
              </Button>
            </div>
          ))}
      </div>

      {/* Renew All Button */}
      <Button
        variant="outline"
        className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary mt-4"
        onClick={onRenewAll}
      >
        Rinnova tutto
      </Button>
    </div>
  );
};
