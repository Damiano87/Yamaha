import { type Atv } from "../../../utils/types"
import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";
import Vehicle from "../../../components/Vehicle";
import CompareModal from "@/components/CompareModal";

type AtvsListProps = {
  atvs: Atv[]
}

type SelectedVehicle = {
  id: string;
  name: string;
}

const AtvsList = ({atvs}: AtvsListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<SelectedVehicle | null>(null);


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mb-14 relative">
      <DeleteModal vehicle={"atv"} show={showModal} setShowModal={setShowModal} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle}/>
      <CompareModal vehicles={atvs}/>
      {atvs?.map((atv, index) => {
        return (
          <Vehicle key={index} vehicle={atv} kind={"atv"} setShowModal={setShowModal} setSelectedVehicle={setSelectedVehicle}/>
        );
      })}
    </div>
  );
};

export default AtvsList;
