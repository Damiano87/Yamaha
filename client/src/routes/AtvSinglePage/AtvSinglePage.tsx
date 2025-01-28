
import { formatCurrencyPLN } from "@/utils/functions";

import Karuzela from "@/components/Karuzela";
import Info from "@/components/Info";
import PriceInfo from "@/components/PriceInfo";
import TechData from "../../components/TechData";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { Atv } from "@/utils/types";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const SingleAtvProduct = () => {
  const foundAtv = useLoaderData() as Atv;
  
   const [searchParams] = useSearchParams();
  const colorName = searchParams.get("color");
  const [color, setColor] = useState<string | null>(colorName)


  const {name, price, priceInfo, description, images, colorNames, daneTechniczne} = foundAtv
    


    useEffect(() => {
      const foundColor = colorNames.find(color => color.name === colorName);
      setColor(foundColor?.color || null)
    }, [color, colorName, colorNames])


    return (
      <main>
        <Helmet>
        <title>{name.charAt(0).toUpperCase() + name.slice(1)}</title>
        <meta 
          name="description" 
          content={`Szczegóły produktu ${name}. ${description}`} 
        />
      </Helmet>
        <section 
          className="flex items-end h-80 md:h-screen px-10 bg-cover bg-black/65 bg-blend-darken bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${images[3]})` }}
        >
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
          style={{ borderColor: color || undefined }}
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
          <TechData
            daneTechniczne={daneTechniczne}
          />
        </section>
      </main>
    );
  }

export default SingleAtvProduct;