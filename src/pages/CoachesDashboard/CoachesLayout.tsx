import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CoachesAsidebar from '@/components/CoachesAsidebar';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('controllo');
  return (
    <div className='flex items-start w-full h-full bg-black'>
      <div className='md:w-[auto] w-[0]'>
        <CoachesAsidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className='flex w-full h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
