import InfoContainer from "./infoContainer/page";

const SearchedCity = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] p-5 rounded-[20px] main blur_bg box_shadow">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="text-center inter_medium">
          <h2 className="text-[clamp(40px,6.6vw,60px)]">
            Batumi,
            <span>GE</span>
          </h2>
          <div className="flex justify-center items-center">
            <img
              src="/assets/icon/weather-icons-master/svg/wi-day-sunny.svg"
              alt="sunny"
              className="w-[clamp(40px,6.6vw,70px)] h-[clamp(40px,6.6vw,70px)]"
            />
            <div className="flex justify-center items-center flex-col text-center">
              <p className="inter_medium text-[clamp(40px,6.6vw,60px)]">20°C</p>
              <p className="inter_thin text-[clamp(16px, 2.5vw, 20px)]">
                CLEAR
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <InfoContainer />
      </div>
    </div>
  );
};

export default SearchedCity;
