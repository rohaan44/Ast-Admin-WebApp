import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AthleteStatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  image: string;
  trend?: string;
}

export default function AthleteStatsCard({ title, value, subtitle, icon: Icon, image, trend }: AthleteStatsCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gray-900 border-gray-800 h-[120px] group hover:border-gray-700 transition-all">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full p-3 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-white">{value}</h3>
          </div>
          <div className="bg-gray-800/50 p-2 rounded-lg">
            <Icon size={20} className="text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-xs">
          {trend && <span className="text-green-500">{trend}</span>}
          <span className="text-gray-400">{subtitle}</span>
        </div>
      </div>
    </Card>
  );
}
