import logo from "../images/logo.webp";
import { useRef, useState } from "react";
import { useDropdownContext } from "../hooks/useDropdownContext";
import DropdownMenu from "../components/DropdownMenu";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import RegisterButton from "@/routes/Register/RegisterButton";
import WishNumber from "./WishNumber";
import Hamburger from "./Hamburger";


const Navbar = () => {
  const { showMenu, setShowMenu } = useDropdownContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);

  // open dropdown menu
  const show = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 bg-white w-full px-2 py-3 z-10 shadow-bottom-only"
    >
      {/* logo and nasze modele buttons */}
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to={'/'}>
            <img src={logo} width={60} height={60} alt="yamaha logo" />
          </Link>
          <div className="hidden lg:block bg-slate-400 h-6 w-[0.075rem] mx-6" />
          <h4
            ref={buttonRef}
            className="hidden lg:block text-[0.9rem] uppercase font-semibold hover:underline cursor-pointer"
            onClick={show}
          >
            nasze modele
          </h4>
          
        </div>


        <div className="flex items-center gap-3">
          {/* wish number */}
          <WishNumber />
          {/* register button  */}
          <RegisterButton />
        
        {/* hamburger button */}
        <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <DropdownMenu buttonRef={buttonRef} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navRef={navRef}
        />
      </div>
    </nav>
  );
};

export default Navbar;
