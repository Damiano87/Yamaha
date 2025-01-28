import SortVehicles from "@/components/SortVehicles";
import AtvsList from "./components/AtvsList";
import Search from "@/components/Search";
import { Atv } from "@/utils/types";
import { useLoaderData } from "react-router-dom";
import Hero from "./components/Hero";
import { Helmet } from "react-helmet-async";

const AtvPage = () => {
  const atvs = useLoaderData() as Atv[];

  return (
    <>
    <Helmet>
        <title>Atv - Yamaha Motors</title>
        <meta 
          name="description" 
          content="Odkryj naszą ofertę atv. Yamaha Motors to lider na rynku atv, oferując najwyższej jakości pojazdy dla każdego. Sprawdź nasze modele i wybierz idealny dla Ciebie atv."
        />
      </Helmet>
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
    </>
  );
};

export default AtvPage;
