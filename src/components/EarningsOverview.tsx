import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const EarningOverview: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      background: 'transparent',
    },

    stroke: {
      curve: 'smooth',
      width: 5,
      colors: ['#00ff7b'],
    },

    markers: {
      size: 6,
      colors: ['#000'],
      strokeColors: '#00ff7b',
      strokeWidth: 3,
      hover: {
        size: 10,
      },
    },

    tooltip: { theme: 'dark' },
    grid: { show: false },

    dataLabels: { enabled: false },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    yaxis: { show: false },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#00ff7b'],
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.15,
        stops: [0, 50, 100],
      },
    },
  };

  const series = [
    {
      name: 'Earnings',
      data: [100, 200, 150, 300, 250, 400],
    },
  ];

  return (
    <div className='bg-[#0c0c0c] text-white w-full py-4 px-6 flex flex-col items-start gap-8 rounded-2xl relative'>
      <div className='flex sm:flex-row flex-col-reverse  items-start justify-between w-full'>
        <div className='flex items-start gap-2 flex-col'>
          <p className='font-semibold text-lg'>Panoramica Sui Guadagni</p>

          <h2 className='flex items-end gap-1'>
            <span className='text-4xl font-bold text-[#00ff99] drop-shadow-[0_0_4px_#00ff99] neon-money'>
              $2,400
            </span>
            <span className='text-lg text-[#FFFFFFA6] ml-1 font-light'>
              USD
            </span>
          </h2>

          <p className='text-xs opacity-70 -mt-1'>Questo Mese</p>
        </div>

        <span className='bg-red-500 text-white text-[13px] px-3 py-1 rounded-full'>
          Fino a: $650
        </span>
      </div>

      <div className='w-full h-52 rounded-xl py-2 px-0'>
        <Chart
          options={chartOptions}
          series={series}
          type='line'
          height='100%'
        />
      </div>

      <p className='text-right text-lg mt-2 opacity-75'>
        Last Payout: Sept 15, 2025
      </p>
    </div>
  );
};

export default EarningOverview;
