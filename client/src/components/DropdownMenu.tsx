import { useRef, useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  useDropdownContext,
  useIndexContext,
} from "../hooks/useDropdownContext";
import { MutableRefObject } from "react";
import DropdownVehicles from "./DropdownVehicles";


type DropdownProps = {
  buttonRef: MutableRefObject<null>;
};

const DropdownMenu = ({ buttonRef }: DropdownProps) => {
  const { showMenu, setShowMenu } = useDropdownContext();
  const { setCurrent } = useIndexContext();

  const [moto, setMoto] = useState(false);
  const [atvMenu, setAtvMenu] = useState(false);

  const dropdownRef = useRef(null);

  // show motocycles on hover
  const showMoto = () => {
    setMoto(true);
    setAtvMenu(false);
  };

  // show atvs on hover
  const showAtv = () => {
    setAtvMenu(true);
    setMoto(false);
  };

  // close menu on click product
  const closeMenu = () => {
    setMoto(false);
    setAtvMenu(false);
    setShowMenu(false);
    setCurrent(0);
  };

  // close dropdown menu
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      // @ts-expect-error dsd
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current !== event.target
    ) {
      setMoto(false);
      setAtvMenu(false);
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 868) {
        setMoto(false);
        setAtvMenu(false);
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setShowMenu]);

  return (
    <div
      ref={dropdownRef}
      className={`${
        showMenu ? "pt-3 overflow-auto" : "h-0 overflow-hidden"
      } flex absolute top-[4.5rem] left-11 bg-white uppercase font-semibold duration-300`}
    >
      <div className="w-[20rem] border-r-2">
        <div
          className="flex items-center justify-between pl-16 pr-2 py-2 cursor-pointer hover:text-red-600 duration-300"
          onMouseEnter={showMoto}
        >
          <h4>motocykle</h4>
          <IoIosArrowForward />
        </div>
        <div
          className="flex items-center justify-between pl-16 pr-2 py-2 cursor-pointer hover:text-red-600 duration-300"
          onMouseEnter={showAtv}
        >
          <h4>quady</h4>
          <IoIosArrowForward />
        </div>
      </div>
      {moto && (
        <DropdownVehicles closeMenu={closeMenu} endpoint="/vehicles/moto" vehicle="motocycles"/>
      )}
      {atvMenu && (
        <DropdownVehicles closeMenu={closeMenu} endpoint="/vehicles/atv" vehicle="atv"/>
      )}
    </div>
  );
};

export default DropdownMenu;
