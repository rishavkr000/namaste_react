import Shimmer from "./Shimmer";
import Recommended from "./Recommended";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItem } = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  
  if (onlineStatus === false) return <h1>Looks like you are offline, Please check your internet connection.</h1>
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="restaurant">
      <h1>{resInfo?.name}</h1>
      <div className="res-info">
        <p>
          ⭐{resInfo?.avgRating} ({resInfo?.totalRatingsString}) •{" "}
          {resInfo?.costForTwoMessage}{" "}
        </p>
        <p>{resInfo?.cuisines.join(", ")}</p>
        <p>Outlet: {resInfo?.locality}</p>
        <p>{resInfo?.sla?.slaString}</p>
      </div>
      <div className="menu-text">➿Menu➿</div>
      <div className="seperator-line"></div>
      <Recommended menuItem={menuItem} />
    </div>
  );
};

export default RestaurantMenu;
