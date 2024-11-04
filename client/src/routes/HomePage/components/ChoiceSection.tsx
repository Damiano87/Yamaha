import Atv from "./Atv";
import Motorcycle from "./Motorcycle";


const ChoiceSection = () => {
  return (
    <section className="h-screen after:content-[''] after:bg-custom-gradient-after after:h-[80px] after:absolute after:-top-10 after:left-0 after:right-0 after:skew-y-3 grid place-content-center bg-custom-gradient relative text-center"
      
    >

  
      <div className="md:inline-flex gap-32 lg:gap-52">
        <Motorcycle />
        <Atv />
      </div>
      
    </section>
  );
};

export default ChoiceSection;


