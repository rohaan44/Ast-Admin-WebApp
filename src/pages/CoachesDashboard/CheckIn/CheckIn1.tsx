import React, { useState } from 'react';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from 'react-icons/io';
import Profile from '@/assets/ProfileImage1.png';

export default function CoachesCheckIn({ setShowCheckIn1 }) {
  const [nutrition, setNutrition] = useState(
    'Nutrizione: Aumentare i carboidrati del 5%'
  );
  const [training, setTraining] = useState(
    'Allenamento: aggiungi un giorno di riposo'
  );
  const [coachNote, setCoachNote] = useState('');

  return (
    <div className='w-full h-full flex justify-center items-start'>
      <div className='rounded-2xl p-4 flex items-center flex-col gap-5 w-full'>
        {/* Header */}
        <div className='flex w-full items-center justify-center gap-4 pb-4 border-b border-[#1E1E1E]'>
          <div className='w-20 h-20 rounded-full bg-gray-800 overflow-hidden'>
            <img
              src={Profile}
              alt='Profile'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold'>John Doe</h1>
            <p className='text-gray-400 text-sm'>Età: 30</p>
            <p className='text-gray-400 text-sm'>Date: Sep 20, 2025</p>
            <span className='mt-1 text-xs px-2 py-1 rounded-full border border-green-500 text-green-400 w-fit'>
              Active
            </span>
          </div>
        </div>

        <div className='grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4'>
          <MetricBox
            title='Peso'
            value='78.5 kg'
            change={'+0.3 kg'}
            type='up'
          />

          <MetricBox title='Vita' value='82 cm' change={'-1 cm'} type='down' />

          <MetricBox
            title='Grasso %'
            value='14.8%'
            change={'+0.28%'}
            type='up'
          />
        </div>

        <Section title='Adeguamento nutrizionale'>
          <p className='text-sm text-gray-300'>{nutrition}</p>
        </Section>

        <Section title='Adattamento allenamento'>
          <p className='text-sm text-gray-300'>{training}</p>
        </Section>

        <Section title="Note dell'allenatore">
          <textarea
            className='w-full bg-[#111] border border-[#2B0000] rounded-lg p-3 text-sm min-h-[80px]'
            placeholder='Aggiungi la tua nota qui'
            value={coachNote}
            onChange={(e) => setCoachNote(e.target.value)}
          />
        </Section>

        {/* Buttons */}
        <div className='flex w-full flex-col gap-3 pt-4'>
          <button
            onClick={() => {
              alert('Salva modifiche');
              setTimeout(() => {
                setShowCheckIn1(false);
              }, 2000);
            }}
            className='w-full bg-white text-black font-semibold py-3 rounded-full'
          >
            Salva modifiche
          </button>

          <button className='w-full border border-[#2B0000] py-3 rounded-full'>
            Ripristina il piano AI
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricBox({ title, value, change, type }: any) {
  return (
    <div className='bg-[#121212] w-full border border-[#2B0000] rounded-xl p-4 flex flex-col items-center gap-1 text-center'>
      <p className='text-gray-400 text-sm'>{title}</p>
      <h1 className='text-xl font-bold'>{value}</h1>
      <span className='flex items-center gap-1 text-sm'>
        {type === 'up' ? (
          <IoIosArrowRoundUp className='text-green-400 text-lg' />
        ) : (
          <IoIosArrowRoundDown className='text-red-400 text-lg' />
        )}
        {change}
      </span>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className='bg-[#1E1E1E] w-full border border-[#2B0000] rounded-lg p-4 space-y-2'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {children}
    </div>
  );
}
