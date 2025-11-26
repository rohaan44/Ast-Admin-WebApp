import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AisideBar from '@/components/AsideBar';

const DashboardLayout = () => {
  const location = useLocation();
  const hideSidebar = location.pathname.includes('/chat');
  return (
    <div className='flex w-full h-full bg-black'>
      {!hideSidebar && (
        <div className='ml-4 my-4 h-full w-[80px] hidden md:flex flex-col items-center py-4'>
          <AisideBar />
        </div>
      )}
      <div className='flex-1 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
