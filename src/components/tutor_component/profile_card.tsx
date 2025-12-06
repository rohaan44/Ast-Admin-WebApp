import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center py-4 sm:py-6 animate-fade-in">
      <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-border">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="text-responsive-xl bg-secondary">
          {name.split(" ").map(n => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <h2 className="text-responsive-xl font-semibold mt-3 sm:mt-4">{name}</h2>
      <p className="text-responsive-sm text-muted-foreground">{role}</p>
      <Button 
        variant="default" 
        size="sm" 
        className="mt-3 sm:mt-4 bg-accent hover:bg-accent/90 text-accent-foreground text-responsive-xs px-4 py-1.5 h-auto rounded-full"
      >
        Visualizza profilo
      </Button>
    </div>
  );
}
