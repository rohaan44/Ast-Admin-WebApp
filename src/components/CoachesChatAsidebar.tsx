import React from 'react';
import Logo from '@/assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { TbApple } from 'react-icons/tb';
import { PiCalendarCheck } from 'react-icons/pi';
import { CiChat1 } from 'react-icons/ci';
import { FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { LuBicepsFlexed } from 'react-icons/lu';

const ChatAisideBar = () => {
  const location = useLocation();
  const menuItems = [
    {
      id: 'controllo',
      icon: <FaHome />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '/coaches-user-dashboard',
    },
    {
      id: 'atleti',
      icon: <LuBicepsFlexed />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '/coaches-atleti',
    },
    {
      id: 'allenatori',
      icon: <TbApple />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '#',
    },
    {
      id: 'coachesplans',
      icon: <LiaClipboardListSolid />,
      path: '/coaches-plans',
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
    },
    {
      id: 'chat',
      icon: <CiChat1 />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '/coaches-chat',
    },
  ];
  const menuItems2 = [
    {
      id: 1,
      icon: <FaCog />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '/settings',
    },
    {
      id: 2,
      icon: <FaSignOutAlt />,
      bg: '#2C2C2C',
      activeBg: '#FF3A2F',
      path: '/logout',
    },
  ];

  return (
    <aside className='bg-[#111111]'>
      <div className='flex flex-col items-center gap-4 bg-[#111111] w-full h-[100vh] px-1 py-4'>
        {/* Logo */}
        <div className='bg-black py-2 px-2 w-12 h-12 flex items-center justify-center rounded-full'>
          <img src={Logo} alt='AST Logo' className='h-4 w-auto' />
        </div>

        <div className='flex items-center justify-between h-full flex-col'>
          {/* TOP MENU */}
          <ul className='flex flex-col gap-2 text-white'>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.id} to={item.path}>
                  <li className='flex flex-col items-center cursor-pointer'>
                    <span
                      className='w-10 h-10 flex items-center justify-center text-lg rounded-full transition-all duration-300'
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

          {/* BOTTOM MENU */}
          <ul className='flex flex-col gap-2 text-white'>
            {menuItems2.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.id} to={item.path}>
                  <li className='flex flex-col items-center cursor-pointer'>
                    <span
                      className='w-10 h-10 flex items-center justify-center text-lg rounded-full transition-all duration-300'
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
  );
};

export default ChatAisideBar;
