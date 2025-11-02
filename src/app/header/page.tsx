import { ModeButton } from "../mode/page";
import { TemperatureButton } from "../temperature/page";

export const Header = () => {
  return (
    <header className="max_width flex justify-center items-center flex-col relative">
      <div className="flex justify-between items-center absolute right-0 gap-2.5">
        <ModeButton />
        <TemperatureButton />
      </div>
      <h1>Weather Now</h1>
      <p>Your beautiful weather companion</p>
    </header>
  );
};
