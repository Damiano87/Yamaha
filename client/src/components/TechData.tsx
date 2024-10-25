import {
  type daneTech, TechMoto, DaneTechniczneKeys
} from "@/utils/types";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Dane from "@/components/Dane";

type daneTechProps = {
  daneTechniczne: daneTech | TechMoto;
};



const TechData = ({
  daneTechniczne
}: daneTechProps) => {
  const [clickedButton, setClickedButton] =
    useState<DaneTechniczneKeys>("silnik");
  const [page, setPage] = useState(0);
  const [tabs, setTabs] = useState<DaneTechniczneKeys[]>(["silnik"]);

    useEffect(() => {
      // filter out null values from object
    const entries = Object.entries(daneTechniczne);
    const filteredNull = entries.filter((item) => item[1] !== null)
    
    // create array of keys from filteredNull object
    setTabs(filteredNull.map((item) => item[0] as DaneTechniczneKeys))
    }, [page, daneTechniczne])
    
    
  // split names of feauters
  const splitNames = (tab: string) => {
    if (tab === "informacjeDodatkowe") {
      return "Informacje dodatkowe"
    }
    else if (tab === "obciazenieMaksymalne") {
      return "Obciążenie maksymalne"
    }
     return tab               
  }

  

  const handleChange = (value: string) => {
    setClickedButton(value as DaneTechniczneKeys);
    setPage(tabs.indexOf(value as DaneTechniczneKeys))
  };

  if (daneTechniczne) {
    return (
      <div className="mb-24">
        <h2 className="text-[1.3rem] md:text-[2rem] uppercase font-semibold mb-5">
          dane techniczne
        </h2>
        <div>
          <div className="hidden lg:flex gap-3 border-b-2">
            {tabs?.map((tab, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index === page && "border-b-red-500"
                  } px-2 py-3 text-[1.1rem] capitalize border-b border-transparent hover:border-slate-800 hover:bg-slate-100 duration-300`}
                  onClickCapture={() => {
                    setPage(index);
                    setClickedButton(tab);
                  }}
                >
                 {tab && splitNames(tab)}
                </button>
              );
            })}
          </div>

          <Select value={clickedButton} onValueChange={handleChange}>
            <SelectTrigger className="w-full lg:hidden capitalize font-semibold p-5 py-6 border border-black">
              <SelectValue placeholder={clickedButton} />
            </SelectTrigger>
            <SelectContent>
              {tabs?.map((tab, index) => {
                return (
                  <SelectItem key={index} value={tab} className="capitalize">
                    
                     { tab && splitNames(tab)}
                      
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <div>
            <Dane
              daneTechniczne={daneTechniczne}
              clickedButton={clickedButton}
              page={page}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default TechData;