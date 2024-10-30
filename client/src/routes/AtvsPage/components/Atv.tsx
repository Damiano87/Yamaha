import { formatCurrencyPLN } from "@/utils/functions";
import { Link } from "react-router-dom";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useCompareContext } from "@/hooks/useCompareContext";

type Vehicle = {
  id: string,
  name: string,
  price: number,
  images: string[],
  colorNames: { name: string, color: string }[],
  category: string,
  createdAt: Date,
  currency: number | null,
}


type AtvProps = {
    vehicle: Vehicle,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<{ id: string, name: string } | null>>
}


const Atv = ({vehicle, setShowModal, setSelectedVehicle}: AtvProps) => {
  const id = vehicle?.id;
  const name = vehicle?.name;
  const price = vehicle?.price;
  const images = vehicle?.images;
  const colorNames = vehicle?.colorNames;
  const {selectedVehicles, setSelectedVehicles} = useCompareContext();

   // Funkcja obsługująca zmianę checkboxa
  const handleCheckboxChange = (vehicle: Vehicle) => {
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
            <div className="absolute top-2 right-2 text-gray-500 flex gap-2 items-center">
              <Link to={`/update-atv/${id}`} title="Update Atv">
                <MdOutlineBrowserUpdated size={30}/>
            </Link>
            <button 
              title="Delete Atv"
              onClick={() => {
                setShowModal(true);
                setSelectedVehicle({id, name});
              }}
              >
              <MdDelete size={30}/>
            </button>
            </div>
            <Link
            to={`/atv/${id}?${new URLSearchParams({
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
export default Atv