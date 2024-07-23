import { useEffect } from "react";
import { useState } from "react";
import iconDice from "../assets/icon-dice.svg";
import pattern from "../assets/pattern-divider-mobile.svg";

function Advice() {
  const [advice, setAdvice] = useState("");
  const [text, setText] = useState(true);

  const fetchAdvice = async () => {
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let data = await res.json();
      setAdvice(data);
      console.log(advice, "advice");
    } catch (error) {
      console.log("Error fetching the Advices", error);
    }
  };

  const handleFetchAdvice = () => {
    setText(false);
    fetchAdvice();
  };

  // useEffect(() => {
  //   fetchAdvice();
  // }, []);

  return (
    <div className="bg-[#1F2A39] min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4">
        <div className="max-w-xl mx-auto p-8 relative">
          {advice && (
            <div className="mt-4 p-10 sm:p-16 bg-[#2C3546] shadow-2xl rounded-lg text-center ">
              <h2 className="text-lg font-bold text-[#2AF598]">
                ADIVCE #{advice.slip.id}
              </h2>
              <p className="text-white text-center mt-6 text-xl">
                {advice.slip.advice}
              </p>
              <div className="mt-10">
                <img src={pattern} alt="" className="w-full" />
              </div>
            </div>
          )}
          <div>
            {text && (
              <h1 className="lg:text-lg text-white italic sm:text-xl mb-10 text-center">
                Click on below Icon to see some amazing Advices😇
              </h1>
            )}
          </div>
          <div className="flex justify-center items-center mt-4 absolute bottom-0 lg:left-[46%] sm:left-[42%]">
            <button
              className="flex items-center px-4 py-2 bg-[#2AF598] text-white rounded-[50%] h-14 w-14 hover:[#2AF598]"
              onClick={handleFetchAdvice}
            >
              <img src={iconDice} alt="" className="w-6 h-6 mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advice;
