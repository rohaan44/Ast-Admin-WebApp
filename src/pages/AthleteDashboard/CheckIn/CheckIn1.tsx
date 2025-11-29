import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopSection from '@/components/TopSection';
import { MdOutlineArrowBack } from 'react-icons/md';
const HeightWeightSelection = ({ currentStep = 2 }) => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const navigate = useNavigate();
  const incHeight = () => setHeight((h) => h + 1);
  const decHeight = () => setHeight((h) => h - 1);
  const incWeight = () => setWeight((w) => w + 1);
  const decWeight = () => setWeight((w) => w - 1);
  const handleNext = () => {
    if (!height || !weight) {
      alert('Seleziona altezza e peso prima di continuare');
      return;
    }
  };
  return (
    <div className='h-full w-full lg:w-[25rem] md:p-6 p-3 flex-shrink-0'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <span
          onClick={() => navigate(-1)}
          className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
        >
          <MdOutlineArrowBack />
        </span>
      </div>
      <div className='mt-5 bg-[#171717] w-full rounded-t-3xl min-h-full flex flex-col justify-between items-center p-10'>
        <div className='flex flex-col items-center mt-6 text-center'>
          <h1 className='text-white w-full text-3xl font-bold'>
            Qual è il tuo peso attuale?
          </h1>
        </div>

        {/* HEIGHT SELECTOR */}
        <div className='flex flex-col w-full items-center mt-10'>
          <p className='text-white font-semibold mb-2'>Altezza (cm)</p>
          <div className='flex items-center  justify-between bg-white/5 border border-white/10 rounded-xl w-full px-6 py-3 mt-2 mb-2'>
            <button onClick={decHeight} className='text-white text-xl'>
              -
            </button>
            <div className='text-white text-2xl font-semibold'>{height}</div>
            <button onClick={incHeight} className='text-white text-xl'>
              +
            </button>
          </div>
        </div>

        {/* WEIGHT SELECTOR */}
        <div className='flex flex-col w-full items-center mt-10'>
          <p className='text-white font-semibold mb-2'>Peso (kg)</p>
          <div className='flex items-center justify-between bg-white/5 border w-full border-white/10 rounded-xl  px-6 py-3 mt-2 mb-2'>
            <button onClick={decWeight} className='text-white text-xl'>
              -
            </button>
            <div className='text-white text-2xl font-semibold'>{weight}</div>
            <button onClick={incWeight} className='text-white text-xl'>
              +
            </button>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className='mt-10 w-full bg-red-600 text-white font-bold py-3 px-24 rounded-full shadow-lg'
        >
          Avanti
        </button>
      </div>
    </div>
  );
};

export default HeightWeightSelection;
