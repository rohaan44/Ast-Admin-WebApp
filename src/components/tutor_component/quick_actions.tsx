import { Upload, ClipboardList, FileCheck } from "lucide-react";

const actions = [
  { icon: Upload, label: "Carica corso" },
  { icon: ClipboardList, label: "Review Exams" },
  { icon: FileCheck, label: "Approvare i certificati" },
];
export function QuickActions() {
  return (
    <div
      className="mt-6 animate-fade-in opacity-0 bg-[#111] p-4 rounded-xl"
      style={{ animationDelay: "400ms" }}
    >
      <h2 className="text-white font-semibold text-lg mb-4">Azioni rapide</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="rounded-xl p-4 flex items-center gap-3  
                       bg-[#181818] border border-white/10 hover:bg-[#1f1f1f] shadow-lg"
          >
            <action.icon className="w-6 h-6 text-white" />
            <span className="text-white font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
