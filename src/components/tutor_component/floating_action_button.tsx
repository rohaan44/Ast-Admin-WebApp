import { Plus } from "lucide-react";

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-105 z-40"
    >
      <Plus className="w-6 h-6 text-primary-foreground" />
    </button>
  );
};
