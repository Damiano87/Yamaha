import { formatCurrencyPLN } from "@/utils/functions";
import { Link } from "react-router-dom";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdDelete } from "react-icons/md";

type AtvProps = {
    id: string,
    name: string,
    images: string[],
    price: number,
    colorNames: { name: string, color: string }[],
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<{ id: string, name: string } | null>>
}


const Atv = ({id, name, images, price, colorNames, setShowModal, setSelectedVehicle}: AtvProps) => {
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