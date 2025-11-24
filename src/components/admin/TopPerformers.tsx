import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';

interface Performer {
  rank: number;
  name: string;
  role: string;
  athletes: string;
  revenue: string;
  status: 'Active' | 'Pending';
}

export default function TopPerformers() {
  const performers: Performer[] = [
    { rank: 1, name: 'Roben Waters', role: 'Allenatore', athletes: '109+', revenue: '€19,390', status: 'Active' },
    { rank: 2, name: 'John Wick', role: 'Allenatore', athletes: '80+', revenue: '€15,087', status: 'Active' },
    { rank: 3, name: 'Tony Stark', role: 'Allenatore', athletes: '64+', revenue: '€12,200', status: 'Pending' },
    { rank: 4, name: 'Peter Parker', role: 'Allenatore', athletes: '52+', revenue: '€8,450', status: 'Active' },
    { rank: 5, name: 'Ben Tennison', role: 'Allenatore', athletes: '48+', revenue: '€6,089', status: 'Active' },
    { rank: 6, name: 'Walter White', role: 'Allenatore', athletes: '36+', revenue: '€3,998', status: 'Active' },
    { rank: 7, name: 'Mike Tyson', role: 'Allenatore', athletes: '22+', revenue: '€2,357', status: 'Pending' },
  ];

  const tabs = ['Tutor', 'Allenatori', 'Atlete'];

  return (
    <Card 
      className="bg-gray-900 border-gray-800 p-6 w-full"
      style={{
        height: '360px',
        borderRadius: '15px',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-gray-400" />
          <h3 className="text-base font-semibold text-white">Migliori interpreti</h3>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                index === 1
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-2 px-2 font-medium text-gray-400">Superiore</th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">Allenatore</th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">Atleti serviti</th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">Reddito</th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">Stato</th>
            </tr>
          </thead>
          <tbody>
            {performers.map((performer) => (
              <tr key={performer.rank} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                <td className="py-2 px-2">
                  <span className="text-white font-medium">{performer.rank}</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-white">{performer.name}</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-gray-300">{performer.athletes}</span>
                </td>
                <td className="py-2 px-2">
                  <span className="text-white font-medium">{performer.revenue}</span>
                </td>
                <td className="py-2 px-2">
                  <Badge 
                    variant={performer.status === 'Active' ? 'default' : 'secondary'}
                    className={`text-xs ${performer.status === 'Active' 
                      ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' 
                      : 'bg-orange-500/20 text-orange-500 hover:bg-orange-500/30'
                    }`}
                  >
                    {performer.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
