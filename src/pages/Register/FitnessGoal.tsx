import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopSection from '@/components/TopSection';

export default function FitnessGoalPage({ currentStep = 3 }) {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [experience, setExperience] = useState('');

  const steps = [1, 2, 3, 4];
  const navigate = useNavigate();

  const goals = [
    'Perdita di grasso',
    'Prestazioni',
    'Idoneità generale',
    'Muscoli',
    'Addominali',
    'Bicipiti',
  ];

  const experiences = ['Principiante', 'Intermedio', 'Avanzato'];

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (selectedGoals.length === 0) {
      alert('Seleziona almeno un obiettivo fitness');
      return;
    }
    if (!experience) {
      alert('Seleziona il tuo livello di esperienza');
      return;
    }

    // Redirect to Payment1 page
    navigate('/payment1'); // <-- Make sure this route exists
  };

  return (
    <div className='h-full w-full flex items-center justify-center '>
      <div className='w-full  bg-gradient-to-b from-red-600 to-red-800 shadow-xl'>
        {/* Top Section */}
        <TopSection steps={steps} currentStep={currentStep} />

        <div className='mt-5 bg-black rounded-t-3xl min-h-[500px] flex flex-col justify-between items-center p-10 relative'>
          <h1 className='text-2xl font-bold text-center mb-2'>
            Facci conoscere il tuo obiettivo e la tua esperienza
          </h1>
          <p className='text-gray-400 text-center mb-10 max-w-lg'>
            Useremo la tua altezza per personalizzare i tuoi piani di fitness e
            nutrizione.
          </p>

          {/* Fitness Goals */}
          <h2 className='text-sm font-semibold mb-3'>Obiettivo fitness</h2>
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            {goals.map((goal) => (
              <button
                key={goal}
                onClick={() => toggleGoal(goal)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  selectedGoals.includes(goal)
                    ? 'bg-white text-black border-white'
                    : 'text-gray-300 border-gray-600 hover:border-white'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>

          {/* Experience */}
          <h2 className='text-sm font-semibold mb-3'>Livello di esperienza</h2>
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            {experiences.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setExperience(lvl)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  experience === lvl
                    ? 'bg-white text-black border-white'
                    : 'text-gray-300 border-gray-600 hover:border-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleNext}
            className='mt-4 w-64 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all'
          >
            Avanti
          </button>
        </div>
      </div>
    </div>
  );
}
