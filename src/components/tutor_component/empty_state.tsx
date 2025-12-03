import { Plus } from "lucide-react";

export function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4">
      {/* Illustration */}
      <div className="mb-8">
        <svg
          width="200"
          height="180"
          viewBox="0 0 200 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {/* Ground/Platform */}
          <ellipse cx="100" cy="165" rx="60" ry="10" fill="hsl(var(--success))" opacity="0.3" />
          <ellipse cx="100" cy="162" rx="50" ry="8" fill="hsl(var(--success))" opacity="0.5" />

          {/* Person Body */}
          <path
            d="M100 50 Q85 70 80 95 Q75 120 85 140 L90 160 L95 160 L100 135"
            fill="hsl(var(--primary))"
            opacity="0.8"
          />
          <path
            d="M100 50 Q115 70 120 95 Q125 120 115 140 L110 160 L105 160 L100 135"
            fill="hsl(var(--primary))"
            opacity="0.6"
          />

          {/* Arms */}
          <path
            d="M85 75 Q60 65 50 80"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M115 75 Q140 65 150 80"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Head */}
          <circle cx="100" cy="35" r="20" fill="hsl(var(--primary))" opacity="0.7" />

          {/* Hair */}
          <path
            d="M80 30 Q85 15 100 15 Q115 15 120 30"
            fill="hsl(var(--success))"
            opacity="0.8"
          />

          {/* Legs */}
          <path
            d="M90 140 L85 162"
            stroke="hsl(var(--primary))"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M110 140 L130 155"
            stroke="hsl(var(--primary))"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold text-foreground mb-2">Seleziona il tuo Corso</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">
        Sentiti libero di visualizzare il profilo del tuo corso toccando il pulsante qui sotto.
      </p>

      {/* Add Course Button */}
      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-dashed border-border text-foreground font-medium hover:bg-secondary transition-colors">
        <Plus className="w-4 h-4" />
        Aggiungi un Corso
      </button>
    </div>
  );
}
