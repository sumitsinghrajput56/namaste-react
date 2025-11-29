import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
  const {deliveryTime} = resData?.info?.sla;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Star</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Min</p>
    </div>
  );

};

export default RestaurantCard;