import { Switch } from "@/components/ui/switch";
import { useSearchParams } from "react-router-dom";


const Version35kW = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const isLimited = searchParams.get("LimitedPowerVersion") === "true";

  const handleChange = () => {
    const params = new URLSearchParams(searchParams);

    if (isLimited) {
      params.delete("LimitedPowerVersion");
    } else {
      params.set("LimitedPowerVersion", "true");
    }
    
    setSearchParams(params);
  };

  return (
    <div>
      <label htmlFor="35kW" className="font-semibold text-[.8rem] mdCustom:text-[.765rem] lg:text-[.8rem]">Czy dostepna jest wersja 35kW?</label>
      <div className="flex mt-2 items-center justify-between rounded-md border-2 border-slate-300 px-5 py-2">
        <span>{isLimited ? "Włączone" : "Wyłączone"}</span>

        <Switch checked={isLimited} id="35kW" onCheckedChange={handleChange} />
      </div>
    </div>
  );
};

export default Version35kW;



// const [is35kW, setIs35kW] = useState(() => {
  //   return searchParams.get("LimitedPowerVersion") === "true";
  // });


  // const newValue = !is35kW;
    // setIs35kW(newValue);