import { Mode } from "./mode/page";

export const Header = () => {
  return (
    <header className="max_width flex justify-center items-center flex-col">
      <Mode />
      <h1>Weather Now</h1>
      <p>Your beautiful weather companion</p>
    </header>
  );
};
