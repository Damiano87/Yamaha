import { Motorcycle, Atv } from "@/utils/types";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { formatCurrencyPLN } from "@/utils/functions";
import { cn } from "@/lib/utils";

const CompareImages = ({products}: {products: Motorcycle[] | Atv[]}) => {
  return (
    <section className="h-screen w-full max-w-7xl mx-auto">
        <h1 className="text-[3rem] font-semibold uppercase mt-36 tracking-wider">porównanie</h1>
        <h2 className="font-medium tracking-wide">Wybierz do czterech modeli i znajdź swój idealny pojazd</h2>
        <div className="grid lg:grid-cols-5 gap-4 grow mt-14 h-[20rem]">
                {products[0] ? (
                    <VehicleCard vehicle={products[0]} className="col-start-2"/>
                ) : (
                    <AddModel className="col-start-2"/>
                )}
                {products[1] ? (
                    <VehicleCard vehicle={products[1]} />
                ) : (
                    <AddModel />
                )}
                {products[2] ? (
                    <VehicleCard vehicle={products[2]} />
                ) : (
                    <AddModel />
                )}
                {products[3] ? (
                    <VehicleCard vehicle={products[3]} />
                ) : (
                    <AddModel />
                )}
            </div>
    </section>
  )
}
export default CompareImages


type VehicleCardProps = {
    vehicle: Motorcycle | Atv;
    className?: string;
};


const VehicleCard = ({vehicle, className}: VehicleCardProps) => {
    
    // transform name to short version if it's too long
    const transformName = (name: string) => {
        const slicedName = name.slice(0, 16).trimEnd() + "...";
        
        return name.length > 11 ? slicedName : name
    }

    return (
        <div className={cn("relative flex flex-col justify-between", className)}>
            <button className="absolute top-2 right-2 rounded-full p-2 bg-slate-200 hover:bg-slate-300 duration-300">
                    <IoIosClose size={30}/>
            </button>
            <div className="border-2 grow flex items-center">
                <img src={vehicle?.images[0]} alt={vehicle?.name} className="object-cover"/>
            </div>
            
                <div className="mt-3 space-y-1">
                    <h3 className="text-[1.2rem] uppercase font-semibold">{transformName(vehicle?.name)}</h3>
                    <p className="text-[1rem] text-slate-600">{formatCurrencyPLN(vehicle?.price)}</p>
                </div>
        </div>
    )
}


const AddModel = (className?: {className?: string}) => {
    return (
        <div 
            className={cn("border-2 border-dashed group flex items-center text-slate-700 justify-center rounded-md gap-3", className)}  
            >
            <div className="flex flex-col gap-3">
                <div className="mx-auto w-fit p-3 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors duration-300 ease-in-out cursor-pointer">
                    <GoPlus size={25} className=""/>
                </div>
                <span className="font-semibold">Dodaj nowy</span>
            </div>
        </div>
    )
}






 


    // remove vehicle from comparison component
    // const removeVehicle = () => {
    //     setSelectedVehicles((prev) => prev.filter((item) => item.id !== vehicle.id))
    // }