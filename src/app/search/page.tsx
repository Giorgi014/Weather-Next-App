import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex justify-between items-center w-[90%] md:w-[70%] max-w-[1920px] h-[50px] rounded-[15px] margin_auto relative">
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-full h-full p-2.5 rounded-[15px] border border-amber-50 outline-none text-[16px] blur_bg absolute"
      />
      <IoSearch className="absolute right-2.5 text-[20px] cursor-pointer" />
    </div>
  );
};

export default Search;
