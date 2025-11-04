import { tempDetails } from "./tempDetails";

const InfoContainer = () => {
  return (
    <div>
      {tempDetails.map(({ id, img, info, detail }) => (
        <div key={id} className="flex justify-center items-center flex-col blur_bg rounded-[15px]">
          <img src={img} alt={info} />
          <p>{info}</p>
          <p>{detail}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoContainer;
