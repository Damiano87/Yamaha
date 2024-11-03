
import { Motorcycle, Atv } from "@/utils/types";
import VehicleCard from './VehicleCard';
import AddModel from './AddModel';

type UpperPanelProps = {
  removeModel: (vehicle: Motorcycle | Atv) => void,
  addVehicle: () => void,
  products: Motorcycle[] | Atv[],
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpperPanel = ({removeModel, addVehicle, products, isOpen }: UpperPanelProps) => {
    

  return (
    <div className={`${isOpen ? "translate-y-0" : "-translate-y-full"} fixed z-[2] transition-all duration-300 top-[calc(83px)] left-0 bg-white py-6 w-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-4 grow">
                  {products[0] ? (
                    <VehicleCard vehicle={products[0]} onRemove={removeModel} className="py-3 col-start-2"/>
                ) : (
                    <AddModel onOpen={addVehicle} text="Dodaj nowy" className="col-start-2 py-3"/>
                )}
                  {products[1] ? (
                    <VehicleCard vehicle={products[1]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel onOpen={addVehicle} text="Dodaj nowy" className="py-3"/>
                )}
                  {products[2] ? (
                    <VehicleCard vehicle={products[2]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel onOpen={addVehicle} text="Dodaj nowy" className="py-3"/>
                )}
                  {products[3] ? (
                    <VehicleCard vehicle={products[3]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel onOpen={addVehicle} text="Dodaj nowy" className="py-3"/>
                )}
            </div>
        </div>
    </div>
  )
}
export default UpperPanel