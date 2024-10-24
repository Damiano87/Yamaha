import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { X } from "lucide-react";
import Vehicles from "./SidebarVehicles";


type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLElement>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, navRef }: SidebarProps) => {
  // get height of navbar
  const [navHeight, setNavHeight] = useState<number>(0);
  // set height of top div
  const [naszeModeleHeight, setNaszeModeleHeight] = useState<number>(0);
  // set heading for goBack button
  const [heading, setHeading] = useState<string>("nasze modele");

  const navigationHeight = navRef.current?.clientHeight;


  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const navHeight = navRef.current?.clientHeight;
    setNavHeight(navHeight as number);
  }, [sidebarOpen, navRef]);

  const showSidebarMenu = () => {
    setNavHeight(0);
    setNaszeModeleHeight(navigationHeight as number);
    setHeading("nasze modele");
  };

  const goBack = () => {
    if (heading === "motocykle" || heading === "atvs") {
      setHeading("nasze modele");
    } else {
      setNaszeModeleHeight(0);
      setNavHeight(navigationHeight as number);
    }
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed lg:hidden left-0  h-screen w-screen bg-white z-50 duration-300`}
      style={{ top: `${navHeight}px` }}
    >
      {naszeModeleHeight > 0 ? (
        <div
          className="flex justify-between items-center px-4"
          style={{ height: `${naszeModeleHeight}px` }}
        >
          <button
            type="button"
            className="flex items-center gap-4 uppercase font-semibold"
            onClick={goBack}
          >
            <FaArrowLeftLong />
            {heading}
          </button>
          <button
            type="button"
            onClick={() => {
              setSidebarOpen(false);
              setNaszeModeleHeight(0);
              setHeading("nasze modele");
            }}
          >
            <X />
          </button>
        </div>
      ) : null}
      {naszeModeleHeight > 0 ? (
        <Menu
          heading={heading}
          setHeading={setHeading}
          setNaszeModeleHeight={setNaszeModeleHeight}
          setSidebarOpen={setSidebarOpen}
        />
      ) : (
        <div>
          <button
            className="px-3 py-4 flex justify-between border-y-2 items-center w-full uppercase tracking-wide font-semibold hover:text-red-600"
            onClick={showSidebarMenu}
          >
            nasze modele
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

type MenuProps = {
  heading: string;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNaszeModeleHeight: React.Dispatch<React.SetStateAction<number>>;
};

const Menu = ({
  heading,
  setHeading,
  setSidebarOpen,
  setNaszeModeleHeight,
}: MenuProps) => {
  return (
    <div>
      {heading === "nasze modele" && (
        <div>
          <button
            type="button"
            className="flex items-center justify-between border-t-2 px-4 py-4 w-full hover:text-red-600"
            onClick={() => setHeading("motocykle")}
          >
            <h3>Motocykle</h3>

            <IoIosArrowForward />
          </button>
          <button
            type="button"
            className="flex items-center justify-between border-t-2 border-b-2 px-4 py-4 w-full hover:text-red-600"
            onClick={() => setHeading("atvs")}
          >
            <h3>Atvs</h3>
            <IoIosArrowForward />
          </button>
        </div>
      )}
      {heading === "motocykle" && (
        <Vehicles
          setSidebarOpen={setSidebarOpen}
          setNaszeModeleHeight={setNaszeModeleHeight}
          endpoint="/vehicles/moto" 
          vehicle="motocycles"
        />
      )}
      {heading === "atvs" && (
        <Vehicles
          setSidebarOpen={setSidebarOpen}
          setNaszeModeleHeight={setNaszeModeleHeight}
          endpoint="/vehicles/atv" 
          vehicle="atv"
        />
      )}
    </div>
  );
};
