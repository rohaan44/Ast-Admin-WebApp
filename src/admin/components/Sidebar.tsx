import { Home, Dumbbell, Users, Bike, Sparkles, Clipboard, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'controllo', label: 'Controllo', icon: Home },
    { id: 'atleta', label: 'Atleta', icon: Users },
    { id: 'allenatori', label: 'Allenatori', icon: Dumbbell },
    { id: 'tutore', label: 'Tutore', icon: Bike },
    { id: 'piani', label: 'Piani', icon: Sparkles },
  ];

  return (
    <div className="w-20 bg-[#0a0a0a] border-r border-gray-800 flex flex-col items-center py-6 space-y-8">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-500">AST</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 flex flex-col items-center space-y-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-lg transition-all group relative",
                isActive 
                  ? "bg-red-500/20 text-red-500" 
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
              title={item.label}
            >
              <Icon size={24} />
              <span className="text-[10px] font-medium">{item.label}</span>
              
              {isActive && (
                <div className="absolute left-0 w-1 h-8 bg-red-500 rounded-r-full -ml-3" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center space-y-4">
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
          <Settings size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
}
