import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import bg_image from '@/assets/bg-image.jpg';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/forgotpassword-otp-verification');
  };

  return (
    <section className='relative w-full h-screen py-5 px-6 '>
      <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div
        className='relative w-full h-full py-8 bg-cover bg-center shadow-xl rounded-2xl flex items-center justify-center overflow-hidden'
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className='static z-10 px-4 flex items-start flex-col gap-4'>
          <div className='flex flex-col gap-5 items-start mb-4'>
            <img src={Logo} alt='AST Logo' className='h-12 w-auto' />
            <div className='flex items-start flex-col gap-2'>
              <h1 className='text-2xl text-primary font-semibold text-white'>
                Password dimenticata .
              </h1>
              <p className='text-gray-300'>
                Inserisci la tua email per reimpostare la password.
              </p>
            </div>
          </div>
          <form className='flex flex-col gap-4 w-[100%]'>
            <div className='flex flex-col w-full'>
              <div className='bg-[#151515] border-1 border-[#252525] flex items-center gap-4 py-4 rounded-lg px-4'>
                <span className='text-2xl'>
                  <MdEmail />
                </span>
                <input
                  type='email'
                  className='bg-transparent w-full h-full border-0 outline-0'
                  placeholder='Indirizzo e-mail'
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className={`w-full py-4 text-lg rounded-lg mt-4 transition-all`}
            >
              Reimpostare la password
            </button>
          </form>
        </div>

        <div className='absolute inset-0 bg-black/60'></div>
      </div>
    </section>
  );
};

export default ForgotPassword;
