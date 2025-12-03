import bg_image from '@/assets/bg-image.jpg';
import Logo from '@/assets/Logo.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP
  const [timeLeft, setTimeLeft] = useState(60); // timer in seconds
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1); // only last digit
      setOtp(newOtp);

      // auto focus next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimeLeft(60);
    setCanResend(false);
    alert('Codice reinviato!');
    // API call for resending OTP can be added here
  };

  const handleSubmit = () => {
    setError('');
    navigate('/gender');
  };

  return (
    <section className='relative w-full h-full py-10 px-6 md:px-12'>
      {/* Top Red Glow */}
      <div className='absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      {/* Bottom Red Glow */}
      <div className='absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-600/100 blur-[160px] rounded-full pointer-events-none'></div>
      <div
        className='relative w-full h-[100vh] py-14 bg-cover bg-center shadow-xl rounded-2xl flex items-center justify-center overflow-hidden'
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className='static px-4 z-10 flex items-center flex-col gap-2'>
          {/* Logo + Heading */}
          <div className='flex flex-col items-center gap-2'>
            <img src={Logo} alt='Logo' className='h-12 w-auto mb-2' />
            <h1 className='text-3xl font-bold text-white'>Verifica</h1>
            <p className='text-gray-500 w-[90%] text-center text-lg'>
              Inserisci il codice di 6 cifre che hai ricevuto nella tua email.
            </p>
          </div>

          {/* OTP Inputs */}
          {error && (
            <p className='text-red-500 font-semibold mt-3 text-center'>
              {error}
            </p>
          )}
          <div className='flex justify-center gap-3 mt-4'>
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type='text'
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, index)}
                className='w-12 h-12 text-center text-xl font-semibold rounded-lg bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600'
              />
            ))}
          </div>

          {/* Timer & Resend */}
          <div className='text-center text-gray-400 mt-2'>
            {timeLeft > 0 ? (
              <span>
                Tempo rimasto: 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            ) : (
              <button
                onClick={handleResend}
                className='text-red-600 font-semibold underline'
              >
                Se non hai ricevuto un codice! Reinvia
              </button>
            )}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            className='mt-4 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition'
          >
            Continuare
          </button>

          <div className='flex items-start gap-2 text-sm mt-4'>
            <p>
              Se non hai ricevuto un codice!
              <span className='text-red-500'> Reinvia</span>
            </p>
          </div>
        </div>

        <div className='absolute inset-0 bg-black/60'></div>
      </div>
    </section>
  );
};

export default Otp;
