import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // important for typing
import { LuChartSpline } from 'react-icons/lu';

const GrowthOverview: React.FC = () => {
  const growthData: number[] = [10, 25, 15, 40, 30, 50, 45];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: '#FF3A2F00', opacity: 0.7 },
          { offset: 100, color: '#9AD960', opacity: 0.2 },
        ],
      },
    },
    colors: ['#FF3A2F'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: '#ffffff' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#ffffff' } },
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const series: { name: string; data: number[] }[] = [
    {
      name: 'Growth',
      data: growthData,
    },
  ];

  return (
    <div className='bg-[#111] p-4 h-[100%] rounded-xl'>
      <h2 className='text-white flex items-center gap-2 text-2xl font-semibold mb-4'>
        <span className='mt-2'>
          <LuChartSpline />
        </span>
        panoramica della
      </h2>
      <Chart options={options} series={series} type='area' />
    </div>
  );
};

export default GrowthOverview;
