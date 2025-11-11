"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
  cityTemp: number | undefined;
  setCityTemp: Dispatch<SetStateAction<number | undefined>>;
  cityName: string | undefined;
  setCityName: Dispatch<SetStateAction<string | undefined>>;
  cityWeather: string | undefined;
  setCityWeather: Dispatch<SetStateAction<string | undefined>>;
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
  const [cityTemp, setCityTemp] = useState<number | undefined>(undefined);
  const [cityName, setCityName] = useState<string | undefined>(undefined);
  const [cityWeather, setCityWeather] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchWeather = async (cityName: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        const todayTemp = data?.list?.[0];
        console.log(data);
        if (todayTemp) {
          setCityTemp(todayTemp.main.temp);
          setCityName(data.city.country);
          setCityWeather(todayTemp.weather?.[0].main);
        }
        console.log(data);
        return data;
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchWeather(city);
  }, [city]);

  const objc: CityProps = {
    city,
    setCity,
    cityTemp,
    setCityTemp,
    cityName,
    setCityName,
    cityWeather,
    setCityWeather,
  };

  return (
    <WeatherContext.Provider value={objc}>{children}</WeatherContext.Provider>
  );
};
