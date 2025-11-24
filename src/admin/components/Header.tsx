import { Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className="h-20 bg-[#0a0a0a] border-b border-gray-800 px-8 flex items-center justify-between">
      {/* Welcome Message */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Ciao, <span className="text-white">Sammy Snow</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Spero che la tua giornata sia andata bene oggi? Rendiamola ancora più bella iniziando a dare un'occhiata ai progressi del tuo team questo mese!
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 w-64 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600"
          />
        </div>

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
    </header>
  );
}
