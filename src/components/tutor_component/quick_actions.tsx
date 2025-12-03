import { Upload, ClipboardList, FileCheck } from "lucide-react";

const actions = [
  { icon: Upload, label: "Carica corso" },
  { icon: ClipboardList, label: "Review Exams" },
  { icon: FileCheck, label: "Approvare i certificati" },
];

export function QuickActions() {
  return (

    <div className="opacity-0 animate-fade-in" style={{ animationDelay: "400ms" ,backgroundColor:"#ffffff"}}
    >
      <h2 className="text-white font-semibold text-lg mb-4">Azioni rapide</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="rounded-xl p-4 flex items-center gap-3 transition-opacity
                       bg-[#111] border border-white/10 hover:bg-[#1a1a1a] shadow-lg"
          >
            <action.icon className="w-6 h-6 text-white" />
            <span className="text-white font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
