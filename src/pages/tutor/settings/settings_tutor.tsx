import { useState } from "react";
import Sidebar from '@/components/tutor_component/sidebar';
// import { AppSidebar } from "@/components/layout/AppSidebar";
import { SettingsIcon } from "@/components/tutor_component/setting_icon";
import { SettingsMainView } from "@/components/tutor_component/setting_main_view";
import { ChangePasswordView } from "@/components/tutor_component/change_password";
import { LanguageSelectorView } from "@/components/tutor_component/language_selector";
import { AddCertificationView } from "@/components/tutor_component/add_certifications";

type SettingsView = "settings" | "profile" | "password" | "language" | "certification" | "logout";

export default function SettingsTutor() {
  const [currentView, setCurrentView] = useState<SettingsView>("settings");

  const renderView = () => {
    switch (currentView) {
      case "password":
        return <ChangePasswordView onBack={() => setCurrentView("settings")} />;
      case "language":
        return <LanguageSelectorView onBack={() => setCurrentView("settings")} />;
      case "profile":
      case "certification":
        return <AddCertificationView onBack={() => setCurrentView("settings")} />;
      default:
        return <SettingsMainView onNavigate={(view) => setCurrentView(view as SettingsView)} />;
    }
  };

   const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className="flex min-h-screen bg-background">
     <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex">
        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 max-w-xl">
          {renderView()}
        </div>

        {/* Right Side - Settings Icon (hidden on mobile/tablet) */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <SettingsIcon />
        </div>
      </main>
    </div>
  );
}
