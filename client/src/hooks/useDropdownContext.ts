import { DropdownContext, IndexContext } from "@/context/dropdowncontext";
import { useContext } from "react";

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export const useIndexContext = () => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
