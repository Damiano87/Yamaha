import { useState, useEffect } from "react"





const UpperPanel = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
    // Funkcja obsługująca przewijanie
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Dodanie event listenera przy montowaniu komponentu
    window.addEventListener("scroll", handleScroll);

    // Usunięcie event listenera przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isOpen ? "translate-y-0" : "-translate-y-full"} fixed z-[2] transition-all duration-300 top-[calc(83px)] left-0 bg-lime-600 w-full h-[6rem]`}>UpperPanel</div>
  )
}
export default UpperPanel