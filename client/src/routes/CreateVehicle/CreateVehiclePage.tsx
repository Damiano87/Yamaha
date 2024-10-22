import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import AtvForm from "./components/AtvForm";
import MotoForm from "./components/MotoForm";
import atvPicture from "../../images/atv-transparent.png";
import motoPicture from "../../images/Yamaha-Motorcycle-Transparent-Image.png";


const CreateVehiclePage = () => {
  const [vehicleType, setVehicleType] = useState("atv");

  const handleChange = (value: string) => setVehicleType(value)


  return (
    <section className={`mt-[84px] pb-14  ${vehicleType === "atv" ? "nice-gradient" : "nice-gradient-2"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex justify-between items-center">
          <div>
          <h1 className="text-[2rem] font-semibold pt-7 text-white">Wybierz typ pojazdu</h1>
      <Select value={vehicleType} onValueChange={handleChange}>
        <SelectTrigger className="md:w-[380px] my-7 border border-black">
          <SelectValue placeholder="Typ pojazdu" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="atv">Atv</SelectItem>
          <SelectItem value="moto">Motocykl</SelectItem>
        </SelectContent>
      </Select>
        </div>

      <div className="w-[200px] scale-x-[-1] mx-auto md:mx-0">
        {vehicleType === "atv" ? <img src={atvPicture} alt="atv vehicle" title="atv" className="w-full h-full object-contain"/> : <img src={motoPicture} alt="motocycle vehicle" title="motocycle" className="w-full h-full object-contain"/>}
      </div>
        </div>
      {vehicleType === "atv" ? <AtvForm/> : <MotoForm />}
      </div>
    </section>
  )
}
export default CreateVehiclePage