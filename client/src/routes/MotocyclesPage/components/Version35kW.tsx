import { Switch } from "@/components/ui/switch";

type VersionProps = {
  is35kW: boolean;
  setIs35kW: React.Dispatch<React.SetStateAction<boolean>>;
};
const Version35kW = ({ is35kW, setIs35kW }: VersionProps) => {
  const handlechange = () => {
    setIs35kW(!is35kW);
    if (!is35kW) {
      console.log("tak");
    } else {
      console.log("nie");
    }
  };

  return (
    <div className="w-[300px]">
      <p className="mb-2 font-semibold">Czy dostepna jest wersja 35kW?</p>
      <div className="flex items-center justify-between rounded-md border border-slate-300 px-5 py-2">
        <span>{is35kW ? "Włączone" : "Wyłączone"}</span>

        <Switch checked={is35kW} onCheckedChange={handlechange} />
      </div>
    </div>
  );
};

export default Version35kW;
