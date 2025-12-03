import { User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground italic">Ciao, Alex</h1>
      </div>
      <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
        <User className="w-5 h-5 text-foreground" />
      </button>
    </header>
  );
}
