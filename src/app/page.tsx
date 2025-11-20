"use client";

import { useTheme } from "./hooks/themeProvider";
import Header from "./header/page";
import Main from "./main/page";
import { useEffect, useState } from "react";
import { useWeather } from "./hooks/weatherProvider";
import BackgroundColors from "./backgrounds";

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

  return (
    <div
      className={`w-screen h-screen p-[1px] overflow-x-hidden ${themeColor}`}
    >
      <Header />
      <Main />
    </div>
  );
}
