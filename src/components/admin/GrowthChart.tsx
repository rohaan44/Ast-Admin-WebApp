import React, { useState, useRef, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Calendar, Filter } from "lucide-react";

// Data approximating the curve in the provided image
const data = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 40 },
  { month: "Apr", value: 55 },
  { month: "May", value: 65 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 70 },
  { month: "Aug", value: 85 },
  { month: "Sept", value: 75 },
  { month: "Oct", value: 95 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 60 },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-gray-800 p-3 rounded-lg shadow-xl">
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-white font-bold text-lg">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export default function GrowthOverviewChart() {
  // const [timeRange, setTimeRange] = useState("Quest'anno");

  const [timeRange, setTimeRange] = useState("Quest'anno");
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl shadow-xl font-sans text-white">
      {/* Header Section */}

      <div className="flex flex-row md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          
          <TrendingUp size={24} className="text-gray-400" />
          {/* <div className="p-2 bg-gray-800 rounded-lg">
            
          </div> */}
          <h2 className="text-base font-semibold text-white">
            Panoramica della crescita
          </h2>
        </div>

        {/* FILTER SECTION: Mobile + Desktop */}
        <div className="relative" ref={menuRef}>
          {/* Mobile: Only Filter Icon */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-300"
            onClick={() => setOpen(!open)}
          >
            <Filter size={18} />
          </button>

          {/* Desktop/Tablet: Full Button */}
          <button
            className="hidden md:flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] 
                border border-gray-800 rounded-lg px-4 py-2 text-sm font-medium 
                transition-colors"
            onClick={() => setOpen(!open)}
          >
            <Calendar size={16} className="text-gray-400" />
            <span>{timeRange}</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div
              className="
          absolute right-0 mt-2 w-44 
          bg-[#1a1a1a] border border-gray-800 
          rounded-lg shadow-xl z-20
        "
            >
              {["Quest'anno", "Mese scorso", "Settimana scorsa"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setTimeRange(opt);
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm 
                      text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart Container */}
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* Gradients for the area fill */}
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(255, 58, 47, 0.5)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF3A2F" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#262626"
              vertical={false}
            />

            {/* X-Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#737373", fontSize: 12 }}
              dy={10}
            />

            {/* Y-Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#737373", fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />

            {/* Tooltip */}
            <Tooltip
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
              cursor={{
                stroke: "#FF3A2F",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />

            {/* The Area Chart Curve */}
            <Area
              type="monotone" // Creates the smooth curve
              dataKey="value"
              stroke="#FF3A2F" // Blue line color
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)" // Applies the gradient defined above
              activeDot={{
                r: 6,
                stroke: "#1d4ed8",
                strokeWidth: 2,
                fill: "white",
              }}
            />
            
          </AreaChart>


          
        </ResponsiveContainer>
      </div>
    </div>
  );
}
