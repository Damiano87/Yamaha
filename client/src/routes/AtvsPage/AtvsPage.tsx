import AtvsList from "./components/AtvsList";
import Search from "@/components/Search";
import { Atv } from "@/utils/types";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const AtvPage = () => {
  const atvs = useLoaderData() as Atv[];

  return (
    <>
      <section className="flex items-end m-auto max-w-[95rem] h-[900px] bg-[url('images/coolquad.jpeg')] bg-black/35 bg-blend-darken bg-cover bg-center bg-no-repeat">
        <div className="text-white max-w-7xl w-full mx-auto mb-14 px-5">
          <h4 className="uppercase text-slate-200 text-[1.2rem] font-semibold tracking-wider">
            #drivenbyvictory
          </h4>
          <h1 className="uppercase text-slate-200 text-[2.5rem] font-bold tracking-wider">
            atv - sport & utility
          </h1>
          <div className="flex items-center gap-3 text-slate-200">
            <IoMdInformationCircleOutline />
            <p>
              Profesjonalny zawodnik demonstrujący zaawansowane umiejętności w
              zamkniętym obszarze.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t-[6px] border-blue-800 mt-14 max-w-7xl mx-auto">
        <Search />
        <AtvsList atvs={atvs}/>
      </section>
    </>
  );
};

export default AtvPage;
