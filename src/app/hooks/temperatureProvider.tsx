"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TempType = {
  farenheit: boolean;
  setFarenheit: (value: boolean) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const TemperatureContext = createContext<TempType | undefined>(
  undefined
);

export const UseTemp = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error("UseTemp must be used within a TemperatureProvider");
  }
  return context;
};

export const TemperatureProvider = ({ children }: ProviderProps) => {
  const [farenheit, setFarenheit] = useState<boolean>(() => {
    if (typeof window === "undefined") return;

    const storedTemp = localStorage.getItem("isFarenheit");
    return storedTemp ? JSON.parse(storedTemp) : false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("isFarenheit", JSON.stringify(farenheit));
  }, [farenheit]);

  const objt: TempType = {
    farenheit,
    setFarenheit,
  };

  return (
    <TemperatureContext.Provider value={objt}>
      {children}
    </TemperatureContext.Provider>
  );
};
