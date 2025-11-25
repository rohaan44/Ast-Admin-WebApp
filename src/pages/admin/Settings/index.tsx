import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("impostazioni");

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-[1200px] mx-auto space-y-4">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Impostazioni del profilo
              </h1>
              <p className="text-gray-400 text-sm">
                Gestisci le preferenze e le configurazioni del sistema.
              </p>
            </div>

            {/* Profile Header */}
            <div className="relative h-[200px] rounded-lg overflow-hidden pb-20">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=200&fit=crop"
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Avatar */}
              <div className="absolute -bottom-16 left-8">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    alt="Sammy Snow"
                    className="w-32 h-32 rounded-full border-4 border-[#0a0a0a]"
                  />
                  <button className="absolute bottom-2 right-2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors">
                    <Camera size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Info */} 
              <div className="absolute bottom-6 left-48">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">Sammy Snow</h2>
                  <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                    ADMIN
                  </Badge>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  sammmy.admin@gmail.com
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-20">
              <h3 className="text-lg font-semibold text-white mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Nome
                  </label>
                  <Input
                    defaultValue="Sammy Snow"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Cognome */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Cognome
                  </label>
                  <Input
                    placeholder="Cognome"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">
                    Bio
                  </label>
                  <Textarea
                    defaultValue="Spero che la tua giornata sia andata bene oggi? Rendiamola ancora più bella iniziando a dare un'occhiata ai progressi del tuo team questo mese!"
                    className="bg-gray-800 border-gray-700 text-white min-h-[80px]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Indirizzo e-mail
                  </label>
                  <Input
                    defaultValue="sammy.admin@gmail.com"
                    type="email"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Numero di telefono
                  </label>
                  <Input
                    defaultValue="+39-397-555-141"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Data di nascita (Mese/Giorno)
                  </label>
                  <Input
                    defaultValue="01 / 11 / 1999"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Ruolo utente
                  </label>
                  <Input
                    defaultValue="Admin"
                    disabled
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Indirizzo (facoltativo)
                  </label>
                  <Input
                    defaultValue="Rome, Italy"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* User Level */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Ruolo utente
                  </label>
                  <Input
                    defaultValue="Admin"
                    disabled
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                  Aggiorna informazioni
                </Button>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Cambiare la password
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Password */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Aggiungi nuova password
                  </label>
                  <Input
                    type="password"
                    defaultValue="••••••••••"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Conferma nuova password
                  </label>
                  <Input
                    type="password"
                    placeholder="Conferma nuova password"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                  Aggiorna informazioni
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
