"use client";

import { useState } from "react";

export const Mode = () => {
  const [dark, setDark] = useState(false);

  const handleMode = () => {
    setDark(!dark);
  };

  return (
    <div className="flex justify-between items-center">
      <div
        className={`w-[50px] h-[25px] flex justify-between items-center rounded-[30px] cursor-pointer ${dark ? "btn_bg_bark" : "btn_bg_lite"}`}
        onClick={handleMode}
      >
        <img
          src="/assets/icon/weather-icons-master/svg/wi-day-sunny.svg"
          alt="sun"
          className={dark ? "hidden" : "w-5 h-5"}
        />
        <img
          src="/assets/icon/weather-icons-master/svg/wi-moon-waning-crescent-3.svg"
          alt="moon"
          className={dark ? "w-5 h-5" : "hidden"}
        />
      </div>
    </div>
  );
};
