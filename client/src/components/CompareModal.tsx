import { useCompareContext } from "@/hooks/useCompareContext";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { AtvVehicle } from "@/context/compareContext";


type VehiclesProps = {
    vehicles: AtvVehicle[]
}

const CompareModal = ({vehicles}: VehiclesProps) => {
    const {isOpen, setIsOpen, selectedVehicles, setSelectedVehicles} = useCompareContext();
    const [isOpenDropdown, setOpenDropdown] = useState(false);
    const [chosenModel, setChosenModel] = useState<AtvVehicle | null>(null)

    // Close modal
    const handlecloseModal = () => {
        setIsOpen(false);
        setChosenModel(null);
        setOpenDropdown(false);
    }

    // Add vehicle to compare
    const addVehicleToCompare = () => {
        if (chosenModel) {
            const isInCompare = selectedVehicles.find(vehicle => vehicle.id === chosenModel.id);
            if (!isInCompare) {
                setSelectedVehicles([...selectedVehicles, chosenModel]);
            }
            setIsOpen(false);
            setChosenModel(null);
        }
    }


  return <div className={`z-30 fixed inset-0 bg-black/50 flex items-center justify-center
        transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handlecloseModal}
        >      
            {/* modal */}
            <div className={`bg-white py-4 rounded-md w-full max-w-[30rem] aspect-video
                transition-all duration-300 transform
                ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                onClick={e => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between border-b-2 px-5 pb-4">                  
                        <h2 className="text-xl font-semibold">Dodaj nowy</h2>
                        <button 
                            onClick={handlecloseModal}
                            >
                            <IoIosClose size={35}/>
                        </button>
                    </div>
                        
                    
                        <div className="p-7">
                            <div className="relative">
                            <label htmlFor="model" className="font-semibold">Wybierz model</label>
                            <div 
                                className="flex items-center justify-between border-2 mt-2 border-slate-300 rounded-md px-2 py-1 cursor-pointer"
                                onClick={() => setOpenDropdown(!isOpenDropdown)}
                                >
                                    {chosenModel ? <ChosenVehicle vehicle={chosenModel} /> : <span>Wybierz model</span>}
                                
                                <MdArrowDropDown className={`${isOpenDropdown && "rotate-180"} duration-300`}/>
                            </div>

                            {isOpenDropdown && 
                                <ul className="absolute bg-white w-full h-56 overflow-y-scroll rounded-md p-4 custom-scrollbar">
                                    {vehicles.map((vehicle) => {
                                        return <li key={vehicle.id} 
                                                   onClick={() => {
                                                    setChosenModel(vehicle);
                                                    setOpenDropdown(false);
                                                }} 
                                                   className="flex items-center px-4 py-2 hover:bg-slate-100 duration-300 rounded-md cursor-pointer"
                                                   >
                                                    <img src={vehicle.images[0]} alt={vehicle.name} className="w-20 aspect-video object-cover"/>
                                                    <h3 className="capitalize font-medium">{vehicle.name}</h3>
                                               </li>
                                    })}
                                </ul>}
                        </div>
                        </div>
                        <div className="flex justify-end gap-6 border-t-2 pt-4 px-5">
                            <button 
                                className="hover:bg-slate-200 font-medium w-28 py-2 rounded-3xl duration-300"
                                onClick={handlecloseModal}
                                >
                                    Anuluj
                            </button>
                            <button 
                                className="flex justify-center items-center bg-black text-white hover:bg-red-600 font-medium w-28 py-2 rounded-3xl duration-300"
                                disabled={!chosenModel}
                                onClick={addVehicleToCompare}
                                >
                                    Potwierdź
                            </button>
                        </div>
                    
            </div>
        </div>
}
export default CompareModal



const ChosenVehicle = ({vehicle}: {vehicle: AtvVehicle}) => {
    return <div className="flex items-center px-4 py-2 hover:bg-slate-100 duration-300 rounded-md cursor-pointer">
                <img src={vehicle?.images[0]} alt={vehicle?.name} className="w-20 aspect-video object-cover"/>
                <h3 className="capitalize font-medium">{vehicle?.name}</h3>
           </div>
}




            
        
        