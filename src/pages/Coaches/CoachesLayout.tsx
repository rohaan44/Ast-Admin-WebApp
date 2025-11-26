import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('controllo');
  return (
    <div className='flex w-full h-full'>
      <div>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />;
      </div>
      <div className='flex-1 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
