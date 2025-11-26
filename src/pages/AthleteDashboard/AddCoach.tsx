import React, { useState } from 'react';
import ResponsiveMenu from '@/components/ResponsiveMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';
import { LuExternalLink } from 'react-icons/lu';
import { CiPlay1 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import Icon4 from '@/assets/Icon4.png';
import Icon5 from '@/assets/Icon5.png';
import Icon6 from '@/assets/Icon6.png';
import Coach1 from '@/assets/Coach1.jpg';
import { coachesData } from '@/Data/coaches';
const AddCoaches = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className='w-full md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#151515] border border-[#FFFFFF0D] w-14 h-14 rounded-full flex items-center justify-center text-xl text-white hover:bg-[#252525] transition'
        >
          <IoIosArrowBack />
        </button>
        <div className='flex items-center gap-4 lg:w-auto'>
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

      <div className='flex flex-col items-start gap-2 px-0 sm:px-10'>
        <div className='flex flex-col gap-1 items-center justify-center my-5 w-full'>
          <div className='rounded-2xl overflow-hidden w-28 h-28 block'>
            <img
              src={Coach1}
              alt={'Coach'}
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold'>Darleen Bratt</h1>
            <ul className='flex sm:flex-nowrap justify-center flex-wrap items-center gap-4 mt-2 border-b pb-2 border-[#1E1E1E]'>
              <li className='flex items-center gap-1'>
                <span className='rounded-2xl overflow-hidden w-5 h-5 block'>
                  <img
                    src={Icon6}
                    alt={'Cardio'}
                    className='w-full h-full object-cover rounded-full'
                  />
                </span>
                <p className='text-sm font-normal'>Cardio</p>
              </li>
              <li className='flex items-center gap-1'>
                <span className='rounded-2xl overflow-hidden w-5 h-5 block'>
                  <img
                    src={Icon5}
                    alt={'Anaerobico'}
                    className='w-full h-full object-cover rounded-full'
                  />
                </span>
                <p className='text-sm font-normal'>Anaerobico</p>
              </li>
              <li className='flex items-center gap-1'>
                <span className='rounded-2xl overflow-hidden w-5 h-5 block'>
                  <img
                    src={Icon4}
                    alt={'Equilibrio'}
                    className='w-full h-full object-cover rounded-full'
                  />
                </span>
                <p className='text-sm font-normal'>Equilibrio</p>
              </li>
            </ul>
            <div className='flex flex-wrap justify-center sm:w-[auto] w-full items-center my-4 gap-2'>
              <button className=' sm:w-[auto] w-full justify-center rounded-full flex items-center gap-1 py-3 px-10 bg-red-600 outline-0 text-white text-lg'>
                <span>
                  <CiMail />
                </span>{' '}
                Messaggio
              </button>
              <button className=' sm:w-[auto] w-full justify-center rounded-full flex items-center gap-1 py-3 px-10 bg-transparent border border-[#1E1E1E]  outline-0 text-white text-lg'>
                <span>
                  <LuExternalLink />
                </span>
                Condividi
              </button>
            </div>
          </div>
        </div>
        <span className='w-full h-[1px] bg-[#1E1E1E]'></span>
        <div className='flex flex-col gap-2 my-2'>
          <h1 className='text-2xl md:text-3xl font-semibold flex items-center gap-2'>
            Informazioni sul coach{' '}
            <span className='md:text-2xl text-xl font-normal pt-2'>
              <IoIosArrowForward />
            </span>
          </h1>
          <p className='text-center text-sm sm:text-lg'>
            Sono Darleen Bratt, una coach certificata nel fitness, appassionata
            nell’aiutare le persone a muoversi meglio, sentirsi più forti e
            vivere in salute. Con oltre 8 anni di esperienza nell’allenamento
            anaerobico, nei movimenti di equilibrio e nel conditioning
            cardiovascolare, mi specializzo nella creazione di programmi
            personalizzati che producono risultati reali—che tu sia un
            principiante o un atleta. Il mio stile di coaching è energico, di
            supporto e basato sulla scienza. Credo che il fitness debba dare
            potere a chi lo pratica, non intimidirlo.
          </p>
        </div>
        <span className='w-full h-[1px] bg-[#1E1E1E]'></span>
      </div>

      <div className='w-full flex flex-col items-start gap-5 my-10'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-3xl font-semibold'>Allenamenti</h1>
          <p className='text-[#42A8FF] flex items-center gap-1 text-lg'>
            Vedi tutti
            <span className='text-lg pt-1'>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div className='grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {coachesData.map((coach) => (
            <div
              key={coach.id}
              className='relative rounded-2xl overflow-hidden w-full h-60 block'
            >
              <img
                src={coach.image}
                alt={coach.name}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-red-900/25'></div>
              <div className='absolute top-0 w-full px-5 py-3 flex gap-2 items-center'>
                <button className='px-3 py-1 rounded-full bg-white/10 text-white text-sm'>
                  {coach.duration}
                </button>{' '}
                <button className='px-3 py-1 rounded-full bg-white/10 text-white text-sm'>
                  {coach.calories}
                </button>
              </div>
              <div className='absolute bottom-0 w-full px-5 py-3 flex flex-col'>
                <h1 className='text-white text-xl'>{coach.name}</h1>
                <p className='text-white/80'>{coach.type}</p>
                <div className='flex items-center w-full justify-between'>
                  <div className='flex gap-2 mt-2'>
                    <button className='px-3 py-1 rounded-full bg-white/10 text-white text-sm'>
                      {coach.level}
                    </button>
                    <span className='text-white/60 text-sm'>
                      {coach.program}
                    </span>
                  </div>
                  <div>
                    <button className='px-3 py-3  rounded-full bg-white/10 text-white text-xl'>
                      <CiPlay1 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='w-full bg-[#111] text-white rounded-2xl p-6 flex flex-col gap-4 border border-[#1f1f1f]'>
            <div>
              <h1 className='text-4xl font-bold'>
                4.5 <span className='text-xl font-normal'>/5</span>
              </h1>
              <p className='text-gray-400 text-sm'>Oltre 200k valutazioni</p>
              <p className='text-gray-400 text-sm'>Oltre 31k recensioni</p>

              {/* Stars */}
              <div className='flex items-center gap-1 mt-1 text-orange-400 text-xl'>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
              {[
                { label: '5', width: 'w-[90%]' },
                { label: '4', width: 'w-[65%]' },
                { label: '3', width: 'w-[40%]' },
                { label: '2', width: 'w-[20%]' },
                { label: '1', width: 'w-[10%]' },
              ].map((row, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <span className='w-3 text-sm'>{row.label}</span>
                  <div className='w-full h-2 bg-[#222] rounded-full overflow-hidden'>
                    <div
                      className={`h-full bg-orange-400 rounded-full ${row.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCoaches;
