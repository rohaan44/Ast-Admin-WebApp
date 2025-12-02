import React, { useState } from 'react';
import CheckInIcon from '@/assets/CheckInIcon.png';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ReviewSubmit = () => {
  const navigate = useNavigate();
  const progressData = [
    { label: 'Peso', lastWeek: '72.5 kg', thisWeek: '69.56 kg' },
    { label: 'Vita', lastWeek: '88 cm', thisWeek: '84 cm' },
    { label: 'Braccia', lastWeek: '36 cm', thisWeek: '34.5 cm' },
    { label: 'Fianchi', lastWeek: '98 cm', thisWeek: '95 cm' },
    { label: 'Cosce', lastWeek: '56 cm', thisWeek: '54 cm' },
  ];

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <span
          onClick={() => navigate(-1)}
          className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
        >
          <MdOutlineArrowBack />
        </span>
      </div>

      <section className='flex items-start mt-5 justify-start gap-8'>
        <div className='h-full w-full lg:w-[25rem] flex-shrink-0 bg-[#171717] text-white px-4 py-8 rounded-xl space-y-6'>
          <div className='flex items-center flex-col gap-1'>
            <h2 className='text-xl font-semibold'>Recensire il tuo check-in</h2>
            <p className='text-sm text-[#FFFFFF80] text-center'>
              Ecco un riepilogo dei tuoi progressi prima dell'invio.
            </p>
          </div>

          <div className='flex flex-col gap-6 w-full'>
            {progressData.map((item, index) => (
              <div key={index} className='flex flex-col gap-2 w-full'>
                <h3 className='text-lg font-semibold'>{item.label}</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                  <div className='flex flex-col gap-1'>
                    <p>La settimana scorsa</p>
                    <div className='py-4 w-full px-4 flex items-center gap-1 bg-[#1e1e1e] border border-[#252525] rounded-2xl'>
                      {item.lastWeek}
                    </div>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p>Questa settimana</p>
                    <div className='py-4 w-full px-4 flex items-center gap-1 bg-[#1e1e1e] border border-[#252525] rounded-2xl'>
                      {item.thisWeek}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              alert(
                '🎉 Check-in inviato con successo!\n\nGrazie! I tuoi progressi sono stati registrati.'
              );
              setTimeout(() => {
                navigate('/athleta-checkin');
              }, 4000);
            }}
            className='py-4 px-2 w-full text-black rounded-full text-sm bg-white'
          >
            Invia il check-in
          </button>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center my-5'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-24 h-24'>
              <img
                src={CheckInIcon}
                alt='Checkin Icon'
                className='w-full h-full object-cover'
              />
            </div>
            <h1 className='text-3xl font-semibold'>Check-In</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ReviewSubmit;
