import {
  HomeIcon,
  DumbbellIcon,
  UsersIcon,
  BikeIcon,
  SparklesIcon,
  SettingsIcon,
  LogOutIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'controllo',
      label: 'Controllo',
      icon: HomeIcon,
      path: '/home',
    },
    { id: 'atleti', label: 'Atleti', icon: UsersIcon, path: '/atleti' },
    {
      id: 'allenatori',
      label: 'Allenatori',
      icon: DumbbellIcon,
      path: '/admin/trainers',
    },
    { id: 'tutore', label: 'Tutore', icon: BikeIcon, path: '/admin/academy' },
    { id: 'piani', label: 'Piani', icon: SparklesIcon, path: '/admin/plans' },
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
      {/* ========== DESKTOP SIDEBAR ========== */}
      <div className='hidden md:flex h-[100%] w-[100px] flex-col items-center py-4 gap-4 md:px-2 px-0 flex-shrink-0 sticky top-0'>
        <div className='w-full bg-[#111111] rounded-[40px] py-6 flex flex-col items-center gap-6 shadow-xl border border-white/5'>
          <div className='w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center flex-shrink-0'>
            <span className='text-[#FF3B30] font-bold italic text-lg tracking-tighter'>
              AST
            </span>
          </div>
          <nav className='flex flex-col items-center gap-6 w-full'>
            {menuItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
              />
            ))}
          </nav>
          {/* <div className='h-2' /> */}
        </div>

        <div className='w-full bg-[#111111] rounded-[40px] py-6 flex flex-col items-center gap-6 shadow-xl border border-white/5'>
          <NavItem
            item={{
              id: 'impostazioni',
              label: 'Settings',
              icon: SettingsIcon,
              path: '/admin/settings',
            }}
            isActive={activeTab === 'impostazioni'}
          />
          <button
            onClick={() => console.log('logout')}
            className='flex flex-col items-center gap-2 group w-full'
          >
            <div className='w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all'>
              <LogOutIcon size={22} strokeWidth={1.5} />
            </div>
            <span className='text-[10px] font-medium text-gray-500 group-hover:text-gray-300'>
              Esci
            </span>
          </button>
        </div>
      </div>
      {/* ========== MOBILE TOP BAR ========== */}
      <div className='md:hidden fixed top-0 left-0 right-0 h-16 bg-[#111111] border-b border-white/5 flex items-center justify-between px-6 z-50'>
        <div className='w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center'>
          <span className='text-[#FF3B30] font-bold italic text-md tracking-tighter'>
            AST
          </span>
        </div>

        <div className='flex gap-4'>
          <button
            onClick={() => handleNavigation('impostazioni', '/admin/settings')}
            className={cn(
              'text-gray-400',
              activeTab === 'impostazioni' ? 'text-[#FF3B30]' : ''
            )}
          >
            <SettingsIcon size={24} />
          </button>

          <button
            onClick={() => console.log('logout')}
            className='text-gray-400'
          >
            <LogOutIcon size={24} />
          </button>
        </div>
      </div>
      {/* ========== MOBILE BOTTOM NAVIGATION ========== */}
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
export default Sidebar;
