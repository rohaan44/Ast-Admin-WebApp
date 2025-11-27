import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import Logo from '@/assets/Logo.png';
import { FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { LiaDumbbellSolid } from 'react-icons/lia';
import { TbApple } from 'react-icons/tb';
import { PiCalendarCheck } from 'react-icons/pi';
import { CiChat1 } from 'react-icons/ci';

interface ResponsiveMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  if (!isOpen) return null;
  const menuItems = [
    { id: 1, label: 'Home', icon: <FaHome />, link: '/user-dashboard' },
    {
      id: 2,
      label: 'Formazione',
      icon: <LiaDumbbellSolid />,
      link: '/work-out-dashboard',
    },
    {
      id: 3,
      label: 'Allenatori',
      icon: <TbApple />,
      link: '/coaches/add-coach',
    },
    { id: 4, label: 'Check-In', icon: <PiCalendarCheck />, link: '/check-in' },
    { id: 5, label: 'Chat', icon: <CiChat1 />, link: '/athlete-chat' },
  ];

  const menuItems2 = [
    { id: 1, label: 'Settings', icon: <FaCog />, link: '/settings' },
    { id: 2, label: 'Exit', icon: <FaSignOutAlt />, link: '/logout' },
  ];

  const renderMenuItem = (item: any) => {
    const isActive = location.pathname === item.link;
    return (
      <Link key={item.id} to={item.link}>
        <button
          className={`flex  items-center gap-2 w-full px-4 py-3 rounded-xl text-left transition-all duration-300 transform ${
            isActive
              ? 'bg-[#FF3A2F] text-white scale-105'
              : 'text-white hover:bg-[#252525] hover:scale-105'
          }`}
        >
          <span className='text-lg'>{item.icon}</span>
          <span className='font-medium'>{item.label}</span>
        </button>
      </Link>
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-[#111111] shadow-2xl rounded-l-2xl z-50 px-4 py-8 flex flex-col gap-4 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between mb-4'>
        <img src={Logo} alt='Logo' className='h-10 w-auto object-contain' />
        <button
          onClick={onClose}
          className='text-white text-2xl font-bold hover:text-red-500 transition'
        >
          <IoMdClose />
        </button>
      </div>

      <div className='flex items-center gap-2 bg-[#252525] rounded-full px-4 py-2'>
        <CiSearch className='text-gray-400 text-xl' />
        <input
          type='text'
          placeholder='Cerca'
          className='bg-transparent w-full outline-none border-none text-white placeholder-gray-400'
        />
      </div>

      {/* Menu Items */}
      <div className='mt-4 flex flex-col gap-2'>
        {menuItems.map(renderMenuItem)}
      </div>

      <div className='flex flex-col gap-2'>
        {menuItems2.map(renderMenuItem)}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
