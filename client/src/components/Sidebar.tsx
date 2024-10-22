import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { X } from "lucide-react";
import { motocycles, atv } from "../data";
import { Link } from "react-router-dom";

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
        <Motocykle
          setSidebarOpen={setSidebarOpen}
          setNaszeModeleHeight={setNaszeModeleHeight}
        />
      )}
      {heading === "atvs" && (
        <Atv
          setSidebarOpen={setSidebarOpen}
          setNaszeModeleHeight={setNaszeModeleHeight}
        />
      )}
    </div>
  );
};

type VehicleProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNaszeModeleHeight: React.Dispatch<React.SetStateAction<number>>;
};

const Motocykle = ({ setSidebarOpen, setNaszeModeleHeight }: VehicleProps) => {
  return (
    <div className="p-3 grid gap-3 h-screen content-start bg-slate-200">
      {motocycles.map((item) => {
        const { id, name, images, colorNames, license } = item;
        return (
          <Link
            to={`/motocycles/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            key={id}
            className="py-3 px-4 hover:shadow-lg hover:text-red-600 bg-white relative"
            onClick={() => {
              setSidebarOpen(false);
              setNaszeModeleHeight(0);
            }}
          >
            <p className="absolute top-1 left-3 text-[.8rem] text-red-600 font-semibold">
              {license}
            </p>
            <article className="flex items-center gap-x-3">
              <img src={images[0]} width={70} height={70} alt={name} />
              <p className="text-[0.875rem] font-semibold">{name}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

const Atv = ({ setSidebarOpen, setNaszeModeleHeight }: VehicleProps) => {
  return (
    <div className="p-3 grid gap-3 h-screen content-start bg-slate-200">
      {atv.map((item) => {
        const { id, name, images, colorNames } = item;
        return (
          <Link
            to={`/atv/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            key={id}
            className="py-3 px-4 hover:shadow-lg hover:text-red-600 bg-white"
            onClick={() => {
              setSidebarOpen(false);
              setNaszeModeleHeight(0);
            }}
          >
            <article className="flex items-center gap-x-3">
              <img src={images[0]} width={70} height={70} alt={name} />
              <p className="text-[0.875rem] font-semibold capitalize">{name}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};
