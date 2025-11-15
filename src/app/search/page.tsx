"use client";

import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useWeather } from "../hooks/weatherProvider";

const Search = () => {
  const { city, setCity } = useWeather();
  const [searchCity, setSearchCity] = useState<string>(city);
  const prevCity = useRef<string | undefined>(undefined);

  const handleSearch = () => {
    if (searchCity.trim()) {
      setCity(searchCity.trim());
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleClear = () => {
    setSearchCity("");
  };

  useEffect(() => {
    if (prevCity.current !== undefined) {
      setSearchCity("");
    }
    handleClear();
  }, [city]);

  return (
    <div className="flex justify-between items-center w-[90%] md:w-[70%] max-w-[1920px] h-[50px] rounded-[15px] margin_auto relative">
      <input
        type="text"
        value={searchCity}
        placeholder="Search for a city..."
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full h-full p-2.5 rounded-[15px] border border-amber-50 outline-none text-[16px] blur_bg absolute"
      />
      <IoSearch
        className="absolute right-2.5 text-[20px] cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
