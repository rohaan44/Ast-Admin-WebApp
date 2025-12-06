import { ArrowLeft, FileText, Download } from "lucide-react";
import { Presentation } from "@/pages/tutor/presentations/presentation";
import { Button } from "@/components/ui/button";

interface PresentationDetailFileProps {
  presentation: Presentation;
  onBack: () => void;
  onOpenFile: () => void;
  onRequestResend: () => void;
}

export const PresentationDetailFile = ({
  presentation,
  onBack,
  onOpenFile,
  onRequestResend,
}: PresentationDetailFileProps) => {
  return (
    <div className="flex flex-col h-full animate-fade-in w-full">
      
      {/* Header - Shrink-0 ensures it doesn't get crushed */}
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 shrink-0">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-secondary transition-colors -ml-2 md:ml-0"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-lg md:text-2xl font-bold text-foreground line-clamp-1">
          Fascicolo del caso di studio
        </h2>
      </div>

      {/* PDF Preview Area */}
      {/* Mobile: Fixed min-height so it's visible. Desktop: flex-1 to fill space */}
      <div 
        className="w-full bg-card rounded-xl mb-4 md:mb-6 flex flex-col items-center justify-center p-6 md:p-8 
                   flex-1 min-h-[250px] md:min-h-0 border border-border/50"
      >
        <div className="p-3 md:p-4 bg-secondary rounded-lg mb-4">
          <FileText className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
        </div>
        <h3 className="text-base md:text-lg font-medium text-foreground mb-2 text-center">
          Anteprima PDF qui
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground text-center max-w-[200px] md:max-w-none">
          Scorri o scorri per visualizzare le pagine
        </p>
        
        {/* Optional: Add an Open button inside preview for mobile users */}
        <Button 
            variant="ghost" 
            size="sm" 
            onClick={onOpenFile}
            className="mt-4 md:hidden text-primary"
        >
            Apri a schermo intero
        </Button>
      </div>

      {/* Bottom Section - Wrapper for Info and Button */}
      <div className="shrink-0 space-y-4 md:space-y-6">
        
        {/* File Info */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2 md:mb-3 px-1">
            Informazioni rapide sul file
          </h4>
          <div className="bg-card rounded-xl p-3 md:p-4 space-y-2 border border-border/50">
            <div className="flex justify-between md:block">
               <span className="text-sm text-muted-foreground md:mr-2">Nome file:</span>
               <span className="text-sm text-foreground font-medium md:font-normal truncate max-w-[150px] md:max-w-none">{presentation.fileName}</span>
            </div>
            <div className="flex justify-between md:block">
               <span className="text-sm text-muted-foreground md:mr-2">Dimensioni:</span>
               <span className="text-sm text-foreground font-medium md:font-normal">{presentation.fileSize}</span>
            </div>
            <div className="flex justify-between md:block">
               <span className="text-sm text-muted-foreground md:mr-2">Caricato:</span>
               <span className="text-sm text-foreground font-medium md:font-normal">{presentation.uploadDate}</span>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <Button
          variant="outline"
          className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary mb-2 md:mb-0"
        >
          <Download className="w-4 h-4 mr-2" />
          Scarica file
        </Button>
      </div>
      
    </div>
  );
};