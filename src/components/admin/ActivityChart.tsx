import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Activity } from 'lucide-react';

const data = [
  { name: 'Allenatori in attesa di approvazione', value: 30, color: '#FF4D4D' },
  { name: 'Atleti in attesa di richieste', value: 25, color: '#33A0FF' },
  { name: 'Piani acquistati', value: 20, color: '#D4FF33' },
  { name: 'Ticket', value: 15, color: '#C866FF' },
  { name: 'Pagamenti in sospeso', value: 10, color: '#7AFF7A' },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload[0]) return null;

  const item = payload[0].payload;

  return (
    <div className="p-2 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-lg"
    
    >
      <p className="font-semibold">{item.name}</p>
      <p className="text-sm">{`Value: ${item.value}%`}</p>
    </div>
  );
};

export default function ActivityChart() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const innerRadius = isMobile ? 45 : 90;
  const outerRadius = isMobile ? 75 : 140;
  const paddingAngle = 5;

  const truncateLabel = (text) => {
    if (!isMobile) return text;
    const words = text.split(" ");
    return words.length > 3 ? words.slice(0, 3).join(" ") + "..." : text;
  };

  const CustomPieLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    payload,
  }) => {
    const RADIAN = Math.PI / 180;

    // edge point
    const mx = cx + outerRadius * Math.cos(-midAngle * RADIAN);
    const my = cy + outerRadius * Math.sin(-midAngle * RADIAN);

    // elbow point (closer for mobile)
    const labelRadius = outerRadius + (isMobile ? 8 : 20);
    const ex = cx + labelRadius * Math.cos(-midAngle * RADIAN);
    const ey = cy + labelRadius * Math.sin(-midAngle * RADIAN);

    // horizontal end
    const isRight = ex > cx;
    const endX = ex + (isRight ? (isMobile ? 10 : 15) : (isMobile ? -10 : -15));
    const endY = ey;

    const textX = endX + (isRight ? 4 : -4);
    const textYPercent = endY - (isMobile ? 4 : 6);
    const textYLabel = endY + (isMobile ? 9 : 12);

    return (
      <g>
        <polyline
          points={`${mx},${my} ${ex},${ey} ${endX},${endY}`}
          stroke="#E5E7EB"
          strokeDasharray="4 4"
          fill="none"
          strokeWidth={1}
        />

        <text
          x={textX}
          y={textYPercent}
          fill={payload.color}
          textAnchor={isRight ? 'start' : 'end'}
          dominantBaseline="central"
          style={{
            fontSize: isMobile ? '0.65rem' : '0.875rem',
            fontWeight: 'bold',
          }}
        >
          {`${payload.value}%`}
        </text>

        <text
          x={textX}
          y={textYLabel}
          fill="#9CA3AF"
          textAnchor={isRight ? 'start' : 'end'}
          dominantBaseline="central"
          style={{
            fontSize: isMobile ? '0.6rem' : '0.75rem',
          }}
        >
          {truncateLabel(payload.name)}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg"
         style={{ minHeight: '400px', backgroundColor: "rgba(0, 0, 0, 0)"} }>
      <div className="flex items-center gap-2 mb-4">
        <Activity size={20} className="text-gray-400" />
        <h3 className="text-xl font-semibold text-white">Attività e avvisi</h3>
      </div>

      <div style={{ width: '100%', height: isMobile ? '300px' : '350px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={paddingAngle}
              dataKey="value"
              stroke="none"
              cornerRadius={5}
              labelLine={false}
              label={CustomPieLabel}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
