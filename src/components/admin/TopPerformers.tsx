import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Filter } from "lucide-react";
interface Performer {
  rank: number;
  name: string;
  role: string;
  athletes: string;
  revenue: string;
  status: "Active" | "Pending";
}

export default function TopPerformers() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const performers: Performer[] = [
    {
      rank: 1,
      name: "Roben Waters",
      role: "Allenatore",
      athletes: "109+",
      revenue: "€19,390",
      status: "Active",
    },
    {
      rank: 2,
      name: "John Wick",
      role: "Allenatore",
      athletes: "80+",
      revenue: "€15,087",
      status: "Active",
    },
    {
      rank: 3,
      name: "Tony Stark",
      role: "Allenatore",
      athletes: "64+",
      revenue: "€12,200",
      status: "Pending",
    },
    {
      rank: 4,
      name: "Peter Parker",
      role: "Allenatore",
      athletes: "52+",
      revenue: "€8,450",
      status: "Active",
    },
    {
      rank: 5,
      name: "Ben Tennison",
      role: "Allenatore",
      athletes: "48+",
      revenue: "€6,089",
      status: "Active",
    },
    {
      rank: 6,
      name: "Walter White",
      role: "Allenatore",
      athletes: "36+",
      revenue: "€3,998",
      status: "Active",
    },
    {
      rank: 7,
      name: "Mike Tyson",
      role: "Allenatore",
      athletes: "22+",
      revenue: "€2,357",
      status: "Pending",
    },
  ];

  const tabs = ["Tutor", "Allenatori", "Atlete"];

  return (
    <Card
      className="bg-gray-900 border-gray-800 p-6 w-full"
      style={{
        // height: '360px',
        borderRadius: "15px",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-gray-400" />
          <h3 className="text-base font-semibold text-white">
            Migliori interpreti
          </h3>
        </div>

        {/* Tabs */}
        <div className="relative">
          {/* Mobile: Filter Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg bg-gray-800 text-gray-300"
            >
              <Filter size={20} />
            </button>

            {open && (
              <div
                className="absolute mt-2 w-40 rounded-lg bg-gray-900 border border-gray-700 shadow-lg z-20 right-0"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      console.log(tab);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  index === 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      {/* Desktop + Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-2 px-2 font-medium text-gray-400">
                #
              </th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">
                Allenatore
              </th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">
                Atleti
              </th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">
                Reddito
              </th>
              <th className="text-left py-2 px-2 font-medium text-gray-400">
                Stato
              </th>
            </tr>
          </thead>
          <tbody>
            {performers.map((p) => (
              <tr
                key={p.rank}
                className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
              >
                <td className="py-2 px-2 text-white">{p.rank}</td>
                <td className="py-2 px-2 text-white">{p.name}</td>
                <td className="py-2 px-2 text-gray-300">{p.athletes}</td>
                <td className="py-2 px-2 text-white">{p.revenue}</td>
                <td className="py-2 px-2">
                  <Badge
                    className={`text-xs ${
                      p.status === "Active"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-orange-500/20 text-orange-500"
                    }`}
                  >
                    {p.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden flex flex-col gap-3">
        {performers.map((p) => (
          <div
            key={p.rank}
            className="bg-gray-800/40 border border-gray-700 p-3 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-semibold">{p.name}</h4>

              <Badge
                className={`text-xs ${
                  p.status === "Active"
                    ? "bg-green-500/20 text-green-500"
                    : "bg-orange-500/20 text-orange-500"
                }`}
              >
                {p.status}
              </Badge>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-gray-300">
              <span>Atleti: {p.athletes}</span>
              <span className="font-semibold text-white">{p.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
