import { useCompareContext } from "@/hooks/useCompareContext";
import { IoMdInformationCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import VehicleCard from "@/routes/ComparePage/components/VehicleCard";
import AddModel from "@/routes/ComparePage/components/AddModel";
import { Motorcycle, Atv } from "@/utils/types";

const CompareVehicles = () => {
    const {selectedVehicles, setSelectedVehicles, setIsOpen} = useCompareContext();
    const location = useLocation();
    
    // Clean selectedVehicles when location changes
    useEffect(() => {
        setSelectedVehicles([]);
    }, [location.pathname, setSelectedVehicles]);

    // remove vehicle from comparison component
    const removeVehicle = (vehicle: Motorcycle | Atv) => {
        setSelectedVehicles((prev) => prev.filter((item) => item.id !== vehicle.id))
    }

    // Add model
    const addModel = () => {
    setIsOpen(true);
    }

  return (
    <div className={`${selectedVehicles?.length ? "translate-y-0" : "translate-y-full" } fixed duration-500 transform px-5 lg:px-0 pt-5 lg:pt-0 flex items-center left-0 bottom-0 w-full lg:h-[120px] bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}>
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-1 md:px-5 xl:px-0"> 
                <div className="grid lg:grid-cols-4 gap-4 grow">
                {selectedVehicles[0] ? (
                    <VehicleCard vehicle={selectedVehicles[0]} onRemove={removeVehicle} className="py-2"/>
                ) : (
                    <AddModel onOpen={addModel} text="Dodaj model"/>
                )}
                {selectedVehicles[1] ? (
                    <VehicleCard vehicle={selectedVehicles[1]} onRemove={removeVehicle} className="py-2"/>
                ) : (
                    <AddModel onOpen={addModel} text="Dodaj model"/>
                )}
                {selectedVehicles[2] ? (
                    <VehicleCard vehicle={selectedVehicles[2]} onRemove={removeVehicle} className="py-2"/>
                ) : (
                    <AddModel onOpen={addModel} text="Dodaj model"/>
                )}
                {selectedVehicles[3] ? (
                    <VehicleCard vehicle={selectedVehicles[3]} onRemove={removeVehicle} className="py-2"/>
                ) : (
                    <AddModel onOpen={addModel} text="Dodaj model"/>
                )}
            </div>
            <CompareButtons />
        </div>
    </div>
  )
}
export default CompareVehicles


const CompareButtons = () => {
    const {selectedVehicles, setSelectedVehicles} = useCompareContext();
    const navigate = useNavigate();
    const location = useLocation();

    // go to compare page
    const goToComparePage =() => {
        const vehicleIds = selectedVehicles.map((vehicle) => vehicle.id);

        navigate(`${location.pathname}/compare/?products=${vehicleIds.join("+")}`)
    }


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
                onClick={goToComparePage}
                >
                <span className="uppercase">porównaj ({selectedVehicles.length})</span>
                {selectedVehicles.length < 2 && <div className="absolute hidden lg:group-hover:block right-0 bottom-12 text-white bg-black w-80 text-sm py-2 rounded-md after:content-[''] after:bg-inherit after:rotate-45 after:absolute after:top-5 after:right-3 after:h-5 after:w-5">
                    <p>Musisz wybrać co najmniej 2 produkty</p>
                </div>}
            </button>
        </div>
    )
};