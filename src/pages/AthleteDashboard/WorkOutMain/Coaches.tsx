import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import ResponsiveMenu from '@/components/ResponsiveMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Coach1 from '@/assets/Coach1.jpg';
import Coach2 from '@/assets/Caoch2.jpg';
import Coach3 from '@/assets/Coach3.jpg';
import Coach4 from '@/assets/Coach4.jpg';
import Coach5 from '@/assets/Coach5.jpg';
import Coach6 from '@/assets/Coach6.jpg';
const coaches = [
  {
    id: 1,
    name: 'John Doe',
    specialty: 'Allenamento Forza',
    tag: 'Certificato',
    image: Coach1,
    level: 'Esperto',
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialty: 'Yoga',
    tag: 'Certificato',
    image: Coach2,
    level: 'Avanzato',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    specialty: 'Cardio',
    tag: 'Certificato',
    image: Coach3,
    level: 'Intermedio',
  },
  {
    id: 4,
    name: 'Emily Davis',
    specialty: 'Pilates',
    tag: 'Certificato',
    image: Coach4,
    level: 'Avanzato',
  },
  {
    id: 5,
    name: 'Chris Lee',
    specialty: 'Allenamento Forza',
    tag: 'Certificato',
    image: Coach5,
    level: 'Esperto',
  },
  {
    id: 6,
    name: 'Anna Wilson',
    specialty: 'Yoga',
    tag: 'Certificato',
    image: Coach6,
    level: 'Principiante',
  },
];
const filterList = ['Tutti', 'Allenamento Forza', 'Yoga', 'Cardio', 'Pilates'];
const Coaches = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Tutti');
  const filteredCoaches =
    activeFilter === 'Tutti'
      ? coaches
      : coaches.filter((coach) => coach.specialty === activeFilter);

  return (
    <section className='w-full md:p-6 p-3'>
      {/* Header */}
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
        >
          <IoIosArrowBack />
        </button>

        <h1 className='text-white font-bold text-2xl md:text-3xl'>
          Allenatori
        </h1>

        <div className='flex items-center gap-4 lg:w-auto'>
          {/* Search bar per desktop */}
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

          {/* Menu mobile */}
          <div className='flex md:hidden'>
            <button
              className='bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <ResponsiveMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>

      {/* Bottoni filtro */}
      <div className='flex mt-16 flex-wrap items-center justify-center gap-3 mb-10'>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`sm:px-6 px-4 py-2 rounded-full outline-0 border transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-red-700 text-white border-red-500'
                : 'bg-transparent border-[#252525] text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {filteredCoaches.map((coach) => (
          <div
            key={coach.id}
            className='relative rounded-2xl overflow-hidden w-full h-96 block'
          >
            <img
              src={coach.image}
              alt={coach.name}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='absolute bottom-0 w-full px-5 py-3 flex flex-col'>
              <h1 className='text-white text-xl'>{coach.name}</h1>
              <p className='text-white/80'>{coach.specialty}</p>
              <span className='text-white/60 text-sm'>{coach.tag}</span>
              <div className='flex gap-2 mt-2'>
                <button className='px-3 py-1 rounded-full bg-white/10 text-white text-sm'>
                  {coach.level}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
