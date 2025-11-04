import ModeButton from "./mode/page";
import TemperatureButton from "./temperature/page";

const Header = () => {
  return (
    <header className="max_width flex justify-center items-center flex-col relative">
      <div className="flex justify-between items-center absolute top-0 right-0 gap-2.5">
        <ModeButton />
        <TemperatureButton />
      </div>
      <h1 className="flex justify-center items-center w-max header">
        <span>
          <img
            src="/assets/icon/weather-icons-master/svg/wi-cloud.svg"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </span>
        Weather Now
      </h1>
      <p className="mb-5 inter_medium text-[16px]">Your beautiful weather companion</p>
    </header>
  );
};

export default Header;
