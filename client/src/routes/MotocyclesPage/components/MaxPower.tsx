import { useState, useEffect, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import DualRangeSlider from "./DualRangeSlider";
import FormForSlider from "./FormForSlider";


const MaxPower = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [minVal, setMinVal] = useState<number>(11);
  const [maxVal, setMaxVal] = useState<number>(147);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [searchParams] = useSearchParams();
  const motorcyclePowerParam = searchParams.get("motorcyclePower");

  // Używamy useEffect do aktualizacji stanu na podstawie parametrów URL
  useEffect(() => {
    if (!motorcyclePowerParam) {
      setMinVal(11);
      setMaxVal(147);
    } else {
      const formattedText = motorcyclePowerParam.split(" to ");
      if (formattedText.length === 2) {
        setMinVal(Number(formattedText[0]));
        setMaxVal(Number(formattedText[1]));
      }
    }
  }, [motorcyclePowerParam]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target) && !buttonRef.current?.contains(target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div>
      <label className="font-semibold text-[.8rem]">Maksymalna moc silnika</label>
      <div className="relative mt-2">
        <button
          className="flex w-full items-center justify-between rounded-md border-2 border-slate-300 px-5 py-2"
          onClick={() => setIsClicked(!isclicked)}
          ref={buttonRef}
        >
          <p>
            {motorcyclePowerParam 
              ? `${minVal}kW - ${maxVal}kW`
              : "Wybierz zakres"}
          </p>
          <MdOutlineArrowDropDown
            size={20}
            className={`${isclicked && "rotate-180"}`}
          />
        </button>
        {isclicked && (
          <div 
              className="absolute z-50 mt-3 w-full rounded-md bg-white px-2 pb-2 shadow-md"
              ref={dropdownRef}
              >
            <DualRangeSlider 
              minVal={minVal} 
              setMinVal={setMinVal} 
              maxVal={maxVal} 
              setMaxVal={setMaxVal}
            />
            <FormForSlider 
              minVal={minVal} 
              setMinVal={setMinVal} 
              maxVal={maxVal} 
              setMaxVal={setMaxVal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MaxPower;