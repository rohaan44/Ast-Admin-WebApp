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
    <div className="flex min-h-screen bg-[#0A0A0A]">
      {/* SIDEBAR (hidden on mobile) */}
       <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {/* <div className="hidden lg:flex">
       
      </div> */}

      {/* MAIN SECTION */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-[1500px] mx-auto space-y-10">
            {/* PAGE HEAD */}
            <section>
              <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-semibold text-white leading-tight">
                Impostazioni del profilo
              </h1>
              <p className="text-gray-400 text-[14px] md:text-[15px] mt-1">
                Gestisci le preferenze e le configurazioni del sistema.
              </p>
            </section>

            {/* BANNER + AVATAR */}
            <section className="relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />

              {/* AVATAR */}
              <div className="absolute -bottom-0 sm:-bottom-20 md:-bottom-0 left-4 sm:left-6 md:left-10">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-[4px] md:border-[6px] border-[#0A0A0A]"
                  />
                  <button className="absolute bottom-2 right-2 bg-red-500 p-2.5 md:p-3 rounded-full shadow-lg hover:bg-red-600">
                    <Camera size={16} className="text-white md:hidden" />
                    <Camera size={20} className="text-white hidden md:block" />
                  </button>
                </div>
              </div>

              {/* USER INFO */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-[140px] sm:left-[180px] md:left-[240px]">
                <div className="flex items-center gap-2 md:gap-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                    Sammy Snow
                  </h2>
                  <Badge className="bg-green-500/20 text-green-500 text-[10px] sm:text-[11px] md:text-[12px] px-2 md:px-3 py-0.5">
                    ADMIN
                  </Badge>
                </div>
                <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] mt-0.5 md:mt-1">
                  sammy.admin@gmail.com
                </p>
              </div>
            </section>

            {/* PERSONAL INFORMATION CARD */}
            <section className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-5 sm:p-7 lg:p-10 pt-16">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-6 md:mb-8">
                Personal Information
              </h3>

              {/* FORM GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* FIRST NAME */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Nome di battesimo
                  </label>
                  <Input
                    defaultValue="Sammy Snow"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* LAST NAME */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Cognome
                  </label>
                  <Input
                    placeholder="Cognome"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* BIO */}
                <div className="sm:col-span-2">
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Bio
                  </label>
                  <Textarea
                    defaultValue="Spero che la tua giornata sia andata bene oggi? Rendiamola ancora più bella iniziando a dare un'occhiata ai progressi del tuo team questo mese!"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white min-h-[100px] sm:min-h-[120px]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Indirizzo e-mail
                  </label>
                  <Input
                    defaultValue="sammy.admin@gmail.com"
                    type="email"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Numero di telefono
                  </label>
                  <Input
                    defaultValue="+39-397-555-141"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* DATE */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Data di nascita (facoltativo)
                  </label>
                  <Input
                    defaultValue="01 / 11 / 1999"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* ROLE */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Ruolo utente
                  </label>
                  <Input
                    defaultValue="Admin"
                    disabled
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white opacity-60 h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* LOCATION */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Indirizzo (facoltativo)
                  </label>
                  <Input
                    defaultValue="Rome, Italy"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                {/* DUPLICATE ROLE */}
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Ruolo utente
                  </label>
                  <Input
                    defaultValue="Admin"
                    disabled
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white opacity-60 h-[42px] sm:h-[46px]"
                  />
                </div>
              </div>

              {/* UPDATE BUTTON */}
              <div className="flex justify-end mt-8 sm:mt-10">
                <Button className="bg-[#1A1A1A] hover:bg-[#222] text-white px-6 py-4 rounded-xl text-sm sm:text-base">
                  Aggiorna informazioni
                </Button>
              </div>
            </section>

            {/* PASSWORD CHANGE CARD */}
            <section className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-5 sm:p-7 lg:p-10">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-6 md:mb-8">
                Cambiare la password
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Aggiungi nuova password
                  </label>
                  <Input
                    type="password"
                    defaultValue="**********"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-[13px] sm:text-[14px] mb-1 block">
                    Conferma nuova password
                  </label>
                  <Input
                    type="password"
                    placeholder="Conferma nuova password"
                    className="bg-[#0F0F0F] border-[#1F1F1F] text-white h-[42px] sm:h-[46px]"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8 sm:mt-10">
                <Button className="bg-[#1A1A1A] hover:bg-[#222] text-white px-6 py-4 rounded-xl text-sm sm:text-base">
                  Aggiorna informazioni
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
