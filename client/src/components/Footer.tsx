import { useEffect, useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useFooterContext } from "../hooks/useFooterContext";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { setFooterHeight } = useFooterContext();
  const footerRef = useRef<HTMLDivElement>(null);

  // state for small footer
  const [firsTabOpen, setFirstTabOpen] = useState<boolean>(false);
  const [secondTabOpen, setSecondTabOpen] = useState<boolean>(false);
  const [thirdTabOpen, setThirdTabOpen] = useState<boolean>(false);
  const [fourthTabOpen, setFourthTabOpen] = useState<boolean>(false);

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.clientHeight;

      setFooterHeight(height);
    }
  });

  return (
    <footer className="bg-black text-white" ref={footerRef}>
      <div className="hidden max-w-[80rem] mx-auto px-12 pt-12 xl:px-5 lg:grid grid-cols-[1fr,1fr,1fr,1fr,2fr] gap-6">
        {/* first column */}
        <div>
          <h2 className="uppercase mb-5 text-[1.2rem] font-semibold tracking-wider">
            o firmie
          </h2>
          <ul className="space-y-3">
            <li>
              <Link to={"#"}>O nas</Link>
            </li>
            <li>
              <Link to={"#"}>Aktualności</Link>
            </li>
            <li>
              <Link to={"#"}>Wydarzenia</Link>
            </li>
            <li>
              <Link to={"#"}>Polska strona prasowa</Link>
            </li>
            <li>
              <Link to={"#"}>Broszury</Link>
            </li>
            <li>
              <Link to={"#"}>Praca w Yamaha</Link>
            </li>
            <li>
              <Link to={"#"}>Zostań dealerem</Link>
            </li>
            <li>
              <Link to={"#"}>Zasady dotyczące praw człowieka</Link>
            </li>
            <li>
              <Link to={"#"}>Podstawowa polityka zrównoważonego rozwoju</Link>
            </li>
          </ul>
        </div>
        {/* second column */}
        <div>
          <h2 className="uppercase mb-5 text-[1.2rem] font-semibold tracking-wider">
            dla biznesu
          </h2>
          <ul className="space-y-3">
            <li>
              <Link to={"#"}>Systemy Yamaha eBike</Link>
            </li>
            <li>
              <Link to={"#"}>Służby mundurowe</Link>
            </li>
            <li>
              <Link to={"#"}>Golf / Pojazdy funkcjonalne</Link>
            </li>
            <li>
              <Link to={"#"}>Ratownictwo</Link>
            </li>
            <li>
              <Link to={"#"}>Szkoły jazdy</Link>
            </li>
            <li>
              <Link to={"#"}>Robotics</Link>
            </li>
            <li>
              <Link to={"#"}>
                Informacje techniczne dla niezależnych dealerów
              </Link>
            </li>
          </ul>
        </div>
        {/* third column */}
        <div>
          <h2 className="uppercase mb-5 text-[1.2rem] font-semibold tracking-wider">
            wiecej yamaha
          </h2>
          <ul className="space-y-3">
            <li>
              <Link to={"#"}>MyYamaha</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Music</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Racing</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Motor Global</Link>
            </li>
            <li>
              <Link to={"#"}>Aplikacje mobilne</Link>
            </li>
          </ul>
        </div>
        {/* fourth column */}
        <div>
          <h2 className="uppercase mb-5 text-[1.2rem] font-semibold tracking-wider">
            wsparcie
          </h2>
          <ul className="space-y-3">
            <li>
              <Link to={"#"}>Instrukcje obsługi pojazdów</Link>
            </li>
            <li>
              <Link to={"#"}>Katalog części</Link>
            </li>
            <li>
              <Link to={"#"}>Zarezerwuj konserwację</Link>
            </li>
            <li>
              <Link to={"#"}>Kontakt</Link>
            </li>
            <li>
              <Link to={"#"}>Mapa dealerów</Link>
            </li>
          </ul>
        </div>
        {/* fifth column */}
        <div>
          <h2 className="uppercase mb-5 text-[1.2rem] font-semibold tracking-wider">
            social
          </h2>
          <div className="flex gap-3">
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-w-7xl mx-auto lg:grid grid-cols-[1fr,2fr,1fr] items-center px-12 xl:px-5 py-10 text-[0.850rem] text-gray-300">
        <button className="px-3 py-2 w-fit bg-gray-900 border-[1px] border-slate-500 rounded-sm">
          Poland (Polish)
        </button>
        <p className="text-center">
          © Copyright - {new Date().getFullYear()} Yamaha Motor Europe N.V. -
          All Rights Reserved
        </p>
        <div className="underline flex items-center gap-5">
          <Link to={"#"}>Oświadczenie o ochronie prywatności</Link>
          <Link to={"#"}>Cookies</Link>
          <Link to={"#"}>Zasady i warunki</Link>
        </div>
      </div>

      {/* small size footer */}
      <div className="lg:hidden p-6">
        {/* first tab */}
        <div>
          <button
            type="button"
            className="flex items-center justify-between w-full border-t-[1px] border-slate-500 py-3"
            onClick={() => setFirstTabOpen(!firsTabOpen)}
          >
            <h2 className="uppercase text-[1.3rem] font-semibold tracking-wider">
              o firmie
            </h2>
            <Plus className={`${firsTabOpen && "rotate-45"} duration-300`} />
          </button>
          <ul className={`${firsTabOpen ? "block pb-6" : "hidden"} space-y-3`}>
            <li>
              <Link to={"#"}>O nas</Link>
            </li>
            <li>
              <Link to={"#"}>Aktualności</Link>
            </li>
            <li>
              <Link to={"#"}>Wydarzenia</Link>
            </li>
            <li>
              <Link to={"#"}>Polska strona prasowa</Link>
            </li>
            <li>
              <Link to={"#"}>Broszury</Link>
            </li>
            <li>
              <Link to={"#"}>Praca w Yamaha</Link>
            </li>
            <li>
              <Link to={"#"}>Zostań dealerem</Link>
            </li>
            <li>
              <Link to={"#"}>Zasady dotyczące praw człowieka</Link>
            </li>
            <li>
              <Link to={"#"}>Podstawowa polityka zrównoważonego rozwoju</Link>
            </li>
          </ul>
        </div>
        {/* second tab */}
        <div>
          <button
            type="button"
            className="flex items-center justify-between w-full border-t-[1px] border-slate-500 py-3"
            onClick={() => setSecondTabOpen(!secondTabOpen)}
          >
            <h2 className="uppercase text-[1.3rem] font-semibold tracking-wider">
              dla biznesu
            </h2>
            <Plus className={`${secondTabOpen && "rotate-45"} duration-300`} />
          </button>
          <ul
            className={`${secondTabOpen ? "block pb-6" : "hidden"} space-y-3`}
          >
            <li>
              <Link to={"#"}>Systemy Yamaha eBike</Link>
            </li>
            <li>
              <Link to={"#"}>Służby mundurowe</Link>
            </li>
            <li>
              <Link to={"#"}>Golf / Pojazdy funkcjonalne</Link>
            </li>
            <li>
              <Link to={"#"}>Ratownictwo</Link>
            </li>
            <li>
              <Link to={"#"}>Szkoły jazdy</Link>
            </li>
            <li>
              <Link to={"#"}>Robotics</Link>
            </li>
            <li>
              <Link to={"#"}>
                Informacje techniczne dla niezależnych dealerów
              </Link>
            </li>
          </ul>
        </div>
        {/* third tab */}
        <div>
          <button
            type="button"
            className="flex items-center justify-between w-full border-t-[1px] border-slate-500 py-3"
            onClick={() => setThirdTabOpen(!thirdTabOpen)}
          >
            <h2 className="uppercase text-[1.3rem] font-semibold tracking-wider">
              więcej yamaha
            </h2>
            <Plus className={`${thirdTabOpen && "rotate-45"} duration-300`} />
          </button>
          <ul className={`${thirdTabOpen ? "block pb-6" : "hidden"} space-y-3`}>
            <li>
              <Link to={"#"}>MyYamaha</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Music</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Racing</Link>
            </li>
            <li>
              <Link to={"#"}>Yamaha Motor Global</Link>
            </li>
            <li>
              <Link to={"#"}>Aplikacje mobilne</Link>
            </li>
          </ul>
        </div>
        {/* fourth tab */}
        <div className={`${fourthTabOpen && "border-b-[1px]"}`}>
          <button
            type="button"
            className={`${
              fourthTabOpen || "border-b-[1px]"
            } flex items-center justify-between w-full border-t-[1px] border-slate-500 py-3`}
            onClick={() => setFourthTabOpen(!fourthTabOpen)}
          >
            <h2 className="uppercase text-[1.3rem] font-semibold tracking-wider">
              wsparcie
            </h2>
            <Plus className={`${fourthTabOpen && "rotate-45"} duration-300`} />
          </button>
          <ul
            className={`${fourthTabOpen ? "block pb-6" : "hidden"} space-y-3`}
          >
            <li>
              <Link to={"#"}>Instrukcje obsługi pojazdów</Link>
            </li>
            <li>
              <Link to={"#"}>Katalog części</Link>
            </li>
            <li>
              <Link to={"#"}>Zarezerwuj konserwację</Link>
            </li>
            <li>
              <Link to={"#"}>Kontakt</Link>
            </li>
            <li>
              <Link to={"#"}>Mapa dealerów</Link>
            </li>
          </ul>
        </div>
        {/* fifth tab */}
        <div className="md:flex justify-between items-center mt-6 space-y-5 md:space-y-0">
          <button className="px-3 py-2 w-fit bg-gray-900 border-[1px] border-slate-500 rounded-sm">
            Poland (Polish)
          </button>
          <div className="flex gap-3">
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 duration-300 cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="py-10 text-[0.850rem] text-gray-300 space-y-6">
          <p className="text-center md:text-left mb-12 md:mb-0">
            © Copyright - {new Date().getFullYear()} Yamaha Motor Europe N.V. -
            All Rights Reserved
          </p>
          <div className="underline flex flex-col md:flex-row items-center gap-5">
            <Link to={"#"}>Oświadczenie o ochronie prywatności</Link>
            <Link to={"#"}>Cookies</Link>
            <Link to={"#"}>Zasady i warunki</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
