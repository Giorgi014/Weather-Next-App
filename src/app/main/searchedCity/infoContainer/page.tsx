import { tempDetails } from "./tempDetails";

const InfoContainer = () => {
  const gridItems = tempDetails.slice(0, 5);
  const sunItems = tempDetails.slice(5, 7);

  return (
    <div className="w-full">
      <div className="whether_info grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center w-full mx-auto my-5 gap-4">
        {gridItems.map(({ id, img, info, detail }) => (
          <div
            key={id}
            className="index_cont flex flex-col items-center justify-center text-center
                       w-[clamp(120px,17vw,150px)] h-[clamp(120px,17vw,150px)] p-[5px] rounded-[15px] cursor-pointer
                       transition-transform transition-colors duration-300 ease-in-out hover:scale-105 blur_bg hover:bg-[#ffffff6f]"
          >
            <img
              src={img}
              alt={info}
              className="w-[clamp(70px,10vw,90px)] h-[clamp(70px,10vw,90px)] object-contain mb-2"
            />
            <p
              className="text-[clamp(16px,2vw,20px)] inter_medium text-amber-50"
              id={`info_${id}`}
            >
              {info}
            </p>
            <p
              className="text-[clamp(14px,1.6vw,16px)] inter_medium text-amber-50"
              id={`detail_${id}`}
            >
              {detail}
            </p>
          </div>
        ))}
      </div>
      <div className="sunrise_sunset_container flex items-center justify-center w-full mx-auto my-5 gap-6 md:gap-12">
        {sunItems.map(({ id, img, info, detail }, idx) => (
          <div
            key={id ?? `sun-${idx}`}
            className={`${
              idx === 0 ? "sunrise_container" : "sunset_container"
            } flex flex-col items-center justify-center
               w-[clamp(120px,35vw,200px)] h-[clamp(120px,17vw,150px)] p-[5px] rounded-[15px] cursor-pointer
               transition-transform transition-colors duration-300 ease-in-out hover:scale-105 blur_bg hover:bg-[#ffffff6f]`}
          >
            {img && (
              <img
                src={img}
                alt={info}
                className="w-[clamp(70px,10vw,90px)] h-[clamp(70px,10vw,90px)] object-contain"
              />
            )}
            <p
              className="text-[clamp(16px,2vw,18px)] inter_medium text-amber-50"
              id={idx === 0 ? "sunrise" : "sunset"}
            >
              {info}
            </p>
            <p className="text-[clamp(14px,1.6vw,16px)] inter_medium text-amber-50">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoContainer;
