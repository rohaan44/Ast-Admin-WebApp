import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import AthleteStatsCard from "@/components/admin/AthleteStatsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  TrendingUp,
  FileText,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  Dumbbell,
  Filter,
} from "lucide-react";

export default function Trainers() {
  const [activeTab, setActiveTab] = useState("allenatori");
  const [open, setOpen] = useState(false);

  const stats = [
    {
      title: "Allenatori totali",
      value: "122",
      subtitle: "6% rispetto al mese scorso",
      icon: Dumbbell,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      trend: "↑",
    },
    {
      title: "Allenatori attivi",
      value: "50",
      subtitle: "5% rispetto al mese scorso",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
      trend: "↓",
    },
    {
      title: "Posizioni in sospeso",
      value: "19",
      subtitle: "Domande in sospeso",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    },
    {
      title: "Entrate medie generate",
      value: "€45k+",
      subtitle: "10% rispetto al mese scorso",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400",
      trend: "↑",
    },
  ];

  const trainers = [
    {
      id: 1,
      name: "Sara Johnson",
      email: "sara.johnson@email.com",
      certification: "Approved",
      specialization: "Strength Training",
      athletes: "109+",
      revenue: "€19,390",
      status: "Attivo",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      certification: "Approved",
      specialization: "Nutrition",
      athletes: "80+",
      revenue: "€15,087",
      status: "Attivo",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      certification: "Approved",
      specialization: "Tony Starck",
      athletes: "64+",
      revenue: "€12,200",
      status: "Attivo",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      certification: "Pending",
      specialization: "Roben Weaves",
      athletes: "52+",
      revenue: "€8,450",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 5,
      name: "Blackster",
      email: "blackster@email.com",
      certification: "Approved",
      specialization: "John Wick",
      athletes: "48+",
      revenue: "€6,099",
      status: "Attivo",
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: 6,
      name: "Clark Smith",
      email: "clarkscor@email.com",
      certification: "Approved",
      specialization: "Peter Parker",
      athletes: "36+",
      revenue: "€3,998",
      status: "Attivo",
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: 7,
      name: "Savannah",
      email: "savanny7@email.com",
      certification: "Pending",
      specialization: "Ben Tenison",
      athletes: "22+",
      revenue: "€2,357",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
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
              <h1 className="text-2xl font-bold text-white mb-1">
                Gestione allenatori
              </h1>
              <p className="text-gray-400 text-sm">
                Gestire i coach certificati e le loro prestazioni.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <AthleteStatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Search and Filters */}
            {/* Search + Filters */}
            <div className="flex items-start lg:flex-row justify-between gap-4">
              {/* Search */}
              <div className="flex-1 max-w-md relative w-full">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Cerca gli allenatori per nome o email..."
                  className="pl-10 bg-gray-900 border-gray-800 text-white"
                />
              </div>

              {/* Desktop & Tablet Filters */}
              <div className="hidden sm:grid grid-cols-2 lg:flex lg:items-center gap-3 w-full lg:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-32 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Ordina per" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Ordina per</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="date">Data</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-32 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Stato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutti gli stati</SelectItem>
                    <SelectItem value="active">Attivo</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-40 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Certificazioni" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte le certificazioni</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-44 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Specializzazioni" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      Tutte le specializzazioni
                    </SelectItem>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="nutrition">Nutrition</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Filter Icon */}
              <div className="sm:hidden relative">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 border border-gray-700"
                >
                  <Filter size={18} className="text-gray-300" />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-20 p-3 space-y-3">
                    {/* Mobile dropdown filters */}
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Ordina per" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Ordina per</SelectItem>
                        <SelectItem value="name">Nome</SelectItem>
                        <SelectItem value="date">Data</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all">
                      <SelectTrigger className="w-full bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Stato" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tutti gli stati</SelectItem>
                        <SelectItem value="active">Attivo</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all">
                      <SelectTrigger className="w-full bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Certificazioni" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Tutte le certificazioni
                        </SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="all">
                      <SelectTrigger className="w-full bg-gray-900 border-gray-800 text-white">
                        <SelectValue placeholder="Specializzazioni" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Tutte le specializzazioni
                        </SelectItem>
                        <SelectItem value="strength">
                          Strength Training
                        </SelectItem>
                        <SelectItem value="nutrition">Nutrition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>

            {/* Trainers Table */}
            {/* MOBILE + TABLET = CARDS */}
            <div className="block lg:hidden">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={trainer.avatar}
                      alt={trainer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {trainer.name}
                      </p>
                      <p className="text-gray-400 text-xs">{trainer.email}</p>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Certificazione:</span>
                    <Badge
                      className={`text-xs ${
                        trainer.certification === "Approved"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-orange-500/20 text-orange-500"
                      }`}
                    >
                      {trainer.certification}
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Specializzazione:</span>
                    <span>{trainer.specialization}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Atleti serviti:</span>
                    <span className="text-white">{trainer.athletes}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Reddito:</span>
                    <span className="text-white font-medium">
                      {trainer.revenue}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-3">
                    <span>Stato:</span>
                    <Badge
                      className={`text-xs ${
                        trainer.status === "Attivo"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-orange-500/20 text-orange-500"
                      }`}
                    >
                      {trainer.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                      <Eye size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                      <Edit size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                      <Trash2 size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">
                  Elenco allenatori
                </h2>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  >
                    <Download size={16} className="mr-2" />
                    Esportare
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    <Plus size={16} className="mr-2" />
                    Aggiungi Allenatore
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        S#
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Nome dell'allenatore
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Certificazione
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Specializzazione
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Atleti serviti
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Reddito
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Stato
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Azioni
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainers.map((trainer) => (
                      <tr
                        key={trainer.id}
                        className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="py-2 px-3">
                          <span className="text-white text-sm">
                            {trainer.id}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={trainer.avatar}
                              alt={trainer.name}
                              className="w-7 h-7 rounded-full"
                            />
                            <div>
                              <p className="text-white font-medium text-sm">
                                {trainer.name}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {trainer.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          <Badge
                            className={`text-xs ${
                              trainer.certification === "Approved"
                                ? "bg-green-500/20 text-green-500 hover:bg-green-500/30"
                                : "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                            }`}
                          >
                            {trainer.certification}
                          </Badge>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-gray-300 text-sm">
                            {trainer.specialization}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-white text-sm">
                            {trainer.athletes}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span className="text-white text-sm font-medium">
                            {trainer.revenue}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <Badge
                            className={`text-xs ${
                              trainer.status === "Attivo"
                                ? "bg-green-500/20 text-green-500 hover:bg-green-500/30"
                                : "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                            }`}
                          >
                            {trainer.status}
                          </Badge>
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
