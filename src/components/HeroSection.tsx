import { FaFire } from 'react-icons/fa';
import BackgroundImage from '@/assets/Bg_Image.png';

const IMAGE_URL = BackgroundImage;
const HeroSection = () => {
  return (
    <div className='w-full my-4'>
      <div className='relative rounded-2xl overflow-hidden border border-[#0a0a0a] bg-black shadow-2xl'>
        <img
          src={IMAGE_URL}
          alt='stay fit'
          className='w-full h-[20rem] lg:h-[36rem] object-cover object-center'
          style={{ filter: 'grayscale(0.05) contrast(0.95)' }}
        />

        {/* Overlays */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)',
            mixBlendMode: 'overlay',
          }}
        />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)',
            borderRadius: 'inherit',
          }}
        />

        {/* Background large overlay text */}
        <h2
          className='absolute right-4 top-4 text-[80px] sm:text-[120px] md:text-[140px] font-extrabold leading-[0.8] opacity-10 select-none pointer-events-none'
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            color: 'transparent',
          }}
        >
          STAY
          <br />
          FIT
        </h2>

        {/* Content overlay */}
        <div className='absolute inset-0 z-10 flex flex-col md:items-start items-center justify-center py-4 md:py-8 px-6 gap-6'>
          {/* Left text column */}
          <div className='flex flex-col items-center md:items-start justify-between h-full text-white max-w-lg'>
            <div className='flex flex-wrap gap-3 mb-4 md:mb-6 justify-center md:justify-start'>
              <span className='inline-flex items-center gap-2 bg-red-700 text-white text-sm font-semibold px-6 md:px-10 py-2 md:py-3 rounded-full'>
                <span className='text-xl'>🔥</span>
                130 kcal
              </span>
              <span className='inline-flex items-center gap-2 bg-red-700 text-white text-sm font-semibold px-6 md:px-10 py-2 md:py-3 rounded-full'>
                <span className='text-xl'>🔥</span>
                01 ora
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center md:text-left'>
              Allenamento
              <br />
              di corsa.
            </h1>

            <div className='flex flex-wrap items-center gap-4 mt-4 sm:mt-6 justify-center md:justify-start'>
              <button className='bg-red-700 text-white px-4 md:px-12 py-2 md:py-4 rounded-full font-semibold shadow-lg hover:brightness-95'>
                Principiante
              </button>
              <div className='text-lg sm:text-xl text-gray-300 text-center md:text-left'>
                3 serie di esercizi
              </div>
            </div>
          </div>

          <button className='absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M8 5v14l11-7-11-7z' fill='white' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
