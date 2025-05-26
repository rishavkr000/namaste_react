import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
