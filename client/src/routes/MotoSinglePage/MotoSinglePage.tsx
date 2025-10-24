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
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";

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
        <Helmet>
        <title>{name.charAt(0).toUpperCase() + name.slice(1)}</title>
        <meta 
          name="description" 
          content={`Szczegóły produktu ${name}. ${description}`} 
        />
      </Helmet>
        <Hero name={name} price={price} images={images}/>
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
          aria-label={isOpen ? "Close clause": "Open clause"}
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
