import { Card } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ActivityChart() {
  const activities = [
    { label: 'Allenatori in attesa di approvazione', percentage: 30, color: 'bg-red-500' },
    { label: 'Atleti in attesa di richieste', percentage: 25, color: 'bg-cyan-400' },
    { label: 'Atleti acquistati', percentage: 20, color: 'bg-yellow-400' },
    { label: 'Ticket', percentage: 15, color: 'bg-purple-500' },
    { label: 'Pagamenti in sospeso', percentage: 10, color: 'bg-green-400' },
  ];

  return (
    <Card className="bg-gray-900 border-gray-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity size={20} className="text-gray-400" />
        <h3 className="text-lg font-semibold text-white">Attività e avvisi</h3>
      </div>

      {/* Donut Chart */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            {activities.reduce((acc, activity, index) => {
              const prevPercentage = activities.slice(0, index).reduce((sum, a) => sum + a.percentage, 0);
              const circumference = 2 * Math.PI * 35;
              const offset = circumference - (activity.percentage / 100) * circumference;
              const rotation = (prevPercentage / 100) * 360;

              acc.push(
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke={activity.color.replace('bg-', '')}
                  strokeWidth="12"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className={activity.color}
                  style={{
                    transformOrigin: 'center',
                    transform: `rotate(${rotation}deg)`,
                  }}
                />
              );
              return acc;
            }, [] as JSX.Element[])}
            
            {/* Inner circle */}
            <circle cx="50" cy="50" r="28" fill="#0a0a0a" />
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${activity.color}`} />
              <span className="text-sm text-gray-400">{activity.label}</span>
            </div>
            <span className="text-sm font-semibold text-white">{activity.percentage}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
