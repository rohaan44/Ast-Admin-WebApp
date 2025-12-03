import React, { useState } from 'react';
import CheckInIcon from '@/assets/CheckInIcon.png';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ClientFeedback = () => {
  const navigate = useNavigate();
  const [energy, setEnergy] = useState(50);
  const [recovery, setRecovery] = useState(50);
  const [checked, setChecked] = useState(false);
  const isValid = checked && energy !== 50 && recovery !== 50;
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
            <h2 className='text-xl font-semibold'>Stato e feedback</h2>
            <p className='text-sm text-[#FFFFFF80] text-center'>
              Raccontaci come ti sei sentito questa settimana per aiutare il tuo
              coach a modificare il tuo piano.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>Energia settimanale</p>
            <div className='flex items-center justify-between text-xs text-gray-400'>
              <span>Basso</span>
              <span>Moderare</span>
              <span>Alto</span>
            </div>
            <input
              type='range'
              min='0'
              max='100'
              value={energy}
              onChange={(e) => setEnergy(Number(e.target.value))}
              className='w-full h-[3px] accent-red-700'
            />
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>Recupero</p>
            <div className='flex items-center justify-between text-xs text-gray-400'>
              <span>Basso</span>
              <span>Moderare</span>
              <span>Alto</span>
            </div>
            <input
              type='range'
              min='0'
              max='100'
              value={recovery}
              onChange={(e) => setRecovery(Number(e.target.value))}
              className='w-full h-[3px] accent-red-700'
            />
          </div>

          <label className='flex items-center text-[#FFFFFF80] gap-2 text-sm cursor-pointer'>
            <input
              type='checkbox'
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className='accent-red-700 bg-[#171717]'
            />
            Confermo di aver letto e accettato i Termini di utilizzo e
            l’Informativa sulla privacy.
          </label>
          <div>
            <textarea
              placeholder='Vuoi lasciare un messaggio al tuo allenatore?'
              className='w-full h-24 rounded-xl bg-[#151515] border border-[#252525] px-2 py-2 text-sm resize-none outline-none focus:border-red-500'
            ></textarea>
          </div>

          <button
            disabled={!isValid}
            onClick={() => navigate('/athleta-checkin-4')}
            className={`mt-8 w-full rounded-full py-3 text-sm transition 
              ${
                isValid
                  ? 'bg-red-600 text-white cursor-pointer'
                  : 'bg-[#202020] text-gray-400 cursor-not-allowed'
              }`}
          >
            Avanti
          </button>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center my-5'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-24 h-24'>
              <img
                src={CheckInIcon}
                className='w-full h-full object-cover'
                alt='Setting Icon'
              />
            </div>
            <h1 className='text-3xl font-semibold'>Check-In</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ClientFeedback;
