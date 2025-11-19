type ForecastProps = {
  list: Array<{
    main: { temp: number };
    weather: Array<{ main: string }>;
  }>;
};

export type ForecastItem = {
  maxTemp: number;
  minTemp: number;
  weather: string;
  dayName: string;
};

let weekDays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ForecastWeather = (days: ForecastProps): ForecastItem[] => {
  const forecast: ForecastItem[] = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const dayStart = i * 8;
    const dayEnd = dayStart + 8;
    const dayData = days.list.slice(dayStart, dayEnd);

    if (dayData.length > 0) {
      const temperature = dayData.map((day) => day.main.temp);
      const maxTemp = Math.max(...temperature);
      const minTemp = Math.min(...temperature);

      const forecastDays = new Date(today);
      forecastDays.setDate(today.getDate() + i);
      const dayName = weekDays[forecastDays.getDay()];
      forecast.push({
        maxTemp,
        minTemp,
        weather: dayData[0].weather[0].main,
        dayName: i === 0 ? "Today" : i === 1 ? "Tomorrow" : dayName,
      });
    }
  }

  return forecast;
};

export default ForecastWeather;
