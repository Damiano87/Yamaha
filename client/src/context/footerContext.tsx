import React, { createContext, useState } from "react";

// footer context
type FooterContextProviderProps = {
  children: React.ReactNode;
};

type FooterContext = {
  footerHeight: number;
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
};

export const FooterContext = createContext<FooterContext | null>(null);

export const FooterProvider = ({ children }: FooterContextProviderProps) => {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <FooterContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </FooterContext.Provider>
  );
};
