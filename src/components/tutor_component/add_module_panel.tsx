import { ChevronLeft, FileVideo, FileText, X, Pencil, Link } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UploadedFile {
  id: string;
  name: string;
  type: "video" | "pdf";
}

interface QuizLink {
  id: string;
  url: string;
}

interface AddModulePanelProps {
  onBack: () => void;
}

export function AddModulePanel({ onBack }: AddModulePanelProps) {
  const [title, setTitle] = useState("Nozioni di base sulla nutrizione");
  const [description, setDescription] = useState(
    "Copre macronutrienti, micronutrienti e strategie dietetiche per gli atleti di forza."
  );
  const [files, setFiles] = useState<UploadedFile[]>([
    { id: "1", name: "nutrizione_basi_introduzione.mp4", type: "video" },
    { id: "2", name: "note_nutrizionali.pdf", type: "pdf" },
  ]);
  const [quizLinks, setQuizLinks] = useState<QuizLink[]>([
    { id: "1", url: "quizlink.com/module2" },
  ]);

  const removeFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  const removeQuizLink = (id: string) => {
    setQuizLinks(quizLinks.filter((l) => l.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">Aggiungi modulo</h2>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Title Input */}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titolo del modulo"
          className="bg-secondary border-0 h-12 text-foreground"
        />

        {/* Description Input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrizione del modulo"
          rows={3}
          className="w-full px-3 py-3 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />

        {/* Upload Content Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Carica contenuto</h3>

          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-4 bg-secondary rounded-xl"
            >
              <div className="flex items-center gap-3">
                {file.type === "video" ? (
                  <FileVideo className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <FileText className="w-5 h-5 text-muted-foreground" />
                )}
                <span className="text-sm text-foreground">{file.name}</span>
              </div>
              <button
                onClick={() => removeFile(file.id)}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}

          <button className="w-full py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors">
            + Carica nuovo file
          </button>
        </div>

        {/* Quiz Links Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Quiz sui collegamenti</h3>

          {quizLinks.map((link) => (
            <div
              key={link.id}
              className="flex items-center justify-between p-4 bg-secondary rounded-xl"
            >
              <div className="flex items-center gap-3">
                <Link className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-foreground">{link.url}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeQuizLink(link.id)}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <button className="w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors">
            + Aggiungi nuovo collegamento
          </button>
        </div>

        {/* Save Button */}
        <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-xl">
          Salva modifiche
        </Button>
      </div>
    </div>
  );
}
