import { Bell, ChevronRight } from "lucide-react";

const activities = [
  { title: "Quiz 3", description: "Maria ha completato il Quiz 3" },
  { title: "Module 2", description: "John ha inviato il Modulo 2 dello studio di caso" },
  { title: "Certificato", description: "Certificazione rilasciata a Luca (da atleta Jane Roe)" },
];

export function ActivityFeed() {
  return (
    <div className="bg-card rounded-2xl p-5 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-foreground font-semibold text-lg">Attività recenti</h2>
        <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
          Visualizza tutto
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-medium text-sm">{activity.title}</h4>
              <p className="text-muted-foreground text-xs mt-0.5 truncate">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
