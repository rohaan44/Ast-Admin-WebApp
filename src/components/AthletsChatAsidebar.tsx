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
const ChatAisideBar = () => {
  const location = useLocation();
  // ===== MENU ARRAY =====
  const menuItems = [
    {
      id: 1,
      icon: <FaHome />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/user-dashboard',
    },
    {
      id: 2,
      icon: <LiaDumbbellSolid />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/work-out-dashboard',
    },
    {
      id: 3,
      icon: <TbApple />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/coaches/add-coach',
    },
    {
      id: 4,
      icon: <PiCalendarCheck />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/check-in',
    },
    {
      id: 5,
      icon: <CiChat1 />,
      bg: '#25252573',
      activeBg: '#FF3A2F',
      link: '/athlete-chat',
    },
  ];
  const menuItems2 = [
    {
      id: 1,
      icon: <FaCog />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      link: '/settings',
    },
    {
      id: 2,
      icon: <FaSignOutAlt />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      link: '/logout',
    },
  ];
  return (
    <>
      {/* Sidebar */}
      <aside className='bg-[#111111]'>
        <div className='flex flex-col items-center gap-4 bg-[#111111] w-full h-[100vh] px-1 py-4'>
          {/* Logo */}
          <div className='bg-black py-2 px-2 w-12 h-12 flex items-center justify-center rounded-full'>
            <img src={Logo} alt='AST Logo' className='h-4 w-auto' />
          </div>
          {/* MENU LIST */}
          <div className='flex items-center justify-between h-full flex-col'>
            <ul className='flex flex-col gap-2  text-white'>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.link;

                return (
                  <Link key={item.id} to={item.link}>
                    <li className='flex flex-col gap-1 items-center cursor-pointer'>
                      <span
                        className='w-10 h-10 flex items-center justify-center text-white text-lg rounded-full transition-all duration-300'
                        style={{
                          backgroundColor: isActive ? item.activeBg : item.bg,
                        }}
                      >
                        {item.icon}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
            <ul className='flex  flex-col gap-2 text-white'>
              {menuItems2.map((item) => {
                const isActive = location.pathname === item.link; // Active check

                return (
                  <Link key={item.id} to={item.link}>
                    <li className='flex flex-col gap-1 items-center cursor-pointer'>
                      <span
                        className='w-10 h-10 flex items-center justify-center text-white text-lg rounded-full transition-all duration-300'
                        style={{
                          backgroundColor: isActive ? item.activeBg : item.bg,
                        }}
                      >
                        {item.icon}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ChatAisideBar;
