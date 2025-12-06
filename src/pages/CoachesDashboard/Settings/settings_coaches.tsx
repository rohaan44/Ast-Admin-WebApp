import ResponsiveMenu from '@/components/ResponsiveMenu';
import React, { useState } from 'react';
import Coach1 from '@/assets/Coach1.jpg';
import SettingImage from '@/assets/SettingImage.png';
import { MdOutlinePerson } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { GrIntegration } from 'react-icons/gr';
import { MdExitToApp } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlinePayment } from 'react-icons/md';

const settingsItems = [
  {
    id: 1,
    icon: <MdOutlinePerson className='text-xl text-red-500' />,
    label: 'Modifica profilo',
    url: '/coaches/settings/profile',
  },
  {
    id: 2,
    icon: <IoIosInformationCircleOutline className='text-xl text-red-500' />,
    label: "Informazioni sull'allenatore",
    url: '/coaches/settings/profile-1',
  },
  {
    id: 3,
    icon: <GrIntegration className='text-xl text-red-500' />,
    label: 'Integrazi',
    url: '/coaches/settings/profile-3',
  },
  {
    id: 4,
    icon: <MdOutlinePayment className='text-xl text-red-500' />,
    label: 'Pagamenti e Royalties',
    url: '/coaches/settings/profile-4',
  },
  {
    id: 5,
    icon: <MdExitToApp className='text-xl text-red-500' />,
    label: 'Esci',
    url: '#',
  },
];

const Setting = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <h1 className='text-lg sm:text-2xl text-white font-bold'>
          Profilo e impostazioni
        </h1>
      </div>

      <section className='flex items-start justify-start gap-8'>
        <div className='w-full lg:w-[25rem] my-5 mb-5 flex-shrink-0'>
          <div className='flex flex-col gap-1 items-center justify-start my-5 w-full'>
            <div className='rounded-2xl overflow-hidden w-28 h-28'>
              <img
                src={Coach1}
                alt='Coach'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center flex-col gap-1'>
                <h1 className='text-2xl font-semibold'>Timothy Doe</h1>
                <p className='text-sm'>Allenatore di forza certificato</p>
              </div>
              <div className='flex flex-wrap justify-center sm:w-[auto] w-full items-center my-4 gap-2'>
                <button className='sm:w-[auto] w-full justify-center rounded-lg flex items-center gap-1 py-2 px-8 bg-red-600 outline-0 text-white text-lg'>
                  Visualizza profilo
                </button>
              </div>
            </div>
          </div>
          <ul className='w-full flex flex-col items-center gap-2'>
            {settingsItems.map((item) => (
              <li key={item.id} className='w-full'>
                <div
                  onClick={() => navigate(item.url)}
                  className={`flex items-center ${
                    item.label === 'Esci' ? 'text-red-500' : 'text-white'
                  } rounded-md gap-2 py-4 bg-[#151515] px-8 w-full cursor-pointer hover:bg-[#252525] transition`}
                >
                  {item.icon}
                  <p className='text-lg font-normal'>{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center my-5'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-28 h-28'>
              <img
                src={SettingImage}
                className='w-full h-full object-cover'
                alt='Setting Icon'
              />
            </div>
            <h1 className='text-3xl font-semibold'>Impostazioni</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Setting;
