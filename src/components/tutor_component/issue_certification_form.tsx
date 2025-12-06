import { ArrowLeft, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { mockStudents } from "@/pages/tutor/certification/mock_certification";
import { Student, StudentCourse } from "@/pages/tutor/certification/certification_type";

interface IssueCertificateFormProps {
  onBack: () => void;
  onGenerate: () => void;
  preselectedStudent?: string;
}

export const IssueCertificateForm = ({ onBack, onGenerate, preselectedStudent }: IssueCertificateFormProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(
    preselectedStudent ? mockStudents.find((s) => s.name === preselectedStudent) || null : null
  );
  const [selectedCourse, setSelectedCourse] = useState<StudentCourse | null>(null);
  const [certificateType, setCertificateType] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [notes, setNotes] = useState("");
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);

  const filteredStudents = mockStudents.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Emettere nuovo certificato</h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Selezione degli studenti</h4>
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cerca per nome o ID."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowStudentDropdown(true)}
            className="w-full pl-11 pr-4 py-3 bg-card rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button
          onClick={() => setShowStudentDropdown(!showStudentDropdown)}
          className="w-full flex items-center justify-between p-4 bg-card rounded-xl text-muted-foreground hover:bg-muted/50 transition-colors"
        >
          <span>{selectedStudent ? selectedStudent.name : "Seleziona uno studente"}</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        {showStudentDropdown && (
          <div className="mt-2 bg-card rounded-xl border border-border max-h-40 overflow-y-auto">
            {filteredStudents.map((student) => (
              <button
                key={student.id}
                onClick={() => {
                  setSelectedStudent(student);
                  setShowStudentDropdown(false);
                  setSelectedCourse(student.courses[0] || null);
                }}
                className="w-full p-3 text-left hover:bg-muted/50 text-foreground"
              >
                {student.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Course Information */}
      {selectedStudent && selectedCourse && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Corso Information</h4>
          <div className="bg-card rounded-xl p-4 space-y-1">
            <p className="text-foreground">Corso: {selectedCourse.name}</p>
            <p className="text-muted-foreground">Durata: {selectedCourse.duration}</p>
            <p className="text-muted-foreground">Data di completamento: {selectedCourse.completionDate}</p>
          </div>
        </div>
      )}

      {/* Certificate Details */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Dettagli del certificato</h4>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl text-muted-foreground">
            <span>{certificateType || "Seleziona Tipo di certificato"}</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Data di emissione"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="w-full p-4 bg-card rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="text"
            placeholder="Data di scadenza"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-4 bg-card rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Textarea
            placeholder="Note (facoltative)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[80px] bg-card border-none resize-none focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground rounded-xl"
          />
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="mb-6 flex-1">
        <h4 className="text-sm font-medium text-foreground mb-3">Anteprima del certificato</h4>
        <div className="bg-card rounded-xl p-6 text-center">
          <p className="text-primary font-semibold mb-1">Accademia A.S.T.</p>
          <p className="text-muted-foreground text-sm mb-2">COMPLETAMENTO</p>
          <p className="text-foreground font-semibold mb-1">{selectedStudent?.name || "John D."}</p>
          <p className="text-muted-foreground text-sm mb-4">
            per aver completato con successo il corso
          </p>
          <p className="text-foreground font-semibold mb-4">
            {selectedCourse?.name || "Padronanza del coaching nutrizionale"}
          </p>
          <div className="w-16 h-16 mx-auto bg-foreground rounded flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-background rounded grid grid-cols-4 gap-0.5 p-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? "bg-foreground" : "bg-background"}`} />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-xs">Certificato n. AST-2025-00923</p>
        </div>
      </div>

      {/* Generate Button */}
      <Button
        variant="outline"
        className="w-full py-6 rounded-xl border-border text-foreground hover:bg-secondary"
        onClick={onGenerate}
      >
        Genera certificato
      </Button>
    </div>
  );
};
