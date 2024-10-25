import { formatCurrencyPLN } from "@/utils/functions"
import { type Motorcycle, type Atv } from "@/utils/types"

type AtvDisplayProps = {
    vehicle: Motorcycle | Atv
}


const VehicleDisplay = ({vehicle}: AtvDisplayProps) => {

  return (
    <div className="text-white my-8 md:flex justify-between max-w-[45rem]">
        <div>
            <h1 className="text-[1.5rem] md:text-[3rem] uppercase mb-4 font-medium tracking-wide">{vehicle?.name}</h1>
            <span className="text-[1.4rem]">{formatCurrencyPLN(vehicle?.price)}</span>
        </div>
        <img src={vehicle?.images[1]} alt={vehicle?.name} className="w-[17rem] mx-auto md:mx-0 mt-4 object-cover rounded-md"/>
    </div>
  )
}
export default VehicleDisplay