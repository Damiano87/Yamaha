
import { type Atv } from "../../../utils/types"

import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";
import AtvVehicle from "./Atv";
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
      {atvs?.map((atv, index) => {
        return (
          <AtvVehicle key={index} {...atv} setShowModal={setShowModal} setSelectedVehicle={setSelectedVehicle}/>
        );
      })}
    </div>
  );
};

export default AtvsList;
