import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks you're offline!! Please check your internet connection</h1>
    );
  const { setUserName, loggedInUser } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body w-full">
      <div className="flex flex-col items-center w-full">
        <div className="search p-4 w-full max-w-lg mx-auto ">
          <input
            placeholder="Search using restaurant name"
            data-testid="searchInput"
            type="text"
            className="border border-black rounded-l-lg w-[80%] p-2   "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" bg-red-600 text-white p-2 border border-black rounded-r-lg hover:bg-red-500   "
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="search p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div> */}
        {/* <div className="search p-4 m-4 flex items-center"> */}
        {/* <label>Username</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
        {/* </div> */}
      </div>
      <div className="flex flex-wrap w-full ml-[100px] ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

// data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info.isOpen
