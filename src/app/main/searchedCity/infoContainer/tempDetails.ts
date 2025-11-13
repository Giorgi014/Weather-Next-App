export type TempProps = {
  id: number;
  img: string;
  info: string;
};

export const tempDetails: TempProps[] = [
  {
    id: 1,
    img: "/assets/icon/weather-icons-master/svg/wi-thermometer.svg",
    info: "Feels Like",
  },
  {
    id: 2,
    img: "/assets/icon/weather-icons-master/svg/wi-humidity.svg",
    info: "Humidity",
  },
  {
    id: 3,
    img: "/assets/icon/weather-icons-master/svg/wi-windy.svg",
    info: "Wind Speed",
  },
  {
    id: 4,
    img: "/assets/icon/weather-icons-master/svg/wi-barometer.svg",
    info: "Pressure",
  },
  {
    id: 5,
    img: "/assets/icon/weather-icons-master/svg/wi-horizon.svg",
    info: "Visibility",
  },
  {
    id: 6,
    img: "/assets/icon/weather-icons-master/svg/wi-sunrise.svg",
    info: "Sunrise",
  },
  {
    id: 7,
    img: "/assets/icon/weather-icons-master/svg/wi-sunset.svg",
    info: "Sunset",
  },
];
