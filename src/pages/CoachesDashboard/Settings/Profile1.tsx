import React, { useState } from 'react';
import Profile3 from '@/assets/Profile3.png';
import SettingImage from '@/assets/SettingImage.png';
import { IoCameraOutline } from 'react-icons/io5';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';

const Profile1 = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <section className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='w-full lg:w-[25rem] flex-shrink-0 flex flex-col items-start gap-3'>
          <div className='flex items-center justify-between mb-8 w-full gap-4'>
            <span
              onClick={() => navigate(-1)}
              className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
            >
              <MdOutlineArrowBack />
            </span>
            <h1 className='text-sm sm:text-xl text-white font-bold'>
              Informazioni sull'allenatore
            </h1>
          </div>
          <section className='w-full  flex flex-col items-center justify-center'>
            <div className='flex w-full border-b pb-4 border-[#171717] items-cente flex-col items-center gap-2 justify-center'>
              <div className='w-28 h-28 rounded-full overflow-hidden border-4 border-[#171717] cursor-pointer'>
                <img
                  src={Profile3}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex items-center gap-1 flex-col'>
                <h1 className='text-2xl font-semibold'>Timothy Doe</h1>
                <div className='flex items-center gap-2'>
                  <span className='py-1 px-5 text-xs bg-[#34C7591A] border border-[#34C7591A] rounded-full'>
                    Cerified
                  </span>
                  <p className='text-sm font-semibold text-[#FFFFFFB2]'>
                    ID: NSCA-CPT-12345
                  </p>
                </div>
                <p className='text-sm font-semibold text-[#FFFFFFB2]'>
                  Expires: 12/25
                </p>
              </div>
            </div>

            <div className='flex items-start my-5 flex-col gap-4 w-full'>
              <div className='flex items-start rounded-md bg-[#1E1E1E] py-4 px-4 flex-col gap-1'>
                <h1 className='text-xl font-semibold text-white'>Su di me</h1>
                <p className='text-sm font-normal text-[#FFFFFFB2]'>
                  Allenatore esperto specializzato in forza e condizionamento,
                  con la passione di aiutare gli atleti a raggiungere il loro
                  pieno potenziale. Credo in un approccio olistico al fitness,
                  che combina allenamento personalizzato, corretta alimentazione
                  e resilienza mentale per ottenere risultati sostenibili.
                </p>
              </div>

              <div className='flex items-start w-full rounded-md bg-[#1E1E1E] py-4 px-4 flex-col gap-1'>
                <h1 className='text-xl font-semibold text-white'>
                  Certificazioni
                </h1>
                <ul className='flex items-start mt-4 flex-col gap-4'>
                  <li className='flex items-center gap-2'>
                    <span className='border text-xs border-[#34C759] text-[#34C759] rounded-full p-1'>
                      <MdOutlineDone />
                    </span>
                    <p className='text-sm font-normal text-[#FFFFFFB2]'>
                      Certificazione A.S.T.
                    </p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='border text-xs border-[#34C759] text-[#34C759] rounded-full p-1'>
                      <MdOutlineDone />
                    </span>
                    <p className='text-sm font-normal text-[#FFFFFFB2]'>
                      Specialista in nutrizione
                    </p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='border text-xs border-[#34C759] text-[#34C759] rounded-full p-1'>
                      <MdOutlineDone />
                    </span>
                    <p className='text-sm font-normal text-[#FFFFFFB2]'>
                      Rianimazione cardiopolmonare e primo soccorso
                    </p>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className='flex items-start w-full rounded-md bg-[#1E1E1E] py-4 px-4 flex-col gap-4'>
                <div className='flex items-center w-full flex-col justify-center gap-2'>
                  <h1 className='text-xl font-semibold text-white'>
                    Collegato all'Accademia A.S.T.™
                  </h1>
                  <p className='text-sm font-normal text-[#FFFFFFB2]'>
                    La tua certificazione è valida fino al 25/12.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/athleta/settings/profile-2')}
                  className='w-full border-0 rounded-full py-4 px-4 text-sm text-black bg-white outline-0'
                >
                  Rinnovare la Monthly Fees
                </button>
              </div>

              <div className='flex items-center justify-center w-full flex-col gap-2'>
                <button className='w-full border-0 rounded-full py-4 px-4 text-sm text-white bg-[#EB5725] outline-0'>
                  Modifica informazioni
                </button>
                <button className='w-full rounded-full py-4 px-4 text-sm text-white bg-transparent border border-[#1E1E1E] outline-0'>
                  Carica documenti
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-28 h-28'>
              <img src={SettingImage} className='w-full h-full object-cover' />
            </div>
            <h1 className='text-3xl font-semibold text-white'>Impostazioni</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile1;
