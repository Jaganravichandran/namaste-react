import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="p-4 m-4 w-[250px] bg-pink-50 rounded-md flex flex-col hover:bg-rose-100 cursor-pointer">
      <img
        className="rounded-md w-[240px] h-56"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="mt-2 font-bold">{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

// Higher Order Component

// Input =>> RestaurantCard >>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
