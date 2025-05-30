import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla } =
    resData?.info;
  // console.log("Res Data: ", resData)
  return (
    <div 
      data-testid= "resCard"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
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

// Higher Order Component

export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-6 p-1 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </>
    );
  };
};

export default RestaurantCard;
