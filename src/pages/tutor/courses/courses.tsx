import { useState } from "react";
import Sidebar from "@/components/tutor_component/sidebar";
import { CourseList } from "@/components/tutor_component/course_list";
import { CourseDetail } from "@/components/tutor_component/course_detail";
import { AddModulePanel } from "@/components/tutor_component/add_module_panel";
import { EmptyState } from "@/components/tutor_component/empty_state";
import { RefreshCw, Plus } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  modules: number;
  students: number;
  status: "Attivo" | "Bozza" | "Completato" | "Draft";
  duration?: string;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  type: "Video" | "Collegato" | "Quiz" | "PDF";
}

const coursesData: Course[] = [
  {
    id: "1",
    title: "Forza e Condizionamento – Livello 1",
    modules: 8,
    students: 120,
    status: "Attivo",
    duration: "6 settimane",
    description:
      "Corso di 6 settimane che copre le basi dell'allenamento della forza e i principi della nutrizione.",
  },
  { id: "2", title: "Certificazione di Specialista in Nutrizione", modules: 6, students: 90, status: "Bozza" },
  { id: "3", title: "Strength & Conditioning – Level 1", modules: 8, students: 120, status: "Attivo" },
  { id: "4", title: "Certificazione di Specialista in Nutrizione", modules: 8, students: 60, status: "Bozza" },
  { id: "5", title: "Certificazione di Specialista in Nutrizione", modules: 6, students: 85, status: "Draft" },
];

const modulesData: Module[] = [
  { id: "1", title: "Modulo 1: Introduzione", type: "Video" },
  { id: "2", title: "Modulo 2: Nozioni di base sulla nutrizione", type: "Video" },
  { id: "3", title: "Modulo 3: Quiz 1", type: "Collegato" },
];

type ViewMode = "empty" | "detail" | "addModule";

export default function Corsi() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("empty");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tutti");
  const [activeTab, setActiveTab] = useState("corsi");

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setViewMode("detail");
    window.scrollTo(0, 0);
  };

  const handleAddModule = () => setViewMode("addModule");

  const handleBackFromModule = () => setViewMode("detail");

  const handleMobileBack = () => {
    setViewMode("empty");
    setSelectedCourse(null);
    window.scrollTo(0, 0);
  };

  const backButton = () => {
    handleMobileBack();
    window.scrollTo(0, 0);
  };

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "Tutti" ||
      course.status === activeFilter ||
      (activeFilter === "Bozza" && course.status === "Draft");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background flex overflow-y-auto scrollbar-hide">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 no-scrollbar">
        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* LEFT PANEL */}
          <div
            className={`
              w-full lg:w-[480px] xl:w-[520px] 
              p-4 lg:p-6 border-r border-border/50 
              ${viewMode !== "empty" ? "hidden lg:block" : "block"}
            `}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6 mt-12 lg:mt-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Corsi</h1>
              <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <RefreshCw className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <CourseList
              courses={filteredCourses}
              selectedCourse={selectedCourse}
              onSelectCourse={handleCourseSelect}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* ADD BUTTON */}
            <div className="fixed bottom-6 left-1/2 lg:left-[280px] xl:left-[300px] transform -translate-x-1/2">
              <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow hover:bg-primary/90 transition-all hover:scale-105">
                <Plus className="w-6 h-6 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 p-4 lg:p-6">

            {viewMode === "empty" && (
              <div className="hidden lg:block">
                <EmptyState />
              </div>
            )}

            {viewMode === "detail" && selectedCourse && (
              <CourseDetail
                onClick={backButton}
                course={selectedCourse}
                modules={modulesData}
                onAddModule={handleAddModule}
              />
            )}

            {viewMode === "addModule" && (
              <AddModulePanel onBack={handleBackFromModule} />
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
