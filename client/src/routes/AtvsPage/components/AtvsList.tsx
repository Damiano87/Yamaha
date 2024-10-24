import { formatCurrencyPLN } from "@/utils/functions";
import { Link } from "react-router-dom";
import { Atv } from "../../../utils/types"
import { MdOutlineBrowserUpdated } from "react-icons/md";

type AtvsListProps = {
  atvs: Atv[]
}

const AtvsList = ({atvs}: AtvsListProps) => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
      {atvs?.map((atv, index) => {
        const { id, name, images, price, colorNames } = atv;

        return (
          <article key={index} className="relative">
            <Link to={`/update-atv/${id}`}>
                <MdOutlineBrowserUpdated size={30} className="absolute top-2 right-2 text-gray-500"/>
              </Link>
            <Link
            to={`/atv/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            preventScrollReset={false}
          >
            <div>
              
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
            </div>
          </Link>
          </article>
        );
      })}
    </div>
  );
};

export default AtvsList;
