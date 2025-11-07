import ForecastContainer from "./forecastCont/page";

const Forecast = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] p-5 rounded-[20px] main blur_bg box_shadow">
      <h2 className="inter_bold text-3xl w-full md:text-start head_margin text-center">
        5 Days forecast
      </h2>
      <div className="w-full">
        <ForecastContainer />
      </div>
    </div>
  );
};

export default Forecast;
