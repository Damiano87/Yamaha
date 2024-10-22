import React, { createContext, useState } from "react";

// dropdown context
type DropdownContextProviderProps = {
  children: React.ReactNode;
};

type DropdownContext = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropdownContext = createContext<DropdownContext | null>(null);

export const DropdownProvider = ({
  children,
}: DropdownContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DropdownContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </DropdownContext.Provider>
  );
};

// current slide context

type IndexContextProviderProps = {
  children: React.ReactNode;
};

type IndexContext = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

export const IndexContext = createContext<IndexContext | null>(null);

export const IndexProvider = ({ children }: IndexContextProviderProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <IndexContext.Provider value={{ current, setCurrent }}>
      {children}
    </IndexContext.Provider>
  );
};
