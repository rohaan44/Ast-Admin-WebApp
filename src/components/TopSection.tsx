import React from 'react';
import Logo from '@/assets/LightLogo.png';
import { IoMdClose } from 'react-icons/io';
const TopSection = ({ steps, currentStep }) => {
  return (
    <div className='relative pt-6 px-8 flex justify-between items-center'>
      <img src={Logo} alt='AST Logo' className='h-10' />

      {/* PROGRESS DOTS */}
      <div className='absolute left-1/2 -translate-x-1/2 flex gap-2'>
        {steps.map((step) => (
          <div
            key={step}
            className={`w-8 h-1 rounded transition 
                            ${
                              currentStep === step ? 'bg-white' : 'bg-white/20'
                            }`}
          ></div>
        ))}
      </div>

      <div className='w-10'></div>
      <div className='top-4 text-white/60 cursor-pointer text-2xl'>
        <span>
          <IoMdClose />
        </span>
      </div>
    </div>
  );
};

export default TopSection;
