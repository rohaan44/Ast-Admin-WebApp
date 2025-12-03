import { ChevronLeft, Clock, Users, BookOpen, FileText, Video, Link, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course, Module } from "@/pages/tutor/courses/courses";

interface CourseDetailProps {
  course: Course;
  modules: Module[];
  onAddModule: () => void;
  onClick:()=> void;
}

const getModuleIcon = (type: Module["type"]) => {
  switch (type) {
    case "Video":
      return Video;
    case "PDF":
      return FileText;
    case "Collegato":
    case "Quiz":
      return Link;
    default:
      return FileText;
  }
};

export function CourseDetail({ course, modules, onAddModule, onClick }: CourseDetailProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors lg:hidden"onClick={onClick}>
        
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">Dettagli del Corso</h2>
      </div>

      {/* Course Card */}
      <div className="bg-card rounded-2xl p-5 mb-6 border border-border/50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-xs font-semibold text-foreground">Corso</span>
            </div>
            <h3 className="font-semibold text-foreground text-lg">{course.title}</h3>
          </div>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              course.status === "Attivo" && "bg-success text-success-foreground"
            )}
          >
            {course.status}
          </span>
        </div>

        {course.description && (
          <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
        )}

        <div className="flex flex-wrap gap-6 text-sm">
          {course.duration && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{course.students} Studenti</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} Moduli</span>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Moduli</h3>
        <div className="space-y-3">
          {modules.map((module) => {
            const Icon = getModuleIcon(module.type);
            return (
              <div
                key={module.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{module.title}</h4>
                    <p className="text-xs text-muted-foreground">{module.type}</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-lg hover:bg-card flex items-center justify-center transition-colors">
                  <Pencil className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onAddModule}
          className="w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          + Carica contenuto (video/PDF)
        </button>
        <button className="w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors">
          + Aggiungi collegamento al quiz
        </button>
      </div>
    </div>
  );
}
