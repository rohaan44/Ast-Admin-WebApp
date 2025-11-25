import { useState } from 'react';
import { Users, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsCard from '@/components/admin/StatsCard';
import RevenueChart from '@/components/admin/RevenueChart';
import ActivityChart from '@/components/admin/ActivityChart';
import TopPerformers from '@/components/admin/TopPerformers';
import GrowthChart from '@/components/admin/GrowthChart';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('controllo');

  const stats = [
    {
      title: 'Allenatori attivi',
      value: '50',
      change: '6% rispetto al mese scorso',
      isPositive: true,
      icon: Users,
      bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    },
    {
      title: 'Atleti attivi',
      value: '132',
      change: '5% rispetto al mese scorso',
      isPositive: false,
      icon: TrendingUp,
      bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    },
    {
      title: 'Entrate mensili',
      value: '€84k+',
      change: '16% rispetto al mese scorso',
      isPositive: true,
      icon: DollarSign,
      bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    },
    {
      title: 'Verifiche in sospeso',
      value: '19',
      change: 'Domanda in sospeso',
      isPositive: false,
      icon: Calendar,
      bgImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400',
    },
  ];

  return (
  <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
    {/* Sidebar */}
    <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

    {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-[1800px] mx-auto space-y-4">

          {/* Stats Cards - PERFECT mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts */}
          <div className="space-y-5">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <RevenueChart />
              <ActivityChart />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TopPerformers />
              <GrowthChart />
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
);

}
