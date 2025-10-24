

import { formatCurrencyPLN } from "@/utils/functions";
import { Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Color = {
  name: string;
  color: string;
};

type priceInfoProps = {
  colorNames: Color[];
  name: string;
  price: number;
  priceInfo: string;
};

const PriceInfo = ({ colorNames, name, price, priceInfo }: priceInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && dropRef.current) {
      const scrollHeight = dropRef.current.scrollHeight;
      setHeight(scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  // opens dropdown
  const openInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="border-t-2 border-b-2 mb-5 pb-5">
      <button
        type="button"
        className={`${
          isOpen ? "pb-5" : "pb-0"
        } flex w-full justify-between pt-5`}
        aria-label={isOpen ? "Close tab" : "Open tab"}
        onClick={openInfo}
      >
        <p className="font-bold">Wszystkie informacje o cenach</p>
        <Plus className={`${isOpen ? "rotate-45" : "rotate-0"} duration-300`} />
      </button>
      <div
        className={`${
          isOpen ? "pb-5" : "overflow-hidden"
        } transition-all duration-300 ease-in-out`}
        ref={dropRef}
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        {colorNames.map((color, index) => {
          return (
            <div
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-200"}
            >
              <div className="flex justify-between px-4 py-3">
                <span className="uppercase font-medium">
                  {name} <span className="capitalize">{color.name}</span>
                </span>
                <span className="text-[1.2rem] font-bold">
                  {formatCurrencyPLN(price)}
                </span>
              </div>
              <div className="px-4 py-3">
                <span className="text-[.7rem]">{priceInfo}</span>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default PriceInfo;
