import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// type VersionProps = {
//   is35kW: boolean;
//   setIs35kW: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Version35kW = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [is35kW, setIs35kW] = useState(() => {
    return searchParams.get("LimitedPowerVersion") === "true";
  });

  

  const handleChange = () => {
    
    const newValue = !is35kW;
    setIs35kW(newValue);
    
    const params = new URLSearchParams(searchParams);
    
    if (newValue) {
      params.set("LimitedPowerVersion", "true");
    } else {
      params.delete("LimitedPowerVersion");
    }
    
    setSearchParams(params);
  };

  return (
    <div className="w-[300px]">
      <label htmlFor="35kW" className="font-semibold">Czy dostepna jest wersja 35kW?</label>
      <div className="flex mt-2 items-center justify-between rounded-md border-2 border-slate-300 px-5 py-2">
        <span>{is35kW ? "Włączone" : "Wyłączone"}</span>

        <Switch checked={is35kW} id="35kW" onCheckedChange={handleChange} />
      </div>
    </div>
  );
};

export default Version35kW;
