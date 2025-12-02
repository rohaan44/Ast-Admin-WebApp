import { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import AthleteStatsCard from '@/components/admin/AthleteStatsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, Award, Clock, Plus, User, CheckCircle, AlertCircle } from 'lucide-react';

export default function Academy() {
  const [activeTab, setActiveTab] = useState('tutore');

  const stats = [
    {
      title: 'Corsi totali',
      value: '32',
      subtitle: '8% rispetto al mese scorso',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      trend: '↑'
    },
    {
      title: 'Tutor attivi',
      value: '24',
      subtitle: '5% rispetto al mese scorso',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
      trend: '↓'
    },
    {
      title: 'Coaches certificati',
      value: '263',
      subtitle: '10% rispetto al mese scorso',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      trend: '↑'
    },
    {
      title: 'Richieste in sospeso',
      value: '12',
      subtitle: 'Domande in sospeso',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400',
    }
  ];

  const quickActions = [
    {
      title: 'Aggiungi nuovo corso',
      subtitle: 'Crea nuovi corsi versione agli allenatori',
      icon: Plus,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      title: 'Aggiungi nuovo tutor',
      subtitle: 'Aggiungi nuovi tutor e assegna gli allenatori in modo più efficiente',
      icon: User,
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      title: 'Emettere certificato',
      subtitle: 'Un maggior numero di tutor andrà a migliorare la tua offerta in modo più efficiente',
      icon: Award,
      color: 'bg-gray-800 hover:bg-gray-700'
    }
  ];

  const recentActivities = [
    {
      title: 'Pubblicato il corso "Nutrizione Avanzata"',
      subtitle: 'di Dr. sarah william 1 2 ore fa',
      icon: FileText,
      color: 'bg-orange-500'
    },
    {
      title: 'Certificato rinnovato per Mike Chen',
      subtitle: 'Automatica personale livello 5 3 ore fa',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Nuovo tutor aggiunto: Emma Davis',
      subtitle: 'Assegnato allenamento dalle livello 3 8 ore fa',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      title: 'Certificazione in scadenza a breve',
      subtitle: 'Alex Tandon - Specialista in nutrizione - Valido fa',
      icon: AlertCircle,
      color: 'bg-purple-500'
    }
  ];

  const topTutors = [
    {
      name: 'Johny Bravo',
      subtitle: 'Allenatore di forza',
      courses: '24 Corsi',
      rating: 'Valutazione 4.9',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Bucky Bucks',
      subtitle: 'Allenatore di forza',
      courses: '12 Corsi',
      rating: 'Valutazione 4.8',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Shen Z',
      subtitle: 'Specialista in nutrizione',
      courses: '08 Corsi',
      rating: 'Valutazione 4.5',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  ];

  const certificates = [
    {
      id: 1,
      trainer: 'Admin',
      certification: 'Allenamento personale livello 4',
      issueDate: 'Sep 15, 2025',
      expiryDate: 'Sep 15, 2026',
      status: 'Valido',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      trainer: 'Admin',
      certification: 'Allenamento personale livello 3',
      issueDate: 'Jan 26, 2025',
      expiryDate: 'Dec 26, 2025',
      status: 'In scadenza',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      trainer: 'Emma Davis',
      certification: 'Allenamento personale livello 5',
      issueDate: 'Dec 02, 2024',
      expiryDate: 'Dec 02, 2025',
      status: 'Valido',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 4,
      trainer: 'Emma Davis',
      certification: 'Allenamento personale livello 1',
      issueDate: 'Nov 30, 2023',
      expiryDate: 'Sep 14, 2024',
      status: 'Scaduta',
      avatar: 'https://i.pravatar.cc/150?img=9'
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
              <h1 className="text-2xl font-bold text-white mb-1">Gestione dell'Accademia</h1>
              <p className="text-gray-400 text-sm">Supervisionare corsi, tutor e certificazioni.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <AthleteStatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Column 1 - Quick Actions */}
              <div className="space-y-4">
                {/* Quick Actions */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-3">Azioni rapide</h2>
                  <div className="space-y-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        className={`w-full ${action.color} text-white p-3 h-auto justify-start items-start text-left`}
                      >
                        <action.icon size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                        <div className="overflow-hidden">
                          <p className="font-semibold text-sm truncate">{action.title}</p>
                          <p className="text-xs opacity-80 mt-1 line-clamp-2">{action.subtitle}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2 - Recent Activity */}
              <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-white mb-3">Attività recente</h2>
                  <div className="space-y-2">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-900 border border-gray-800 rounded-lg">
                        <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
                          <activity.icon size={16} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium">{activity.title}</p>
                          <p className="text-gray-400 text-xs mt-1">{activity.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

              {/* Column 3 - Top Tutors */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-white">Tutor dalle prestazioni eccellenti</h2>
                  <button className="text-blue-500 text-sm hover:underline">Visualizza tutto</button>
                </div>
                <div className="space-y-2 mb-4">
                  {topTutors.map((tutor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-900 border border-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img src={tutor.avatar} alt={tutor.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="text-white font-medium text-sm">{tutor.name}</p>
                          <p className="text-gray-400 text-xs">{tutor.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm font-medium">{tutor.courses}</p>
                        <p className="text-yellow-500 text-xs">{tutor.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate Status Overview - Full Width */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
            
            style={
              {
                backgroundColor: 'transparent'
              }
            }>
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">Certificate Status Overview</h2>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-400">Valida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-gray-400">In scadenza a breve</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-gray-400">Scaduta</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">S#</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Allenatore</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Certificazione</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Data di emissione</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Data di scadenza</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Stato</th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">Azioni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificates.map((cert) => (
                      <tr key={cert.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                        <td className="py-2 px-3">
                          <span className="text-white text-sm">{cert.id}</span>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <img src={cert.avatar} alt={cert.trainer} className="w-6 h-6 rounded-full" />
                            <span className="text-white text-sm">{cert.trainer}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">{cert.certification}</span>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">{cert.issueDate}</span>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">{cert.expiryDate}</span>
                        </td>
                        <td className="py-2 px-3">
                          <Badge 
                            className={`text-xs ${
                              cert.status === 'Valido'
                                ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                                : cert.status === 'In scadenza'
                                ? 'bg-orange-500/20 text-orange-500 hover:bg-orange-500/30'
                                : 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                            }`}
                          >
                            {cert.status}
                          </Badge>
                        </td>
                        <td className="py-2 px-3">
                          <button className="text-blue-500 text-xs hover:underline">
                            Rinnova ora
                          </button>
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
