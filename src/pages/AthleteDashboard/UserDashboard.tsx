import 'react-circular-progressbar/dist/styles.css';
import ChickenImg from '@/assets/Food.jpg';
import image from '@/assets/image.png';
import { CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import ProfileImage from '@/assets/ProfileImage1.png';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import WeightProgressCard from '@/components/WeightProgressCard';
import ProgessReport from '@/components/ProgessReport';
import { useState } from 'react';
import ResponsiveMenu from '@/components/ResponsiveMenu';
import { TbHandClick } from 'react-icons/tb';
import { RxDoubleArrowRight } from 'react-icons/rx';

const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const meals = [
    {
      name: 'Petto di pollo',
      time: 'Domani alle 13:00pm',
      protein: 12,
      carbs: 8,
      fats: 10,
    },
    {
      name: 'Petto di pollo',
      time: 'Domani alle 13:00pm',
      protein: 12,
      carbs: 8,
      fats: 10,
    },
    {
      name: 'Petto di pollo',
      time: 'Domani alle 13:00pm',
      protein: 12,
      carbs: 8,
      fats: 10,
    },
  ];
  return (
    <section className='w-full h-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 '>
        {/* Greeting */}
        <h1 className='text-white font-bold text-xl lg:text-3xl'>
          <span className='font-semibold'>Ciao,</span> Kelvin Dane
        </h1>
        {/* Right Side */}
        <div className='flex md:w-[auto] w-full items-center justify-between gap-4 lg:w-auto'>
          {/* Search bar (hidden below md) */}
          <div className='sm:py-3 flex justify-between items-center gap-2 bg-[#151515] border border-[#252525] rounded-full p-2 sm:px-4  md:max-w-md w-full'>
            <span className='text-sm sm:text-2xl text-gray-400'>
              <CiSearch />
            </span>
            <input
              type='text'
              placeholder='Cerca'
              className='bg-transparent border-0 outline-none w-full text-white placeholder-gray-400'
            />
          </div>
          <div className='flex items-center gap-1'>
            <button className='bg-[#151515] border border-[#FFFFFF0D] sm:w-14 sm:h-14 h-10 w-10 rounded-full flex items-center justify-center text-sm sm:text-xl text-white hover:bg-[#252525] transition'>
              <BsBell />
            </button>
            <div className='sm:w-14 sm:h-14 h-10 w-10 rounded-full overflow-hidden border border-[#252525]'>
              <img
                src={ProfileImage}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      <section className='w-full h-full flex flex-col items-start mt-10 gap-4'>
        <h1 className='text-2xl font-semibold'>Pasto di oggi</h1>
        <div className='w-full h-[auto]'>
          <ProgessReport />
        </div>
        <div className='w-full grid mt-10 mb-5 lg:grid-cols-2 grid-cols-1 gap-10'>
          <div>
            <div className='flex items-center gap-1 flex-wrap justify-between'>
              <h1 className='text-3xl font-semibold'>Prossimo pasto</h1>
              <Link to={'#'}>
                <p className='flex items-end text-[#42A8FF] text-lg'>
                  <p>Vedi tutto</p>
                  <span className='text-2xl'>
                    <MdKeyboardArrowRight />
                  </span>
                </p>
              </Link>
            </div>
            <div>
              <ul className='flex flex-col gap-4 items-start mt-5'>
                {meals.map((meal, index) => (
                  <li
                    key={index}
                    className='bg-[#191919] flex items-center justify-between pr-5 w-full py-1 px-1 rounded-2xl list-none'
                  >
                    <div className='flex items-center gap-2'>
                      <div className='w-16 h-16 rounded-2xl overflow-hidden border border-[#252525]'>
                        <img
                          src={ChickenImg}
                          alt='Food Items'
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex flex-col items-start'>
                        <h2 className='text-[16px]'>{meal.name}</h2>
                        <p className='text-sm'>{meal.time}</p>
                        <div className='flex text-sm items-center gap-2'>
                          <p className='flex items-center'>
                            <span className='text-[#34C759]'>Pr.</span>{' '}
                            {meal.protein}g
                          </p>
                          <p className='flex items-center'>
                            <span className='text-[#FFCC00]'>Crb.</span>{' '}
                            {meal.carbs}g
                          </p>
                          <p className='flex items-center'>
                            <span className='text-[#FF383C]'>Fats.</span>{' '}
                            {meal.fats}g
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-6 h-6 overflow-hidden'>
                      <img
                        src={image}
                        alt='Food Items'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </li>
                ))}
                <li className='cursor-pointer flex items-center border border-[#191919] justify-between pr-5 w-full py-1 px-4 rounded-2xl list-none'>
                  <span className='py-4 px-4 text-lg rounded-full bg-[#470303e7]'>
                    <TbHandClick />
                  </span>
                  <h3 className='text-sm text-center sm:text-lg font-normal'>
                    Scorri per vedere le alternative
                  </h3>
                  <span className='text-lg sm:text-2xl'>
                    <RxDoubleArrowRight />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <WeightProgressCard />
        </div>
      </section>
    </section>
  );
};

export default UserDashboard;
