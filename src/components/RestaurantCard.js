const RestaurantCard = (props) => {
    const {resData} = props;

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
  const {slaString} = resData?.info?.sla;

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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Star</p>
      <p>{costForTwo}</p>
      <p>{slaString}</p>
    </div>
  );

};

export default RestaurantCard;