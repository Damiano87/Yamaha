

// import { atv } from "../../../data";
// import { useState } from "react";

import { formatCurrencyPLN } from "@/utils/functions";
// import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Atv } from "../../../utils/types"

type AtvsListProps = {
  atvs: Atv[]
}

const AtvsList = ({atvs}: AtvsListProps) => {
  // const [atvs] = useState(atv);
//   const searchParams = useSearchParams();
//   const params = new URLSearchParams(searchParams);
//   const word = params.get("search");
//   console.log(word);

//   useEffect(() => {
//     const searchVehicles = () => {
//       if (word) {
//         const filteredArray = atv.filter((vehicle) =>
//           vehicle.name.includes(word)
//         );
//         setAtvs(filteredArray);
//         console.log(atvs);
//       } else {
//         setAtvs(atv);
//       }
//     };
//     searchVehicles();
//   }, [word]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
      {atvs?.map((atv, index) => {
        const { id, name, images, price, colorNames } = atv;

        return (
          <Link
            to={`/atv/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            key={index}
            preventScrollReset={false}
          >
            <article>
              <div
                className="inline-flex items-center gap-3 p-2"
                onClick={(event) => event.stopPropagation()}
              >
                <input
                  type="checkbox"
                  id={`compare-${id}`}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor={`compare-${id}`} className="cursor-pointer">
                  Porównaj
                </label>
              </div>
              <div className="relative aspect-[16/9]">
                <img
                  src={images[0]}
                  
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-contain"
                  alt={name}
                />
              </div>
              <p className="uppercase font-semibold text-[1.2rem] my-2">
                {name}
              </p>
              <p>{formatCurrencyPLN(price)}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default AtvsList;
