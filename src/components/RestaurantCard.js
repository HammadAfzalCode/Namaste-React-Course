import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  console.log(resData.info);
  return (
    // <div
    //   data-testid="resCard"
    //   className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:border-2  hover:border-red-600  "
    // >
    //   <img
    //     src={CDN_URL + cloudinaryImageId}
    //     alt="res-logo"
    //     className="rounded-md border-b-2  border-red-600"
    //   />

    //   <h3 className="font-bold py-4 text-lg">{name}</h3>
    //   <span className="text-sm">{cuisines.slice(0, 3).join(", ")}</span>
    //   <h4>{avgRating}</h4>
    //   <h4>{costForTwo}</h4>
    //   <h4>{sla?.slaString}</h4>
    //   <h4>{sla?.lastMileTravelString}</h4>
    // </div>
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] flex flex-col rounded-lg bg-gray-100 hover:bg-gray-200 hover:border-2 hover:border-red-600"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-md border-2 border-red-600"
      />

      <h3 className="font-bold py-4 text-lg flex-grow">{name}</h3>
      <span className="text-sm font-medium">
        {cuisines.slice(0, 3).join(", ")}
      </span>
      <div className="flex justify-between mt-2">
        <span className="bg-gray-900 px-2 text-white"> ⭐{avgRating}</span>

        {/* <span>{sla?.slaString}</span> */}
        <span>{sla?.lastMileTravelString}</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
