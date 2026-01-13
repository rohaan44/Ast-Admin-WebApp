import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import bg_image from '@/assets/bg-image.jpg';
import { TbLockPassword } from 'react-icons/tb';

const CreateNewPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login');
  };

  return (
    <section className='relative w-full h-screen py-10 px-6 md:px-12'>
      <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div
        className='relative w-full h-full py-14 bg-cover bg-center shadow-xl rounded-2xl flex items-center justify-center overflow-hidden'
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className='static z-10 px-4 flex items-start flex-col gap-4'>
          <div className='flex flex-col gap-5 items-start mb-4'>
            <img src={Logo} alt='AST Logo' className='h-12 w-auto' />
            <div className='flex items-start flex-col gap-2'>
              <h1 className='text-2xl text-primary font-semibold text-white'>
                Imposta una nuova password.
              </h1>
              <p className='text-gray-300'>
                Crea una nuova password. Assicurati che sia diversa da quelle
                precedenti per motivi di sicurezza.
              </p>
            </div>
          </div>
          <form className='flex flex-col gap-4 w-[100%]'>
            <div className='flex flex-col w-full'>
              <div className='bg-[#151515] border-1 border-[#252525] flex items-center justify-between py-4 rounded-lg px-4'>
                <div className='flex items-center gap-3 w-full'>
                  <span className='text-2xl'>
                    <TbLockPassword />
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    className='bg-transparent w-full h-full border-0 outline-0'
                    placeholder='New Password'
                  />
                </div>
                <span
                  className='text-xl cursor-pointer'
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className='flex flex-col w-full'>
              <div className='bg-[#151515] border-1 border-[#252525] flex items-center justify-between py-4 rounded-lg px-4'>
                <div className='flex items-center gap-3 w-full'>
                  <span className='text-2xl'>
                    <TbLockPassword />
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    className='bg-transparent w-full h-full border-0 outline-0'
                    placeholder='Conform Password'
                  />
                </div>

                <span
                  className='text-xl cursor-pointer'
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className={`w-full py-4 text-lg rounded-lg mt-4 transition-all`}
            >
              Continue
            </button>

            <div className='flex flex-col mt-2'>
              <div className='flex items-start gap-2 text-sm'>
                <input type='checkbox' className='mt-1' />
                <p>
                  Confermo di aver letto e accettato i{' '}
                  <span className='text-red-500'>Termini di utilizzo</span> e l’{' '}
                  <span className='text-red-500'>
                    Informativa sulla privacy
                  </span>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className='absolute inset-0 bg-black/60'></div>
      </div>
    </section>
  );
};

export default CreateNewPassword;
