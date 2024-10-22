

// import { motocycles } from "../../../data";
// import { useEffect } from "react";
import { formatCurrencyPLN } from "@/utils/functions";
import { Motorcycle } from "../../../utils/types";
import { Link, useSearchParams } from "react-router-dom";

const MotocyclesList = ({
  motors,
  // setMotors,
}: {
  motors: Motorcycle[];
  // setMotors: React.Dispatch<React.SetStateAction<Motorcycle[]>>;
}) => {
  const [searchParams] = useSearchParams();
  // const params = new URLSearchParams(searchParams);
  // const word = params.get("search");

  // useEffect(() => {
  //   const searchVehicles = () => {
  //     if (word) {
  //       const filteredArray = motocycles.filter((vehicle) =>
  //         vehicle.name.includes(word),
  //       );
  //       setMotors(filteredArray);
  //       console.log(motors);
  //     } else {
  //       setMotors(motocycles);
  //     }
  //   };
  //   searchVehicles();
  // }, [word, motors, setMotors]);

  return (
    <div className="relative z-[1] grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
      {motors.map((moto, index) => {
        const { id, name, images, price, colorNames, license } = moto;

        return (
          <Link
            to={`/motocycles/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            key={index}
          >
            <article>
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
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default MotocyclesList;
