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
  forecastData: any;
  error: boolean;
  errorMessage?: string;
};

export const WeatherContext = createContext<CityProps | undefined>(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a ThemeProvider");
  }
  return context;
};

export const WeatherProvider = ({ children }: ProviderProps) => {
  const key = "c002eabec3dffadff47e3a2e8c28fb4f";
  const [city, setCity] = useState<string>("Batumi");
  const [data, setData] = useState<WeatherData | undefined>(undefined);
  const [forecastData, setForecastData] = useState<any>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (!city) {
      setError(true);
      setErrorMessage(undefined);
      return;
    }

    const fetchWeather = async (cityName: string) => {
      setError(false);
      setErrorMessage(undefined);
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
        const res = await fetch(url);
        const response = await res.json();
        const todayTemp = response?.list?.[0];

        if (!res.ok) {
          if (res.status === 404) {
            setError(true);
            setErrorMessage("The city you are looking for does not exist.");
            return;
          }
          if (res.status >= 500) {
            setError(true);
            setErrorMessage("Server error. Try again later.");
            return;
          }
          setError(true);
          setErrorMessage("Unexpected API error");
          return;
        }

        if (response.cod && response.cod !== "200") {
          setError(true);
          setErrorMessage(response.message ?? "API returned error");
          return;
        }

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
          setForecastData(response);
          setError(false);
          setErrorMessage(undefined);
        } else {
          setData(undefined);
          setError(true);
          setErrorMessage("No weather data available for this city.");
        }
        console.log(response);
        return response;
      } catch (err) {
        console.log("Error", err);
        setError(true);
        setErrorMessage("Network error. Check your connection.");
        setData(undefined);
      }
    };
    fetchWeather(city);
  }, [city]);

  const objc: CityProps = {
    city,
    setCity,
    forecastData,
    data,
    error,
    errorMessage,
  };

  return (
    <WeatherContext.Provider value={objc}>{children}</WeatherContext.Provider>
  );
};
