"use client";

import { useEffect, useState } from "react";
import ForecastWeather, { ForecastItem } from "./forecastWeather";

type WeatherDataProps = {
  weatherData: {
    list: Array<{
      main: { temp: number };
      weather: Array<{ main: string }>;
    }>;
  };
};

const ForecastContainer = ({ weatherData }: WeatherDataProps) => {
  const [forecastDay, setForecastDay] = useState<ForecastItem[]>([]);

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
          {/* <img src={img} alt={img} className="img_size" /> */}
          <p className="weather_text_size inter_medium">{item.weather}</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-[18px] inter_medium">{`${Math.round(item.maxTemp)}°C`}</p>
            <p className="text-[18px] inter_medium">{`${Math.round(item.minTemp)}°C`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastContainer;
