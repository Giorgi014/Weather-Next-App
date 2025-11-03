"use client";

import { useTheme } from "./hooks/themeProvider";
import Header from "./header/page";
import Main from "./main/page";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(true);
  }, []);

  const themeColor = isDark ? (theme ? "moon_night" : "sunny_day") : "";

  return (
    <div className={`w-screen h-screen p-[1px] ${themeColor}`}>
      <Header />
      <Main />
    </div>
  );
}
