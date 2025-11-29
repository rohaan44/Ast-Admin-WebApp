import React from 'react';

const WeightProgressCard = ({ weight = 0, completion = 0 }) => {
  return (
    <div className='bg-[#191919] text-white rounded-xl p-6 w-full'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-lg font-bold'>Peso corporeo</h2>
          <p className='text-gray-400 text-sm'>
            Il suo progresso di peso nell’arco di un mese.
          </p>
        </div>
        <button className='text-gray-500 hover:text-white'>&rarr;</button>
      </div>

      <div className='flex justify-between space-x-1 mb-4'>
        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className={`h-52 w-8 rounded-full ${
              idx < Math.round(completion / 10)
                ? 'bg-green-500'
                : 'bg-[#252525]'
            }`}
          ></div>
        ))}
      </div>

      <div className='flex px-2 sm:px-10 justify-between text-sm text-gray-400'>
        <span>{weight} kg</span>
        <span>{completion}% Completato</span>
      </div>
    </div>
  );
};

export default WeightProgressCard;
