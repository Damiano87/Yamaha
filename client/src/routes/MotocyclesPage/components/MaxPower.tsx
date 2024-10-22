"use client";

import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import { Range, getTrackBackground } from "react-range";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { Motorcycle } from "../../../utils/types";
import { motocycles } from "../../../data";

type MaxPowerProps = {
  motors: Motorcycle[];
  setMotors: React.Dispatch<React.SetStateAction<Motorcycle[]>>;
};

const MaxPower = ({ motors, setMotors }: MaxPowerProps) => {
  const [isclicked, setIsClicked] = useState(false);
  const [values, setValues] = useState([11, 147]);

  // get motocycles power range
  const MotorcyclePowerParam = useSearchParams()?.get("MotorcyclePower");

  const formattedText = MotorcyclePowerParam?.split(" to ");

  return (
    <div>
      <p className="mb-2 font-semibold">Maksymalna moc silnika</p>
      <div className="relative">
        <button
          className="flex w-[300px] items-center justify-between rounded-md border border-slate-300 px-5 py-2"
          onClick={() => setIsClicked(!isclicked)}
        >
          <p>
            {formattedText
              ? `${formattedText[0]}kW - ${formattedText[1]}kW`
              : "Wybierz zakres"}
          </p>
          <MdOutlineArrowDropDown
            size={20}
            className={`${isclicked && "rotate-180"}`}
          />
        </button>
        {isclicked && (
          <div className="absolute z-50 mt-3 w-full rounded-md bg-white px-2 pb-2 shadow-md">
            <RangeSlider
              values={values}
              setValues={setValues}
              setIsClicked={setIsClicked}
              motors={motors}
              setMotors={setMotors}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MaxPower;

type RangeSliderProps = {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  motors: Motorcycle[];
  setMotors: React.Dispatch<React.SetStateAction<Motorcycle[]>>;
};

const RangeSlider = ({
  values,
  setValues,
  setIsClicked,
  motors,
  setMotors,
}: RangeSliderProps) => {
  const STEP = 1;
  const MIN = 11;
  const MAX = 147;
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const params = new URLSearchParams(searchParams);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input1 = formData.get("input1") as string;
    const input2 = formData.get("input2") as string;
    const combinedInput = `${input1} to ${input2}`;

    // set query param
    if (combinedInput) {
      params.set("MotorcyclePower", combinedInput);
    } else {
      params.delete("MotorcyclePower");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });

    setIsClicked(false);

    // filter motocycles based on Power range
    const MotorcyclePowerParam = params?.get("MotorcyclePower");

    const firstParam = Number(MotorcyclePowerParam?.split(" to ")[0]);
    const secondParam = Number(MotorcyclePowerParam?.split(" to ")[1]);

    const filteredMotors = motocycles.filter(
      (motor) => motor.maxPower >= firstParam && motor.maxPower <= secondParam,
    );
    console.log(firstParam, secondParam);
    setMotors(filteredMotors);

    console.log(filteredMotors);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "95%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "18px",
              width: "18px",
              borderRadius: "50%",
              backgroundColor: "#548BF4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          ></div>
        )}
      />
      <form onSubmit={handleSubmit} className="mt-5 flex items-center gap-3">
        <output className="flex items-center">
          <div className="relative">
            <input
              type="text"
              name="input1"
              value={values[0]}
              onChange={(e) => setValues([Number(e.target.value), values[1]])}
              className="w-full rounded-md border-2 py-2 pl-3 pr-9"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">kW</div>
          </div>

          <span className="mx-2"> - </span>
          <div className="relative">
            <input
              type="text"
              name="input2"
              value={values[1]}
              onChange={(e) => setValues([values[0], Number(e.target.value)])}
              className="w-full rounded-md border-2 py-2 pl-3 pr-9"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">kW</div>
          </div>
        </output>
        <button
          type="submit"
          className="flex items-center justify-center rounded-full bg-slate-200 p-3"
        >
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};
