import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopSection from "@/components/TopSection";

const GenderSelection = ({ currentStep = 1 }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const steps = [1, 2, 3, 4];
  const options = [
    { label: "Maschio", value: "male" },
    { label: "Femmina", value: "female" },
  ];
  const handleNext = () => {
    if (!selected) {
      alert("Seleziona un’opzione prima di continuare");
      return;
    }
    navigate("/height-weight");
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#0f0f0f]">
      <div className="w-full bg-gradient-to-b from-red-600 to-red-800 relative shadow-xl">
        {/* Top Section */}
        <TopSection steps={steps} currentStep={currentStep} />

        {/* Card */}
        <div className="mt-5 bg-black rounded-t-3xl min-h-[500px] flex flex-col justify-between items-center p-10 relative">
          <div className="flex flex-col items-center text-center gap-4 mt-6">
            <h1 className="text-white text-3xl font-bold">
              Indica il tuo pronome
            </h1>
            <p className="text-gray-400 text-sm max-w-[70%]">
              Questo ci permette di adattare il suo primo piano di allenamento e
              nutrizione alle sue esigenze.
            </p>

            {/* Options */}
            <div className="flex flex-col gap-3 w-[350px] mt-4">
              {options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => setSelected(opt.value)}
                  className={`p-3 text-center rounded-xl font-semibold cursor-pointer transition 
                    ${
                      selected === opt.value
                        ? "border border-red-600 text-white bg-red-600/10 shadow-md"
                        : "bg-white/5 border border-white/10 text-gray-300"
                    }`}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="
      mt-4 
      bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all

      w-[325px] h-[50px]
      md:w-[455px] md:h-[50px]
    "
            >
              Avanti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
