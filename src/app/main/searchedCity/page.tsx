import InfoContainer from "./infoContainer/page";

const SearchedCity = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] rounded-[15px] main blur_bg">
      <div>
        <h2>Searched City</h2>
        <p>20C</p>
      </div>
      <div>
        <InfoContainer />
      </div>
    </div>
  );
};

export default SearchedCity;
