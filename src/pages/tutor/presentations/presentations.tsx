import { useState } from "react";
import Sidebar from "@/components/tutor_component/sidebar";
import { PresentationList } from "@/components/tutor_component/presentation_list";
import { PresentationDetail } from "@/components/tutor_component/presenatation_details";
import { PresentationDetailFile } from "@/components/tutor_component/presenatation_details_pops";
import { EmptyState } from "@/components/tutor_component/empty_state";
import { FloatingActionButton } from "@/components/tutor_component/floating_action_button";
import { mockPresentations } from "@/pages/tutor/presentations/mock_presentation";
import { Presentation } from "@/pages/tutor/presentations/presentation";
import { useIsMobile } from "@/hooks/use-mobile";

const Presentations = () => {
  const [activeTab, setActiveTab] = useState("presentations");
  const [selectedPresentation, setSelectedPresentation] = useState<Presentation | null>(null);
  const [openFileView, setOpenFileView] = useState(false);
  const isMobile = useIsMobile();

  const handleSelectPresentation = (presentation: Presentation) => {
    setSelectedPresentation(presentation);
    setOpenFileView(false);
  };

  const handleBack = () => {
    if (openFileView) {
      setOpenFileView(false);
    } else {
      setSelectedPresentation(null);
    }
  };

  const handleOpenFileView = () => {
    setOpenFileView(true);
  };

  // ────────────────────────────────
  // MOBILE FLOW
  // ────────────────────────────────
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">

        {!selectedPresentation ? (
          <main className="p-4 pb-24">
            <PresentationList
              presentations={mockPresentations}
              selectedId={null}
              onSelect={handleSelectPresentation}
            />
          </main>
        ) : !openFileView ? (
          <main className="p-4 pb-24 overflow-y-auto animate-slide-in-right">
            <PresentationDetail
              presentation={selectedPresentation}
              onBack={handleBack}
              onOpenFile={handleOpenFileView}
              onRequestResend={handleOpenFileView}
            />
          </main>
        ) : (
          <main className="p-4 pb-24 overflow-y-auto animate-slide-in-right">
            <PresentationDetailFile
                  presentation={selectedPresentation}
                  onBack={() => setOpenFileView(false)} onOpenFile={function (): void {
                    throw new Error("Function not implemented.");
                  } } onRequestResend={function (): void {
                    throw new Error("Function not implemented.");
                  } }            />
          </main>
        )}

        <FloatingActionButton onClick={() => {}} />
      </div>
    );
  }

  // ────────────────────────────────
  // DESKTOP FLOW
  // ────────────────────────────────
  return (
    <div className="bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex">
        <div className="w-full max-w-lg border-r border-border p-6 h-screen overflow-hidden">
          <PresentationList
            presentations={mockPresentations}
            selectedId={selectedPresentation?.id || null}
            onSelect={handleSelectPresentation}
          />
        </div>

        <div className="flex-1 p-6 h-screen overflow-y-auto scrollbar-thin">
          {!selectedPresentation && !openFileView && <EmptyState />}

          {selectedPresentation && !openFileView && (
            <PresentationDetail
              presentation={selectedPresentation}
              onBack={handleBack}
              onOpenFile={handleOpenFileView}
              onRequestResend={handleOpenFileView}
            />
          )}

          {selectedPresentation && openFileView && (
            <PresentationDetailFile
          onOpenFile={() => setOpenFileView(true)}
    onRequestResend={() => setOpenFileView(true)}
              presentation={selectedPresentation}
              onBack={() => setOpenFileView(false)}
            />
          )}
        </div>
      </div>

      <FloatingActionButton onClick={() => {}} />
    </div>
  );
};

export default Presentations;
