import React, { useState } from 'react';
import { CiMail, CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Profile from '@/assets/ProfileImage1.png';
import NoChat from '@/assets/Chat.png';
import Profile3 from '@/assets/Profile3.png';
import FrontBody from '@/assets/FrontBody.png';
import BackBody from '@/assets/BackBody.png';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { LuPlus } from 'react-icons/lu';
import ProgressChart from '@/components/ProgressChartCard';
import { FaArrowUp } from 'react-icons/fa6';
import DaysProgress from '@/components/DaysProgress';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoCloudDownloadOutline } from 'react-icons/io5';
const users = [
  {
    name: 'John Doe',
    age: 30,
    height: "6'1",
    weight: '60kg',
    gender: 'Maschio',
    status: 'Attiva',
    plan: 'PRO',
    lastCheck: 'Sep 20',
    expiry: 'Oct 20',
    progress: 85,
  },
  {
    name: 'Michael',
    age: 28,
    height: "5'9",
    weight: '72kg',
    gender: 'Maschio',
    status: 'Inattiva',
    plan: 'FREE',
    lastCheck: 'Sep 15',
    expiry: 'Nov 03',
    progress: 40,
  },
  {
    name: 'Robert',
    age: 26,
    height: "5'11",
    weight: '67kg',
    gender: 'Maschio',
    status: 'Attiva',
    plan: 'PRO',
    lastCheck: 'Sep 10',
    expiry: 'Oct 21',
    progress: 92,
  },
  {
    name: 'Sarah',
    age: 24,
    height: "5'6",
    weight: '55kg',
    gender: 'Femmina',
    status: 'Attiva',
    plan: 'PRO',
    lastCheck: 'Sep 11',
    expiry: 'Nov 10',
    progress: 78,
  },
  {
    name: 'Emma Watson',
    age: 21,
    height: "5'4",
    weight: '50kg',
    gender: 'Femmina',
    status: 'Attiva',
    plan: 'FREE',
    lastCheck: 'Sep 18',
    expiry: 'Oct 30',
    progress: 45,
  },
  {
    name: 'Luca Rossi',
    age: 34,
    height: "5'10",
    weight: '74kg',
    gender: 'Maschio',
    status: 'Inattiva',
    plan: 'BASIC',
    lastCheck: 'Aug 29',
    expiry: 'Sep 25',
    progress: 23,
  },
  {
    name: 'Sophia',
    age: 22,
    height: "5'3",
    weight: '48kg',
    gender: 'Femmina',
    status: 'Attiva',
    plan: 'PRO',
    lastCheck: 'Sep 19',
    expiry: 'Nov 22',
    progress: 70,
  },
  {
    name: 'Daniel',
    age: 32,
    height: "6'0",
    weight: '82kg',
    gender: 'Maschio',
    status: 'Trailing',
    plan: 'FREE',
    lastCheck: 'Sep 05',
    expiry: 'Oct 11',
    progress: 33,
  },
];
const Atleti = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Tutto');
  const [activeUser, setActiveUser] = useState(null);
  const [activeTab, setActiveTab] = useState('Panoramica');
  const filteredUsers = users.filter((u) =>
    filter === 'Tutto' ? u : u.status === filter
  );
  interface BarItem {
    label: string;
    weight: string;
    color: string;
    height: string;
  }

  const data: BarItem[] = [
    {
      label: 'Tozzo',
      weight: '120kg',
      color: 'bg-red-500',
      height: 'h-[140px]',
    },
    {
      label: 'Panca',
      weight: '60kg',
      color: 'bg-orange-400',
      height: 'h-[100px]',
    },
    {
      label: 'Stacco',
      weight: '160kg',
      color: 'bg-green-500',
      height: 'h-[160px]',
    },
  ];
  return (
    <section className='w-full md:mt-2 mt-16 md:mb-2 mb-8 p-3'>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#151515] border w-12 h-12 rounded-full flex items-center justify-center'
        >
          <IoIosArrowBack className='text-xl' />
        </button>

        <h1 className='text-3xl font-bold'>Allenatori</h1>

        <div className='hidden md:flex items-center gap-2 bg-[#151515] border border-[#252525] rounded-full px-4 w-72'>
          <CiSearch className='text-xl text-gray-400' />
          <input
            type='text'
            placeholder='Cerca'
            className='bg-transparent outline-none py-2 text-white w-full'
          />
        </div>
      </div>
      <div className='grid h-full grid-cols-10 gap-6 mt-6'>
        <div
          className={`lg:col-span-3 col-span-10
        ${activeUser ? 'hidden lg:block' : 'block'} 
        
`}
        >
          {/* FILTER BUTTONS */}
          <div className='flex flex-wrap gap-2'>
            {['Tutto', 'Attiva', 'Inattiva', 'Trailing'].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-4 py-1 rounded-full text-sm border ${
                  filter === btn ? 'bg-red-600' : 'border-[#252525]'
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* USERS LIST DISPLAY */}
          <ul className='mt-5 flex flex-col gap-3 h-full'>
            {filteredUsers.map((user, i) => (
              <li
                key={i}
                onClick={() => setActiveUser(user)}
                className={`cursor-pointer border-b border-[#191919] p-2 flex justify-between items-center 
                rounded-lg ${activeUser?.name === user.name && 'bg-[#111]'}`}
              >
                <div className='flex gap-3 items-center'>
                  <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                    <img
                      src={Profile}
                      className='w-16 h-16 rounded-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-1 items-start'>
                    <h2 className='font-semibold text-sm'>{user.name}</h2>
                    <p className='text-xs flex gap-1'>
                      <span
                        className={`font-bold ${
                          user.status === 'Attiva'
                            ? 'text-green-500'
                            : user.status === 'Inattiva'
                            ? 'text-red-500'
                            : 'text-yellow-400'
                        }`}
                      >
                        {user.status}
                      </span>
                      • {user.lastCheck}
                    </p>
                    <p className='text-xs opacity-70'>
                      {user.plan} (exp {user.expiry})
                    </p>
                  </div>
                </div>

                <IoIosArrowForward />
              </li>
            ))}
          </ul>
        </div>
        <div className={`lg:col-span-7 col-span-10 py-6 px-4 lg:px-16  `}>
          {/* -------- If No User Selected -------- */}
          {!activeUser && (
            <div className='hidden ;g:flex flex-col items-center justify-center h-full text-gray-400 gap-3'>
              <div className='bg-[#141414] rounded-full w-40 h-40 flex items-center justify-center p-4'>
                <img
                  src={NoChat}
                  alt='No Chat'
                  className='h-full w-full object-contain'
                />
              </div>
              <h1>Benvenuto in Chat!</h1>
              <p>
                Sentiti libero di iniziare una nuova conversazione con il tuo
                coach.
              </p>
              <button className='flex items-center gap-2 border border-[#141414] px-6 py-2 rounded-full hover:bg-[#1A1A1A]'>
                <LuPlus /> Aggiungi un coach
              </button>
            </div>
          )}

          {/* -------- If User Selected -------- */}
          {activeUser && (
            <>
              {/* USER HEADER */}
              <div
                className={`flex items-center flex-col justify-center w-full py-8  ${
                  activeUser ? 'block' : 'hidden'
                } `}
              >
                <div className='flex sm:flex-row flex-col border-b pb-2 border-[#1E1E1E] gap-5 items-center'>
                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() => setActiveUser(false)}
                      className='lg:hidden sm:flex hidden items-center justify-center w-10 h-10 rounded-full 
               bg-[#151515] hover:bg-[#202020] transition '
                    >
                      <IoIosArrowBack />
                    </button>
                    <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                      <img
                        src={Profile}
                        className='w-28 h-28 rounded-full object-cover'
                      />
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() => setActiveUser(false)}
                      className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full 
               bg-[#151515] hover:bg-[#202020] transition '
                    >
                      <IoIosArrowBack />
                    </button>
                    <div className='flex items-start gap-1 flex-col'>
                      <h2 className='text-2xl font-bold'>{activeUser.name}</h2>
                      <p className='text-gray-300 text-sm'>
                        Età {activeUser.age} · {activeUser.gender}
                      </p>
                      <span
                        className={`px-2 py-1 text-xs rounded-full
    ${
      activeUser.status === 'Inattiva'
        ? 'text-red-500 bg-red-500/20'
        : activeUser.status === 'Trailing'
        ? 'text-yellow-500 bg-yellow-500/20'
        : 'text-green-500 bg-green-500/20'
    }
  `}
                      >
                        {activeUser.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-wrap justify-center sm:w-[auto] w-full items-center my-4 gap-2'>
                  <button className=' sm:w-[auto] w-full justify-center rounded-full flex items-center gap-1 py-2 px-6 bg-red-600 outline-0 text-white text-lg'>
                    <span>
                      <CiMail />
                    </span>{' '}
                    Messaggio
                  </button>
                  <button className=' sm:w-[auto] w-full justify-center rounded-full flex items-center gap-1 py-2 px-6 bg-transparent border border-[#1E1E1E]  outline-0 text-white text-lg'>
                    <span>
                      <LiaClipboardListSolid />
                    </span>
                    Visualizza profilo
                  </button>
                </div>
              </div>

              {/* TABS */}
              <div className='flex sm:gap-6 gap-3 sm:flex-wrap flex-wrap items-center sm:justify-center justify-start pb-4 border-b border-[#222]'>
                {[
                  'Panoramica',
                  'Progressi',
                  'Check-in',
                  'Piani',
                  'Documenti',
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'text-red-500 border-b-2 border-red-500'
                        : 'text-gray-400'
                    } pb-2`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className='mt-6'>
                {activeTab === 'Panoramica' && (
                  <div
                    className='grid w-full h-full
                   lg:grid-cols-2 grid-cols-1 gap-4'
                  >
                    <div className='bg-[#131313] border flex flex-col gap-4 items-start border-[#202020] p-5 rounded-xl'>
                      <h3 className='font-semibold text-2xl'>Dati Personali</h3>
                      <ul className='flex w-full items-start flex-col'>
                        <p className='w-full flex text-lg items-center justify-between'>
                          Peso: <span>{activeUser.weight}</span>
                        </p>
                        <p className='w-full flex text-lg items-center justify-between'>
                          Altezza: <span>{activeUser.height}</span>
                        </p>
                        <p className='w-full flex text-lg items-center justify-between'>
                          Genere: <span>{activeUser.gender}</span>
                        </p>
                        <p className='w-full flex text-lg items-center justify-between'>
                          Età: <span>{activeUser.age}</span>
                        </p>
                      </ul>
                    </div>
                    <div className='bg-[#131313] border flex flex-col gap-4 items-start border-[#202020] p-5 rounded-xl'>
                      <h3 className='font-semibold text-2xl'>Documenti</h3>
                      <ul className='flex items-center gap-2'>
                        <span className='border border-[#202020] py-2 px-2 rounded-full'>
                          <IoDocumentAttachOutline />
                        </span>
                        <span className='border border-[#202020] py-2 px-2 rounded-full'>
                          <IoDocumentAttachOutline />
                        </span>
                        <span className='border border-[#202020] py-2 px-2 rounded-full'>
                          <IoDocumentAttachOutline />
                        </span>
                        <span className='border border-[#202020] py-2 px-2 rounded-full'>
                          <IoDocumentAttachOutline />
                        </span>
                      </ul>
                      <div className='flex w-full items-start flex-col'>
                        <h1 className='text-2xl font-semibold'>
                          Sottoscrizione
                        </h1>
                        <span className='text-green-600'>Pro</span>
                        <p className='w-full text-lg text-[#FFFFFFB2]'>
                          Scade October 20
                        </p>
                      </div>
                    </div>
                    <div className='bg-[#131313] border flex flex-col gap-4 items-start border-[#202020] p-5 rounded-xl'>
                      <h3 className='font-semibold text-2xl'>Progressi</h3>
                      <ProgressChart value={85} />
                    </div>

                    <div className='bg-[#131313] border flex flex-col gap-4 items-start border-[#202020] p-5 rounded-xl'>
                      <div className='flex items-start flex-col'>
                        <h3 className='font-semibold text-2xl'>Check-in</h3>
                        <p className='w-full text-lg text-[#FFFFFFB2]'>
                          Tempo: MAR 12
                        </p>
                      </div>
                      <ul className='flex items-center gap-2'>
                        <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                          <img
                            src={Profile3}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        </div>
                        <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                          <img
                            src={Profile3}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        </div>
                        <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                          <img
                            src={Profile3}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        </div>
                        <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                          <img
                            src={Profile3}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        </div>
                        <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                          <img
                            src={Profile3}
                            className='w-8 h-8 rounded-full object-cover'
                          />
                        </div>
                      </ul>
                      <div className='flex w-full items-start flex-col'>
                        <h1 className='text-xl font-semibold'>AI suggerito:</h1>
                        <p className='w-full text-lg text-[#FFFFFFB2]'>
                          Aumenta le calorie
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Progressi' && (
                  <div className='flex flex-col items-start gap-5'>
                    <div className='w-full grid items-start xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                      <div className='bg-[#1a1a1a] w-full flex items-center flex-col gap-1 py-4 px-4 rounded-3xl border border-[#790600]'>
                        <h2 className='text-lg font-semibold'>Peso</h2>
                        <span className='text-2xl font-semibold'>60.5 kg</span>
                        <span className='flex items-center gap-1 text-green-700 text-lg'>
                          <FaArrowUp /> Peso
                        </span>
                      </div>
                      <div className='bg-[#1a1a1a] w-full flex items-center flex-col gap-1 py-4 px-4 rounded-3xl border border-[#790600]'>
                        <h2 className='text-lg font-semibold'>Peso</h2>
                        <span className='text-2xl font-semibold'>60.5 kg</span>
                        <span className='flex items-center gap-1 text-green-700 text-lg'>
                          <FaArrowUp /> Peso
                        </span>
                      </div>
                      <div className='bg-[#1a1a1a] w-full flex items-center flex-col gap-1 py-4 px-4 rounded-3xl border border-[#790600]'>
                        <h2 className='text-lg font-semibold'>Peso</h2>
                        <span className='text-2xl font-semibold'>60.5 kg</span>
                        <span className='flex items-center gap-1 text-green-700 text-lg'>
                          <FaArrowUp /> Peso
                        </span>
                      </div>
                    </div>
                    <div className='w-full py-4 px-4 rounded-xl bg-[#1a1a1a]'>
                      <div className='flex items-start flex-col'>
                        <h2 className='text-2xl font-semibold'>Peso</h2>
                        <p className='text-lg  text-[#FFFFFF80] font-normal'>
                          Progresso di peso entro un mese
                        </p>
                      </div>
                      <DaysProgress />
                    </div>

                    <div className='flex w-full my-4 items-start flex-col gap-5'>
                      <h1 className='text-2xl font-semibold'>Strength PRs</h1>
                      <div className='grid w-full grid-cols-12 gap-4'>
                        <div className='grid xl:col-span-5 col-span-12'>
                          <div className='flex items-start gap-2'>
                            <div className='flex items-center flex-col gap-1'>
                              <div className='flex items-start h-32 w-32 bg-[#252525] rounded-xl overflow-hidden'>
                                <img
                                  src={FrontBody}
                                  className='object-contain w-full h-full'
                                />
                              </div>
                              <h1 className='text-lg font-semibold'>Fronte</h1>
                            </div>
                            <div className='flex items-center flex-col gap-1'>
                              <div className='flex items-start h-32 w-32 bg-[#252525] rounded-xl overflow-hidden'>
                                <img
                                  src={BackBody}
                                  className='object-contain w-full h-full'
                                />
                              </div>
                              <h1 className='text-lg font-semibold'>
                                Indietro
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className='grid col-span-12 xl:col-span-7 bg-[#252525] w-full py-4 px-4 h-full rounded-xl'>
                          <div className='flex gap-4 items-center justify-center'>
                            {data.map((item) => (
                              <div
                                key={item.label}
                                className='flex flex-col items-center text-white'
                              >
                                <span className='mb-2 text-sm'>
                                  {item.label}
                                </span>

                                <div className='w-12 flex items-end justify-center'>
                                  <div
                                    className={`${item.color} ${item.height} w-10 rounded-full`}
                                  ></div>
                                </div>

                                <span className='mt-2 text-sm'>
                                  ({item.weight})
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start sm:flex-nowrap flex-wrap justify-between w-full gap-4'>
                      {/* AI Analysis */}
                      <div className='bg-[#FF3B30] w-full text-white rounded-xl px-3 py-4'>
                        <h4 className='font-semibold text-lg'>Analisi AI</h4>
                        <p className='text-sm opacity-90'>
                          ~0.5 kg in 6 settimane, grasso → 3%
                        </p>
                      </div>
                      <div className=' flex items-end w-full flex-col gap-1'>
                        <div className='bg-[#1a1a1a] w-full text-white rounded-xl px-3 py-4 flex flex-col'>
                          <h4 className='font-semibold text-lg'>
                            Nota dell’allenatore
                          </h4>
                          <p className='text-sm text-[#ffffff83]'>
                            Ottimi progressi, continua con la costanza!
                          </p>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                          <h1 className='text-sm font-semibold'>
                            Note dell'allenatore
                          </h1>
                          <button className='mt-3 text-[#ddd] text-sm hover:text-white duration-200'>
                            + Aggiungi note
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Check-in' && (
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                    {/* CARD 1 */}
                    <div className='bg-[#1a1a1a] rounded-2xl p-4 w-full border border-gray-700 relative'>
                      {/* Date */}
                      <h2 className='text-white text-sm mb-2'>
                        Sep 20, 2025 · 9:00 AM
                      </h2>

                      {/* Status Badge */}
                      <span className='absolute right-4 top-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full'>
                        Revisionato
                      </span>
                      <div className='flex mt-3 items-start gap-2'>
                        <div className='flex items-center flex-col gap-1'>
                          <div className='flex items-start sm:h-32 h-20 w-20 sm:w-32 bg-[#252525] rounded-xl overflow-hidden'>
                            <img
                              src={FrontBody}
                              className='object-contain w-full h-full'
                            />
                          </div>
                          <h1 className='text-lg font-semibold'>Fronte</h1>
                        </div>
                        <div className='flex items-center flex-col gap-1'>
                          <div className='flex items-start sm:h-32 h-20 w-20 sm:w-32 bg-[#252525] rounded-xl overflow-hidden'>
                            <img
                              src={BackBody}
                              className='object-contain w-full h-full'
                            />
                          </div>
                          <h1 className='text-lg font-semibold'>Indietro</h1>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className='mt-4 text-gray-300 text-sm space-y-1'>
                        <p>
                          Peso: <span className='text-white'>60kg</span>
                        </p>
                        <p>
                          Grasso: <span className='text-white'>22.5%</span>
                        </p>
                        <p>
                          Misure: <span className='text-white'>-1 inch</span>
                        </p>
                      </div>

                      {/* Orange Notes Box */}
                      <div className='mt-4 bg-[#ff5f2e] rounded-xl text-white p-3'>
                        <h3 className='font-semibold'>Analisi IA</h3>
                        <p className='text-sm mt-1'>
                          Ottimo Progresso! Continua così. Valuta di aumentare
                          l'apporto proteico.
                        </p>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className='bg-[#1a1a1a] rounded-2xl p-4 w-full border border-gray-700 relative'>
                      <div className='flex items-center w-full justify-between sm:flex-nowrap flex-wrap'>
                        {/* Date */}
                        <h2 className='text-white text-sm mb-2'>
                          Sep 13, 2025 · 9:00 AM
                        </h2>

                        {/* Status Badge */}
                        <span className='absolute right-4 top-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full'>
                          In attesa di
                        </span>
                      </div>

                      <div className='flex mt-3 items-start gap-2'>
                        <div className='flex items-center flex-col gap-1'>
                          <div className='flex items-start sm:h-32 h-20 w-20 sm:w-32 bg-[#252525] rounded-xl overflow-hidden'>
                            <img
                              src={FrontBody}
                              className='object-contain w-full h-full'
                            />
                          </div>
                          <h1 className='text-lg font-semibold'>Fronte</h1>
                        </div>
                        <div className='flex items-center flex-col gap-1'>
                          <div className='flex items-start sm:h-32 h-20 w-20 sm:w-32 bg-[#252525] rounded-xl overflow-hidden'>
                            <img
                              src={BackBody}
                              className='object-contain w-full h-full'
                            />
                          </div>
                          <h1 className='text-lg font-semibold'>Indietro</h1>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className='mt-4 text-gray-300 text-sm space-y-1'>
                        <p>
                          Peso: <span className='text-white'>60kg</span>
                        </p>
                        <p>
                          Grasso: <span className='text-white'>22.5%</span>
                        </p>
                        <p>
                          Misure: <span className='text-white'>-1 inch</span>
                        </p>
                      </div>

                      {/* Orange Notes Box */}
                      <div className='mt-4 bg-[#ff5f2e] rounded-xl text-white p-3'>
                        <h3 className='font-semibold'>AI Notes</h3>
                        <p className='text-sm mt-1'>
                          Peso stabile: concentrati sulla tecnica per gli squat.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'Piani' && (
                  <div className='flex items-center flex-col gap-5'>
                    <div className='grid md:grid-cols-2 w-full lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                      {/* CARD 1 - Active Plan */}
                      <div className='bg-[#1a1a1a] w-full border border-gray-700 rounded-2xl p-5 text-white relative'>
                        <div className='flex justify-between items-center'>
                          <h2 className='text-lg font-semibold'>
                            Fase 1 dell'ipertrofia
                          </h2>

                          <span className='bg-green-600 text-white text-xs px-3 py-1 rounded-full'>
                            Attivo
                          </span>
                        </div>

                        <p className='text-gray-400 text-xs mt-1'>
                          Creato: 19 gennaio 2025 · Durata: 6 settimane
                        </p>

                        <h3 className='mt-4 text-sm font-medium'>
                          Allenamenti:
                        </h3>

                        <ul className='mt-2 space-y-2 text-[13px] text-gray-300'>
                          {[
                            'Giorno 1: Corpo intero (squat, panca, rematore)',
                            'Giorno 2: Parte inferiore del corpo (squat su terra, affondi)',
                            'Giorno 3: Parte superiore del corpo (DIP, trazioni)',
                            'Giorno 4: Spinta (petto, spalle, tricipiti)',
                            'Giorno 5: Rotazione (obliqui, bicipiti)',
                            'Giorno 6: Parte inferiore (focalizzazione su gambe e glutei)',
                          ].map((item, i) => (
                            <li key={i} className='flex items-start gap-2'>
                              <span className='text-green-500 mt-[2px]'>
                                <AiOutlineCheckCircle size={16} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CARD 2 - Past Plan */}
                      <div className='bg-[#1a1a1a] w-full border border-gray-700 rounded-2xl p-5 text-white relative'>
                        <div className='flex justify-between items-center'>
                          <h2 className='text-lg font-semibold'>
                            Piano pasto ridotto
                          </h2>

                          <span className='bg-gray-500 text-white text-xs px-3 py-1 rounded-full'>
                            Passato
                          </span>
                        </div>

                        <p className='text-gray-400 text-xs mt-1'>
                          Creato: 15 febbraio 2025 · Durata: 4 settimane
                        </p>

                        <h3 className='mt-4 text-sm font-medium'>Meal:</h3>

                        <ul className='mt-2 space-y-2 text-[13px] text-gray-300'>
                          {[
                            'Colaz.: 1 tazza avena in acqua + 5/6 mandorle',
                            'Pranzo: petto di pollo alla griglia (150–200 g)',
                            'Cena: filetto di salmone (150–200 g) alla griglia o al forno',
                          ].map((item, i) => (
                            <li key={i} className='flex items-start gap-2'>
                              <span className='text-green-500 mt-[2px]'>
                                <AiOutlineCheckCircle size={16} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button className='py-3 px-10 rounded-full bg-white text-black text-sm'>
                      + Nuovo piano
                    </button>
                  </div>
                )}

                {activeTab === 'Documenti' && (
                  <div className='flex items-center flex-col gap-5'>
                    <div className='flex items-start gap-2 w-full'>
                      <div className='bg-[#1a1a1a] w-full border border-gray-700 rounded-2xl p-3'>
                        <div className='flex items-start flex-col gap-5'>
                          <div className='flex items-start gap-2'>
                            <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                              <img
                                src={Profile}
                                className='w-16 h-16 rounded-full object-cover'
                              />
                            </div>
                            <div className='flex flex-col gap-1'>
                              <h1 className='text-xl font-semibold'>
                                Referto medico
                              </h1>
                              <p className='text-sm text-[#FFFFFFB2] font-normal'>
                                Dec 15, 2025
                              </p>
                            </div>
                          </div>
                          <div className='flex items-center gap-2 w-full justify-between'>
                            <button className='py-3 bg-[#656565] px-10 rounded-full text-sm'>
                              Medico
                            </button>
                            <button className='py-4 px-4 bg-green-500 text-white rounded-full text-lg'>
                              <IoCloudDownloadOutline />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className='py-3 px-10 rounded-full bg-white text-black text-sm'>
                      + Carica documenti
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Atleti;
