import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Motorcycle, Atv } from "@/utils/types";
import apiRequest from "@/api/apiRequest";
import { useLocation, useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";


type ModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = ({isModalOpen, setIsModalOpen}: ModalProps) => {
    const [vehicles, setVehicles] = useState<Motorcycle[] | Atv[]>([])
    const [error, setError] = useState<string | null>(null);
    const [isOpenDropdown, setOpenDropdown] = useState(false);
    const [chosenModel, setChosenModel] = useState<Motorcycle | Atv | null>(null);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchVehicles = async () => {
            setError(null);

            const pathName = location.pathname.split('/').filter(Boolean)[0];
            const path = pathName === 'motocycles' ? 'moto' : 'atv';
            

            try {
                const response = await apiRequest.get<Motorcycle[] | Atv[]>(`/vehicles/${path}`);
                setVehicles(response?.data.data) 
            } catch (err) {
                    const error = err as AxiosError<{ message: string }>;
                    const errorMessage = error?.response?.data?.message || 'Wystąpił błąd podczas pobierania danych';
                    setError(errorMessage);
            }
        }

        fetchVehicles();
    }, [location.pathname])


    // Close modal
    const handlecloseModal = () => {
        setIsModalOpen(false);
        setChosenModel(null);
        setOpenDropdown(false);
    }

    // Add vehicle to compare
    
const addVehicleToCompare = () => {
    const currentProducts = searchParams.get('products') || '';
    const productsArray = currentProducts.split(' ');
    
    // Sprawdź czy produkt już nie istnieje
    if (!productsArray.includes(chosenModel?.id.toString() || '')) {
        // Dodaj nowy produkt i przefiltruj puste wartości
        const newProducts = [...productsArray, chosenModel?.id]
            .filter(Boolean)
            .join('+');
            
            
        setSearchParams({ products: newProducts });
    }
};

  return <div className={`z-30 fixed inset-0 bg-black/50 flex items-center justify-center
        transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handlecloseModal}
        >      
            {/* modal */}
            <div className={`bg-white py-4 rounded-md w-full max-w-[30rem] aspect-video
                transition-all duration-300 transform
                ${isModalOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
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
                        
                    
                        {error ? <div>
                            <p>Wystąpił błąd: {error}</p>
                        </div>
                        :
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
                                    {vehicles?.map((vehicle) => {
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
                                </ul>
                                }
                        </div>
                        </div>
                        
                    }
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
export default Modal



const ChosenVehicle = ({vehicle}: {vehicle: Motorcycle | Atv}) => {
    return <div className="flex items-center px-4 py-2 hover:bg-slate-100 duration-300 rounded-md cursor-pointer">
                <img src={vehicle?.images[0]} alt={vehicle?.name} className="w-20 aspect-video object-cover"/>
                <h3 className="capitalize font-medium">{vehicle?.name}</h3>
           </div>
}



// Add vehicle to compare
    // const addVehicleToCompare = () => {
    //     if (chosenModel) {
    //         const isInCompare = selectedVehicles.find(vehicle => vehicle.id === chosenModel.id);
    //         if (!isInCompare) {
    //             setSelectedVehicles([...selectedVehicles, chosenModel]);
    //         }
    //         setIsOpen(false);
    //         setChosenModel(null);
    //     }
    // }
            
        
        