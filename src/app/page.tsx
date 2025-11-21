"use client";

import { useTheme } from "./hooks/themeProvider";
import Header from "./header/page";
import Main from "./main/page";
import { useEffect, useState } from "react";
import { useWeather } from "./hooks/weatherProvider";
import BackgroundColors from "./backgrounds";
import Rain from "./weatherAnimations/rain";
import Snow from "./weatherAnimations/snow";

export default function Home() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);
  const { data } = useWeather();

  useEffect(() => {
    setIsDark(true);
  }, []);

  if (!isDark) {
    return null;
  }

  const themeColor = BackgroundColors({
    weather: data?.weather,
    isDark: theme,
  });

  const isRaining = data?.weather === "Rain";
  const isSnowing = data?.weather === "Snow";

  return (
    <div
      className={`w-screen h-screen p-[1px] overflow-x-hidden ${themeColor}`}
    >
      <Header />
      <Main />
      {isRaining && <Rain active />}
      {isSnowing && <Snow active />}
    </div>
  );
}
