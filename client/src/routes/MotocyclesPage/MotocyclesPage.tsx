import MotocyclesList from "./components/MotocyclesList";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Version35kW from "./components/Version35kW";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Motorcycle } from "@/utils/types";
import Search from "@/components/Search";
import SortVehicles from "@/components/SortVehicles";
import MaxPower from "./components/MaxPower";
import MotocyclesListSkeleton from "@/components/ListSkeleton";
const MotoPage = () => {
  const motors = useLoaderData() as Motorcycle[];
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  return (
    <>
      <section className="m-auto  flex h-80 md:h-screen items-end bg-[url('images/yamahared.jpg')] bg-cover bg-no-repeat">
        <div className="mx-auto mb-16 md:mb-28 w-full max-w-7xl px-5 text-white">
          <h4 className="md:text-[1.2rem] font-semibold uppercase tracking-wider">
            r/world
          </h4>
          <h1 className="text-[1.7rem] md:text-[2.5rem] font-bold uppercase tracking-wider">
            supersport
          </h1>
          <div className="flex items-center gap-3">
            <IoMdInformationCircleOutline />
            <p className="text-[.7rem] md:text-[1rem]">
              Profesjonalny zawodnik demonstrujący zaawansowane umiejętności w
              zamkniętym obszarze.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto -mt-10 max-w-7xl border-t-[6px] border-blue-800 bg-white">
        <div className="flex justify-end mx-5 md:mx-10 my-10">
          <SortVehicles />
        </div>
        <div className="mb-10 mx-5 md:mx-10 mdCustom:grid grid-cols-3 gap-x-6 space-y-8 md:space-y-0">
          <MaxPower/>
          <Version35kW />
          <Search label={true}/>
        </div>
        {isLoading ? <MotocyclesListSkeleton /> : <MotocyclesList motors={motors} />}
        {!motors?.length && <div className="flex justify-center h-[10rem]"><p className="text-[1.5rem]">Nie znaleziono żadnych pojazdów...</p></div>}
      </section>
    </>
  );
};

export default MotoPage;
