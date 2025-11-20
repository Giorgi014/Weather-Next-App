type ColorProps = {
  weather?: string;
  isDark: boolean;
};

const BackgroundColors = ({ weather, isDark }: ColorProps) => {
  if (!weather) {
    return isDark ? "moon_night" : "sunny_day";
  }

  let weatherCondition = weather.toLowerCase();

  switch (true) {
    case weatherCondition.includes("clear"):
      return isDark ? "moon_night" : "sunny_day";
    case weatherCondition.includes("cloud"):
      return isDark ? "cloudy_night" : "cloudy_day";
    case weatherCondition.includes("rain"):
      return isDark ? "rainy_night" : "rainy_day";
    case weatherCondition.includes("snow"):
      return isDark ? "snowy_night" : "snowy_day";
    default:
      return isDark ? "moon_night" : "sunny_day";
  }
};

export default BackgroundColors;
