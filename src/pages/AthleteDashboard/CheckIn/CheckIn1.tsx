import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckInIcon from '@/assets/CheckInIcon.png';
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
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <span
          onClick={() => navigate(-1)}
          className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
        >
          <MdOutlineArrowBack />
        </span>
      </div>
      <section className='flex items-start justify-start gap-8'>
        <div className='h-full w-full lg:w-[25rem] flex-shrink-0'>
          <div className='mt-5 bg-[#171717] w-full rounded-md min-h-full flex flex-col justify-between items-center pb-10 py-4 px-4'>
            <div className='flex w-full flex-col items-center mt-6 text-center'>
              <h1 className='text-white w-full text-lg md:text-2xl font-bold'>
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
                <div className='text-white text-2xl font-semibold'>
                  {height}
                </div>
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
                <div className='text-white text-2xl font-semibold'>
                  {weight}
                </div>
                <button onClick={incWeight} className='text-white text-xl'>
                  +
                </button>
              </div>
            </div>

            {/* NEXT BUTTON */}
            <button
              onClick={() => navigate('/athleta-checkin-2')}
              className='mt-10 w-full bg-red-600 text-white font-bold py-3 px-24 rounded-full shadow-lg'
            >
              Avanti
            </button>
          </div>
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

export default HeightWeightSelection;
