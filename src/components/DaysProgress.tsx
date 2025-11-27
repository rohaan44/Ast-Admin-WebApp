import React from 'react';

const DaysProgress = () => {
  const hoursData = [2, 5, 8, 4, 10, 6, 3];
  const maxHours = 10;

  return (
    <div className='sm:8 md:px-18 xl:px-28 flex flex-col gap-6'>
      <div className='grid grid-cols-7 items-end gap-1 mt-2'>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
          const barHeight = (hoursData[index] / maxHours) * 160;
          return (
            <div
              key={index}
              className='flex flex-col items-center gap-[6px] relative group'
            >
              {/* Vertical Bar */}
              <div
                className={`w-10 rounded-full transition-all duration-300`}
                style={{
                  height: `${barHeight}px`,
                  backgroundColor: '#121212',
                  opacity: 0.6,
                }}
              >
                <div className='w-full h-full rounded-full transition-all duration-300 cursor-pointer bg-[#252525] hover:bg-red-600'></div>
              </div>

              {/* Tooltip on Hover */}
              <div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded'>
                {hoursData[index]} hrs
              </div>

              {/* Day Label */}
              <span className='text-[10px] font-semibold text-white'>
                {day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='flex gap-1 items-end text-2xl font-semibold'>
          82 <span className='text-[#666565] text-sm'>Kg</span>
        </h1>

        <h1 className='flex gap-1 items-center text-lg font-semibold'>
          <span className='text-2xl font-bold text-[#FF8D28]'>80%</span>
          Completato
        </h1>
      </div>
    </div>
  );
};

export default DaysProgress;
