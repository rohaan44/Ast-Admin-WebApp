import React, { useState } from 'react';
import { BarChart3, Calendar } from 'lucide-react';

// Data approximating the curve in the provided image
// Values are roughly estimated to match the visual height
const revenueData = [
  { month: 'Jan', value: 35 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 85 },
  { month: 'Jul', value: 95 },
  { month: 'Aug', value: 75 },
  { month: 'Sept', value: 65 },
  { month: 'Oct', value: 80 },
  { month: 'Nov', value: 85 },
  { month: 'Dec', value: 45 },
];

const Y_AXIS_LABELS = ['€100k', '€50k', '€30k', '€10k'];

export default function RevenueOverviewChart() {
  const [timeRange, setTimeRange] = useState("Quest'anno");
  
  // Configuration for the dot grid
  const DOTS_PER_COLUMN = 20; // Maximum number of dots vertically
  const MAX_VALUE = 100; // The value that represents 100% height (all dots lit)
  
  // Function to determine dot color based on its vertical position (index)
  // Higher index = higher up the stack.
  // We want a gradient: Bright Red/Orange at bottom (0) -> Darker Red at top.
  const getDotColor = (index, isActive) => {
    if (!isActive) return '#1f1f1f'; // Very dark gray for inactive/background dots
    
    // Gradient Logic:
    // Bottom (index 0): Bright Red/Orange #FF4D4D
    // Top (index 20): Dark Red #5c1c1c
    // We can use discrete colors or calculate an opacity/shade.
    
    // Simple discrete gradient palette matching the image style
    if (index < 3) return '#ff4d4d';  // Brightest (Bottom)
    if (index < 7) return '#ff4d4d';  
    if (index < 12) return '#e63e3e'; 
    if (index < 16) return '#cc3333';
    return '#8a2525';                 // Darkest (Top)
  };

  return (
    <div className="w-full bg-[#0a0a0a] border border-gray-800 p-6 rounded-2xl shadow-xl font-sans text-white
    
    "
    style={
      {
        backgroundColor: "rgba(0, 0, 0, 0)"
      }
    }
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-800 rounded-lg">
            <BarChart3 size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold tracking-wide">Panoramica delle entrate</h2>
        </div>
        
        {/* Dropdown Button */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
            <Calendar size={16} className="text-gray-400" />
            <span>{timeRange}</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Simple Dropdown Content (Visual only) */}
          <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <div className="py-1">
              {["Quest'anno", "Mese scorso", "Settimana scorsa"].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => setTimeRange(opt)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Area */}
   <div className="relative w-full h-[350px] md:h-[380px] flex overflow-hidden">

  {/* Y-Axis */}
  <div className="flex flex-col justify-between items-end pr-3 text-xs font-medium text-gray-500 pb-8 h-full shrink-0">
    {Y_AXIS_LABELS.map((label, i) => (
      <span key={i}>{label}</span>
    ))}
    <span className="opacity-0">0</span>
  </div>

  {/* Chart Area */}
  <div className="relative flex-1 h-full overflow-x-auto no-scrollbar">

    {/* Inner wrapper gives fixed min width for 12 months */}
    <div className="absolute inset-0 pb-8 flex min-w-[700px] md:min-w-0 justify-between px-3">

      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pb-8 pointer-events-none">
        {Y_AXIS_LABELS.map((_, i) => (
          <div key={i} className="w-full h-px bg-gray-800/30" />
        ))}
        <div className="w-full h-px bg-gray-800/30" />
      </div>

      {revenueData.map((dataPoint, colIndex) => {
        const activeDots = Math.round((dataPoint.value / MAX_VALUE) * DOTS_PER_COLUMN);

        return (
          <div
            key={colIndex}
            className="flex flex-col items-center group cursor-pointer h-full justify-end flex-1 min-w-[40px]"
          >
            {/* Dot Column */}
            <div className="relative flex flex-col-reverse gap-[2px]">
              {Array.from({ length: DOTS_PER_COLUMN }).map((_, dotIndex) => {
                const isActive = dotIndex < activeDots;
                return (
                  <div
                    key={dotIndex}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-20 scale-75'
                    }`}
                    style={{
                      backgroundColor: getDotColor(dotIndex, isActive),
                      boxShadow: isActive
                        ? `0 0 4px ${getDotColor(dotIndex, isActive)}40`
                        : 'none',
                    }}
                  />
                );
              })}

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap z-20 border border-gray-700">
                €{Math.round(dataPoint.value * 1000).toLocaleString()}
              </div>
            </div>

            {/* Month label – stays inside */}
            <span className="mt-2 text-xs font-medium text-gray-500 group-hover:text-white transition-colors whitespace-nowrap">
              {dataPoint.month}
            </span>
          </div>
        );
      })}

    </div>
  </div>
</div>
    </div>
  );
}