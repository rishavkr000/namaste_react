import { useEffect, useState } from "react";
import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
    // console.log(listOfRestaurants);
  }, []);

  const RestautantCardOpen = withOpenedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await res.json();
      setListOfRestaurents(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res?.info?.avgRating > 4.5;
              });
              setListOfRestaurents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            {res?.info?.isOpen ? (
              <RestautantCardOpen resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
