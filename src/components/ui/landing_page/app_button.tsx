import { Link } from 'react-router-dom';

const AppButton = ({ label, onClick }) => {
  return (
    <Link to={'/register'}>
      <button
        onClick={onClick}
        className='px-12 py-2 text-white font-medium rounded-full transition-all  hover:scale-105
        shadow-lg shadow-[#FF3A2F]/50'
        style={{ backgroundColor: '#FF3A2F' }}
      >
        {label}
      </button>
    </Link>
  );
};

export default AppButton;
