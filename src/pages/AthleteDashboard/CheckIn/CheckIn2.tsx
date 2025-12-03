import React, { useState } from 'react';
import CheckInIcon from '@/assets/CheckInIcon.png';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BodyMeasurement = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    torace: '102 cm',
    vita: '85 cm',
    fianchi: '98 cm',
    braccia: '36 cm',
    cosce: '54 cm',
  });

  const isFormComplete = Object.values(form).every(
    (value) => value.trim() !== ''
  );

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <span
          onClick={() => navigate(-1)}
          className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
        >
          <MdOutlineArrowBack />
        </span>
      </div>

      <section className='flex items-start justify-start gap-8'>
        <div className='h-full w-full lg:w-[25rem] flex-shrink-0'>
          <div className='mt-5 bg-[#171717] w-full rounded-md min-h-full flex flex-col justify-between items-center pb-10 py-6 px-4'>
            <h1 className='text-white w-full text-lg md:text-2xl font-bold text-center'>
              Qual è la tua misurazione corporea?
            </h1>
            <div className='w-full flex flex-col gap-3 mt-6 text-white'>
              <input
                type='text'
                placeholder='Torace'
                value={form.torace}
                onChange={(e) => setForm({ ...form, torace: e.target.value })}
                className='w-full px-4 py-3 bg-[#0e0e0e] rounded-md outline-none text-sm placeholder-gray-400'
              />

              <input
                type='text'
                placeholder='Circonferenza vita'
                value={form.vita}
                onChange={(e) => setForm({ ...form, vita: e.target.value })}
                className='w-full px-4 py-3 bg-[#0e0e0e] rounded-md outline-none text-sm placeholder-gray-400'
              />

              <input
                type='text'
                placeholder='Fianchi'
                value={form.fianchi}
                onChange={(e) => setForm({ ...form, fianchi: e.target.value })}
                className='w-full px-4 py-3 bg-[#0e0e0e] rounded-md outline-none text-sm placeholder-gray-400'
              />

              <input
                type='text'
                placeholder='Braccia'
                value={form.braccia}
                onChange={(e) => setForm({ ...form, braccia: e.target.value })}
                className='w-full px-4 py-3 bg-[#0e0e0e] rounded-md outline-none text-sm placeholder-gray-400'
              />

              <input
                type='text'
                placeholder='Cosce'
                value={form.cosce}
                onChange={(e) => setForm({ ...form, cosce: e.target.value })}
                className='w-full px-4 py-3 bg-[#0e0e0e] rounded-md outline-none text-sm placeholder-gray-400'
              />
            </div>

            <div className='w-full bg-[#0f0f0f] border border-[#2d2d2d] rounded-md p-4 mt-6'>
              <p className='text-white font-semibold text-sm'>Foto Check-in</p>
              <p className='text-gray-500 text-xs'>
                Inviare foto (fronte, lato, retro)
              </p>

              <div className='flex flex-col gap-3 mt-4'>
                {[1, 2, 3].map((item, i) => (
                  <div
                    key={i}
                    className='w-full flex items-center gap-4 border border-[#343434] rounded-md p-3'
                  >
                    <button className='p-3 bg-[#1e1e1e] rounded-2xl text-[#454545] text-sm'>
                      Foto
                    </button>
                    <div className='flex flex-col items-start'>
                      <h1 className='text-xs sm:text-lg font-semibold'>
                        AGT-2025-00{i + 812}
                      </h1>
                      <span className='text-[#454545] text-xs'>Foto.jpg</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate('/athleta-checkin-3')}
              disabled={!isFormComplete}
              className={`mt-8 w-full rounded-full py-3 text-sm transition ${
                isFormComplete
                  ? 'bg-red-600 text-white'
                  : 'bg-[#202020] text-gray-400 cursor-not-allowed'
              }`}
            >
              Avanti
            </button>
          </div>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center my-5'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-24 h-24'>
              <img
                src={CheckInIcon}
                className='w-full h-full object-cover'
                alt='Setting Icon'
              />
            </div>
            <h1 className='text-3xl font-semibold'>Check-In</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BodyMeasurement;
