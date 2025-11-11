"use client";

import { useEffect, useState } from "react";
import { UseTemp } from "../../hooks/temperatureProvider";
import InfoContainer from "./infoContainer/page";
import { useWeather } from "../../hooks/weatherProvider";

const SearchedCity = () => {
  const [temp, setTemp] = useState<string>("");
  const { farenheit } = UseTemp();
  const { city, cityTemp, cityName, cityWeather } = useWeather();

  useEffect(() => {
    if (farenheit) {
      setTemp("F");
    } else {
      setTemp("C");
    }
  }, [farenheit]);

  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] p-5 rounded-[20px] main blur_bg box_shadow">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="text-center inter_medium">
          <h2 className="text-[clamp(40px,6.6vw,60px)]">
            {city},<span>{cityName}</span>
          </h2>
          <div className="flex justify-center items-center">
            <img
              src="/assets/icon/weather-icons-master/svg/wi-day-sunny.svg"
              alt="sunny"
              className="w-[clamp(40px,6.6vw,70px)] h-[clamp(40px,6.6vw,70px)]"
            />
            <div className="flex justify-center items-center flex-col text-center">
              <p className="inter_medium text-[clamp(40px,6.6vw,60px)]">{`${cityTemp}°${temp}`}</p>
              <p className="inter_thin text-[clamp(16px, 2.5vw, 20px)]">
                {cityWeather}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <InfoContainer />
      </div>
    </div>
  );
};

export default SearchedCity;
