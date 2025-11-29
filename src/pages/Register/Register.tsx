import React, { useEffect, useState } from 'react';
import Logo from '@/assets/Logo.png';
import Icon1 from '@/assets/icon1.png';
import Icon2 from '@/assets/icon2.png';
import Icon3 from '@/assets/icon3.png';
import register from '@/assets/register.jpg';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null); // Track selected user type
  const userTypes = [
    {
      title: 'Atleta',
      desc: 'Ottieni piani di allenamento e nutrizione su misura per te.',
      icon: Icon1,
      url: '/singin',
      bg: 'bg-gradient-to-r from-[#7a0000] to-[#b10000]',
      border: 'border border-[#c32d2d]',
    },
    {
      title: 'Allenatore',
      desc: 'Gestisci gli atleti e sviluppa la tua carriera da coach.',
      icon: Icon2,
      url: '/singin',
      bg: 'bg-gradient-to-r from-[#5a3a00] to-[#c89932]',
      border: 'border border-[#d1a447]',
    },
    {
      title: 'Tutor',
      desc: 'Eroga corsi e certifica nuovi coach.',
      icon: Icon3,
      url: '/singin',
      bg: 'bg-gradient-to-r from-[#003b36] to-[#0f6d58]',
      border: 'border border-[#1a8f6f]',
    },
  ];

  const handleContinue = () => {
    if (selectedType) {
      localStorage.setItem('userType', selectedType.title);
      navigate(selectedType.url);
    } else {
      alert('Per favore seleziona un piano');
    }
  };

  useEffect(() => {
    const type = localStorage.getItem('userType');
    if (type) {
      if (type === 'Atleta') navigate('/athleta-user-dashboard');
      else if (type === 'Allenatore') navigate('/coaches-user-dashboard');
      else navigate('#');
    }
  }, []);

  return (
    <section className='relative w-full h-full py-10 px-6 md:px-12'>
      {/* Top/Bottom Glows */}
      <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>

      <div className='relative bg-[#121212] shadow-xl px-2 sm:px-6 py-8 rounded-2xl gap-5 md:gap-10 grid grid-cols-1 lg:grid-cols-2 h-full z-10'>
        {/* LEFT */}
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-5 items-start mb-4'>
            <a href='#home'>
              <img src={Logo} alt='AST Logo' className='h-12 w-auto' />
            </a>

            <div className='flex items-start mb-6 flex-col gap-2'>
              <h1 className='text-2xl text-primary font-semibold text-white'>
                Dicci chi sei per continuare.
              </h1>
              <p className='text-gray-300'>
                Seleziona l’opzione che ti descrive meglio. Questo
                personalizzerà la tua esperienza.
              </p>
            </div>
          </div>

          <ul className='flex flex-col gap-4'>
            {userTypes.map((item, i) => {
              const isSelected = selectedType?.title === item.title;
              return (
                <li
                  key={i}
                  onClick={() => setSelectedType(item)}
                  className={`${item.bg} ${
                    isSelected ? item.border : 'border-transparent'
                  } relative overflow-hidden rounded-2xl px-4 py-2 flex justify-between gap-2 items-center cursor-pointer transition-all duration-200`}
                >
                  <div className='absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl pointer-events-none'></div>

                  <div className='flex items-start gap-1 flex-col static z-10'>
                    <h3 className='text-2xl font-semibold'>{item.title}</h3>
                    <p className='text-gray-200 text-[18px]'>{item.desc}</p>
                  </div>

                  <div className='relative xsm:h-[100px] h-[50px] xsm:w-[100px] w-[50px] flex items-center justify-center z-10'>
                    <img
                      src={item.icon}
                      className='h-full w-full object-contain z-10'
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className='relative w-full flex items-center mb-6 mt-12'>
            <div className='w-full h-[1px] bg-gray-700'></div>
            <div className='absolute left-1/2 -translate-x-1/2 bg-[#121212] p-2 rounded-full border border-gray-700'>
              <div className='h-3 w-3 bg-gray-500 rounded-full'></div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className='bg-white text-black font-semibold py-3 w-full rounded-lg hover:bg-gray-200 transition'
          >
            Continuare
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className='hidden lg:block w-full h-full'>
          <img
            src={register}
            alt=''
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
