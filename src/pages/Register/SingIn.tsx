import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import bg_image from '@/assets/bg-image.jpg';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';

const SignupPage = () => {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/otp-verification');
  };

  return (
    <section className='relative w-full h-full py-10 px-6 md:px-12'>
      {/* Top Red Glow */}
      <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>

      {/* Bottom Red Glow */}
      <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>

      <div
        className='relative w-full h-full py-14 bg-cover bg-center shadow-xl rounded-2xl flex items-center justify-center overflow-hidden'
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className='static z-10 px-4 flex items-start flex-col gap-4'>
          <div className='flex flex-col gap-5 items-start mb-4'>
            <a href='#home'>
              <img src={Logo} alt='AST Logo' className='h-12 w-auto' />
            </a>

            <div className='flex items-start mb-6 flex-col gap-2'>
              <h1 className='text-2xl text-primary font-semibold text-white'>
                Dicci chi sei per continuare.
              </h1>
              <p className='text-gray-300 w-2/3'>
                Seleziona l’opzione che ti descrive meglio. Questo
                personalizzerà la tua esperienza.
              </p>
            </div>
          </div>
          <form className='flex flex-col gap-4 w-[100%]'>
            <div className='flex flex-col w-full'>
              <div className='bg-[#151515] border-1 border-[#252525] flex items-center gap-4 py-4 rounded-lg px-4'>
                <span className='text-2xl'>
                  <IoMdPerson />
                </span>
                <input
                  type='text'
                  className='bg-transparent w-full h-full border-0 outline-0'
                  placeholder='Nome e cognome'
                />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <div className='bg-[#151515] border-1 border-[#252525] flex items-center gap-4 py-4 rounded-lg px-4'>
                <span className='text-2xl'>
                  <MdEmail />
                </span>
                <input
                  type='email'
                  className='bg-transparent w-full h-full border-0 outline-0'
                  placeholder='Email'
                />
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
                    placeholder='Password'
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
              className={`w-full py-4 text-lg rounded-lg mt-4 transition-all
 bg-gray-500/40 text-gray-400
  `}
            >
              Continue
            </button>

            <div className='relative w-full flex items-center my-4'>
              <div className='w-full h-[1px] bg-gray-700'></div>
              <div className='absolute left-1/2 -translate-x-1/2 bg-[#121212] p-2 rounded-full border border-gray-700'>
                <div className='h-3 w-3 bg-gray-500 rounded-full'></div>
              </div>
            </div>

            {/* Google & Apple Buttons */}
            <div className='flex flex-col gap-4'>
              <button className='flex items-center justify-center gap-2 bg-[#151515] border border-[#252525] rounded-lg py-4 transition'>
                <FcGoogle size={24} />
                Sign up with Google
              </button>
              <button className='flex items-center justify-center gap-2 bg-[#151515] border border-[#252525] rounded-lg py-4 transition'>
                <AiFillApple size={24} />
                Sign up with Apple
              </button>
            </div>

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

export default SignupPage;
