import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function GrowthChart() {
  return (
    <Card className="bg-gray-900 border-gray-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp size={20} className="text-gray-400" />
        <h3 className="text-lg font-semibold text-white">Panoramica della crescita</h3>
      </div>

      {/* Chart Area */}
      <div className="relative h-64">
        <svg viewBox="0 0 800 200" className="w-full h-full">
          {/* Grid lines */}
          <line x1="0" y1="50" x2="800" y2="50" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="100" x2="800" y2="100" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="150" x2="800" y2="150" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />

          {/* Allenatori Area (Red) */}
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0 180 L 100 160 L 200 140 L 300 130 L 400 120 L 500 110 L 600 100 L 700 90 L 800 80 L 800 200 L 0 200 Z"
            fill="url(#redGradient)"
          />
          <path
            d="M 0 180 L 100 160 L 200 140 L 300 130 L 400 120 L 500 110 L 600 100 L 700 90 L 800 80"
            stroke="#ef4444"
            strokeWidth="3"
            fill="none"
          />

          {/* Atlete Area (Green) */}
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0 190 L 100 185 L 200 175 L 300 170 L 400 165 L 500 160 L 600 155 L 700 150 L 800 145 L 800 200 L 0 200 Z"
            fill="url(#greenGradient)"
          />
          <path
            d="M 0 190 L 100 185 L 200 175 L 300 170 L 400 165 L 500 160 L 600 155 L 700 150 L 800 145"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
          />

          {/* Tooltip Point */}
          <circle cx="600" cy="100" r="6" fill="#ef4444" stroke="#0a0a0a" strokeWidth="3" />
          <circle cx="600" cy="155" r="6" fill="#22c55e" stroke="#0a0a0a" strokeWidth="3" />
        </svg>

        {/* Tooltip */}
        <div className="absolute top-8 right-32 bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl">
          <p className="text-xs text-gray-400 mb-2">Sat, 21 June 2025</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-white">Allenatori</span>
              <span className="text-sm font-bold text-red-500 ml-auto">↑ 788</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-white">Atlete</span>
              <span className="text-sm font-bold text-green-500 ml-auto">↑ 378</span>
            </div>
          </div>
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 -ml-8">
          <span>1k</span>
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm text-gray-400">Allenatori</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm text-gray-400">Atlete</span>
        </div>
      </div>
    </Card>
  );
}
