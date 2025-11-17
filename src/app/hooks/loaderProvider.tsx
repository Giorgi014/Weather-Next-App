"use client";

import { createContext, JSX, ReactNode, useContext, useState } from "react";

type LoaderType = {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  Loader: () => JSX.Element | null;
};

export const LoaderContext = createContext<LoaderType | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }

  return context;
};

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  const Loader = () => {
    if (!loading) return null;

    return (
      <div className="inset-0 z-[9999] flex items-center justify-center">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    );
  };

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader, Loader }}>
      {children}
    </LoaderContext.Provider>
  );
};
