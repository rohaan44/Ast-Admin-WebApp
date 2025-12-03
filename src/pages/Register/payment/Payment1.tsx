import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import { IoMdClose } from 'react-icons/io';
import { LiaDumbbellSolid } from 'react-icons/lia';

const Payment1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/payment2');
  };
  return (
    <div className='h-full w-full flex items-center justify-center '>
      <div className='w-full h-full bg-black'>
        {/* Top Section */}
        <div className='relative pt-6 px-8 flex justify-between items-center'>
          <img src={Logo} alt='AST Logo' className='h-10' />

          <div className='w-10'></div>
          <div className='top-4 text-white/60 cursor-pointer text-2xl'>
            <span>
              <IoMdClose />
            </span>
          </div>
        </div>

        <div className='mt-5 bg-black rounded-t-3xl flex flex-col justify-between items-center p-10 relative'>
          <div className='min-h-[500px] w-2/6flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <h1 className='text-3xl font-bold mb-2'>Benvenuto in A.S.T.®</h1>
              <p className='text-gray-400 text-center mb-10'>
                Il tuo primo piano ti sta aspettando. Mancano solo un passo.
              </p>
            </div>

            <div>
              <ul className='flex flex-col gap-4 mb-16 items-start'>
                <li className='flex items-center gap-4 w-full'>
                  <span className='py-3 px-3 rounded-xl text-3xl text-red-600 border border-[#231F20]'>
                    <LiaDumbbellSolid />
                  </span>
                  <div className='flex flex-col items-start'>
                    <h1 className='text-lg font-semibold'>
                      Allenati in modo più intelligente
                    </h1>
                    <p className='text-sm  text-gray-400'>
                      Piani basati su AI e monitoraggio settimanale dei
                      progressi.
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4 w-full'>
                  <span className='py-3 px-3 rounded-xl text-3xl text-red-600 border border-[#231F20]'>
                    <LiaDumbbellSolid />
                  </span>
                  <div className='flex flex-col items-start'>
                    <h1 className='text-lg font-semibold'>
                      Impara e certificati
                    </h1>
                    <p className='text-sm  text-gray-400'>
                      Accademia online con corsi, esami e badge digitali.
                    </p>
                  </div>
                </li>
                <li className='flex items-center gap-4 w-full'>
                  <span className='py-3 px-3 rounded-xl text-3xl text-red-600 border border-[#231F20]'>
                    <LiaDumbbellSolid />
                  </span>
                  <div className='flex flex-col items-start'>
                    <h1 className='text-lg font-semibold'>Gestisci e cresci</h1>
                    <p className='text-sm  text-gray-400'>
                      Pagamenti sicuri, royalties e approfondimenti sulle
                      performance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Button */}
            <button
              onClick={handleNext}
              className='mt-4 w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all'
            >
              Avanti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment1;
