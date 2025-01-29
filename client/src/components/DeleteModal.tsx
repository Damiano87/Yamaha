import apiRequest from "@/api/apiRequest";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import {ClipLoader} from "react-spinners";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type SelectedVehicle = {
  id: string;
  name: string;
}

type DeleteModalProps = {
    vehicle: string,
    show: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    selectedVehicle: SelectedVehicle | null
    setSelectedVehicle: React.Dispatch<React.SetStateAction<SelectedVehicle | null>>
}




const DeleteModal = ({vehicle, show, setShowModal, selectedVehicle, setSelectedVehicle}: DeleteModalProps) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    // close modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVehicle(null);
        setError(null);
    }

    // delete vehicle
    const handleDeleteVehicle = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await apiRequest.delete(`vehicles/${vehicle}`, {data: { id: selectedVehicle?.id }})

            toast.success(response.data, {duration: 3000})
            handleCloseModal();
            vehicle = vehicle === "moto" ? "motocycles" : "atv";
            navigate(`/${vehicle}`);
        } catch (err) {
            if (err instanceof AxiosError) {
            const errorMessage = err.response?.data?.message || err.response?.data || "Wystąpił błąd podczas usuwania pojazdu.";
            setError(errorMessage);
        } else {
            setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.");
        }
        console.error(err);
        } finally {
            setLoading(false)
        }
    }


  return <div className={`z-30 fixed inset-0 bg-black/50 flex items-center justify-center
        transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleCloseModal}
        >
            <Toaster />
            {/* modal */}
            <div className={`bg-white px-6 py-4 rounded-md w-full max-w-[30rem] aspect-video
                transition-all duration-300 transform
                ${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                onClick={e => e.stopPropagation()}
                >
                    <button 
                        className="block ml-[95%]"
                        onClick={handleCloseModal}
                        >
                        <IoIosClose size={35}/>
                    </button>
                    {error ? <div className="flex flex-col justify-center h-full"><p className="text-center text-red-600">{error}</p></div> : <div className="flex flex-col justify-between h-full">
                        <div>
                            
                            <span>Jesteś pewien, że chcesz usunąć pojazd <span className="font-medium uppercase">{selectedVehicle?.name}</span>?</span>
                        </div>
                        <div className="flex justify-around">
                            <button 
                                className="bg-slate-300 font-medium w-28 py-1 rounded-md hover:-translate-y-[2px] duration-300"
                                onClick={handleCloseModal}
                                >
                                    Anuluj
                            </button>
                            <button 
                                className="flex justify-center items-center bg-slate-300 font-medium w-28 py-1 rounded-md hover:-translate-y-[2px] duration-300"
                                disabled={loading}
                                onClick={handleDeleteVehicle}
                                >
                                    {loading ? <ClipLoader size={20} /> : "Potwierdź"}
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
}
export default DeleteModal







            
        
        