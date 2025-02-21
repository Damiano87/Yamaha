import { formatCurrencyPLN } from "@/utils/functions";
import { Link } from "react-router-dom";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useCompareContext } from "@/hooks/useCompareContext";
import { Atv, Motorcycle } from "@/utils/types";
import { useAuth } from "@/hooks/useAuth";
import AddToWishlist from "./AddToWishlist";


type AtvProps = {
    vehicle: Motorcycle | Atv,
    kind: string,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<{ id: string, name: string } | null>>
    setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}


const Vehicle = ({vehicle, kind, setShowModal, setSelectedVehicle, setIsOpenLoginModal}: AtvProps) => {
  const id = vehicle?.id;
  const name = vehicle?.name;
  const price = vehicle?.price;
  const images = vehicle?.images;
  const colorNames = vehicle?.colorNames;
  const {selectedVehicles, setSelectedVehicles} = useCompareContext();
  const { isAdmin } = useAuth();
  
   // handle checkbox change
  const handleCheckboxChange = (vehicle: Motorcycle | Atv) => {
    if (selectedVehicles.find(v => v.id === vehicle.id)) {
      // if vehicle is already selected, remove it from selected vehicles
      setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicle.id));
    } else if (selectedVehicles.length < 4) {
      // if vehicle is not selected and there are less than 4 vehicles selected, add it to selected vehicles
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  
  return (
    <article className="relative">     
              {isAdmin && 
              <div className="absolute z-[5] top-2 right-2 text-gray-500 flex gap-2 items-center">
                  <Link to={`/update-${kind}/${id}`} title={`Update ${kind}`}>
                    <MdOutlineBrowserUpdated size={30}/>
                </Link>
                <button 
                  title={`Delete ${kind}`}
                  onClick={() => {
                    setShowModal(true);
                    setSelectedVehicle({id, name});
                  }}
                  >
                  <MdDelete size={30}/>
                </button>
              </div>}
            <Link
            to={`/${kind === 'moto' ? 'motocycles' : 'atv'}/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            preventScrollReset={false}
          >
            <div className="relative">
              
              <label
                  htmlFor={`compare-${id}`}
                  className="inline-flex items-center gap-3 p-2 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    id={`compare-${id}`}
                    checked={selectedVehicles.some(v => v.id === id)}
                    onChange={() => handleCheckboxChange(vehicle)}
                    disabled={selectedVehicles.length >= 4 && !selectedVehicles.some(v => v.id === vehicle.id)}
                    className="w-4 h-4 cursor-pointer accent-black focus:ring-2 focus:ring-blue-500" 
                  />
                  <span>Porównaj</span>
            </label>
              <div className="relative aspect-[16/9]">
                <img
                  src={images[0]}
                  
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-contain"
                  alt={name}
                />
              </div>
              <p className="uppercase font-semibold text-[1.2rem] my-2">
                {name}
              </p>
              <p>{formatCurrencyPLN(price)}</p>
              <AddToWishlist vehicleId={id} vehicleType={kind} setIsOpenLoginModal={setIsOpenLoginModal}/>
            </div>
          </Link>
          </article>
  )
}
export default Vehicle