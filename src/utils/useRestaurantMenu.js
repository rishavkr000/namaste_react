import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
    } catch (err) {
      console.log(err);
    }
  };

  return {resInfo, menuItem}
};

export default useRestaurantMenu;
