"use client";

import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useWeather } from "../hooks/weatherProvider";

const Search = () => {
  const { city, setCity, error, errorMessage } = useWeather();
  const [searchCity, setSearchCity] = useState<string>(city);
  // const prevCity = useRef<string | undefined>(undefined);

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

  useEffect(() => {
    if (!error) {
      setSearchCity("");
    }
  }, [city, error]);

  return (
    <div className="flex justify-between items-center w-[90%] w-[70%] max-w-[1920px] h-[50px] rounded-[15px] margin_auto relative">
      <input
        type="text"
        value={searchCity}
        placeholder="Search for a city..."
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`w-full h-full p-2.5 rounded-[15px] border outline-none text-[16px] blur_bg absolute ${
          error ? "border-red-600" : "border-amber-50"
        }`}
      />
      <IoSearch
        className="absolute right-2.5 text-[20px] cursor-pointer"
        onClick={handleSearch}
      />
      {error && errorMessage && (
        <p className="w-full absolute md:left-2.5 left-0 md:text-start text-center md:bottom-[-30px] md:text-[18px] text-red-600 text-[16px] bottom-[-30px] bottom_px">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Search;
