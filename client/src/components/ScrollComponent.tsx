import { useFooterContext } from "@/hooks/useFooterContext";
import { ArrowBigUpDash } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(20);
  const { footerHeight } = useFooterContext();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 400; // Wysokość okna, na której element ma się pojawić

      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY;

      if (scrollPosition >= triggerPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (distanceFromBottom < footerHeight) {
        setOffset(footerHeight - distanceFromBottom + 10);
      } else {
        setOffset(30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, footerHeight]);

  return (
    <button
      onClick={scrollToTop}
      className={`hidden fixed right-5 lg:flex justify-center items-center text-white rounded-full w-12 h-12  hover:bg-black transition-opacity duration-500 ease-in-out ${
        isVisible ? "bg-black/60" : "opacity-0"
      }`}
      style={{ bottom: `${offset}px` }}
    >
      <ArrowBigUpDash />
    </button>
  );
};

export default ScrollComponent;
