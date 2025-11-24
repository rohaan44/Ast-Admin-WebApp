import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  bgImage?: string;
}

export default function StatsCard({ title, value, change, isPositive, icon: Icon, bgImage }: StatsCardProps) {
  return (
    <Card 
      className="relative overflow-hidden bg-gray-900 p-4 group hover:border-gray-700 transition-all"
      style={{
        height: '160px',
        borderRadius: '15px',
        borderWidth: '1px',
        borderColor: '#1f2937',
        opacity: 1,
      }}
    >
      {/* Background Image */}
      {bgImage && (
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <h3 className="text-4xl font-bold text-white">{value}</h3>
          </div>
          <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon size={24} className="text-white" />
          </div>
        </div>

        <div className={cn(
          "flex items-center gap-1 text-sm font-medium",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          <span>{isPositive ? '↑' : '↓'}</span>
          <span>{change}</span>
        </div>
      </div>
    </Card>
  );
}
