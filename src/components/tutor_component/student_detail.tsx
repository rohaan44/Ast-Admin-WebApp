import { ArrowLeft } from "lucide-react";
import { Certification } from "@/pages/tutor/certification/certification_type";
// import { CertificationStatusBadge } from "@/component/tutor/certification/certification_type";
import { Button } from "@/components/ui/button";

interface StudentDetailProps {
  certification: Certification;
  onBack: () => void;
  onIssueCertificate: () => void;
  onRenewCertificate: () => void;
  onViewCertificate: () => void;
}

export const StudentDetail = ({
  certification,
  onBack,
  onIssueCertificate,
  onRenewCertificate,
  onViewCertificate,
}: StudentDetailProps) => {
  const isEligible = certification.courseProgress === 100 && (certification.examScore || 0) >= 70;

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Particolare dello studente</h2>
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
                Scadenza del certificato precedente: {certification.expiryDate}
              </p>
            </div>
          </div>
          {isEligible && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-success text-success-foreground whitespace-nowrap">
              Idoneo per la certificazione
            </span>
          )}
        </div>
      </div>

      {/* Progress Items */}
      <div className="space-y-3 mb-6">
        <div className="bg-card rounded-xl p-4 flex items-center justify-between">
          <span className="text-foreground">Avanzamento del corso</span>
          <span className="text-success font-medium">Completato al {certification.courseProgress || 0}%</span>
        </div>
        <div className="bg-card rounded-xl p-4 flex items-center justify-between">
          <span className="text-foreground">Esame finale</span>
          <span className="text-success font-medium">Superato ({certification.examScore || 0}%)</span>
        </div>
        <div className="bg-card rounded-xl p-4 flex items-center justify-between">
          <span className="text-foreground">Revisione del lavoro</span>
          <span className="text-primary font-medium cursor-pointer hover:underline">Link alle proposte</span>
        </div>
      </div>

      {/* Certificate Section (if has certificate) */}
      {certification.certificateNumber && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">Certificazione</h4>
          <div className="bg-card rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Data di emissione: {certification.issueDate}</span>
              <span className="text-muted-foreground">Expiry Date: {certification.expiryDate}</span>
            </div>
            {/* QR Code placeholder */}
            <div className="flex justify-center py-8">
              <div className="w-40 h-40 bg-foreground rounded-lg flex items-center justify-center">
                <div className="w-36 h-36 bg-background rounded grid grid-cols-5 gap-1 p-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${Math.random() > 0.5 ? "bg-foreground" : "bg-background"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-auto">
        <Button
          variant="outline"
          className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary"
          onClick={certification.certificateNumber ? onViewCertificate : onIssueCertificate}
        >
          Emettere certificato
        </Button>
        {certification.status === "active" && (
          <Button
            variant="default"
            className="w-full py-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onRenewCertificate}
          >
            Rinnovare il certificato
          </Button>
        )}
      </div>

      {/* History */}
      {certification.history && certification.history.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">Storia</h4>
          <div className="space-y-2">
            {certification.history.map((h) => (
              <div key={h.id} className="bg-card rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">Pubblicato il {h.issueDate}</p>
                  <p className="text-sm text-muted-foreground">Scaduto il {h.expiryDate}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-destructive text-destructive-foreground">
                  Scaduta
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
