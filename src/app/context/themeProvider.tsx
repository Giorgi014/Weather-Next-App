"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type ContextType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<boolean>(
    JSON.parse(localStorage.getItem("isDark") as string)
      ? JSON.parse(localStorage.getItem("isDark") as string)
      : true
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(theme));
  }, [theme]);

  let obj: ContextType = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
};
