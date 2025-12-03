import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Payment1 = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedPlan) return; // extra safety
    navigate("/payment3"); // Payment3 page route
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full h-full bg-black">
        {/* Top Section */}
        <div className="relative pt-6 px-8 flex justify-between items-center">
          <img src={Logo} alt="AST Logo" className="h-10" />
          <div className="w-10"></div>
          <div className="top-4 text-white/60 cursor-pointer text-2xl">
            <span>
              <IoMdClose />
            </span>
          </div>
        </div>

        <div className="mt-5 bg-black rounded-t-3xl flex flex-col justify-between items-center p-10 relative">
          <div className="min-h-[500px] w-full lg:w-2/5 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-2 text-center">
                Scegli il tuo piano
              </h1>
              <p className="text-gray-400 text-center mb-10">
                Atleti che utilizzano l’app per allenamento e nutrizione.
              </p>
            </div>

            <div className="flex flex-col gap-8 mb-16 items-start">
              <ul className="flex flex-col gap-2 items-start">
                {[...Array(4)].map((_, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-xl text-green-700">
                      <IoCheckmarkDoneCircleOutline />
                    </span>
                    <p className="text-sm">
                      Accesso ai piani di allenamento e nutrizione
                    </p>
                  </li>
                ))}
              </ul>

              <span className="w-full h-[1px] bg-[#454545]"></span>

              <div
                onClick={() => setSelectedPlan("base")}
                className={`w-full rounded-xl px-5 py-3 cursor-pointer flex items-center justify-between transition-all
                  bg-[#121212]
                  `}
              >
                <div>
                  <h1 className="text-lg">Piano Base - €79/mese</h1>
                  <p className="text-sm text-gray-400">Mese</p>
                </div>

                <span>
                  {selectedPlan === "base" && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </span>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={handleNext}
              className="
            mt-4 
           bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all

              w-[325px] h-[50px]        /* mobile + tablet */
              md:w-[455px] md:h-[50px]  /* desktop + laptop */
                      "
            >
              cegli il piano
            </button>

            {/* <button
              onClick={handleNext}
              disabled={!selectedPlan}
              className={`mt-4 w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all ${
                !selectedPlan ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Scegli il piano
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment1;
