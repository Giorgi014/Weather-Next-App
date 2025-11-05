export type TempProps = {
  id: number;
  img: string;
  info: string;
  detail: string;
};

export const tempDetails: TempProps[] = [
  {
    id: 1,
    img: "/assets/icon/weather-icons-master/svg/wi-thermometer.svg",
    info: "Feels Like",
    detail: "20",
  },
  {
    id: 2,
    img: "/assets/icon/weather-icons-master/svg/wi-humidity.svg",
    info: "Humidity",
    detail: `18%`,
  },
  {
    id: 3,
    img: "/assets/icon/weather-icons-master/svg/wi-windy.svg",
    info: "Wind Speed",
    detail: `2.5km/h`,
  },
  {
    id: 4,
    img: "/assets/icon/weather-icons-master/svg/wi-barometer.svg",
    info: "Pressure",
    detail: `1024hPa`,
  },
  {
    id: 5,
    img: "/assets/icon/weather-icons-master/svg/wi-horizon.svg",
    info: "Visibility",
    detail: "10",
  },
  {
    id: 6,
    img: "/assets/icon/weather-icons-master/svg/wi-sunrise.svg",
    info: "Sunrise",
    detail: "7:48",
  },
  {
    id: 7,
    img: "/assets/icon/weather-icons-master/svg/wi-sunset.svg",
    info: "Sunset",
    detail: "18:50",
  },
];
