import React, { useState } from 'react';
import ProfileImage from '@/assets/ProfileImage1.png';
import { CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import GymServices from '@/components/GymServices';
import HeroSection from '@/components/HeroSection';
const WorkOutDashboard = () => {
  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 '>
        {/* Greeting */}
        <h1 className='text-white font-bold flex items-start flex-col text-xl lg:text-3xl'>
          <span className='font-normal text-sm'>Lunedì, 25 Ago</span>
          L’allenamento di oggi
        </h1>
        {/* Right Side */}
        <div className='flex md:w-[auto] w-full items-center justify-between gap-4 lg:w-auto'>
          {/* Search bar (hidden below md) */}
          <div className='py-3 flex justify-between items-center gap-2 bg-[#151515] border border-[#252525] rounded-full px-4  md:max-w-md w-full'>
            <span className='text-2xl text-gray-400'>
              <CiSearch />
            </span>
            <input
              type='text'
              placeholder='Cerca'
              className='bg-transparent border-0 outline-none w-full text-white placeholder-gray-400'
            />
          </div>
          <div className='flex items-center gap-1'>
            <button className='bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'>
              <BsBell />
            </button>
            <div className='w-14 h-14 rounded-full overflow-hidden border border-[#252525]'>
              <img
                src={ProfileImage}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
      <GymServices />
    </section>
  );
};

export default WorkOutDashboard;
