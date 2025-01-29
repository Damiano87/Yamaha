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