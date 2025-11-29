import React, { useState } from 'react';
import { exercises } from '@/Data/data';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const GymServices = () => {
  const [activeFilter, setActiveFilter] = useState('Tutti');
  const filterList = ['Tutti', 'Principiante', 'Intermedio', 'Avanzato'];

  const filteredExercises =
    activeFilter === 'Tutti'
      ? exercises
      : exercises.filter((item) => item.level === activeFilter);

  return (
    <div className='flex mt-10 mb-5 flex-col items-start gap-5 w-full'>
      <div className='flex items-center sm:justify-start justify-center flex-wrap gap-2'>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-10 py-2 rounded-full outline-0 border 
              transition-all duration-300
              ${
                activeFilter === filter
                  ? 'bg-red-700 text-white border-red-500'
                  : 'bg-transparent border-[#252525] text-white'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
        {filteredExercises.map((item) => (
          <Link
            key={item.id}
            to={`/athleta-work-out-dashboard/work-out/${item.id}`}
            className='relative rounded-2xl overflow-hidden w-full h-[25rem] block'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black/30'></div>

            <div className='absolute bottom-0 w-full px-5 py-3 flex flex-col gap-3'>
              <div>
                <h1 className='text-2xl text-white'>{item.title}</h1>
                <p className='text-lg text-white/80'>{item.subtitle}</p>
                <span className='text-sm text-white/60'>{item.tag}</span>
              </div>

              <div className='flex xl:flex-row flex-col items-center w-full gap-2'>
                <button className='px-4 w-full py-2 rounded-full bg-white/10 backdrop-blur-sm text-white'>
                  {item.level}
                </button>

                <button className='flex w-full items-center justify-center gap-1 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white'>
                  <MdOutlineDateRange />
                  {item.duration}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GymServices;
