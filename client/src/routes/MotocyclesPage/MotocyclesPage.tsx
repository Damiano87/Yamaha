// import MaxPower from "./components/MaxPower";
import MotocyclesList from "./components/MotocyclesList";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Version35kW from "./components/Version35kW";
import { useLoaderData } from "react-router-dom";
import { Motorcycle } from "@/utils/types";
import Search from "@/components/Search";
import SortVehicles from "@/components/SortVehicles";

const MotoPage = () => {
  const motors = useLoaderData() as Motorcycle[];

  
  return (
    <>
      <section className="m-auto  flex h-screen items-end bg-[url('images/yamahared.jpg')] bg-cover bg-no-repeat">
        <div className="mx-auto mb-28 w-full max-w-7xl px-5 text-white">
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
        <div className="flex justify-end m-10">
          <SortVehicles />
        </div>
        <div className="mb-10 mx-10 flex gap-x-6">
          {/* <MaxPower motors={motors} setMotors={setMotors} /> */}
          <Version35kW />
          <Search label={true}/>
        </div>
        <MotocyclesList motors={motors}  />
        {!motors?.length && <div className="flex justify-center h-[10rem]"><p className="text-[1.5rem]">Nie znaleziono żadnych pojazdów...</p></div>}
      </section>
    </>
  );
};

export default MotoPage;

// setMotors={setMotors}