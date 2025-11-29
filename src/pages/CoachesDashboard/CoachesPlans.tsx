import EarningOverview from '@/components/EarningsOverview';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const CoachesPlans = () => {
  const transactions = [
    { title: 'Pagamento', date: '20 Sep 2025', amount: +250.0 },
    { title: 'Abbonamento Pagamento', date: '13 Sep 2025', amount: +120.0 },
    { title: 'Rimborso', date: '07 Sep 2025', amount: -45.0 },
  ];
  const athletes = [
    { name: 'John Deo', percent: +13.4 },
    { name: 'Max William', percent: +7.8 },
    { name: 'Emily Carter', percent: -4.1 },
    { name: 'David Lark', percent: +2.2 },
  ];
  const navigate = useNavigate();
  return (
    <section className='w-full h-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#151515] border w-12 h-12 rounded-full flex items-center justify-center'
        >
          <IoIosArrowBack className='text-xl' />
        </button>

        <h1 className='md:text-3xl text-lg font-bold'>Revisione del piano</h1>

        <div className='hidden md:flex items-center gap-2 bg-[#151515] border border-[#252525] rounded-full px-4 w-72'>
          <CiSearch className='text-xl text-gray-400' />
          <input
            type='text'
            placeholder='Cerca'
            className='bg-transparent outline-none py-2 text-white w-full'
          />
        </div>
      </div>

      <div className='grid grid-cols-10 my-6'>
        <div className='col-span-10 lg:col-span-5'>
          <EarningOverview />
        </div>
      </div>

      <div className='grid grid-cols-10 my-6 gap-6'>
        <div className='md:col-span-5 col-span-10 bg-[#111111] rounded-2xl p-5 border border-[#1f1f1f] '>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Transazioni la Storia</h2>
            <button className='text-sm opacity-60 hover:opacity-100'>
              Visualizza Tutto
            </button>
          </div>

          <div className='space-y-3'>
            {transactions.map((t, i) => (
              <div
                key={i}
                className='flex justify-between items-center bg-[#161616] p-4 rounded-xl border border-[#1e1e1e]'
              >
                <div>
                  <p className='font-medium text-white'>{t.title}</p>
                  <p className='text-xs opacity-60'>{t.date}</p>
                </div>

                <span
                  className={`font-semibold ${
                    t.amount > 0 ? 'text-[#00ff95]' : 'text-red-500'
                  }`}
                >
                  {t.amount > 0 ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='md:col-span-5 col-span-10 bg-[#111111] rounded-2xl p-5 border border-[#1f1f1f]'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Abbonamento Atlete</h2>
            <button className='text-sm opacity-60 hover:opacity-100'>
              Visualizza Tutto
            </button>
          </div>

          <div className='space-y-3'>
            {athletes.map((a, i) => (
              <div
                key={i}
                className='flex justify-between items-center bg-[#161616] p-4 rounded-xl border border-[#1d1d1d]'
              >
                <p className='font-medium'>{a.name}</p>

                <span
                  className={`text-sm font-semibold ${
                    a.percent >= 0 ? 'text-[#00ff95]' : 'text-red-500'
                  }`}
                >
                  {a.percent > 0 ? `+${a.percent}%` : `${a.percent}%`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesPlans;
