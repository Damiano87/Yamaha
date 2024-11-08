import { formatCurrencyPLN } from "@/utils/functions";
import { Link } from "react-router-dom";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useCompareContext } from "@/hooks/useCompareContext";
import { Atv, Motorcycle } from "@/utils/types";
import { useAuth } from "@/hooks/useAuth";


type AtvProps = {
    vehicle: Motorcycle | Atv,
    kind: string,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<{ id: string, name: string } | null>>
}


const Vehicle = ({vehicle, kind, setShowModal, setSelectedVehicle}: AtvProps) => {
  const id = vehicle?.id;
  const name = vehicle?.name;
  const price = vehicle?.price;
  const images = vehicle?.images;
  const colorNames = vehicle?.colorNames;
  const {selectedVehicles, setSelectedVehicles} = useCompareContext();
  const { isAdmin } = useAuth();
  
   // Funkcja obsługująca zmianę checkboxa
  const handleCheckboxChange = (vehicle: Motorcycle | Atv) => {
    if (selectedVehicles.find(v => v.id === vehicle.id)) {
      // Jeśli pojazd jest już wybrany, usuń go z listy
      setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicle.id));
    } else if (selectedVehicles.length < 4) {
      // Jeśli można jeszcze dodać pojazd (mniej niż 2 wybrane), dodaj go
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };


  return (
    <article className="relative">
            {isAdmin && <div className="absolute top-2 right-2 text-gray-500 flex gap-2 items-center">
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
            <div>
              
              <div
                className="inline-flex items-center gap-3 p-2"
                onClick={(event) => event.stopPropagation()}
              >
                <input
                  type="checkbox"
                  id={`compare-${id}`}
                  checked={selectedVehicles.some(v => v.id === id)}
                  onChange={() => handleCheckboxChange(vehicle)}
                  disabled={selectedVehicles.length >= 4 && !selectedVehicles.some(v => v.id === vehicle.id)}
                  className="w-4 h-4 cursor-pointer accent-black focus:ring-2 focus:ring-blue-500" 
                />
                <label htmlFor={`compare-${id}`} className="cursor-pointer">
                  Porównaj
                </label>
              </div>
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
            </div>
          </Link>
          </article>
  )
}
export default Vehicle