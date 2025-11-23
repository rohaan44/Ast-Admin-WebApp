import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.png';
import Paypal from '@/assets/Paypal.svg';
import { IoMdClose } from 'react-icons/io';
import { FaStripe } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io5';

const Payment2 = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Stripe',
      Icon: <FaStripe className='text-3xl text-blue-500' />,
    },
    {
      id: 'google',
      name: 'Google Pay',
      Icon: <FcGoogle className='text-3xl' />,
    },
    { id: 'paypal', name: 'PayPal', logo: Paypal },
    {
      id: 'apple',
      name: 'Apple Pay',
      Icon: <IoLogoApple className='text-3xl text-black' />,
    },
  ];

  const handleCheckout = () => {
    if (!selectedPayment) {
      alert('Seleziona un metodo di pagamento');
      return;
    }

    // Simulate payment success
    alert(`Pagamento effettuato con ${selectedPayment} con successo!`);

    // Redirect to Payment4 page
    navigate('/payment4');
  };

  return (
    <div className='h-full w-full flex items-center justify-center bg-black relative'>
      <div className='w-full h-full'>
        {/* Top Section */}
        <div className='relative pt-6 px-6 flex justify-between items-center'>
          <img src={Logo} alt='AST Logo' className='h-10' />
          <div className='w-10'></div>
          <div className='top-4 text-white/60 cursor-pointer text-3xl'>
            <IoMdClose />
          </div>
        </div>

        {/* Main Content */}
        <div className='mt-5 bg-black rounded-t-3xl flex flex-col justify-between items-center p-6 md:p-10 relative'>
          <div className='min-h-[500px] w-full md:w-3/6 lg:w-2/6 flex flex-col items-center'>
            {/* Heading */}
            <div className='flex flex-col items-center'>
              <h1 className='text-3xl font-bold mb-2 text-white'>
                Scegli il tuo piano
              </h1>
              <p className='text-gray-400 text-center mb-10'>
                Atleti che utilizzano l’app per allenamento e nutrizione.
              </p>
            </div>

            {/* Payment Methods */}
            <div className='flex flex-col w-full gap-5 mb-10'>
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.name)}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl w-full cursor-pointer transition-all bg-[#121212]`}
                >
                  <div className='flex items-center gap-3'>
                    {method.logo ? (
                      <img
                        src={method.logo}
                        alt={method.name}
                        className='w-[55px] h-[35px] object-contain'
                      />
                    ) : (
                      method.Icon
                    )}
                    <h2 className='text-sm text-white'>{method.name}</h2>
                  </div>
                  {selectedPayment === method.name && (
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                  )}
                </div>
              ))}
            </div>

            {/* Plan Summary */}
            <div className='flex w-full bg-[#121212] rounded-xl py-4 px-6 md:px-8 flex-col gap-6 items-start text-white'>
              <div className='w-full flex flex-col items-start gap-1'>
                <li className='flex items-center justify-between w-full'>
                  <p>Piano</p>
                  <p>Base</p>
                </li>
                <li className='flex items-center justify-between w-full'>
                  <p>Importo</p>
                  <p>€79.00</p>
                </li>
              </div>
              <span className='w-full h-[1px] bg-[#454545]'></span>
              <div className='flex items-center justify-between w-full'>
                <p>Totale</p>
                <h1>€79.00</h1>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={!selectedPayment}
              className={`mt-4 w-full py-3 rounded-full font-semibold transition-all ${
                selectedPayment
                  ? 'bg-white text-black hover:bg-gray-200 cursor-pointer'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed opacity-60'
              }`}
            >
              Paga ora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
