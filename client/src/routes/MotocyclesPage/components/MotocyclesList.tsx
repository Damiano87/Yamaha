import { Motorcycle } from "../../../utils/types";
import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";
import Vehicle from '../../../components/Vehicle';
import CompareModal from "@/components/CompareModal";
import LoginModal from "@/components/LoginModal";

type SelectedVehicle = {
  id: string;
  name: string;
}

const MotocyclesList = ({
  motors,
}: {
  motors: Motorcycle[];
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);


  return (
    <div className="relative grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 mb-14">
      <DeleteModal vehicle={"moto"} show={showModal} setShowModal={setShowModal} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle}/>
      <CompareModal vehicles={motors}/>
      <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal}/>
      {motors.map((moto, index) => {
        

        return (
          <Vehicle key={index} vehicle={moto} kind="moto" setShowModal={setShowModal} setSelectedVehicle={setSelectedVehicle} setIsOpenLoginModal={setIsOpenLoginModal}/>
      )})}
    </div>
  );
};

export default MotocyclesList;













{/* <article key={index} className="relative">
            <div className="absolute top-4 right-10 text-gray-500 flex gap-2 items-center">
              <Link to={`/update-moto/${id}`} title="Update Motocycle">
                <MdOutlineBrowserUpdated size={30}/>
            </Link>
            <button 
              title="Delete Motocycle"
              onClick={() => {
                setShowModal(true);
                setSelectedVehicle({id, name});
              }}
              >
              <MdDelete size={30}/>
            </button>
            </div>
            <Link
            to={`/motocycles/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
          >
            <div>
              <div className="flex items-center justify-between px-5 py-3">
                <div
                  className="inline-flex items-center gap-3 p-2"
                  onClick={(event) => event.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    id={`compare-${id}`}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor={`compare-${id}`} className="cursor-pointer">
                    Porównaj
                  </label>
                </div>
                <p className="font-bold text-red-600">{license}</p>
              </div>
              <div className="relative aspect-[16/9]">
                <img
                  src={images[0]}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-contain"
                  alt={name}
                />
              </div>
              <p className="my-2 text-[1.2rem] font-semibold uppercase">
                {name}
              </p>
              <p>{formatCurrencyPLN(price)}</p>
            </div>
          </Link>
          </article>
        ); */}