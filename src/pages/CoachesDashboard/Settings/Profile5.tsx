import React, { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SettingImage from '@/assets/SettingImage.png';

const Profile4 = () => {
  const navigate = useNavigate();

  const recentTransactions = [
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Pagamento dell’ abbonamento',
      time: '2 days fa',
      amount: 50,
      status: 'Completed',
      type: 'credit',
    },
    {
      profileIcon: 'R',
      name: 'Royalty Fee',
      title: 'Tariffa piattaforma',
      time: 'Oggi',
      amount: -5,
      status: 'Pending',
      type: 'deduction',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Abbonamento Pagamento',
      time: '1 settimana fa',
      amount: 120,
      status: 'Completed',
      type: 'credit',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Pagamento dell’ abbonamento',
      time: '5 giorni fa',
      amount: 25,
      status: 'Failed',
      type: 'credit',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Abbonamento Pagamento',
      time: '1 mese fa',
      amount: 80,
      status: 'Pending',
      type: 'credit',
    },
  ];

  // ACTIVE FILTER
  const [activeFilter, setActiveFilter] = useState('month');

  // FILTER LOGIC
  const filteredTransactions = recentTransactions.filter((item) => {
    switch (activeFilter) {
      case '7days':
        return (
          item.time.includes('days') ||
          item.time.includes('giorni') ||
          item.time.includes('Oggi')
        );
      case 'month':
        return !item.time.includes('mese');
      case 'credit':
        return item.type === 'credit';
      case 'deduction':
        return item.type === 'deduction';
      default:
        return true;
    }
  });

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <section className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='w-full lg:w-[30rem] flex-shrink-0 flex flex-col items-start gap-3'>
          <div className='flex items-center w-full justify-between'>
            <span
              onClick={() => navigate(-1)}
              className='bg-[#171717] p-2 text-xl rounded-full cursor-pointer'
            >
              <MdOutlineArrowBack />
            </span>
            <h1 className='text-sm sm:text-lg font-semibold'>
              Cronologia delle transazioni
            </h1>
          </div>

          <section className='w-full my-6 flex flex-col gap-4'>
            <div className='flex items-center w-full justify-between rounded-full p-2'>
              {[
                { label: 'Ultimi 7 giorni', value: '7days' },
                { label: 'Questo mese', value: 'month' },
                { label: 'Credito', value: 'credit' },
                { label: 'Detrazioni', value: 'deduction' },
              ].map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(btn.value)}
                  className={`text-xs px-4 py-2 rounded-full transition-all ${
                    activeFilter === btn.value
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-white border border-[#252525]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className='flex flex-col gap-3 w-full'>
              {filteredTransactions.map((item, index) => (
                <div
                  key={index}
                  className='w-full bg-[#1E1E1E] rounded-xl p-4 flex items-center justify-between'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white font-semibold'>
                      {item.profileIcon}
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-white font-semibold text-sm'>
                        {item.name}
                      </span>
                      <span className='text-gray-400 text-xs'>
                        {item.title}
                      </span>
                      <span className='text-gray-500 text-xs'>{item.time}</span>
                    </div>
                  </div>

                  <div className='flex item-start flex-col gap-1'>
                    <span
                      className={`font-semibold ${
                        item.amount > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {item.amount > 0
                        ? `+$${item.amount}`
                        : `-$${Math.abs(item.amount)}`}
                    </span>
                    <button
                      className={`py-[0.6] w-full rounded-full px-2 text-xs ${
                        item.status === 'Completed'
                          ? 'bg-[#00ff95]'
                          : item.status === 'Pending'
                          ? 'bg-gray-600'
                          : 'bg-red-500'
                      }`}
                    >
                      {item.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full bg-[#1E1E1E] rounded-xl p-4 flex items-center justify-between mt-3'>
              <div className=' flex flex-col items-start font-semibold'>
                Total Credits
                <span className='text-green-500'>+$335.00</span>
              </div>
              <div className=' flex flex-col items-start font-semibold'>
                Total Deduction
                <span className='text-red-600'>-$5.00</span>
              </div>
            </div>
          </section>
        </div>

        {/* SIDE IMAGE */}
        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-28 h-28'>
              <img src={SettingImage} className='w-full h-full object-cover' />
            </div>
            <h1 className='text-3xl font-semibold text-white'>Impostazioni</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile4;
