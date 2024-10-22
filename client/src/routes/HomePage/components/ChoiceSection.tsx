import motocycles from "../../../images/Yamaha-Motorcycle-Transparent-Image.png";
import atvs from "../../../images/atv-transparent.png";
import { Link } from "react-router-dom";

const ChoiceSection = () => {
  return (
    <section className="h-screen after:content-[''] after:bg-custom-gradient-after after:h-[80px] after:absolute after:-top-10 after:left-0 after:right-0 after:skew-y-3 grid place-content-center bg-custom-gradient relative text-center"
      
    >

  
      <div className="md:inline-flex gap-32 lg:gap-52">
        <Link
          to={"/motocycles"}
          className="p-3"
        >
          <div className="flex hover:scale-105 duration-300 flex-col justify-between h-[220px] aspect-square">
            <img src={motocycles}  alt="motocycle" className="w-full h-full object-contain"/>
            <h4 className="uppercase font-semibold tracking-wider text-white">
              motocykle
            </h4>
          </div>
        </Link>
        <Link
          to={"/atv"}
          className="p-3"
        >
          <div className="flex hover:scale-105 duration-300 flex-col justify-between h-[220px] aspect-square">
            <img src={atvs}  alt="atv vehicle" className="w-full h-full object-contain" />
            <h4 className="uppercase font-semibold tracking-wider text-white">atv</h4>
          </div>
        </Link>
      </div>
      
    </section>
  );
};

export default ChoiceSection;


