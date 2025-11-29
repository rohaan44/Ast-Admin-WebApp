import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
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
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4'>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#151515] hidden md:flex border border-[#FFFFFF0D] w-10 h-10 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
        >
          <IoIosArrowBack />
        </button>
        <h1 className='text-white hidden md:flex font-bold text-2xl md:text-3xl'>
          Allenatori
        </h1>
        <div className='md:hidden flex items-center justify-between w-full'>
          <button
            onClick={() => navigate(-1)}
            className='bg-[#151515] border border-[#FFFFFF0D] w-10 h-10 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
          >
            <IoIosArrowBack />
          </button>

          <h1 className='text-white font-bold text-2xl md:text-3xl'>
            Allenatori
          </h1>
        </div>
        <div className='py-3 flex justify-between items-center gap-2 bg-[#151515] border border-[#252525] rounded-full px-4  md:w-[250px] w-full'>
          <span className='text-2xl text-gray-400'>
            <CiSearch />
          </span>
          <input
            type='text'
            placeholder='Cerca'
            className='bg-transparent border-0 outline-none w-full text-white placeholder-gray-400'
          />
        </div>
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
          <Link key={coach.id} to={'/athleta/coaches/add-coach'}>
            <div className='relative rounded-2xl overflow-hidden w-full h-96 block'>
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
