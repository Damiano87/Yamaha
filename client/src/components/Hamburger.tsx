import { GiHamburgerMenu } from "react-icons/gi";
import { X } from "lucide-react";

type HamburgerProps = {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Hamburger = ({sidebarOpen, setSidebarOpen}: HamburgerProps) => {
  return (
    <button
          type="button"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="p-2 hover:bg-slate-200 rounded-full lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <GiHamburgerMenu className="text-[1.4rem]" />}
        </button>
  )
}
export default Hamburger