"use client";

import { useEffect, useState } from "react";
import ForecastWeather, { ForecastItem } from "./forecastWeather";
import ForecastWeatherIcon from "./icons";
import { UseTemp } from "@/src/app/hooks/temperatureProvider";

type WeatherDataProps = {
  weatherData: {
    list: Array<{
      main: { temp: number };
      weather: Array<{ main: string }>;
    }>;
  };
};

const kelvinToC = (k: number) => k - 273.15;
const kelvinToF = (k: number) => ((k - 273.15) * 9) / 5 + 32;

const formatTemp = (k: number, farenheit: boolean) => {
  if (farenheit) {
    return `${Math.round(kelvinToF(k))}°F`;
  }
  return `${Math.round(kelvinToC(k))}°C`;
};

const ForecastContainer = ({ weatherData }: WeatherDataProps) => {
  const [forecastDay, setForecastDay] = useState<ForecastItem[]>([]);
  const { farenheit } = UseTemp();

  useEffect(() => {
    if (weatherData) {
      const forecast = ForecastWeather(weatherData);
      setForecastDay(forecast);
    }
  }, [weatherData]);

  return (
    <div className="flex justify-around items-center margin_min md:flex-row flex-col gap-y-[28px]">
      {forecastDay.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center flex-col gap-2.5 cont_size max-md:!w-full p-5 blur_bg rounded-[20px] border-amber-50 border-[1px]"
        >
          <p className="day_text_size inter_bold">{item.dayName}</p>
          <ForecastWeatherIcon weather={item.weather} className="img_size" />
          <p className="weather_text_size inter_medium">{item.weather}</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-[18px] inter_medium">
              {formatTemp(item.maxTemp, farenheit)}
            </p>
            <p className="text-[18px] inter_medium">
              {formatTemp(item.minTemp, farenheit)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastContainer;
