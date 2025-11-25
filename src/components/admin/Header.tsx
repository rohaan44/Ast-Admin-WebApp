import { Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    // 1. HEADER CONTAINER: Fixed on top for mobile, expands in height when stacked.
    <header
      className="
     h-28 md:h-20
    bg-[#0a0a0a] border-b border-gray-800 
    px-4 lg:px-8 
    flex flex-col md:flex-row
    items-center justify-between
    transition-all duration-300
      "
    >
      {/* 2. TOP ROW (Mobile) / LEFT SECTION (Desktop) */}
      <div className="flex items-center justify-between w-full md:w-auto pt-2 md:pt-0">
        
        {/* Welcome Message (Simplified for mobile) */}
        <div className="flex flex-col justify-center overflow-hidden">
          {/* Font size adjustment */}
          <h1 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Ciao, <span className="text-white">Sammy Snow</span>
          </h1>
          {/* Hiding the long paragraph on mobile/tablet */}
          <p className="hidden lg:block text-sm text-gray-400 mt-1 max-w-3xl truncate">
            Spero che la tua giornata sia andata bene oggi? Rendiamola ancora più bella iniziando a dare un'occhiata ai progressi del tuo team questo mese!
          </p>
        </div>

        {/* MOBILE-ONLY ACTIONS (Hidden on desktop) */}
        <div className="flex items-center gap-3 md:hidden flex-shrink-0">
            {/* Notifications (Smaller icon for mobile) */}
            <button className="relative p-1 hover:bg-gray-800 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {/* User Avatar (Smaller for mobile) */}
            <Avatar className="w-8 h-8 cursor-pointer ring-2 ring-gray-700">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="User" />
                <AvatarFallback>SS</AvatarFallback>
            </Avatar>
        </div>
      </div>
      
      {/* 3. BOTTOM ROW (Mobile) / RIGHT SECTION (Desktop) */}
      <div className="flex items-center w-full md:w-auto gap-4 pb-3 md:pb-0">
        
        {/* Search Bar (Full width on mobile) */}
        <div className="relative w-full md:w-auto flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search"
            // Full width on mobile, responsive width on desktop
            className="
              pl-10 w-full md:w-40 lg:w-64 bg-gray-800/50 border-gray-700 
              text-white placeholder:text-gray-500 focus:border-gray-600 h-10
            "
          />
        </div>

        {/* DESKTOP-ONLY ACTIONS (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Bell size={22} className="text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {/* User Avatar */}
            <Avatar className="w-10 h-10 cursor-pointer ring-2 ring-gray-700 hover:ring-gray-600 transition-all">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="User" />
                <AvatarFallback>SS</AvatarFallback>
            </Avatar>
        </div>

      </div>
    </header>
  );
}