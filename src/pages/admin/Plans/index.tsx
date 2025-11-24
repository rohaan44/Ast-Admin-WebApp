import { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import AthleteStatsCard from '@/components/admin/AthleteStatsCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, Sparkles, Dumbbell, Tag, Plus, Eye, Edit, Copy, Trash2 } from 'lucide-react';

export default function Plans() {
  const [activeTab, setActiveTab] = useState('piani');

  const stats = [
    {
      title: 'Totale piani acquistati',
      value: '160',
      subtitle: '12% rispetto al mese scorso',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      trend: '↑'
    },
    {
      title: 'Piani di formazione',
      value: '86',
      subtitle: '75% del totale',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    },
    {
      title: 'Piani nutrizionali',
      value: '61',
      subtitle: '26% del totale',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
    },
    {
      title: 'Più usato',
      value: 'Taglio',
      subtitle: '68 richiesta',
      icon: Tag,
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400',
    }
  ];

  const plans = [
    {
      id: 1,
      name: 'Plan 1',
      description: '12-week progressive program',
      type: 'Training',
      category: 'Strength',
      version: 'V 2.1',
      creator: 'Admin',
      creatorAvatar: 'https://i.pravatar.cc/150?img=1',
      lastUpdate: '2 giorni fa',
      usage: '127 atleti',
      usageDetail: 'Utilizzo attivo'
    },
    {
      id: 2,
      name: 'Plan 2',
      description: 'High protein meal plan',
      type: 'Nutrition',
      category: 'Nutrition',
      version: 'V 1.9',
      creator: 'Admin',
      creatorAvatar: 'https://i.pravatar.cc/150?img=2',
      lastUpdate: '12 giorni fa',
      usage: '55 atleti',
      usageDetail: 'Utilizzo elevato'
    },
    {
      id: 3,
      name: 'Cardio Endurance',
      description: '8-week cardio program',
      type: 'Nutrition',
      category: 'Endurance',
      version: 'V 1.3',
      creator: 'Emma Davis',
      creatorAvatar: 'https://i.pravatar.cc/150?img=9',
      lastUpdate: '30 giorni fa',
      usage: '8 atleti',
      usageDetail: 'Basso utilizzo'
    }
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-[1800px] mx-auto space-y-4">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Biblioteca dei piani</h1>
              <p className="text-gray-400 text-sm">Gestire pacchetti di allenamento e nutrizione.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <AthleteStatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Cerca piani..."
                  className="pl-10 bg-gray-900 border-gray-800 text-white"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Cerca piani..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Cerca piani...</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="date">Data</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-48 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Tutte le categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte le categorie</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="nutrition">Nutrition</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-32 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Creatori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Creatori</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="emma">Emma Davis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Plans Table */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">Piani di allenamento e nutrizione</h2>
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <Plus size={16} className="mr-2" />
                  Crea nuovo piano
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">S#</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Nome del piano</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Tipo</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Categoria</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Versione</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Allenatore</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Ultimo aggiornamento</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Utilizzo</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Azioni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan) => (
                      <tr key={plan.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                        <td className="py-2 px-3">
                          <span className="text-white text-sm">{plan.id}</span>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <FileText size={16} className="text-gray-400" />
                            <div>
                              <p className="text-white font-medium text-sm">{plan.name}</p>
                              <p className="text-gray-400 text-xs">{plan.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <Badge 
                            className={`text-xs ${
                              plan.type === 'Training'
                                ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                                : 'bg-orange-500/20 text-orange-500 hover:bg-orange-500/30'
                            }`}
                          >
                            {plan.type}
                          </Badge>
                        </td>
                        <td className="py-2 px-3">
                          <Badge 
                            className={`text-xs ${
                              plan.category === 'Strength'
                                ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                                : plan.category === 'Nutrition'
                                ? 'bg-orange-500/20 text-orange-500 hover:bg-orange-500/30'
                                : 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
                            }`}
                          >
                            {plan.category}
                          </Badge>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">{plan.version}</span>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <img src={plan.creatorAvatar} alt={plan.creator} className="w-5 h-5 rounded-full" />
                            <span className="text-white text-sm">{plan.creator}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">{plan.lastUpdate}</span>
                        </td>
                        <td className="py-2 px-3">
                          <div>
                            <p className="text-white text-sm font-medium">{plan.usage}</p>
                            <p className="text-gray-400 text-xs">{plan.usageDetail}</p>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg transition-colors">
                              <Eye size={14} className="text-gray-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg transition-colors">
                              <Edit size={14} className="text-gray-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg transition-colors">
                              <Copy size={14} className="text-gray-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg transition-colors">
                              <Trash2 size={14} className="text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
