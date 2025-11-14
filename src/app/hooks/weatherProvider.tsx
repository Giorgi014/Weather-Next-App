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

type WeatherData = {
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  pressure: number;
  visibility: number;
  weather: string;
  sunrise: number;
  sunset: number;
  country: string;
};

export type CityProps = {
  city: string;
  setCity: (value: string) => void;
  data: WeatherData | undefined;
};

export const WeatherContext = createContext<CityProps | undefined>(undefined);

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
  const [data, setData] = useState<WeatherData | undefined>(undefined);

  useEffect(() => {
    const fetchWeather = async (cityName: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
        const res = await fetch(url);
        const response = await res.json();
        const todayTemp = response?.list?.[0];
        console.log(response);
        if (todayTemp) {
          setData({
            temp: todayTemp.main.temp,
            feelsLike: todayTemp.main.feels_like,
            humidity: todayTemp.main.humidity,
            wind: todayTemp.wind?.speed,
            pressure: todayTemp.main.pressure,
            visibility: todayTemp.visibility,
            weather: todayTemp.weather?.[0].main,
            sunrise: response.city.sunrise,
            sunset: response.city.sunset,
            country: response.city.country,
          });
        } else {
          setData(undefined);
        }
        console.log(response);
        return response;
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchWeather(city);
  }, [city]);

  const objc: CityProps = {
    city,
    setCity,
    data,
  };

  return (
    <WeatherContext.Provider value={objc}>{children}</WeatherContext.Provider>
  );
};
