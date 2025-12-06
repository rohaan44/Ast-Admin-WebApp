import { ArrowLeft, FileText, Download } from "lucide-react";
import { Presentation } from "@/pages/tutor/presentations/presentation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface PresentationDetailProps {
  presentation: Presentation;
  onBack: () => void;
   onOpenFile: () => void;
  onRequestResend: () => void;

}

export const PresentationDetail = ({
  presentation,
  onBack,
  onRequestResend,
}: PresentationDetailProps) => {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Dettagli di invio
        </h2>
      </div>

      {/* Student Info Card */}
      <div className="bg-card rounded-xl p-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xl font-bold text-primary">
              {presentation.studentName.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-lg">
              {presentation.studentName}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Corso: {presentation.courseName}
            </p>
            <p className="text-sm text-muted-foreground">
              Modulo: {presentation.moduleName} –{" "}
              {presentation.type === "Caso di studio"
                ? "Caso di studio sulla dieta equilibrata"
                : presentation.type}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Inviato: {presentation.date}
            </p>
          </div>
        </div>
      </div>

      {/* Case Study File */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">
          Case study caricato
        </h4>
        <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl hover:bg-muted/50 transition-colors group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary rounded-lg">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-foreground">{presentation.fileName}</span>
          </div>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            ›
          </span>
        </button>
      </div>

      {/* Feedback Section */}
      <div className="mb-6 flex-1">
        <h4 className="text-sm font-medium text-foreground mb-3">
          Feedback e azioni
        </h4>
        <div className="bg-card rounded-xl p-4">
          <Textarea
            id="studentFeedback"
            name="studentFeedback"
            placeholder="Aggiungi feedback agli studenti..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[120px] bg-transparent border-none resize-none focus-visible:ring-0 p-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-auto">
        <Button
          variant="outline"
          className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary"
        >
          Approva l'invio
        </Button>
        <Button
         onClick={onRequestResend}
          variant="default"
          className="w-full py-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Richiedi il nuovo invio
        </Button>
      </div>
    </div>
  );
};
