import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AthletsAsideBar from '@/components/AthletsAsideBar';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('controllo');
  const location = useLocation();
  const isChatPage = location.pathname.includes('/athlete-chat');
  return (
    <div className='flex items-start w-full h-full bg-black'>
      {!isChatPage && (
        <div className='md:w-[auto] w-[0]'>
          <AthletsAsideBar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      )}
      <div className='flex w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
