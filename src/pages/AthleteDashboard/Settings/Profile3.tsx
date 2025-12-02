import React, { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SettingImage from '@/assets/SettingImage.png';
import Image1 from '@/assets/GoogleFit.png';
import Image2 from '@/assets/AppleHub.png';
import Image3 from '@/assets/MyFitnessPal.png';
import Image4 from '@/assets/Strava.png';

const Profile3 = () => {
  const navigate = useNavigate();

  const [integrations, setIntegrations] = useState([
    {
      name: 'Google Fit',
      status: 'Collegata',
      connected: true,
      icon: Image1,
    },
    {
      name: 'Apple Health',
      status: 'Non connesso',
      connected: false,
      icon: Image2,
    },
    {
      name: 'MyFitnessPal',
      status: 'Non connesso',
      connected: false,
      icon: Image3,
    },
    {
      name: 'Strava',
      status: 'Collegata',
      connected: true,
      icon: Image4,
    },
  ]);

  const handleToggle = (index: number) => {
    setIntegrations((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              connected: !item.connected,
              status: !item.connected ? 'Collegata' : 'Non connesso',
            }
          : item
      )
    );
  };

  const handleSave = () => {
    alert('Impostazioni salvate con successo!');
    setTimeout(() => {
      navigate('/athleta/settings');
    }, 2500);
  };

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
            <h1 className='text-sm sm:text-lg font-semibold'>Integrazioni</h1>
          </div>

          <section className='w-full my-6 flex flex-col gap-4 items-center justify-center'>
            <ul className='w-full flex flex-col gap-3'>
              {integrations.map((item, index) => (
                <li
                  key={index}
                  className='w-full bg-[#111] p-4 rounded-2xl flex items-center justify-between'
                >
                  <div className='flex items-center gap-3'>
                    <img src={item.icon} className='w-7 h-7' alt={item.name} />
                    <div className='flex flex-col'>
                      <span className='text-white font-semibold text-sm'>
                        {item.name}
                      </span>
                      <span
                        className={`text-xs ${
                          item.connected ? 'text-green-400' : 'text-gray-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => handleToggle(index)}
                    className={`w-10 h-5 rounded-full flex items-center cursor-pointer transition-all ${
                      item.connected
                        ? 'bg-green-500 justify-end'
                        : 'bg-gray-600'
                    }`}
                  >
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                  </div>
                </li>
              ))}
            </ul>

            <div className='w-full flex items-start mt-6 flex-col gap-2'>
              <button
                onClick={handleSave}
                className='w-full bg-white text-black font-semibold py-3 rounded-full'
              >
                Salva e continua
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE IMAGE */}
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

export default Profile3;
