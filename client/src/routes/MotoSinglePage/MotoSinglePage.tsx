import { formatCurrencyPLN } from "@/utils/functions";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Karuzela from "@/components/Karuzela";
import Info from "@/components/Info";
import PriceInfo from "@/components/PriceInfo";
import Description from "./components/Description";
import MyrideApp from "./components/MyRideApp";
import { useEffect, useRef, useState } from "react";
import { Motorcycle } from "@/utils/types";
import TechData from "../../components/TechData";

const SingleMotoPage = () => {
    const moto = useLoaderData() as Motorcycle;
    const [searchParams] = useSearchParams();
    const colorName = searchParams.get("color");

    const {
      name,
      price,
      priceInfo,
      description,
      description2,
      description2Title,
      klauzula,
      images,
      colorNames,
      daneTechniczne,
    } = moto;
    const foundColor = colorNames.find((color) => color.name === colorName);

    return (
      <main>
        <section className="flex items-end h-80 md:h-screen px-10 bg-black/35 bg-blend-darken bg-center bg-cover" style={{ backgroundImage: `url(${images[3]})` }}>
          <div className="text-white h-fit w-full max-w-7xl mx-auto mb-24">
            <h2 className="text-[.8rem] md:text-[1rem] lg:text-[1.3rem] uppercase font-semibold">
              the beauty of work.
            </h2>
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] uppercase font-bold tracking-wider">
              {name}
            </h1>
            <p className="font-semibold mt-5">Od</p>
            <p className="text-[1.2rem] font-semibold">
              {formatCurrencyPLN(price)}
            </p>
          </div>
        </section>
        <section
          className="lg:flex gap-8  max-w-7xl mx-auto p-10 -mt-10 bg-white border-t-[8px]"
          style={{ borderColor: foundColor?.color }}
        >
          <Karuzela images={images} name={name} />
          <Info
            name={name}
            price={price}
            description={description}
            colorNames={colorNames}
          />
        </section>
        <section className="mt-10 max-w-7xl mx-auto p-5">
          <PriceInfo
            colorNames={colorNames}
            name={name}
            price={price}
            priceInfo={priceInfo}
          />
          <Description
            description2={description2}
            description2Title={description2Title}
          />
          {/* <TechDataMoto
            daneTechniczne={daneTechniczne}
          /> */}
          <TechData daneTechniczne={daneTechniczne}/>
        </section>
        <section className="my-24 max-w-7xl mx-auto p-5">
          <MyrideApp />
        </section>
        <Klauzula klauzula={klauzula} />
      </main>
    )
};

export default SingleMotoPage;

type KlauzulaProps = {
  klauzula: string;
};

const Klauzula = ({ klauzula }: KlauzulaProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const klauzulaRef = useRef<HTMLDivElement>(null);
  const [klauzulaHeight, setKlauzulaHeight] = useState(
    klauzulaRef.current?.scrollHeight
  );

  useEffect(() => {
    setKlauzulaHeight(klauzulaRef.current?.scrollHeight);
  }, [isOpen, klauzulaHeight]);

  return (
    <div className="bg-black/80 text-white">
      <div
        
        className="max-w-7xl mx-auto pt-2 pb-1 pl-5 flex items-start justify-between gap-x-6 leading-7"
      >
        <div className="flex">
          <p
            ref={klauzulaRef}
            style={{
              height: isOpen ? `${klauzulaHeight}px` : "32px",
              paddingBottom: isOpen ? 20 : 0,
            }}
            className="font-light text-justify overflow-hidden duration-500"
          >
            <span className="font-medium">Klauzula:</span> {klauzula}
            
          </p>
          {isOpen || <span>...</span>}
        </div>
        <button
          type="button"
          className="mt-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdKeyboardArrowDown
            size={20}
            className={`${isOpen && "rotate-180"} duration-300`}
          />
        </button>
      </div>
    </div>
  );
};
