import React, { useState } from 'react';
import ProfileImage from '@/assets/ProfileImage1.png';
import { CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import GymServices from '@/components/GymServices';
import HeroSection from '@/components/HeroSection';
import ResponsiveMenu from '@/components/ResponsiveMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

const WorkOutDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='w-full md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4 '>
        {/* Greeting */}
        <h1 className='text-white font-bold text-2xl md:text-3xl'>
          <span className='font-semibold'>Ciao,</span> Kelvin Dane
        </h1>
        {/* Right Side */}
        <div className='flex items-center gap-4 lg:w-auto'>
          {/* Search bar (hidden below md) */}
          <div className='hidden md:flex items-center gap-2 bg-[#151515] border border-[#252525] rounded-full px-4 flex-1 max-w-md w-full'>
            <span className='text-2xl text-gray-400'>
              <CiSearch />
            </span>
            <input
              type='text'
              placeholder='Cerca'
              className='bg-transparent border-0 outline-none w-full py-2 text-white placeholder-gray-400'
            />
          </div>
          <button className='hidden md:flex bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'>
            <BsBell />
          </button>
          <div className='flex md:hidden'>
            <button
              className='bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className='hidden md:flex w-14 h-14 rounded-full overflow-hidden border border-[#252525]'>
            <img
              src={ProfileImage}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <ResponsiveMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
      <HeroSection />
      <GymServices />
    </section>
  );
};

export default WorkOutDashboard;
