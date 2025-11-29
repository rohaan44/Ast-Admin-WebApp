import {
  HomeIcon,
  DumbbellIcon,
  SettingsIcon,
  LogOutIcon,
  LogOut,
  Settings,
} from 'lucide-react';
import { CiChat1 } from 'react-icons/ci';
import { TbApple } from 'react-icons/tb';
import { PiCalendarCheck } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ResponsiveNavigation({
  activeTab,
  onTabChange,
}: SidebarProps) {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'controllo',
      label: 'Controllo',
      icon: HomeIcon,
      path: '/athleta-user-dashboard',
    },
    {
      id: 'formazione',
      label: 'Formazione',
      icon: DumbbellIcon,
      path: '/athleta-work-out-dashboard',
    },
    {
      id: 'allenatori',
      label: 'Allenatori',
      icon: TbApple,
      path: '/athleta/coaches/add-coach',
    },
    {
      id: 'checkin',
      label: 'Check-In',
      icon: PiCalendarCheck,
      path: '/athleta-checkin',
    },
    { id: 'chat', label: 'Chat', icon: CiChat1, path: '/athlete-chat' },
  ];

  const handleNavigation = (id: string, path: string) => {
    onTabChange(id);
    navigate(path);
  };

  const NavItem = ({
    item,
    isActive,
    isMobile = false,
  }: {
    item: any;
    isActive: boolean;
    isMobile?: boolean;
  }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => handleNavigation(item.id, item.path)}
        className={cn(
          'group flex items-center justify-center transition-all',
          isMobile ? 'flex-col gap-1 w-full h-full' : 'flex-col gap-2 w-full'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center transition-all duration-300 rounded-full',
            isMobile ? 'w-10 h-10' : 'w-12 h-12',
            // Active State Colors
            isActive
              ? 'bg-[#FF3B30] text-white shadow-lg shadow-red-500/20'
              : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10'
          )}
        >
          <Icon size={isMobile ? 20 : 22} strokeWidth={1.5} />
        </div>
        <span
          className={cn(
            'font-medium tracking-wide transition-colors',
            isMobile ? 'text-[9px]' : 'text-[10px]',
            isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
          )}
        >
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <>
      <div className='md:hidden fixed top-0 left-0 right-0 h-16 bg-[#111111] border-b border-white/5 flex items-center justify-between px-6 z-50'>
        <div className='w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center'>
          <span className='text-[#FF3B30] font-bold italic text-md tracking-tighter'>
            AST
          </span>
        </div>
        <div className='flex gap-4'>
          {/* Settings Icon for Mobile */}
          <button
            onClick={() => handleNavigation('impostazioni', '/admin/settings')}
            className={cn(
              'text-gray-400',
              activeTab === 'impostazioni' ? 'text-[#FF3B30]' : ''
            )}
          >
            <Settings size={24} />
          </button>
          <button
            onClick={() => console.log('logout')}
            className='text-gray-400'
          >
            <LogOut size={24} />
          </button>
        </div>
      </div>
      <div className='md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#111111] border-t border-white/5 flex items-center justify-around px-2 z-50 pb-2'>
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeTab === item.id}
            isMobile={true}
          />
        ))}
      </div>
          
    </>
  );
}
