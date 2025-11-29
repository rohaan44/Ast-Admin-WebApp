import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // 👈 Required for typing

interface ProgressChartProps {
  value?: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ value = 85 }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: 'smooth',
      width: 4,
      colors: ['#ff2e2e'],
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
  };

  // ✔ Correct Series Type
  const series: { name: string; data: number[] }[] = [
    {
      name: 'Progress',
      data: [10, 32, 25, 50, 68, 60, 78, value],
    },
  ];

  return (
    <div className='relative w-full'>
      <Chart options={options} series={series} />

      <p className='absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-semibold'>
        {value}%
      </p>
    </div>
  );
};

export default ProgressChart;
