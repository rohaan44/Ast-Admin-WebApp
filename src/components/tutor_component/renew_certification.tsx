import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Certification } from "@/pages/tutor/certification/certification_type";
import { CertificationStatusBadge } from "@/components/tutor_component/certification_status_badge";

interface RenewCertificateFormProps {
  certification: Certification;
  onBack: () => void;
  onRenew: () => void;
}

export const RenewCertificateForm = ({ certification, onBack, onRenew }: RenewCertificateFormProps) => {
  const [newExpiryDate, setNewExpiryDate] = useState("");
  const [notes, setNotes] = useState("");
  const [sendEmail, setSendEmail] = useState(true);

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Rinnovare la certificazione</h2>
      </div>

      {/* Student Info Card */}
      <div className="bg-card rounded-xl p-4 mb-6 border border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
              <span className="text-lg font-semibold text-muted-foreground">
                {certification.studentInitials}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">{certification.studentName}</h3>
              <p className="text-sm text-muted-foreground">Corso: {certification.courseName}</p>
              <p className="text-sm text-muted-foreground">
                Data di completamento: {certification.completionDate || certification.expiryDate}
              </p>
            </div>
          </div>
          <CertificationStatusBadge status={certification.status} />
        </div>
      </div>

      {/* Renewal Options */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-foreground mb-3">Opzioni di rinnovo</h4>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Inserisci una nuova data di scadenza"
            value={newExpiryDate}
            onChange={(e) => setNewExpiryDate(e.target.value)}
            className="w-full p-4 bg-card rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Textarea
            placeholder="Aggiungi eventuali note per questo rinnovo..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px] bg-card border-none resize-none focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground rounded-xl"
          />
        </div>
      </div>

      {/* Email Toggle */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-foreground">Inviare una notifica via email allo studente?</span>
        <Switch checked={sendEmail} onCheckedChange={setSendEmail} />
      </div>

      {/* Certificate Preview */}
      <div className="mb-6 flex-1">
        <h4 className="text-lg font-semibold text-foreground mb-3">Anteprima del certificato</h4>
        <div className="bg-card rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-muted-foreground">QR</span>
          </div>
          <div>
            <p className="text-foreground font-semibold">{certification.certificateNumber || "AST-2025-00923"}</p>
            <p className="text-sm text-muted-foreground">Layout del certificato generato automaticamente</p>
          </div>
        </div>
      </div>

      {/* Renew Button */}
      <Button
        variant="outline"
        className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary"
        onClick={onRenew}
      >
        Rinnovare il certificato
      </Button>
    </div>
  );
};
