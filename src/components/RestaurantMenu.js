import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

const fetchMenu = async () => {
    const data = await fetch(MENU_URL+restId);

    const json = await data.json();

    console.log("json",json);
    setResInfo(json.data);
};

if (resInfo === null) return <Shimmer/> ;

const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const { itemCards } = resInfo?.card[2]?.groupCard?.cardsGroupMap?.REGULAR?.cards[1]?.card;




  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {
          cuisines.join(", ")
        }-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (

        <li key={item.card.info.id}>
          {item.card.info.name} {"RS."}
          {item.card.info.price/100 || item.card.info.defaultPrice/100} 

        </li>
        ))}
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;