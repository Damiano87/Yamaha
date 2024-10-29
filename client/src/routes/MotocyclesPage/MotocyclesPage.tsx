import Hero from "./components/Hero";
import MotocyclesList from "./components/MotocyclesList";
import Version35kW from "./components/Version35kW";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Motorcycle } from "@/utils/types";
import Search from "@/components/Search";
import SortVehicles from "@/components/SortVehicles";
import MaxPower from "./components/MaxPower";
import MotocyclesListSkeleton from "@/components/ListSkeleton";
import License from "./components/License";
import ResetFilters from "./components/ResetFilters";

const MotoPage = () => {
  const motors = useLoaderData() as Motorcycle[];
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  return (
    <>
      <Hero />
      <section className="mx-auto -mt-10 max-w-7xl border-t-[6px] border-blue-800 bg-white">
        <div className="md:flex items-center space-y-5 md:space-y-0 justify-end gap-x-4 mx-5 md:mx-10 my-10">
          <ResetFilters />
          <SortVehicles />
        </div>
        <div className="mb-10 mx-5 md:mx-10 mdCustom:grid grid-cols-4 gap-x-6 space-y-8 mdCustom:space-y-0">
          <License />
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
