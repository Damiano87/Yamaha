import { useState, useRef, useEffect } from "react"
import { MdOutlineArrowDropDown } from "react-icons/md";
import LicenseDropdown from './LicenseDropdown';
import { useSearchParams } from "react-router-dom";



const License = () => {
    const [isClicked, setIsClicked] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [searchParams] = useSearchParams();

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

  // count true checkboxes
  const countTrueCheckboxes = () => {
      const checkboxes = Array.from(searchParams.entries()).filter(([key]) => ['a', 'a1', 'a2'].includes(key)).map(item => item[0])

      return checkboxes.length
  };


  return (
    <div>
      <label className=" font-semibold text-[.8rem]">Wymagane prawo jazdy</label>
      <div className="relative mt-2">
        <button
          className="flex w-full items-center justify-between rounded-md border-2 border-slate-300 px-5 py-2"
          onClick={() => setIsClicked(!isClicked)}
          ref={buttonRef}
        >
          <p>
            
            {countTrueCheckboxes() ? <span>({countTrueCheckboxes()}) wybrane opcje</span> : "Wybierz opcje"}
          </p>
          <MdOutlineArrowDropDown
            size={20}
            className={`${isClicked && "rotate-180"}`}
          />
        </button>
        {isClicked && (
          <LicenseDropdown ref={dropdownRef}/>
        )}
      </div>
    </div>
  )
}
export default License