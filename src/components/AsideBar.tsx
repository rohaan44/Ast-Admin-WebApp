import React from 'react';
import Logo from '@/assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { LiaDumbbellSolid } from 'react-icons/lia';
import { TbApple } from 'react-icons/tb';
import { PiCalendarCheck } from 'react-icons/pi';
import { CiChat1 } from 'react-icons/ci';
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChartPie,
} from 'react-icons/fa';
const AisideBar = () => {
  const location = useLocation();
  // ===== MENU ARRAY =====
  const menuItems = [
    {
      id: 1,
      label: 'Home',
      icon: <FaHome />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/user-dashboard',
    },
    {
      id: 2,
      label: 'Formazione',
      icon: <LiaDumbbellSolid />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/work-out-dashboard',
    },
    {
      id: 3,
      label: 'Allenatori',
      icon: <TbApple />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/coaches/add-coach',
    },
    {
      id: 4,
      label: 'Check-In',
      icon: <PiCalendarCheck />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/check-in',
    },
    {
      id: 5,
      label: 'Chat',
      icon: <CiChat1 />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/chat',
    },
  ];
  const menuItems2 = [
    {
      id: 1,
      label: 'Settings',
      icon: <FaCog />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      link: '/settings',
    },
    {
      id: 2,
      label: 'Exit',
      icon: <FaSignOutAlt />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      link: '/logout',
    },
  ];
  return (
    <>
      {/* Sidebar */}
      <aside>
        <div className='flex flex-col items-center gap-8 bg-[#111111] w-full h-[auto] px-1 rounded-t-full rounded-b-full py-4'>
          {/* Logo */}
          <div className='bg-black py-2 px-2 w-16 h-16 flex items-center justify-center rounded-full'>
            <img src={Logo} alt='AST Logo' className='h-6 w-auto' />
          </div>

          {/* MENU LIST */}
          <ul className='flex flex-col gap-2 text-white'>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;

              return (
                <Link key={item.id} to={item.link}>
                  <li className='flex flex-col gap-1 items-center cursor-pointer'>
                    <span
                      className='w-14 h-14 flex items-center justify-center text-white text-2xl rounded-full transition-all duration-300'
                      style={{
                        backgroundColor: isActive ? item.activeBg : item.bg,
                      }}
                    >
                      {item.icon}
                    </span>

                    <p className={`text-sm`}>{item.label}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className='flex flex-col items-center gap-8 bg-[#111111] w-full h-[auto] mt-4 px-1 rounded-t-full rounded-b-full py-4'>
          <ul className='flex flex-col gap-2 text-white'>
            {menuItems2.map((item) => {
              const isActive = location.pathname === item.link; // Active check

              return (
                <Link key={item.id} to={item.link}>
                  <li className='flex flex-col gap-1 items-center cursor-pointer'>
                    <span
                      className='w-14 h-14 flex items-center justify-center text-white text-2xl rounded-full transition-all duration-300'
                      style={{
                        backgroundColor: isActive ? item.activeBg : item.bg,
                      }}
                    >
                      {item.icon}
                    </span>

                    <p className='text-sm'>{item.label}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AisideBar;
