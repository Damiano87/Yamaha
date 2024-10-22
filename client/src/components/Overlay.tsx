import { useDropdownContext } from "@/hooks/useDropdownContext";

const Overlay = () => {
  const { showMenu } = useDropdownContext();
  return (
    <div
      className={`${
        showMenu ? "opacity-50 z-[7]" : "opacity-0 -z-10"
      } fixed inset-0 w-screen h-screen bg-black duration-300`}
    ></div>
  );
};

export default Overlay;
