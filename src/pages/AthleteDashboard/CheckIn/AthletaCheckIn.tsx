import CheckInIcon from '@/assets/CheckInIcon.png';
import { MdDone, MdOutlineArrowForwardIos } from 'react-icons/md';
import { LuBellRing } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const AthletaCheckIn = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <h1 className='text-lg  md:text-2xl text-white font-bold'>Check-In</h1>
      </div>
      <section className='flex items-start justify-start gap-8'>
        <div className='w-full lg:w-[25rem] my-5 mb-5 flex-shrink-0'>
          <div className='flex mt-5 mb-16 items-start flex-col gap-3 '>
            <div className='py-4 px-4 w-full flex bg-[#171717] items-start gap-4 flex-col rounded-md'>
              <div className='flex items-center w-full justify-between'>
                <h1 className='text-sm sm:text-xl font-semibold'>
                  Controllo settimanale!
                </h1>
                <span className='text-sm font-semibold'>14 ago 2025</span>
              </div>
              <p className=' sm:text-[16px] text-[10px] font-normal text-[#FFFFFF80]'>
                Carica peso, foto e misure per tenere aggiornato il tuo coach.
              </p>
              <h4 className='flex text-lg font-semibold items-center gap-1'>
                <span className='text-black bg-[#34C759] py-[0.6] text-sm px-[0.6] rounded-full'>
                  <MdDone />
                </span>
                Completato
              </h4>
            </div>

            <div className='py-4 px-4 w-full flex bg-[#171717] items-start gap-4 flex-col rounded-md'>
              <div className='flex items-center w-full justify-between'>
                <h1 className='text-sm sm:text-xl font-semibold'>
                  Controllo settimanale!
                </h1>
                <span className='text-sm font-semibold'>14 ago 2025</span>
              </div>
              <p className='sm:text-[16px] text-[10px] font-normal text-[#FFFFFF80]'>
                Carica peso, foto e misure per tenere aggiornato il tuo coach.
              </p>
              <div className='bg-[#1E1E1E] py-2 px-4 w-full flex items-center justify-between rounded-md'>
                <div className='flex items-center gap-1'>
                  <span className='text-sm sm:text-lg'>
                    <LuBellRing />
                  </span>
                  <h2 className='text-sm font-semibold'>4:00 PM</h2>
                </div>
                <span className='text-lg'>
                  <MdOutlineArrowForwardIos />
                </span>
              </div>
            </div>

            <div className='py-4 px-4 w-full flex bg-[#171717] items-start gap-4 flex-col rounded-md'>
              <span className='text-lg bg-[#1E1E1E] py-2 px-2 rounded-full'>
                <LuBellRing />
              </span>
              <div className='flex items-center w-full flex-col'>
                <h1 className='sm:text-xl text-sm font-semibold'>
                  È il momento del tuo check-in settimanale!
                </h1>
                <p className='text-sm sm:text-[16px] font-normal text-[#FFFFFF80]'>
                  Carica peso, foto e misure per tenere aggiornato il tuo coach.
                </p>
              </div>
              <button className='w-full py-2 px-2 rounded-full bg-[#1E1E1E]'>
                Inizia il check-in
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate('/athleta-checkin-1')}
            className='bg-white text-black font-semibold rounded-full py-4 px-2 text-sm w-full'
          >
            Salva e continua
          </button>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center my-5'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-24 h-24'>
              <img
                src={CheckInIcon}
                className='w-full h-full object-cover'
                alt='Setting Icon'
              />
            </div>
            <h1 className='text-3xl font-semibold'>Check-In</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AthletaCheckIn;
