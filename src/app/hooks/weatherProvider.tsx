"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ProviderProps = {
  children: ReactNode;
};

export type CityProps = {
  city: string;
  setCity: (value: string) => void;
};

export const WeatherContext = createContext<CityProps | null>(null);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const WeatherProvider = ({ children }: ProviderProps) => {
  const key = "c002eabec3dffadff47e3a2e8c28fb4f";
  const [city, setCity] = useState<string>("Batumi");

  useEffect(() => {
    const fetchWeather = async (cityName: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchWeather(city);
  }, [city]);

  const objc = {
    city,
    setCity,
  };

  return (
    <WeatherContext.Provider value={objc}>{children}</WeatherContext.Provider>
  );
};
