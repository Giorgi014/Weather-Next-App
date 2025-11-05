import { forecastDays } from "./forecast";

const ForecastContainer = () => {
  return (
    <div className="flex justify-between items-center w-full">
      {forecastDays.map(({ id, day, img, weather, dayTemp, nightTemp }) => (
        <div
          key={id}
          className="flex justify-between items-center flex-col gap-2.5 w-[clamp(120px, 15vw, 200px)] p-5 blur_bg rounded-[20px] margin_min"
        >
          <p>{day}</p>
          <img src={img} alt={img} />
          <p>{weather}</p>
          <div className="flex justify-between items-center">
            <p>{dayTemp}</p>
            <p>{nightTemp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastContainer;
