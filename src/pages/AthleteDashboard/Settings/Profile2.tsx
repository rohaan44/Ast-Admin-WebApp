import React, { useState } from 'react';
import Profile3 from '@/assets/Profile3.png';
import SettingImage from '@/assets/SettingImage.png';
import { IoCameraOutline } from 'react-icons/io5';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import { FaApplePay, FaGooglePay, FaPaypal, FaStripe } from 'react-icons/fa';

const Profile2 = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <section className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='w-full lg:w-[25rem] flex-shrink-0 flex flex-col items-start gap-3'>
          <div className='flex items-center w-full justify-between'>
            <span
              onClick={() => navigate(-1)}
              className='bg-[#171717] p-2 text-xl rounded-full cursor-pointer'
            >
              <MdOutlineArrowBack />
            </span>
            <h1 className='text-sm sm:text-lg font-semibold'>
              Rinnovare la certificazione
            </h1>
          </div>
          <section className='w-full my-6  flex flex-col gap-4 items-center justify-center'>
            <div className='bg-[#171717] w-full rounded-xl p-4 border border-[#212121] space-y-2'>
              <div className='flex items-center justify-between w-full'>
                <p className='text-base font-semibold'>
                  Allenatore di forza certificato
                </p>
                <span className='bg-green-700 text-xs px-3 py-1 rounded-full font-medium'>
                  Attivo
                </span>
              </div>

              <div className='flex flex-col gap-1 items-start'>
                <span className='text-xs text-[#A9A9A9]'>
                  Liv: MSC-CPT-0328
                </span>
                <span className='text-xs text-[#A9A9A9]'>Scade il: 29/02</span>
              </div>
              <div className='w-full bg-[#656565] h-1 rounded-full overflow-hidden'>
                <div className='h-full bg-[#F97316] w-[70%]'></div>{' '}
              </div>
            </div>

            <div className='bg-[#171717] w-full rounded-xl p-4 border border-[#212121] space-y-4'>
              <h2 className='font-semibold text-sm tracking-wide'>
                Fasi di rinnovo
              </h2>
              {[
                {
                  title: 'Modulo di formazione completato',
                  text: 'Guarda tutte le video lezioni',
                  status: 'Iniziò',
                },
                {
                  title: 'Supera il quiz',
                  text: "Punteggio minimo dell'80%",
                  status: 'Iniziò',
                },
                {
                  title: 'Carica caso di studio',
                  text: 'Dimostra le tue capacità di coaching',
                  status: 'Caricamento',
                },
                {
                  title: 'Paga la quota di rinnovo',
                  text: 'Total: $199',
                  status: 'Pago',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between text-sm py-2 border-b border-[#222222] last:border-none'
                >
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-[#111111] border border-[#2a2a2a] rounded-full flex items-center justify-center'>
                      <span className='text-sm font-bold'>D</span>
                    </div>

                    <div className='flex items-start flex-col gap-1'>
                      <h1 className='text-sm font-semibold'> {item.title}</h1>
                      <p className='text-xs font-normal'>{item.text}</p>
                    </div>
                  </div>

                  <span
                    className={`text-xs ${
                      item.status === 'Pago'
                        ? 'text-green-400'
                        : item.status === 'Caricamento'
                        ? 'text-yellow-400'
                        : 'text-blue-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className='bg-[#171717] w-full rounded-xl p-4 border border-[#212121] space-y-4'>
              <h2 className='text-lg font-semibold'>Tassa di rinnovo</h2>

              <div className='flex justify-between items-center'>
                <div className='flex items-start flex-col gap-1'>
                  <span className='text-xl font-semibold'>$249 / mensile</span>
                  <p className='text-xs text-gray-400'>
                    Metodi di pagamento accettati
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <FaApplePay
                    size={30}
                    className='text-black dark:text-white'
                  />
                  <FaGooglePay size={30} className='text-[#4285F4]' />{' '}
                  <FaPaypal size={30} className='text-[#003087]' />{' '}
                  <FaStripe size={30} className='text-[#635BFF]' />{' '}
                </div>
              </div>
            </div>

            <div className='w-full flex items-start mt-6 flex-col gap-2'>
              <button
                onClick={() => {
                  navigate('/license-renewal');
                }}
                className='w-full bg-white text-black font-semibold py-3 rounded-full'
              >
                Rinnova ora
              </button>
              <button className='w-full text-white font-semibold py-3 rounded-full border border-[#333]'>
                Salva progressi
              </button>
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

export default Profile2;
