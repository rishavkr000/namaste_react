import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

let listOfRestaurants2 = [
  {
    card: {
      card: {
        info: {
          id: "30532",
          name: "Hotel Empire",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          costForTwo: "₹450 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 4.2,
          sla: {
            deliveryTime: 47,
          },
          isOpen: true,
        },
      },
    },
  },
  {
    card: {
      card: {
        info: {
          id: "30533",
          name: "Meghana Biryani",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          costForTwo: "₹450 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 4.5,
          sla: {
            deliveryTime: 47,
          },
          isOpen: true,
        },
      },
    },
  },
  {
    card: {
      card: {
        info: {
          id: "30534",
          name: "KFC",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          costForTwo: "₹450 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 3.5,
          sla: {
            deliveryTime: 47,
          },
          isOpen: true,
        },
      },
    },
  },
];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="top-div">
        <div className="search">
          <input className="input" type="text" />
          <button className="filter-btn">Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                console.log(typeof res.card.card.info.avgRating);
                return res.card.card.info.avgRating > 4;
              });
              setListOfRestaurents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.card.card.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
