"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/themeProvider";
import { UseTemp } from "../../hooks/temperatureProvider";

const TemperatureButton = () => {
  const [tempBtn, setTemptempBtn] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const { farenheit, setFarenheit } = UseTemp();

  const { theme } = useTheme();

  const handleTemperature = () => {
    setTemptempBtn(!tempBtn);
    setFarenheit(!farenheit);
  };

  useEffect(() => {
    setIsDark(true);
  }, []);

  useEffect(() => {
    if (typeof farenheit === "boolean") {
      setTemptempBtn(farenheit);
    }
  }, []);

  const themeColor = isDark ? (theme ? "btn_bg_bark" : "btn_bg_lite") : "";

  return (
    <button
      className={`w-[50px] h-[25px] flex justify-between items-center rounded-[30px] cursor-pointer relative ${themeColor}`}
      onClick={handleTemperature}
    >
      <span
        className={`absolute top-3/6 translate-y-[-50%] left-[3px] w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center
            transform transition-all duration-300 ease-in-out
            ${
              tempBtn
                ? "translate-x-[22px] rotate-[210deg]"
                : "translate-x-0 rotate-0"
            }`}
      >
        <img
          src="/assets/icon/weather-icons-master/svg/wi-celsius.svg"
          alt="sun"
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ease-in-out
              ${tempBtn ? "opacity-0 invisible" : "opacity-100 visible"}`}
        />
        <img
          src="/assets/icon/weather-icons-master/svg/wi-fahrenheit.svg"
          alt="moon"
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ease-in-out
              ${
                tempBtn
                  ? "opacity-100 visible rotate-[150deg]"
                  : "opacity-0 invisible"
              }`}
        />
      </span>
    </button>
  );
};

export default TemperatureButton;
