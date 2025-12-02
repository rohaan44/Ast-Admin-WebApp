import React, { useState } from 'react';
import Background from '@/assets/ChatsBackground.png';
import Backgroun1 from '@/assets/ChatsBackground1.png';
import { MdPerson } from 'react-icons/md';
import { IoIosArrowForward, IoMdArrowForward } from 'react-icons/io';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import GrowthOverview from '@/components/GrowthOverview';

const Home = () => {
  const [activeItem, setActiveItem] = useState(0);

  const notifications = [
    {
      id: 1,
      title: 'Nuovo Check-in ricevuto',
      text: '2 atleti hanno inviato aggiornamento.',
    },
    {
      id: 2,
      title: 'Suggerimenti AI disponibili',
      text: 'Hai 5 nuovi suggerimenti da analizzare.',
    },
    {
      id: 3,
      title: 'Richiesta in attesa',
      text: 'Atleta Luca ha bisogno di una revisione.',
    },
  ];
  const plans = [
    {
      id: 0,
      title: 'Check-in In Sospeso',
      image: Background,
      button: '12 In attesa di',
      progress: 70,
    },
    {
      id: 1,
      title: 'Atleti Attivi',
      image: Backgroun1,
      button: '8 Attivo',
      progress: 45,
    },
    {
      id: 2,
      title: 'Suggerimenti Dell intelligenza Artificiale',
      image: Backgroun1,
      button: '5 Suggerimenti',
      progress: 85,
    },
  ];

  const workouts = [
    {
      id: 1,
      title: 'Giorno 1: Corpo intero',
      exercises: ['Squat', 'Panca', 'Righe'],
    },
    {
      id: 2,
      title: 'Giorno 2: Parte Superiore',
      exercises: ['Panca stretta', 'Curl', 'Alzate laterali'],
    },
    {
      id: 3,
      title: 'Giorno 3: Parte Inferiore',
      exercises: ['Squat Bulgari', 'Stacchi', 'Affondi'],
    },
  ];

  return (
    <section className='w-full h-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      <div className='flex items-center justify-between'>
        <h1 className='md:text-3xl text-xl font-semibold'>
          Pannello Di Controllo
        </h1>

        <button className='flex items-center gap-2 border border-[#141414] p-1 rounded-full'>
          <span className='px-4 py-4 text-xl bg-[#1E1E1E] rounded-full'>
            <MdPerson />
          </span>
        </button>
      </div>
      <section className='mt-10 '>
        <div className='grid w-full h-full  grid-cols-2 lg:grid-cols-10 gap-6'>
          <div className='col-span-10 lg:col-span-6 h-full w-full'>
            <ul className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
              {plans.slice(0, 3).map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`relative w-full h-[18rem] rounded-xl bg-cover bg-center overflow-hidden cursor-pointer
                    transition-all duration-300 border-[3px]
                    ${
                      activeItem === item.id
                        ? 'border-red-500 scale-[1.02]'
                        : 'border-[#2A2A2A]'
                    }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className='absolute inset-0 bg-black/40 backdrop-blur-[2px]' />
                  <div className='absolute top-3 right-3 w-12'>
                    <CircularProgressbar
                      value={item.progress}
                      styles={buildStyles({
                        pathColor: '#ff3b3b',
                        trailColor: '#ffffff30',
                        strokeLinecap: 'round',
                      })}
                    />
                  </div>

                  <div className='absolute bottom-3 left-3 right-3 text-white'>
                    <h1 className='text-[17px] font-semibold drop-shadow-lg'>
                      {item.title}
                    </h1>
                    <button className='flex items-center lg:gap-2 gap-1 justify-center mt-2 px-4 py-2 w-full rounded-full bg-white/15 backdrop-blur-md text-white text-sm'>
                      {item.button}
                      <span>
                        <IoMdArrowForward />
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-span-10 lg:col-span-4 bg-[#111] h-[auto] w-full rounded-xl p-4'>
            <div className='flex items-center flex-wrap gap-1 justify-between'>
              <h1 className='md:text-2xl text-lg font-semibold text-white'>
                Notifiche
              </h1>

              <Link to='#'>
                <p className='text-[#42A8FF] flex items-center gap-1 cursor-pointer'>
                  Visualizza tutto <IoIosArrowForward />
                </p>
              </Link>
            </div>

            <ul className='mt-4 space-y-3'>
              {notifications.slice(0, 3).map((item) => (
                <li
                  key={item.id}
                  className='flex items-center gap-3 border-b border-[#1A1A1A] pb-3 hover:bg-[#1A1A1A] transition rounded-md px-2 py-2 cursor-pointer'
                >
                  <span className='text-[#42A8FF] text-xl'>
                    <IoNotificationsOutline />
                  </span>
                  <div>
                    <h2 className='text-white font-medium text-[15px]'>
                      {item.title}
                    </h2>
                    <p className='text-gray-400 text-sm'>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-4 my-5  items-start'>
          <h1 className='text-2xl font-semibold'>Azioni rapide</h1>
          <div className='flex w-full flex-wrap items-start gap-2'>
            <button
              className='py-5 w-full md:w-80 px-6 rounded-2xl flex text-xl
  bg-gradient-to-r from-[#7D0F09] to-[#FF3A2F]
  items-center justify-start gap-2'
            >
              <span className='py-2 px-2 rounded-full text-lg bg-[#111]'>
                <IoIosArrowForward />
              </span>
              RecensiOni Del Check-in
            </button>

            <button
              className='py-5 w-full md:w-80 px-6 rounded-2xl flex text-xl
  bg-gradient-to-r from-[#7D0F09] to-[#FF3A2F]
  items-center justify-start gap-2'
            >
              <span className='py-2 px-2 rounded-full text-lg bg-[#111]'>
                <IoIosArrowForward />
              </span>
              Nuovi Piani
            </button>
          </div>
        </div>

        <div className='grid w-full mt-10 h-full grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6'>
          <div className='h-[auto] w-full rounded-xl'>
            <div className='flex items-center flex-wrap gap-1 justify-between'>
              <h1 className='md:text-2xl text-xl font-semibold text-white'>
                Suggerimento dell’IA
              </h1>

              <Link to='#'>
                <p className='text-[#42A8FF] flex items-center gap-1 cursor-pointer'>
                  Visualizza tutto <IoIosArrowForward />
                </p>
              </Link>
            </div>

            <ul className='mt-4 space-y-3'>
              {workouts.slice(0, 3).map((day) => (
                <li
                  key={day.id}
                  className='flex items-center gap-3 border-b py-4 px-5 bg-[#1E1E1E] 
      transition rounded-xl cursor-pointer'
                >
                  <div className='flex flex-col items-start gap-2'>
                    <h2 className='text-white font-medium text-lg md:text-xl'>
                      {day.title}
                    </h2>

                    <ul className='pl-4 flex items-start flex-col'>
                      {day.exercises.map((ex, i) => (
                        <li
                          key={i}
                          className='list-disc text-sm font-normal text-gray-300'
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='h-[auto] py-5 w-full'>
            <GrowthOverview />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
