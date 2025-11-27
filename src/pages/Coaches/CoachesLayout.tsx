import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('controllo');
  const { pathname } = useLocation();

  // Jis page par sidebar nahi chahiye yahan likho
  const hideSidebarPages = ['/coaches-chat'];

  const hideSidebar = hideSidebarPages.some((route) =>
    pathname.includes(route)
  );

  return (
    <div className='flex w-full h-full'>
      {/* Sidebar only when allowed */}
      {!hideSidebar && (
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      <div className='flex-1 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
