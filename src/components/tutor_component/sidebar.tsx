import { Home,Settings,LogOut} from 'lucide-react';
import courses from "@/components/svgs/courses.svg"
import presentations from "@/assets/svg/Presentation.svg"
import certification from "@/assets/svg/certification.svg"
import settings from "@/assets/svg/setting.svg"
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import MyLogo from '@/assets/svg/Logo.svg';
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ResponsiveNavigation({ activeTab, onTabChange }: SidebarProps) {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 'controllo', label: 'Controllo', icon: Home, path: '/tutor/Dashbaord' },
    { id: 'corsi', label: 'Corsi', icon: () => <img src={courses} className="w-6 h-6" />, path: "/tutor/courses"},
    { id: 'presentations', label: 'Presentations', icon: () => <img src={presentations} className="w-6 h-6" />, path: "/tutor/presentations"},
    { id: 'certification', label: 'Certification', icon: () => <img src={certification} className="w-6 h-6" />, path: "/tutor/certification"},
    
    // { id: 'tutore', label: 'Tutore', icon: Bike, path: '/admin/academy' },
    // { id: 'piani', label: 'Piani', icon: Sparkles, path: '/admin/plans' },
  ];

  const handleNavigation = (id: string, path: string) => {
    onTabChange(id);
    navigate(path);
  };

  // Reusable Nav Item (Adjusts styles based on Mobile vs Desktop context)
  const NavItem = ({ 
    item, 
    isActive, 
    isMobile = false 
  }: { 
    item: any, 
    isActive: boolean, 
    isMobile?: boolean 
  }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => handleNavigation(item.id, item.path)}
        className={cn(
          "group flex items-center justify-center transition-all",
          isMobile ? "flex-col gap-1 w-full h-full" : "flex-col gap-2 w-full"
        )}
      >
        <div 
          className={cn(
            "flex items-center justify-center transition-all duration-300 rounded-full",
            // Desktop Size vs Mobile Size
            isMobile ? "w-10 h-10" : "w-12 h-12",
            // Active State Colors
            isActive 
              ? "bg-[#FF3B30] text-white shadow-lg shadow-red-500/20" 
              : "bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10"
          )}
        >
          <Icon size={isMobile ? 20 : 22} strokeWidth={1.5} />
        </div>
        
        {/* Label - Hidden on very small screens if needed, or scaled down */}
        <span 
          className={cn(
            "font-medium tracking-wide transition-colors",
            isMobile ? "text-[9px]" : "text-[10px]",
            isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
          )}
        >
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <>
      {/* ==================================================================
          DESKTOP SIDEBAR (Visible on md screens and up)
      ================================================================== */}
      <div className="hidden md:flex h-screen w-[78px] px-2 flex-col items-center py-2 gap-2 flex-shrink-0 sticky top-0">
        
        {/* Top Pill */}
        <div className="w-full bg-[#111111] rounded-[40px] py-2 flex flex-col items-center gap-4 shadow-xl border border-white/5">
          {/* Logo */}
      <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center flex-shrink-0">
  <img 
    src={MyLogo} 
    alt="My Logo" 
    className="w-8 h-8 object-contain"
  />
</div>

          {/* Nav Items */}
          <nav className="flex flex-col items-center gap-3 w-full">
            {menuItems.map((item) => (
              <NavItem 
                key={item.id} 
                item={item} 
                isActive={activeTab === item.id} 
              />
            ))}
          </nav>
          <div className="h-2" />
        </div>

        {/* Bottom Pill (Settings) */}
        <div className="w-full bg-[#111111] rounded-[40px] py-6 flex flex-col items-center gap-4 shadow-xl border border-white/5">
          <NavItem 
            item={{ id: 'setings', label: 'Settings', icon: () => <img src={settings} className="w-6 h-6" />, path: "/tutor/settings"}}
            isActive={activeTab === 'impostazioni'} 
          />
          <button 
            onClick={() => console.log('logout')}
            className="flex flex-col items-center gap-2 group w-full"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all">
              <LogOut size={22} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-300">Esci</span>
          </button>
        </div>
      </div>

      {/* ==================================================================
          MOBILE LAYOUT (Visible on sm screens and down)
      ================================================================== */}
      
      {/* 1. Mobile Top Bar (Logo + Settings/Logout shortcut) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#111111] border-b border-white/5 flex items-center justify-between px-6 z-50">
        <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center">
          <span className="text-[#FF3B30] font-bold italic text-md tracking-tighter"><img 
    src={MyLogo} 
    alt="My Logo" 
    className="w-8 h-8 object-contain"
  /></span>
        </div>
        <div className="flex gap-4">
           {/* Settings Icon for Mobile */}
           <button 
             onClick={() => handleNavigation('impostazioni', '/admin/settings')}
             className={cn("text-gray-400", activeTab === 'impostazioni' ? "text-[#FF3B30]" : "")}
            >
             <Settings size={24} />
           </button>
           <button onClick={() => console.log('logout')} className="text-gray-400">
             <LogOut size={24} />
           </button>
        </div>
      </div>

      {/* 2. Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#111111] border-t border-white/5 flex items-center justify-around px-2 z-50 pb-2">
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