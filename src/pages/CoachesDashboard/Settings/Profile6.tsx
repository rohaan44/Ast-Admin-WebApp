import React, { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SettingImage from '@/assets/SettingImage.png';
import { CiSearch } from 'react-icons/ci';

const Profile4 = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('month');

  const recentTransactions = [
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Pagamento dell’ abbonamento',
      time: '2 days fa',
      amount: 'Prossima fattura',
      status: 'Completed',
      type: 'credit',
    },
    {
      profileIcon: 'R',
      name: 'Royalty Fee',
      title: 'Tariffa piattaforma',
      time: 'Oggi',
      amount: 'Prossima fattura',
      status: 'Pending',
      type: 'deduction',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Abbonamento Pagamento',
      time: '1 settimana fa',
      amount: 'Prossima fattura',
      status: 'Completed',
      type: 'credit',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Pagamento dell’ abbonamento',
      time: '5 giorni fa',
      amount: 'Prossima fattura',
      status: 'Failed',
      type: 'credit',
    },
    {
      profileIcon: 'M',
      name: 'Max William',
      title: 'Abbonamento Pagamento',
      time: '1 mese fa',
      amount: 'Prossima fattura',
      status: 'Pending',
      type: 'credit',
    },
  ];

  const filteredTransactions = recentTransactions
    .filter((item) => {
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
    })
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );

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

          <section className='w-full my-4 flex flex-col gap-2'>
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

            <div className='flex items-center gap-2 bg-[#1A1A1A] px-4 py-3 rounded-full'>
              <CiSearch className='text-xl text-gray-400' />
              <input
                className='bg-transparent w-full outline-none text-sm'
                placeholder='Search…'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className='flex mt-4 flex-col gap-3 w-full'>
              {filteredTransactions.length === 0 ? (
                <div className='text-center text-red-500 mt-4 font-semibold'>
                  Not Found
                </div>
              ) : (
                filteredTransactions.map((item, index) => (
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
                        <button
                          className={`py-[0.6] w-20 mt-1  rounded-full px-2 text-xs ${
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

                    <div className='flex items-end flex-col gap-1'>
                      <span className={`font-semibold text-sm`}>
                        {item.amount}
                      </span>
                      <span className='text-gray-400 text-xs'>{item.time}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className='w-full bg-[#1E1E1E] rounded-xl p-4 flex items-start justify-between mt-3'>
              <div className=' flex flex-col items-start font-semibold'>
                Abbonamenti attivi
                <span className='text-green-500'>5</span>
              </div>
              <div className='w-full lg:w-36 flex flex-col items-start font-semibold'>
                Entrate totali degli abbonamenti
                <span className='text-green-600'>+$335.00</span>
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
