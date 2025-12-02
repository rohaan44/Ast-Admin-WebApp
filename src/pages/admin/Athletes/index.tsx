import { useState, useRef, useEffect } from "react";
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
  MoreHorizontal,
} from "lucide-react";

export default function Athletes() {
  const [activeTab, setActiveTab] = useState("atleta");

  const stats = [
    {
      title: "Atleti totali",
      value: "200",
      subtitle: "10% rispetto al mese scorso",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
      trend: "↑",
    },
    {
      title: "Atleti attivi",
      value: "109",
      subtitle: "4% rispetto al mese scorso",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
      trend: "↓",
    },
    {
      title: "Acquisti non in scadenza",
      value: "1",
      subtitle: "Domande in sospeso",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    },
    {
      title: "Nuovi iscritti generati",
      value: "€64k+",
      subtitle: "20% rispetto al mese scorso",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400",
      trend: "↑",
    },
  ];

  const athletes = [
    {
      id: 1,
      name: "Bella Hadid",
      email: "bella_hadid@email.com",
      trainer: "Sara Johnson",
      trainerAvatar: "https://i.pravatar.cc/150?img=1",
      status: "Attivo",
      lastCheckIn: "Aug 18, 2025",
      progress: 92,
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "Charlie",
      email: "charlie11@email.com",
      trainer: "Mike Chen",
      trainerAvatar: "https://i.pravatar.cc/150?img=12",
      status: "Attivo",
      lastCheckIn: "Aug 10, 2025",
      progress: 43,
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 3,
      name: "Brock Benz",
      email: "brock24@email.com",
      trainer: "Emma Davis",
      trainerAvatar: "https://i.pravatar.cc/150?img=9",
      status: "Attivo",
      lastCheckIn: "Aug 6, 2025",
      progress: 90,
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 4,
      name: "David",
      email: "dav.id99@email.com",
      trainer: "David Wilson",
      trainerAvatar: "https://i.pravatar.cc/150?img=14",
      status: "In attesa di",
      lastCheckIn: "Aug 2, 2025",
      progress: 91,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 5,
      name: "Rose Mary",
      email: "marcoey@email.com",
      trainer: "Blackster",
      trainerAvatar: "https://i.pravatar.cc/150?img=16",
      status: "Attivo",
      lastCheckIn: "Sep 30, 2025",
      progress: 44,
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 6,
      name: "Rocky champ",
      email: "rockychamp@email.com",
      trainer: "Clark Smith",
      trainerAvatar: "https://i.pravatar.cc/150?img=17",
      status: "Attivo",
      lastCheckIn: "Sep 24, 2025",
      progress: 92,
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: 7,
      name: "Jenny Jan",
      email: "jennijano@email.com",
      trainer: "Savannah",
      trainerAvatar: "https://i.pravatar.cc/150?img=19",
      status: "In attesa di",
      lastCheckIn: "Sep 13, 2025",
      progress: 49,
      avatar: "https://i.pravatar.cc/150?img=20",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);
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
                Gestione degli atleti
              </h1>
              <p className="text-gray-400 text-sm">
                Gestire gli atleti certificati e le loro prestazioni.
              </p>
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
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Cerca gli atleti per nome o email..."
                  className="pl-10 bg-gray-900 border-gray-800 text-white"
                />
              </div>

              <div className="flex items-center gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Ordina per" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Ordina per</SelectItem>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="date">Data</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Addestrato da" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Addestrato da</SelectItem>
                    <SelectItem value="trainer1">Trainer 1</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-32 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Stato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Stato</SelectItem>
                    <SelectItem value="active">Attivo</SelectItem>
                    <SelectItem value="pending">In attesa</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-32 bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Progressi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Progressi</SelectItem>
                    <SelectItem value="high">Alto</SelectItem>
                    <SelectItem value="low">Basso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Athletes Table */}
            {/* CARD + TABLE WRAPPER */}
            <div
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">
                  Elenco degli atleti
                </h2>

                {/* Desktop buttons */}
                <div className="hidden md:flex gap-3">
                  <Button
                    variant="outline"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  >
                    <Download size={16} className="mr-2" />
                    Esporta CSV
                  </Button>

                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    <Plus size={16} className="mr-2" />
                    Aggiungi atleta
                  </Button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden relative" ref={menuRef}>
                  <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700"
                  >
                    <MoreHorizontal size={20} />
                  </button>

                  {menuOpen && (
                    <div
                      className="absolute right-0 mt-2 w-44 border border-gray-800 rounded-lg shadow-lg py-1 z-50"
                      style={{
                        backgroundColor: "#151515",
                      }}
                    >
                      <button
                        className="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Download size={16} className="mr-2" />
                        Esporta CSV
                      </button>

                      <button
                        className="w-full flex items-center px-3 py-2 text-sm text-red-400 hover:bg-red-500/10"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Plus size={16} className="mr-2" />
                        Aggiungi atleta
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* DESKTOP TABLE */}
              <div className="overflow-x-auto hidden md:block">
                <table className="w-full text-sm min-w-[900px]">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        S#
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Nome dell'atleta
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        E-mail
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Nome dell'allenatore
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Stato
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Ultimo check-in
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Progressi
                      </th>
                      <th className="text-left py-2 px-3 text-xs font-medium text-gray-400">
                        Azioni
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {athletes.map((athlete) => (
                      <tr
                        key={athlete.id}
                        className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                      >
                        {/* S# */}
                        <td className="py-2 px-3 text-white">{athlete.id}</td>

                        {/* Athlete Name */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={athlete.avatar}
                              alt={athlete.name}
                              className="w-7 h-7 rounded-full"
                            />
                            <div>
                              <p className="text-white font-medium text-sm">
                                {athlete.name}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {athlete.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Email */}
                        <td className="py-2 px-3 text-gray-300 text-sm">
                          {athlete.email}
                        </td>

                        {/* Trainer */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={athlete.trainerAvatar}
                              className="w-5 h-5 rounded-full"
                            />
                            <span className="text-white text-sm">
                              {athlete.trainer}
                            </span>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-2 px-3">
                          <Badge
                            className={`text-xs ${
                              athlete.status === "Attivo"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-orange-500/20 text-orange-500"
                            }`}
                          >
                            {athlete.status}
                          </Badge>
                        </td>

                        {/* Check In */}
                        <td className="py-2 px-3 text-gray-300">
                          {athlete.lastCheckIn}
                        </td>

                        {/* Progress */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <div className="bg-gray-800 h-1.5 w-24 rounded-full">
                              <div
                                className="bg-red-500 h-full rounded-full"
                                style={{ width: `${athlete.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-white text-xs">
                              {athlete.progress}%
                            </span>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg">
                              <Eye size={14} className="text-gray-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg">
                              <Edit size={14} className="text-gray-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-700 rounded-lg">
                              <Trash2 size={14} className="text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
{/* MOBILE / TABLET CARD VIEW */}
<div className="md:hidden p-4 space-y-4">
  {athletes.map((athlete) => (
    <div
      key={athlete.id}
      className="bg-gray-900 border border-gray-800 rounded-xl p-4"
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={athlete.avatar}
          alt={athlete.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-white font-semibold text-sm">{athlete.name}</p>
          <p className="text-gray-400 text-xs">{athlete.email}</p>
        </div>
      </div>

      {/* Trainer */}
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>Allenatore:</span>
        <span className="text-white">{athlete.trainer}</span>
      </div>

      {/* Last Check-In */}
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>Ultimo check-in:</span>
        <span className="text-white">{athlete.lastCheckIn}</span>
      </div>

      {/* Progress */}
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>Progressi:</span>
        <span className="text-white">{athlete.progress}%</span>
      </div>

      {/* Status */}
      <div className="flex justify-between text-sm text-gray-300 mb-3">
        <span>Stato:</span>
        <Badge
          className={`text-xs ${
            athlete.status === "Attivo"
              ? "bg-green-500/20 text-green-500"
              : "bg-orange-500/20 text-orange-500"
          }`}
        >
          {athlete.status}
        </Badge>
      </div>

      {/* Action Buttons */}
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

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
