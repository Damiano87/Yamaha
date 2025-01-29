import { cn } from "@/lib/utils";
import { formatCurrencyPLN, transformName } from "@/utils/functions";
import { IoIosClose } from "react-icons/io";
import { Motorcycle, Atv } from "@/utils/types";


export type VehicleCardProps = {
  vehicle: Motorcycle | Atv;
  onRemove?: (vehicle: Motorcycle | Atv ) => void;
  className?: string
}


const VehicleCard = ({vehicle, onRemove, className}: VehicleCardProps) => {

    const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onRemove?.(vehicle);
    }
    
    return (
        <div className={cn("flex items-center gap-4 border-2 bg-white rounded-md px-1", className)}>
            <img src={vehicle?.images[0]} alt={vehicle?.name} className="w-[70px] aspect-video object-cover"/>
            <div className="w-full">
                <div className="flex items-center justify-between  gap-1">
                    <h3 className="text-[.8rem] font-semibold">{transformName(vehicle?.name)}</h3>
                    {onRemove && ( 
                        <button onClick={handleRemoveClick}>
                            <IoIosClose size={30}/>
                        </button>
                    )}
                </div>
                <p className="text-[.8rem] text-slate-600">{formatCurrencyPLN(vehicle?.price)}</p>
            </div>
        </div>
    )
}

export default VehicleCard