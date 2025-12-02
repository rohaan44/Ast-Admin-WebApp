import React, { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SettingImage from '@/assets/SettingImage.png';
import EarningOverview from '@/components/EarningsOverview';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Profile4 = () => {
  const percentage = 30;
  const navigate = useNavigate();
  const transactions = [
    {
      title: 'Pagamento',
      name: 'A: Conto Bancario',
      status: 'Compleato',
      amount: +250.0,
    },
    {
      title: 'Abbonamento Pagamento',
      name: 'Da: Jane Smith',
      status: 'Fino a',
      amount: +120.0,
    },
    {
      title: 'Rimborso',
      name: 'Da: Jane Smith',
      status: 'Fallito',
      amount: -45.0,
    },
  ];
  const athletes = [
    {
      name: 'John Deo',
      profileIcon: 'J',
      status: 'Attivo',
      date: 'Rinnova il 28 settembre 2025',
      text: 'Piano mensile',
      percent: +13.4,
    },
    {
      name: 'Max William',
      profileIcon: 'M',
      status: 'In pausa',
      date: 'Rinnova il 28 settembre 2025',
      text: 'Piano mensile',
      percent: +7.8,
    },
    {
      name: 'Emily Carter',
      profileIcon: 'E',
      status: 'Annullata',
      date: 'Rinnova il 28 settembre 2025',
      text: 'Piano mensile',
      percent: -4.1,
    },
    {
      name: 'David Lark',
      profileIcon: 'D',
      status: 'Attivo',
      date: 'Rinnova il 28 settembre 2025',
      text: 'Piano mensile',
      percent: +2.2,
    },
  ];
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
              Pagamenti e Royalties
            </h1>
          </div>

          <section className='w-full my-6 flex flex-col gap-4 items-center justify-center'>
            <div className='w-full flex flex-col gap-2 items-center'>
              <EarningOverview />
              <div className='bg-[#111111] flex items-center justify-between w-full rounded-xl py-4 px-4'>
                <div className='flex items-start flex-col'>
                  <h1 className='text-lg font-semibold'>
                    Ripartizione Delle Royalties
                  </h1>
                  <p className='text-xs font-normal text-[#FFFFFFB2]'>
                    Nutrizione 30%
                  </p>
                </div>
                <div className='w-12 h-12'>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: '#dc2626', // red-600
                      textColor: '#ffffff',
                      trailColor: '#333333',
                      textSize: '28px',
                    })}
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center flex-col w-full my-6 gap-6'>
              <div className='w-full bg-[#111111] rounded-2xl p-5 border border-[#1f1f1f] '>
                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-lg font-semibold'>
                    Transazioni la Storia
                  </h2>
                  <button
                    onClick={() => navigate('/coaches/settings/profile-5')}
                    className='text-sm opacity-60 text-[#42A8FF] flex items-center gap-1 hover:opacity-100'
                  >
                    Visualizza Tutto
                    <span>
                      <MdOutlineArrowForwardIos />
                    </span>
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
                        <p className='text-xs opacity-60'>{t.name}</p>
                      </div>

                      <div className='flex items-start flex-col gap-1'>
                        <span
                          className={`font-semibold ${
                            t.amount > 0 ? 'text-[#00ff95]' : 'text-red-500'
                          }`}
                        >
                          {t.amount > 0 ? '+' : '-'}$
                          {Math.abs(t.amount).toFixed(2)}
                        </span>

                        <button
                          className={`py-[0.6] w-full rounded-full px-2 text-xs ${
                            t.status === 'Compleato'
                              ? 'bg-[#00ff95]'
                              : t.status === 'Fino a'
                              ? 'bg-yellow-400'
                              : 'bg-red-500'
                          }`}
                        >
                          {t.status}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-full bg-[#111111] rounded-2xl p-5 border border-[#1f1f1f]'>
                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-lg font-semibold'>Abbonamento Atlete</h2>
                  <button
                    onClick={() => navigate('/coaches/settings/profile-6')}
                    className='text-sm opacity-60 text-[#42A8FF] flex items-center gap-1 hover:opacity-100'
                  >
                    Visualizza Tutto
                    <span>
                      <MdOutlineArrowForwardIos />
                    </span>
                  </button>
                </div>

                <div className='space-y-3'>
                  {athletes.map((a, i) => (
                    <div
                      key={i}
                      className='flex sm:flex-nowrap flex-wrap sm:gap-0 gap-2 justify-between items-center bg-[#161616] p-4 rounded-xl border border-[#1d1d1d]'
                    >
                      <div className='flex items-start flex-col'>
                        <p className='font-medium'>{a.name}</p>
                        <p className='text-xs opacity-60'>{a.text}</p>
                      </div>
                      <p className='text-xs opacity-60'>{a.date}</p>
                      <div className='flex items-start flex-col gap-1'>
                        <span
                          className={`text-sm font-semibold ${
                            a.percent >= 0 ? 'text-[#00ff95]' : 'text-red-500'
                          }`}
                        >
                          {a.percent > 0 ? `+${a.percent}%` : `${a.percent}%`}
                        </span>
                        <button
                          className={`py-[0.6] w-full rounded-full px-2 text-xs ${
                            a.status === 'Attivo'
                              ? 'bg-[#00ff95]'
                              : a.status === 'In pausa'
                              ? 'bg-gray-600'
                              : 'bg-red-500'
                          }`}
                        >
                          {a.status}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

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
