import React from 'react';
import Logo from '@/assets/LightLogo.png';
import { useNavigate } from 'react-router-dom';

const Payment4 = () => {
  type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'solid' | 'ghost';
  };
  const navigate = useNavigate();
  const Button: React.FC<ButtonProps> = ({
    variant = 'solid',
    children,
    ...rest
  }) => (
    <button
      {...rest}
      className={
        'px-5 py-2 rounded-full text-sm font-medium shadow-sm focus:outline-none transition disabled:opacity-60 ' +
        (variant === 'solid'
          ? 'bg-white text-black hover:brightness-95'
          : 'bg-transparent border border-neutral-700 text-neutral-300 hover:bg-neutral-900')
      }
    >
      {children}
    </button>
  );
  return (
    <>
      <div className='h-full w-full flex items-center justify-center bg-black relative'>
        <div className='w-full h-[100vh] py-4 px-4 flex items-center justify-center flex-col'>
          {/* Top AST logo */}
          <div className='flex justify-center mb-6 relative'>
            <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[280px] rounded-full pointer-events-none'></div>
            <div className='flex items-center gap-2'>
              <img src={Logo} alt='AST Logo' className='h-10' />
            </div>
          </div>

          {/* Center card (success modal) */}
          <div className='mx-auto static z-10 bg-[#121212] rounded-xl p-6 w-90 text-center shadow-inner'>
            <div className='flex flex-col items-center gap-3'>
              {/* confetti emoji/icon */}
              <div className='text-2xl'>🎉</div>

              <h2 className='text-white text-lg font-semibold'>
                Abbonamento attivato con successo!
              </h2>
              <p className='text-neutral-400 text-xs px-2'>
                Ora hai accesso ai tuoi piani personalizzati, ai check-in
                settimanali e alla chat con i coach.
              </p>

              {/* Payment details box */}
              <div className='w-full mt-4 text-left bg-neutral-900/60 p-3 rounded-md border border-neutral-800 text-sm'>
                <div className='flex justify-between text-neutral-400 text-xs mb-2'>
                  <span>ID PAGAMENTO</span>
                  <span>Importo pagato</span>
                </div>
                <div className='flex justify-between text-neutral-200 text-sm font-medium'>
                  <span>000753523973933</span>
                  <span>€19.99</span>
                </div>

                <div className='mt-3 border-t border-neutral-800 pt-3 text-xs text-neutral-400'>
                  <div className='flex justify-between'>
                    <span>DATA E ORA</span>
                    <span>20 Ago 2025 • 01:03</span>
                  </div>
                  <div className='mt-2 flex justify-between items-center text-xs'>
                    <span>Metodo di pagamento</span>
                    <span className='text-indigo-400 font-medium'>stripe</span>
                  </div>
                </div>
              </div>

              {/* Download receipt button (disabled looking) */}
              <div className='w-full mt-4'>
                <button
                  className='w-full bg-neutral-800/50 text-neutral-300 py-2 rounded-md text-sm disabled:opacity-60'
                  disabled
                >
                  Scarica ricevuta
                </button>
              </div>

              <div className='mt-4 w-full flex items-center justify-between'>
                <span className='text-neutral-400 text-xs'>
                  Scarica ricevuta
                </span>
                <Button
                  variant='solid'
                  onClick={() => {
                    const type = localStorage.getItem('userType');

                    if (type === 'Atleta') navigate('/user-dashboard');
                    else if (type === 'Allenatore') navigate('/home');
                    else if (type === 'Tutor') navigate('#');
                  }}
                >
                  Fatto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment4;
