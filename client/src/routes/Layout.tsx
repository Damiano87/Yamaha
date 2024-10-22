import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import ScrollComponent from "@/components/ScrollComponent";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const Layout = () => {
  return (
    <div className="max-w-[100rem] m-auto">
      <ScrollToTop />
      <Navbar />
      <div className="mt-[84px]">
        <Outlet />
      </div>
      <Footer />
      <ScrollComponent />
      <Overlay />
    </div>
  );
};
export default Layout;
