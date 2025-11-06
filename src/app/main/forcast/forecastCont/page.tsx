import { forecastDays } from "./forecast";

const ForecastContainer = () => {
  return (
    <div className="flex justify-around items-center margin_min">
      {forecastDays.map(({ id, day, img, weather, dayTemp, nightTemp }) => (
        <div
          key={id}
          className="flex justify-between items-center flex-col gap-2.5 cont_size p-5 blur_bg rounded-[20px] border-amber-50 border-[1px]"
        >
          <p className="day_text_size inter_bold">{day}</p>
          <img src={img} alt={img} className="img_size" />
          <p className="weather_text_size inter_medium">{weather}</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-[18px] inter_medium">{`${dayTemp}°C`}</p>
            <p className="text-[18px] inter_medium">{`${nightTemp}°C`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastContainer;
