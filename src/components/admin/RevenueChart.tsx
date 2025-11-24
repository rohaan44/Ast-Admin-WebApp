import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3 } from 'lucide-react';

export default function RevenueChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  
  // Fixed bar heights for consistent visualization (increased for better visibility)
  const bars = [50, 65, 60, 75, 70, 80, 85, 90, 95, 75, 80, 85];

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
          <BarChart3 size={18} className="text-gray-400" />
          <h3 className="text-base font-semibold text-white">Panoramica delle entrate</h3>
        </div>
        <Select defaultValue="this-year">
          <SelectTrigger className="w-36 bg-gray-800 border-gray-700 text-white text-sm h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">Quest'anno</SelectItem>
            <SelectItem value="last-year">Anno scorso</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Chart */}
      <div className="relative" style={{ height: '160px' }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
          <span>€100k</span>
          <span>€75k</span>
          <span>€50k</span>
          <span>€25k</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="ml-12 h-full flex items-end justify-between gap-1 pb-2">
          {bars.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-gradient-to-t from-red-600 to-red-500 rounded-t-sm hover:from-red-500 hover:to-red-400 transition-all cursor-pointer min-h-[20px]"
                style={{ height: `${height}%`, minHeight: '20px' }}
              />
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="absolute -bottom-5 left-12 right-0 flex justify-between text-xs text-gray-500">
          {months.map((month, index) => (
            <span key={index} className="flex-1 text-center">{month}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}
