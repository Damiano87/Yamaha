import { DropdownContext, IndexContext } from "@/context/dropdowncontext";
import { useContext } from "react";

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownContextProvider"
    );
  }
  return context;
};

export const useIndexContext = () => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error(
      "useIndexContext must be used within a IndexContextProvider"
    );
  }
  return context;
};
