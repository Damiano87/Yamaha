import React, { createContext, useState } from "react";
import { Motorcycle, Atv } from "@/utils/types";


// dropdown context
type CompareContextProviderProps = {
  children: React.ReactNode;
};



type CompareContext = {
  selectedVehicles: Array<Motorcycle | Atv>,
  setSelectedVehicles: React.Dispatch<React.SetStateAction<Array<Motorcycle | Atv>>>;
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export const CompareContext = createContext<CompareContext>({
    selectedVehicles: [],
    setSelectedVehicles: () => {},
    isOpen: false,
    setIsOpen: () => {},
});

export const CompareProvider = ({
  children,
}: CompareContextProviderProps) => {
  const [selectedVehicles, setSelectedVehicles] = useState<Array<Motorcycle | Atv>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CompareContext.Provider value={{ selectedVehicles, setSelectedVehicles, isOpen, setIsOpen }}>
      {children}
    </CompareContext.Provider>
  );
};