import React, { useState } from 'react';
import { CiMail, CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Profile from '@/assets/ProfileImage1.png';
import NoChat from '@/assets/Chat.png';
import Profile3 from '@/assets/Profile3.png';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { LuPlus } from 'react-icons/lu';

const Atleti = () => {
  const navigate = useNavigate();

  /* ---------------- USERS DATA (8 Profiles) ---------------- */
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

  /* ---------------- STATES ---------------- */
  const [filter, setFilter] = useState('Tutto');
  const [activeUser, setActiveUser] = useState(null); // initially none selected
  const [activeTab, setActiveTab] = useState('Panoramica');

  const filteredUsers = users.filter((u) =>
    filter === 'Tutto' ? u : u.status === filter
  );

  return (
    <section className='w-full md:my-2 my-20 p-3'>
      {/* ===== HEADER ===== */}
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

      {/* ===== MAIN GRID ===== */}
      <div className='grid grid-cols-10 gap-6 mt-6'>
        {/* LEFT - USERS LIST */}
        <div className='col-span-3'>
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

        {/* RIGHT SIDE DETAILS PANEL */}
        <div className='col-span-7 py-6 px-16'>
          {/* -------- If No User Selected -------- */}
          {!activeUser && (
            <div className='flex flex-col items-center justify-center h-full text-gray-400 gap-3'>
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
              <div className='flex items-center flex-col justify-center w-full py-8'>
                <div className='flex border-b pb-2 border-[#1E1E1E] gap-5 items-center'>
                  <div className='flex items-center gap-4 rounded-full border border-[#252525]'>
                    <img
                      src={Profile}
                      className='w-28 h-28 rounded-full object-cover'
                    />
                  </div>

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
              <div className='flex gap-6 items-center justify-center pb-4 border-b border-[#222]'>
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
                  <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-4'>
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

                {activeTab === 'Progressi' && <h1></h1>}

                {activeTab === 'Check-in' && <h1></h1>}

                {activeTab === 'Piani' && <h1></h1>}

                {activeTab === 'Documenti' && <h1></h1>}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Atleti;
