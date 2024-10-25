import { formatCurrencyPLN } from "@/utils/functions";
import { Motorcycle } from "../../../utils/types";
import { Link } from "react-router-dom";
import { MdOutlineBrowserUpdated } from "react-icons/md";


const MotocyclesList = ({
  motors,
}: {
  motors: Motorcycle[];
}) => {
  return (
    <div className="relative z-[1] grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
      {motors.map((moto, index) => {
        const { id, name, images, price, colorNames, license } = moto;

        return (
          <article key={index} className="relative">
            <Link to={`/update-moto/${id}`} title="Update motocycle">
                <MdOutlineBrowserUpdated size={30} className="absolute top-[1.2rem] right-11 text-gray-500"/>
            </Link>
            <Link
            to={`/motocycles/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
          >
            <div>
              <div className="flex items-center justify-between px-5 py-3">
                <div
                  className="inline-flex items-center gap-3 p-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    id={`compare-${id}`}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor={`compare-${id}`} className="cursor-pointer">
                    Porównaj
                  </label>
                </div>
                <p className="font-bold text-red-600">{license}</p>
              </div>
              <div className="relative aspect-[16/9]">
                <img
                  src={images[0]}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-contain"
                  alt={name}
                />
              </div>
              <p className="my-2 text-[1.2rem] font-semibold uppercase">
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

export default MotocyclesList;
