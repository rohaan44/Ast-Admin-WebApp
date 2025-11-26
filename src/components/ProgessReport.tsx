import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const progressData = [
  { title: 'Calorie', progress: 50, text: '50% dei suoi obiettivi' },
  { title: 'Protein', progress: 100, text: '100% dei suoi obiettivi' },
  { title: 'Carbonniti', progress: 100, text: '100% dei suoi obiettivi' },
  { title: 'Grassi', progress: 7, text: '7% dei suoi obiettivi' },
];

// Function to determine color based on progress
const getProgressColor = (value) => {
  if (value < 40) return 'red';
  if (value >= 40 && value <= 70) return 'yellow';
  return 'green';
};

const ProgessReport = () => {
  return (
    <section className='grid lg:grid-cols-12 grid-cols-1 gap-4'>
      {/* Left Grid */}
      <div className='lg:col-span-9 grid md:grid-cols-4 sm:grid-cols-2  gap-2'>
        {progressData.map((item, index) => (
          <div
            key={index}
            className='h-[250px] flex flex-col items-center justify-between gap-2 px-4 py-6 rounded-md bg-[#151515]'
          >
            <div className='flex items-start w-full justify-start'>
              <p className='text-2xl font-semibold text-[#FFFFFFB2]'>
                {item.title}
              </p>
            </div>
            <div className='w-28 h-28'>
              <CircularProgressbar
                value={item.progress}
                text={`${item.progress}%`}
                styles={buildStyles({
                  pathColor: getProgressColor(item.progress),
                  textColor: '#FFFFFFB2',
                  trailColor: '#333',
                })}
              />
            </div>
            <p className='text-sm text-center text-[#FFFFFFB2]'>{item.text}</p>
          </div>
        ))}
      </div>

      <div className='lg:col-span-3 flex flex-col gap-4 h-[250px] bg-[#151515] rounded-md py-4 px-2 justify-between'>
        <div className='flex items-start gap-2 flex-col'>
          <div className='flex items-center justify-between w-full '>
            <h1 className='text-xl font-semibold'>Camminando</h1>
            <span className='border border-[#252525] w-10 h-10 flex items-center justify-center text-xl rounded-full'>
              <IoArrowForwardOutline />
            </span>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex items-center'>
              <h1 className='text-xl'>2104</h1>
              <span className='text-sm mt-3 ml-1 text-[#FFFFFFB2]'>Passi</span>
            </div>

            <div className='flex items-start flex-warp gap-2'>
              <div className='flex items-end gap-1'>
                <p className='text-xl'>1.58</p>
                <span className='text-sm text-[#FFFFFFB2]'>Km</span>
              </div>
              <div className='flex items-end gap-1'>
                <p className='text-xl'>1.58</p>
                <span className='text-sm text-[#FFFFFFB2]'>Km</span>
              </div>
              <div className='flex items-end gap-1'>
                <p className='text-xl'>1.58</p>
                <span className='text-sm text-[#FFFFFFB2]'>Km</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side Progress Bar */}
        <div className='w-20 h-20'>
          <CircularProgressbar
            value={7}
            styles={buildStyles({
              pathColor: getProgressColor(7),
              textColor: '#FFFFFFB2',
              trailColor: '#333',
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgessReport;
