import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  // const [listOfRestaurant, setListOfRestaurant] = arr;

  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fileredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setListOfRestaurant(fileredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
