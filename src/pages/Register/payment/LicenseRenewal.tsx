import React from 'react';
import '@/styles/Athlete.css';
import { IoMdClose } from 'react-icons/io';
import Logo from '@/assets/Logo.png';
import { MdOutlineDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

const LicenseRenewal: React.FC = () => {
  const { selectedPlan, setSelectedPlan, setLastAction } = useUser();
  const navigate = useNavigate();

  const handleSelectPlan = (plan: '249' | '549') => {
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    if (!selectedPlan) return alert('Seleziona un piano prima di continuare');
    setLastAction('paymentRenew');
    navigate('/payment3');
  };

  return (
    <div className='h-[100vh] w-full overflow-scroll no-scrollbar p-4'>
      <div className='relative pt-6 px-8 flex justify-between items-center'>
        <img src={Logo} alt='AST Logo' className='h-10' />
        <div className='w-10'></div>
        <div
          onClick={() => navigate(-1)}
          className='top-4 text-white/60 cursor-pointer text-2xl'
        >
          <IoMdClose />
        </div>
      </div>

      <section className='flex items-center justify-center w-full h-full'>
        <div className='w-full max-w-md rounded-2xl py-4 px-4 relative text-white shadow-lg'>
          <div className='flex items-center flex-col gap-1 mb-8'>
            <h1 className='text-2xl sm:text-4xl font-semibold'>
              Rinnova la tua Licenza di
            </h1>
            <h2 className='text-lg sm:text-2xl font-semibold'>
              Allenatore A.S.T.®
            </h2>
            <p className='text-gray-400 text-center text-sm'>
              Allenatori che utilizzano l’app per l’allenamento Smart.
            </p>
          </div>

          <ul className='flex flex-col gap-2 mb-6'>
            {[
              'Accesso continuo alla piattaforma di allenamento intelligente',
              'Check-in settimanali con i tuoi atleti',
              'Integrazione con Apple Health/Google Fit',
              'Chat diretta con gli atleti per monitorare i loro progressi',
            ].map((item, idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <span className='p-[0.5] rounded-full text-xs text-[#34C759] border border-[#34C759]'>
                  <MdOutlineDone />
                </span>
                <p className='text-sm font-normal'>{item}</p>
              </li>
            ))}
          </ul>

          <div className='flex flex-col gap-4 mb-6'>
            <label
              className={`flex items-center justify-between bg-[#1e1e1e] rounded-lg p-4 cursor-pointer ${
                selectedPlan === '249' ? 'opacity-80' : ''
              }`}
            >
              <span>Rinnovo della Licenza - €249/Anno Annuale</span>
              <input
                type='radio'
                name='plan'
                checked={selectedPlan === '249'}
                onChange={() => handleSelectPlan('249')}
                className='accent-green-500'
              />
            </label>

            <label
              className={`flex items-center justify-between bg-[#1e1e1e] rounded-lg p-4 cursor-pointer ${
                selectedPlan === '549' ? 'opacity-80' : ''
              }`}
            >
              <span>Quota di Certificazione - €549.00 (Una tantum)</span>
              <input
                type='radio'
                name='plan'
                checked={selectedPlan === '549'}
                onChange={() => handleSelectPlan('549')}
                className='accent-green-500'
              />
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className='w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition'
          >
            Scegli il piano
          </button>
        </div>
      </section>
    </div>
  );
};

export default LicenseRenewal;
