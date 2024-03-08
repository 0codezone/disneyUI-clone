import disney from "/assets/Images/disney.png";
import marvel from "/assets/Images/marvel.png";
import nationalG from "/assets/Images/nationalG.png";
import pixar from "/assets/Images/pixar.png";
import starwar from "/public/assets/Images/starwar.png";

import disneyV from "/assets/Videos/disney.mp4";
import marvelV from "/assets/Videos/marvel.mp4";
import nationalGV from "/assets/Videos/national-geographic.mp4";
import pixarV from "/assets/Videos/pixar.mp4";
import starvarV from "/assets/Videos/star-wars.mp4";

const productionHouseData = [
  {
    image: disney,
    video: disneyV,
  },
  {
    image: marvel,
    video: marvelV,
  },
  {
    image: nationalG,
    video: nationalGV,
  },
  {
    image: pixar,
    video: pixarV,
  },
  {
    image: starwar,
    video: starvarV,
  },
];

const Productionhouse = () => {
  return (
    <div className="flex px-5 md:px-10 py-2 md:py-4 gap-2 md:gap-5">
      {productionHouseData.map((data, index) => {
        return (
          <div
            key={index}
            className="border rounded-lg border-gray-600 hover:scale-105 transition-all duration-200 ease-in cursor-pointer relative shadow-xl shadow-gray-800"
          >
            <video
              src={data.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-60"
            />
            <img src={data.image} className="w-full z-[1]" />
          </div>
        );
      })}
    </div>
  );
};

export default Productionhouse;
