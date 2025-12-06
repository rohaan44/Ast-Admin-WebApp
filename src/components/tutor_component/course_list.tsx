import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Course } from "@/pages/tutor/courses/courses";

const filters = ["Tutti", "Attivo", "Completato", "Bozza"];

interface CourseListProps {
  courses: Course[];
  selectedCourse: Course | null;
  onSelectCourse: (course: Course) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function CourseList({
  courses,
  selectedCourse,
  onSelectCourse,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: CourseListProps) {
  return (
    <div className="space-y-4">

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Cerca Corsi..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-secondary border-0 h-11"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Course List — FIXED SCROLL ISSUE */}
      <div className="space-y-3">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className={cn(
              "w-full p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all flex items-center gap-4 text-left",
              selectedCourse?.id === course.id && "bg-secondary ring-1 ring-border"
            )}
          >
            {/* Course Badge */}
            <div className="w-16 h-16 rounded-lg bg-card flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-foreground">
                {course.status === "Draft" ? "Course" : "Corso"}
              </span>
            </div>

            {/* Course Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground text-sm leading-tight mb-1 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                {course.modules} {course.status === "Draft" ? "Modules" : "Moduli"} | {course.students}{" "}
                {course.status === "Draft" ? "Students" : "Studenti"}
              </p>
              <span
                className={cn(
                  "inline-block px-3 py-0.5 rounded-full text-xs font-medium",
                  course.status === "Attivo" && "bg-success text-success-foreground",
                  course.status === "Bozza" && "bg-muted text-muted-foreground",
                  course.status === "Draft" && "bg-muted text-muted-foreground",
                  course.status === "Completato" && "bg-primary text-primary-foreground"
                )}
              >
                {course.status}
              </span>
            </div>

            <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
