import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import ScrollComponent from "@/components/ScrollComponent";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CompareVehicles from "../components/CompareVehicles";

const Layout = () => {
  return (
    <div className="max-w-[100rem] m-auto">
      <ScrollToTop />
      <Navbar />
      <div className="mt-[84px]">
        <Outlet />
      </div>
      <Footer />
      <CompareVehicles />
      <ScrollComponent />
      <Overlay />
    </div>
  );
};
export default Layout;
