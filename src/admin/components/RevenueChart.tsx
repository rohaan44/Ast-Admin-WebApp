import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3 } from 'lucide-react';

export default function RevenueChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  
  // Generate random heights for visualization
  const generateBars = () => {
    return months.map(() => Math.floor(Math.random() * 100) + 20);
  };

  const bars = generateBars();

  return (
    <Card className="bg-gray-900 border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 size={20} className="text-gray-400" />
          <h3 className="text-lg font-semibold text-white">Panoramica delle entrate</h3>
        </div>
        <Select defaultValue="this-year">
          <SelectTrigger className="w-40 bg-gray-800 border-gray-700 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">Quest'anno</SelectItem>
            <SelectItem value="last-year">Anno scorso</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
          <span>€100k</span>
          <span>€75k</span>
          <span>€50k</span>
          <span>€25k</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="ml-12 h-full flex items-end justify-between gap-1 pb-8">
          {bars.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-gradient-to-t from-red-600 to-red-500 rounded-t-sm hover:from-red-500 hover:to-red-400 transition-all cursor-pointer"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-500">
          {months.map((month, index) => (
            <span key={index} className="flex-1 text-center">{month}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}
