type WeatherIconProps = {
  weather: string;
  className?: string;
};

const forecastIcon = (weather: string) => {
  const weatherIcon = weather.toLocaleLowerCase();

  if (weatherIcon.includes("clear")) {
    return "/assets/icon/weather-icons-master/svg/wi-day-sunny.svg";
  } else if (weatherIcon.includes("cloud")) {
    return "/assets/icon/weather-icons-master/svg/wi-cloudy.svg";
  } else if (weatherIcon.includes("rain")) {
    return "/assets/icon/weather-icons-master/svg/wi-rain.svg";
  } else if (weatherIcon.includes("snow")) {
    return "/assets/icon/weather-icons-master/svg/wi-snow.svg";
  } else {
    return "/assets/icon/weather-icons-master/svg/wi-day-sunny.svg";
  }
};

const ForecastWeatherIcon = ({ weather, className }: WeatherIconProps) => {
  return (
    <img src={forecastIcon(weather)} alt={weather} className={className} />
  );
};

export default ForecastWeatherIcon;