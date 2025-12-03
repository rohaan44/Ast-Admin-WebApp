import { Header } from "@/components/tutor_component/header";
import { StatsCard } from "@/components/tutor_component/stats_card";
import { ActivityFeed } from "@/components/tutor_component/action_feed";
import { QuickActions } from "@/components/tutor_component/quick_actions";
import GrowthChart from "@/components/tutor_component/growth_chart";
import Sidebar from "@/components/tutor_component/sidebar";
import { GraduationCap, ClipboardList, Award } from "lucide-react";
import { useState } from "react";

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState("controllo");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main
        className="
          flex-1 
          pt-20                      /* fixes mobile top bar overlap */
          md:pt-16                   /* fixes tablet top bar */
          ml-0                       /* default mobile no sidebar */
          md:ml-20                   /* space for sidebar on md+ */
          p-4 md:p-6 lg:p-8
        "
      >
        <Header />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-4">
          {/* Left side content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatsCard
                title="Corsi Attivi 5"
                subtitle="12 In attesa di"
                icon={<GraduationCap className="w-6 h-6 text-accent" />}
                gradient="linear-gradient(180deg, hsl(0, 0%, 12%) 0%, hsl(220, 70%, 25%) 100%)"
                isActive
                delay={0}
              />

              <StatsCard
                title="Esami In Sospeso"
                subtitle="12 Sospeso"
                icon={
                  <ClipboardList className="w-6 h-6 text-accent" />
                }
               gradient="linear-gradient(180deg, hsl(0, 0%, 12%) 0%, hsl(200, 60%, 80%) 100%)"
                delay={100}
              />

              <StatsCard
                title="Certificati Emessi"
                subtitle="12 Sospeso"
                icon={<Award className="w-6 h-6 text-accent" />}
                gradient="linear-gradient(180deg, hsl(0, 0%, 12%) 0%, hsl(280, 50%, 25%) 100%)"
                delay={200}
              />
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Growth Chart */}
            <GrowthChart />
          </div>

          {/* Right section */}
          <div className="xl:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;
