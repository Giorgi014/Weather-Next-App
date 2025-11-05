import InfoContainer from "./infoContainer/page";

const SearchedCity = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[90%] max-w-[1920px] p-5 rounded-[15px] main blur_bg box_shadow">
      <div>
        <h2>Searched City</h2>
        <p>20C</p>
      </div>
      <div className="w-full">
        <InfoContainer />
      </div>
    </div>
  );
};

export default SearchedCity;
