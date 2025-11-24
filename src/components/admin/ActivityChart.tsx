import { Card } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ActivityChart() {
  const activities = [
    { label: 'Allenatori in attesa di approvazione', percentage: 30, color: 'bg-red-500', stroke: '#ef4444' },
    { label: 'Atleti in attesa di richieste', percentage: 25, color: 'bg-cyan-400', stroke: '#22d3ee' },
    { label: 'Atleti acquistati', percentage: 20, color: 'bg-yellow-400', stroke: '#facc15' },
    { label: 'Ticket', percentage: 15, color: 'bg-purple-500', stroke: '#a855f7' },
    { label: 'Pagamenti in sospeso', percentage: 10, color: 'bg-green-400', stroke: '#4ade80' },
  ];

  return (
    <Card 
      className="bg-gray-900 border-gray-800 p-6 w-full"
      style={{
        height: '360px',
        borderRadius: '15px',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity size={18} className="text-gray-400" />
        <h3 className="text-base font-semibold text-white">Attività e avvisi</h3>
      </div>

      {/* Donut Chart */}
      <div className="flex items-center justify-center mb-2">
        <div className="relative w-40 h-40">
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
                  stroke={activity.stroke}
                  strokeWidth="12"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
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
