"use client";

import { useEffect, useState } from "react";
import { UseTemp } from "../../hooks/temperatureProvider";
import InfoContainer from "./infoContainer/page";
import { useWeather } from "../../hooks/weatherProvider";
import { useLoader } from "../../hooks/loaderProvider";
import WeatherIcon from "./infoContainer/icons";

const SearchedCity = () => {
  const [temp, setTemp] = useState<string>("");
  const { farenheit } = UseTemp();
  const { data } = useWeather();
  const { showLoader, hideLoader, Loader } = useLoader();

  useEffect(() => {
    if (!data) {
      showLoader();
      return;
    }
    hideLoader();

    if (data !== undefined) {
      if (farenheit) {
        const f = ((data.temp - 274.15) * 9) / 5 + 32;
        setTemp(`${Math.round(f)}°F`);
      } else {
        const c = data.temp - 274.15;
        setTemp(`${Math.round(c)}°C`);
      }
    }
  }, [farenheit, data, showLoader, hideLoader]);

  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] p-5 rounded-[20px] main blur_bg box_shadow">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="text-center inter_medium">
          {!data ? (
            <Loader />
          ) : (
            <>
              <h2 className="text-[clamp(40px,6.6vw,60px)]">
                {data.city},<span>{data.country}</span>
              </h2>
              <div className="flex justify-center items-center">
                <WeatherIcon
                  weather={data.weather}
                  className="w-[clamp(40px,6.6vw,70px)] h-[clamp(40px,6.6vw,70px)]"
                />
                <div className="flex justify-center items-center flex-col text-center">
                  <p className="inter_medium text-[clamp(40px,6.6vw,60px)]">
                    {temp}
                  </p>
                  <p className="inter_thin text-[clamp(16px, 2.5vw, 20px)]">
                    {data.weather}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full">
        <InfoContainer />
      </div>
    </div>
  );
};

export default SearchedCity;
