import Shimmer from "./Shimmer";
import Recommended from "./Recommended";
import { Link, useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();

  // console.log(resInfo?.cards[2]?.card?.card?.info);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

  const menuItem = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const resData = resInfo?.cards[2]?.card?.card?.info;

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, Please check your internet connection.
      </h1>
    );
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="flex justify-center">
      <div className="mt-8">
        <h1 className="font-bold text-2xl mb-8">{resData?.name}</h1>
        <div className="border border-black rounded-2xl w-[750px] p-4">
          <p className="font-bold">
            ⭐{resData?.avgRating} ({resData?.totalRatingsString}) •{" "}
            {resData?.costForTwoMessage}{" "}
          </p>
          <p className="text-sm text-orange-500">
            <Link>{resData?.cuisines.join(", ")}</Link>
          </p>
          <div className="flex mt-4">
            <div className="relative flex flex-col items-center mr-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex flex-col text-sm">
              <p>
                <span className="text-black font-bold">Outlet: </span>
                <span className="text-gray-400 ml-1">{resData?.areaName}</span>
                <span className="text-orange-500 ml-1 cursor-pointer">▼</span>
              </p>
              <p className="font-bold mt-1">{resData?.sla?.slaString}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">➿Menu➿</div>
        <div className="flex justify-center mt-8">
          <input
            type="text"
            className="border border-black rounded-lg w-full h-10 text-center bg-gray-300 font-bold"
            placeholder="Search for dishes"
          />
          <button className="border border-black rounded-lg h-10 bg-gray-300 px-4">
            Search
          </button>
        </div>
        <Recommended menuItem={menuItem}/>
      </div>
    </div>
  );
};

export default RestaurantMenu;
