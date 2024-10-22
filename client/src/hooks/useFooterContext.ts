import { FooterContext } from "@/context/footerContext";
import { useContext } from "react";

export const useFooterContext = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
