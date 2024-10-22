

// import MaxPower from "./components/MaxPower";
import MotocyclesList from "./components/MotocyclesList";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
// import { motocycles } from "../../data";
import Version35kW from "./components/Version35kW";
import { useLoaderData } from "react-router-dom";
import { Motorcycle } from "@/utils/types";

const MotoPage = () => {
  // const [motors, setMotors] = useState(motocycles);
  const [is35kW, setIs35kW] = useState(false);
  const motors = useLoaderData() as Motorcycle[];

  
  return (
    <>
      <section className="m-auto mt-20 flex h-[900px] max-w-[95rem] items-end bg-[url('images/yamahared.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto mb-24 w-full max-w-7xl px-5 text-white">
          <h4 className="text-[1.2rem] font-semibold uppercase tracking-wider">
            r/world
          </h4>
          <h1 className="text-[2.5rem] font-bold uppercase tracking-wider">
            supersport
          </h1>
          <div className="flex items-center gap-3">
            <IoMdInformationCircleOutline />
            <p>
              Profesjonalny zawodnik demonstrujący zaawansowane umiejętności w
              zamkniętym obszarze.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto -mt-10 max-w-7xl border-t-[6px] border-blue-800 bg-white">
        <div className="m-10 flex gap-x-6">
          {/* <MaxPower motors={motors} setMotors={setMotors} /> */}
          <Version35kW is35kW={is35kW} setIs35kW={setIs35kW} />
        </div>
        <MotocyclesList motors={motors}  />
      </section>
    </>
  );
};

export default MotoPage;

// setMotors={setMotors}