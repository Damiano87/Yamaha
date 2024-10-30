import SortVehicles from "@/components/SortVehicles";
import AtvsList from "./components/AtvsList";
import Search from "@/components/Search";
import { Atv } from "@/utils/types";
import { useLoaderData } from "react-router-dom";
import Hero from "./components/Hero";
import CompareAtvs from "./components/CompareAtvs";

const AtvPage = () => {
  const atvs = useLoaderData() as Atv[];

  return (
    <>
      <Hero />
      <section className="border-t-[6px] border-blue-800 mt-14 max-w-7xl mx-auto">
        <div className="flex items-center md:justify-end h-44">
          <div className="md:flex px-5 items-center gap-5 w-full md:w-auto space-y-5 md:space-y-0">
            <Search label={false}/>
            <SortVehicles />
          </div>
        </div>
        <AtvsList atvs={atvs} />
        {!atvs?.length && <div className="flex justify-center h-[10rem]"><p className="text-[1.5rem]">Nie znaleziono żadnych pojazdów...</p></div>}
      </section>
      <CompareAtvs />
    </>
  );
};

export default AtvPage;
