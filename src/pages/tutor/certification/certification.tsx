import { useState } from "react";
import Sidebar  from "@/components/tutor_component/sidebar";
// import { MobileNav } from "@/components/MobileNav";
import { FloatingActionButton } from "@/components/tutor_component/floating_action_button";
import { CertificationList } from "@/components/tutor_component/certification_list";
import { StudentDetail } from "@/components/tutor_component/student_detail";
import { IssueCertificateForm } from "@/components/tutor_component/issue_certification_form";
import { RenewalReminder } from "@/components/tutor_component/renewal_reminder";
import { RenewCertificateForm } from "@/components/tutor_component/renew_certification";
import { CertificationEmptyState } from "@/components/tutor_component/certification_empty_state";
import { mockCertifications } from "@/pages/tutor/certification/mock_certification";
import { Certification } from "@/pages/tutor/certification/certification_type";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

type DetailView = "student" | "issue" | "renewal-reminder" | "renew";

const CertificationPage = () => {
    const [activeTab, setActiveTab] = useState("certifications");
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [detailView, setDetailView] = useState<DetailView>("student");
  const isMobile = useIsMobile();

  const handleSelectCertification = (certification: Certification) => {
    setSelectedCertification(certification);
    setDetailView("student");
  };

  const handleBack = () => {
    if (detailView !== "student") {
      setDetailView("student");
    } else {
      setSelectedCertification(null);
    }
  };

  const handleIssueCertificate = () => setDetailView("issue");
  const handleRenewCertificate = () => setDetailView("renew");
  const handleShowRenewalReminder = () => {
    setDetailView("renewal-reminder");
    setSelectedCertification(mockCertifications[0]); // Trigger detail panel
  };

  const handleGenerateCertificate = () => {
    toast.success("Certificato generato con successo!");
    setDetailView("student");
  };

  const handleRenewComplete = () => {
    toast.success("Certificato rinnovato con successo!");
    setDetailView("student");
  };

  const renderDetailContent = () => {
    if (detailView === "issue") {
      return (
        <IssueCertificateForm
          onBack={handleBack}
          onGenerate={handleGenerateCertificate}
          preselectedStudent={selectedCertification?.studentName}
        />
      );
    }

    if (detailView === "renewal-reminder") {
      return (
        <RenewalReminder
          certifications={mockCertifications}
          onBack={handleBack}
          onRenew={(cert) => {
            setSelectedCertification(cert);
            setDetailView("renew");
          }}
          onRenewAll={() => toast.success("Tutti i certificati sono stati rinnovati!")}
        />
      );
    }

    if (detailView === "renew" && selectedCertification) {
      return (
        <RenewCertificateForm
          certification={selectedCertification}
          onBack={handleBack}
          onRenew={handleRenewComplete}
        />
      );
    }

    if (selectedCertification) {
      return (
        <StudentDetail
          certification={selectedCertification}
          onBack={handleBack}
          onIssueCertificate={handleIssueCertificate}
          onRenewCertificate={handleRenewCertificate}
          onViewCertificate={() => {}}
        />
      );
    }

    return <CertificationEmptyState />;
  };

  // Mobile: WhatsApp-style navigation
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        {!selectedCertification && detailView === "student" ? (
          <main className="p-4 pb-24">
            <CertificationList
              certifications={mockCertifications}
              selectedId={null}
              onSelect={handleSelectCertification}
            />
          </main>
        ) : (
          <main className="p-4 pb-24 h-screen overflow-y-auto animate-slide-in-right">
            {renderDetailContent()}
          </main>
        )}
        <FloatingActionButton onClick={handleShowRenewalReminder} />
        {/* <MobileNav activeItem={activeNavItem} onItemClick={setActiveNavItem} /> */}
      </div>
    );
  }

  // Desktop: Side-by-side layout
  return (
    <div className="min-h-screen bg-background flex">
     <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex">
        {/* List Panel */}
        <div className="w-full max-w-lg border-r border-border p-6 h-screen overflow-hidden">
          <CertificationList
            certifications={mockCertifications}
            selectedId={selectedCertification?.id || null}
            onSelect={handleSelectCertification}
          />
        </div>

        {/* Detail Panel */}
        <div className="flex-1 p-6 h-screen overflow-y-auto scrollbar-thin">
          {renderDetailContent()}
        </div>
      </div>

      <FloatingActionButton onClick={handleShowRenewalReminder} />
    </div>
  );
};

export default CertificationPage;
