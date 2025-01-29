import { formatCurrencyPLN } from "@/utils/functions";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

type Color = {
  name: string;
  color: string;
};

type InfoProps = {
  name: string;
  price: number;
  description: string;
  colorNames: Color[];
};

const Info = ({ name, price, description, colorNames }: InfoProps) => {
  const [isTextOpen, setTextOpen] = useState(false);
  const [searchParams] = useSearchParams();
  
  const colorName = searchParams.get("color") || "Racing Blue";
  
  return (
    <article className="mt-12 lg:mt-0">
      <h1 className="text-[2rem] uppercase tracking-wider font-bold">{name}</h1>
      <p className="text-slate-600 mt-4 mb-10 lg:w-[470px] text-justify">
        {isTextOpen ? description : description.slice(0, 165)}

        {isTextOpen ? null : <span>...</span>}
        <button
          className="font-medium ml-2 cursor-pointer"
          onClick={() => setTextOpen(!isTextOpen)}
        >
          {isTextOpen ? "Mniej" : "Więcej"}
        </button>
      </p>
      <div>
        <p className="font-semibold">
          Colors: <span className="text-slate-600">{colorName}</span>
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        {colorNames.map((color, index) => {
          return (
            <Link
              to={`?${new URLSearchParams({
                color: color.name,
              })}`}
              key={index}
              className={`${
                colorName === color.name ? "border-black" : "border-transparent"
              } border-2 rounded-full p-1`}
              
            >
              <div
                style={{ backgroundColor: `${color.color}` }}
                className="h-8 w-8 rounded-full"
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-5 border-t-2 border-b-2 py-2">
        <h4 className="text-[1.3rem] font-semibold">Total:</h4>
        <h4 className="text-[1.8rem] font-semibold">
          {formatCurrencyPLN(price)}
        </h4>
      </div>
    </article>
  );
};

export default Info;
