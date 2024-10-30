import React, { createContext, useState } from "react";

// dropdown context
type CompareContextProviderProps = {
  children: React.ReactNode;
};

export type AtvVehicle = {
    id: string,
    name: string,
    price: number,
    images: string[],
    colorNames: { name: string; color: string }[],
    category: string,
    currency: number | null,
    createdAt: Date,
}

type CompareContext = {
  selectedVehicles: AtvVehicle[];
  setSelectedVehicles: React.Dispatch<React.SetStateAction<AtvVehicle[]>>;
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
  const [selectedVehicles, setSelectedVehicles] = useState<AtvVehicle[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CompareContext.Provider value={{ selectedVehicles, setSelectedVehicles, isOpen, setIsOpen }}>
      {children}
    </CompareContext.Provider>
  );
};