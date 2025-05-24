import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Recommended from "./Recommended";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItem, setMenuItem] = useState(null);
  const { resId } = useParams();
  console.log("Res Id: ", resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_URL + resId);
      const json = await res.json();
      console.log(json);
      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
      setMenuItem(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card
      );
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
    } catch (err) {
      console.log(err);
    }
  };

  if (resInfo === null) return <Shimmer />

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
