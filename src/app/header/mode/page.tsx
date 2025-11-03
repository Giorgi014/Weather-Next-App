"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/themeProvider";

const ModeButton = () => {
  const [dark, setDark] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    setDark(!dark);
    setTheme(!theme);
  };

  useEffect(() => {
    if (typeof theme === "boolean") {
      setDark(theme);
    }
  }, [theme]);

  useEffect(() => {
    setIsDark(true);
  }, []);

  const themeColor = isDark ? (theme ? "btn_bg_bark" : "btn_bg_lite") : "";

  return (
    <button
      className={`w-[50px] h-[25px] flex justify-between items-center rounded-[30px] cursor-pointer relative ${themeColor}`}
      onClick={handleMode}
    >
      <span
        className={`absolute top-3/6 translate-y-[-50%] left-[3px] w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center
            transform transition-all duration-300 ease-in-out
            ${
              dark
                ? "translate-x-[22px] rotate-[210deg]"
                : "translate-x-0 rotate-0"
            }`}
      >
        <img
          src="/assets/icon/weather-icons-master/svg/wi-day-sunny.svg"
          alt="sun"
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ease-in-out
              ${dark ? "opacity-0 invisible" : "opacity-100 visible"}`}
        />
        <img
          src="/assets/icon/weather-icons-master/svg/wi-moon-waning-crescent-3.svg"
          alt="moon"
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ease-in-out
              ${
                dark
                  ? "opacity-100 visible rotate-[110deg]"
                  : "opacity-0 invisible"
              }`}
        />
      </span>
    </button>
  );
};

export default ModeButton;