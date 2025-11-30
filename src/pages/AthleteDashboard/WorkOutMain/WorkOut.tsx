import React, { useState } from 'react';
import { CiSaveUp2, CiPlay1, CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';
import { FaFire, FaDumbbell, FaStar } from 'react-icons/fa';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { exercises } from '@/Data/data.js';
import { Link, useParams } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa6';

const defaultDetails = {
  mainTitle: 'N/A',
  mainSubtitle: 'N/A',
  kcal: '🔥 Kcal',
  allenamento: 'Allenamento',
  valutazioni: '0',
  serie: '0',
  rir: '0',
  infoTitle: 'Informazioni non disponibili',
  description: 'Nessuna descrizione disponibile.',
  weeks: ['Settimana 1'],
  weekGoal: 'N/A',
  weekDescription: 'N/A',
  progressione: {
    title: 'N/A',
    beginner: 'N/A',
    intermediate: 'N/A',
    advanced: 'N/A',
  },
  technicalNotes: { title: 'N/A', notes: ['N/A'] },
  indications: { title: 'N/A', list: ['N/A'] },
  trainer: { title: 'N/A', name: 'N/A', categories: ['N/A'], image: '' },
  foodItems: [{ title: 'N/A', trainer: 'N/A', categories: ['N/A'] }],
  videoLink: '#',
};

const Workout = () => {
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const exercise = exercises.find((ex) => ex.id === parseInt(id));
  const details = exercise?.details || defaultDetails;
  const [activeWeek, setActiveWeek] = useState(exercise.details.weeks[0]);
  const exerciseDetails = [
    { icon: <FaFire className='text-red-400' />, text: exercise.details.kcal },
    { icon: <FaDumbbell />, text: exercise.details.allenamento },
    { icon: <FaStar />, text: `${exercise.details.valutazioni}` },
    { icon: null, text: exercise.details.serie },
    { icon: null, text: exercise.details.rir },
  ];

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4 '>
        {/* Greeting */}
        <h1 className='text-white font-bold flex items-start flex-col text-xl md:text-3xl'>
          <span className='font-normal text-sm'>Lunedì, 25 Ago</span>
          L’allenamento di oggi
        </h1>
        {/* Right Side */}
        <div className='flex items-center gap-2 lg:w-auto'>
          <button className='flex bg-[#151515] border border-[#FFFFFF0D] sm:w-14 sm:h-14 h-10 w-10 rounded-full  items-center justify-center text-sm sm:text-xl text-white hover:bg-[#252525] transition'>
            <FaRegBookmark />
          </button>
          <button className='flex bg-[#151515] border border-[#FFFFFF0D] sm:w-14 sm:h-14 h-10 w-10 rounded-full  items-center justify-center text-sm sm:text-xl text-white hover:bg-[#252525] transition'>
            <BsBell />
          </button>
        </div>
      </div>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mt-10 mb-5'>
        <div className='flex flex-col gap-10'>
          <div className='relative rounded-2xl overflow-hidden w-full h-[25rem] md:h-[35rem]'>
            <div className='h-full'>
              <img
                src={exercise.image}
                className='w-full h-full object-cover'
              />
            </div>
            <Link to={exercise.details.videoLink}>
              <button className='absolute z-10 bottom-6 right-6 bg-white/20 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-full flex items-center justify-center text-3xl'>
                <CiPlay1 />
              </button>
            </Link>
            <div className='absolute inset-0 bg-black/55'></div>
          </div>

          <button className='sm:py-4 py-3 w-full px-8 sm:px-14 rounded-full bg-red-600 text-sm sm:text-lg font-semibold'>
            Inizia Allenamento
          </button>
        </div>

        <div className='py-4 sm:px-4 px-0 flex flex-col items-start gap-6'>
          <div className='flex items-center gap-3 flex-wrap'>
            <button className='px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm'>
              {exercise.level}
            </button>

            <button className='px-4 py-2 flex gap-2 items-center rounded-full bg-white/10 backdrop-blur-sm'>
              <MdOutlineDateRange /> {exercise.duration}
            </button>
          </div>

          {/* Title */}
          <div>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.mainTitle}
            </h1>
            <p className='text-lg text-white/80'>
              {exercise.details.mainSubtitle}
            </p>
          </div>

          {/* Tags */}
          <ul className='flex flex-wrap gap-2'>
            {exerciseDetails.map((item, index) => (
              <li
                key={index}
                className='flex bg-[#171717] py-2 px-4 rounded-full items-center gap-2'
              >
                {item.icon && <span className='text-lg'>{item.icon}</span>}
                <p className='text-white text-sm'>{item.text}</p>
              </li>
            ))}
          </ul>

          <span className='w-full h-[1px] bg-[#171717]'></span>

          {/* About */}
          <div>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.infoTitle}
            </h1>
            <p className='text-sm text-white/70 mt-2 leading-6'>
              {exercise.details.description}
            </p>
          </div>

          <span className='w-full h-[1px] bg-[#171717]'></span>

          {/* Progression */}
          <div className='w-full'>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.progressione.title}
            </h1>

            <ul className='flex flex-col gap-2 mt-4'>
              <li className='flex items-center gap-2'>
                <IoCheckmarkDoneCircleOutline className='text-green-500 text-xl' />
                <p>{exercise.details.progressione.beginner}</p>
              </li>

              <li className='flex items-center gap-2'>
                <IoCheckmarkDoneCircleOutline className='text-green-500 text-xl' />
                <p>{exercise.details.progressione.intermediate}</p>
              </li>

              <li className='flex items-center gap-2'>
                <IoCheckmarkDoneCircleOutline className='text-green-500 text-xl' />
                <p>{exercise.details.progressione.advanced}</p>
              </li>
            </ul>
          </div>

          <span className='w-full h-[1px] bg-[#171717]'></span>

          {/* Technical Notes */}
          <div className='w-full'>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.technicalNotes.title}
            </h1>

            <ul className='flex flex-col mt-3 gap-1'>
              {exercise.details.technicalNotes.notes.map((n, i) => (
                <p key={i}>{n}</p>
              ))}
            </ul>
          </div>

          <span className='w-full h-[1px] bg-[#171717]'></span>

          {/* Indications */}
          <div className='w-full'>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.indications.title}
            </h1>

            <ul className='flex flex-col mt-3 gap-1'>
              {exercise.details.indications.list.map((n, i) => (
                <p key={i}>{n}</p>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className='w-full py-8 flex justify-center flex-wrap gap-3'>
        {exercise.details.weeks.map((wk, i) => (
          <button
            key={i}
            onClick={() => setActiveWeek(wk)}
            className={`sm:px-6 px-3 sm:py-2 py-1 rounded-full transition ${
              activeWeek === wk
                ? 'bg-red-600'
                : 'bg-[#151515] border border-[#2a2a2a]'
            }`}
          >
            {wk}
          </button>
        ))}
      </div>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 sm:px-4 px-0 py-10'>
        <div>
          <h1 className='text-2xl font-semibold'>
            {exercise.details.weekGoal}
          </h1>
          <p className='text-sm text-white/70 mt-1'>
            {exercise.details.weekDescription}
          </p>

          <ul className='flex flex-wrap gap-2 my-5'>
            {exerciseDetails.map((item, index) => (
              <li
                key={index}
                className='flex bg-[#171717] py-2 px-4 rounded-full items-center gap-2'
              >
                {item.icon && <span className='text-lg'>{item.icon}</span>}
                <p className='text-white text-sm'>{item.text}</p>
              </li>
            ))}
          </ul>

          <span className='w-full h-[1px] bg-[#171717]'></span>
        </div>

        {/* trainer section */}
        <div className='flex flex-col gap-6'>
          <div className='flex items-center flex-wrap  gap-1 justify-between'>
            <h1 className='text-2xl font-semibold'>
              {exercise.details.trainer.title}
            </h1>
            <Link to={`/athleta-work-out/${id}/coaches`}>
              <p className='text-[#42A8FF] flex items-center gap-1 cursor-pointer'>
                More <IoIosArrowForward />
              </p>
            </Link>
          </div>

          <ul className='flex flex-col items-start w-full gap-4'>
            {exercise.details.foodItems.map((item, i) => (
              <li
                key={i}
                className='bg-[#191919] w-full flex sm:flex-row px-2 py-2 sm:px-4 sm:py-3 flex-col items-start md:items-center gap-4 rounded-2xl border border-[#252525]'
              >
                <div className='sm:w-16 w-full sm:h-16 rounded-xl overflow-hidden border border-[#333]'>
                  <img
                    src={exercise.details.trainer.image}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='flex items-start justify-start flex-col gap-2'>
                  <h1 className='text-xl font-semibold'>
                    {exercise.details.trainer.name}
                  </h1>

                  <ul className='flex flex-wrap items-center gap-2 text-sm'>
                    {exercise.details.trainer.categories.map((c, j) => (
                      <li
                        key={j}
                        className='px-4 py-1 rounded-full bg-[#1E1E1E]'
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Workout;
