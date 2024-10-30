import { useCompareContext } from "@/hooks/useCompareContext";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { formatCurrencyPLN } from "@/utils/functions";

const CompareAtvs = () => {
    const {selectedVehicles} = useCompareContext();
    

  return (
    <div className={`${selectedVehicles?.length ? "translate-y-0" : "translate-y-full" } fixed duration-500 transform px-5 lg:px-0 pt-5 lg:pt-0 flex items-center left-0 bottom-0 w-full lg:h-[120px] bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}>
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            <div className="grid lg:grid-cols-4 gap-4 grow">
                {selectedVehicles[0] ? (
                    <VehicleCard vehicle={selectedVehicles[0]} />
                ) : (
                    <AddModel />
                )}
                {selectedVehicles[1] ? (
                    <VehicleCard vehicle={selectedVehicles[1]} />
                ) : (
                    <AddModel />
                )}
                {selectedVehicles[2] ? (
                    <VehicleCard vehicle={selectedVehicles[2]} />
                ) : (
                    <AddModel />
                )}
                {selectedVehicles[3] ? (
                    <VehicleCard vehicle={selectedVehicles[3]} />
                ) : (
                    <AddModel />
                )}
            </div>
            <CompareButtons />
        </div>
    </div>
  )
}
export default CompareAtvs



type VehicleProps = {
  id: string,
  images: string[];
  name: string;
  price: number;
  colorNames: { name: string, color: string }[]
  category: string,
  createdAt: Date,
  currency: number | null,
}


const VehicleCard = ({vehicle}: {vehicle: VehicleProps}) => {
    const {setSelectedVehicles} = useCompareContext();
    
    // transform name to short version if it's too long
    const transformName = (name: string) => {
        return name.length > 11 ? name.slice(0, 11) + "..." : name
    }


    // remove vehicle from comparison component
    const removeVehicle = () => {
        setSelectedVehicles((prev) => prev.filter((item) => item.id !== vehicle.id))
    }

    return (
        <div className="flex items-center gap-4 border-2 bg-white rounded-md py-3">
            <img src={vehicle?.images[0]} alt={vehicle?.name} className="w-[70px] aspect-video object-cover"/>
            <div className="w-full lg:w-auto">
                <div className="flex items-center justify-between lg:justify-normal gap-1">
                    <h3 className="text-[.9rem] font-semibold capitalize">{transformName(vehicle?.name)}</h3>
                    <button onClick={removeVehicle}>
                         <IoIosClose size={30}/>
                    </button>
                </div>
                <p className="text-[.8rem] text-slate-600">{formatCurrencyPLN(vehicle?.price)}</p>
            </div>
        </div>
    )
}


const AddModel = () => {
    const {setIsOpen} = useCompareContext();

    return (
        <button 
            className="hidden border-2 border-dashed group lg:flex items-center text-slate-700 justify-center rounded-md gap-3  py-6"
            onClick={(() => setIsOpen(true))}
            >
            <span>Dodaj model</span>
            <GoPlus size={20} className="group-hover:text-black"/>
        </button>
    )
}


const CompareButtons = () => {
    const {selectedVehicles, setSelectedVehicles} = useCompareContext();

    return (
        <div className="flex flex-col lg:flex-row items-center gap-6">
            <button 
                className="hidden lg:block hover:bg-slate-200 px-4 py-2 rounded-3xl uppercase text-[.9rem] tracking-wider font-semibold"
                onClick={(() => setSelectedVehicles([]))}
                >
                <span>wyczyść wszystko</span>
            </button>
            {selectedVehicles.length < 2 &&
                <div className="lg:hidden flex items-center justify-center border-[1px] py-2 rounded-md border-black w-full gap-2 text-[.8rem] sm:text-[1.1rem] tracking-wider">
                <IoMdInformationCircle />
                <span className="mb-[2px]">Musisz wybrać co najmniej 2 produkty</span>
            </div>
            }
            <button 
                className={`${selectedVehicles.length < 2 ? "bg-gray-400"  : " bg-black"} relative w-full lg:w-auto group text-white px-4 py-2 m-3 lg:m-0 rounded-3xl text-[.9rem] tracking-wider font-semibold`}
                disabled={selectedVehicles.length < 2}
                >
                <span className="uppercase">porównaj ({selectedVehicles.length})</span>
                {selectedVehicles.length < 2 && <div className="absolute hidden lg:group-hover:block right-0 bottom-12 text-white bg-black w-80 text-sm py-2 rounded-md after:content-[''] after:bg-inherit after:rotate-45 after:absolute after:top-5 after:right-3 after:h-5 after:w-5">
                    <p>Musisz wybrać co najmniej 2 produkty</p>
                </div>}
            </button>
        </div>
    )
}