const AppButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-12 py-2 text-white font-medium rounded-full transition-all  hover:scale-105
        shadow-lg shadow-[#FF3A2F]/50"
      style={{ backgroundColor: "#FF3A2F" , }}
    >
      {label}
    </button>
  );
};

export default AppButton;
