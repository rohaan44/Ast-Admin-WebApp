import { useUser } from '@/context/UserContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopSection from '@/components/TopSection';

import HeightPicker from '@/components/Height_feet';
import WeightPicker from '@/components/weight';
// import DobPicker from "@/components/DobPicker";

const HeightWeightSelection = ({ currentStep = 2 }) => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const steps = [1, 2, 3, 4];
  const navigate = useNavigate();
  const { userType, setHasCompletedOnboarding } = useUser();
  setHasCompletedOnboarding(true);
  const incHeight = () => setHeight((h) => h + 1);
  const decHeight = () => setHeight((h) => h - 1);

  const incWeight = () => setWeight((w) => w + 1);
  const decWeight = () => setWeight((w) => w - 1);

  const handleNext = () => {
    if (!height || !weight) {
      alert('Seleziona altezza e peso prima di continuare');
      return;
    }
    if (userType?.title === 'Tutor') {
      navigate('/tutor/Dashbaord');
    } else {
      navigate('/fitness-goal');
    }
  };

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='w-full bg-gradient-to-b from-red-600 to-red-800 shadow-xl'>
        <TopSection steps={steps} currentStep={currentStep} />

        {/* MAIN CONTENT */}
        <div className='mt-5 bg-black rounded-t-3xl min-h-[500px] flex flex-col justify-between items-center p-10'>
          <div className='flex flex-col items-center mt-6 text-center'>
            <h1 className='text-white text-3xl font-bold'>
              Conosciamo altezza e peso
            </h1>
            <p className='text-gray-400 text-sm mt-2'>
              Queste informazioni ci aiutano a personalizzare i tuoi piani di
              fitness.
            </p>
          </div>

          {/* HEIGHT SELECTOR */}
          {/* <div className='flex flex-col items-center mt-10'>
            <p className='text-white font-semibold mb-2'>Altezza (cm)</p>
            <div className='flex items-center justify-between bg-white/5 border border-white/10 rounded-xl w-[260px] px-6 py-3 mt-2 mb-2'>
              <button onClick={decHeight} className='text-white text-xl'>
                -
              </button>
              <div className='text-white text-2xl font-semibold'>{height}</div>
              <button onClick={incHeight} className='text-white text-xl'>
                +
              </button>
            </div>
          </div> */}

          <HeightPicker />
          <WeightPicker />

          {/* WEIGHT SELECTOR */}
          {/* <div className='flex flex-col items-center mt-10'>
            <p className='text-white font-semibold mb-2'>Peso (kg)</p>
            <div className='flex items-center justify-between bg-white/5 border border-white/10 rounded-xl w-[260px] px-6 py-3 mt-2 mb-2'>
              <button onClick={decWeight} className='text-white text-xl'>
                -
              </button>
              <div className='text-white text-2xl font-semibold'>{weight}</div>
              <button onClick={incWeight} className='text-white text-xl'>
                +
              </button>
            </div>
          </div> */}

          {/* NEXT BUTTON */}
          <div className='flex justify-center'>
            <button
              onClick={handleNext}
              className='
      mt-4 
      bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all

      w-[325px] h-[50px]
      md:w-[455px] md:h-[50px]
    '
            >
              Avanti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeightWeightSelection;
