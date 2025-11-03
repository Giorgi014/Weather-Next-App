"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type ContextType = {
  theme: boolean;
  setTheme: (value: boolean) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<boolean>(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("isDark");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("isDark", JSON.stringify(theme));
  }, [theme]);

  const obj: ContextType = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
};
