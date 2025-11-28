import React from "react";
import ReactDOM from "react-dom/client";

// Header
//     -Logo
//     -Nav items
// Body
//     -Search
//     -RestaurantContainer
// -img
// -name of res, Star rating, cuisine, Delivery title
//     -RestaurantCard
// Footer
//     -copyright
//     -Links
//     -Address
//     -Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/ffd52597-8932-4658-a240-d95adce02f1f/logo-search-grid-2x?logoTemplateVersion=2&v=638197401494600000"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
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
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+(resData.info.cloudinaryImageId)}
      />
      <p>{resData.info.name}</p>
      <p >{(resData.info.cuisines).join(", ")}</p>
      <p >{resData.info.avgRating} Star</p>
      <p>{resData.info.costForTwo}</p>
      <p>{resData.info.sla.slaString}</p>
    </div>
  );
};

const resObj = {
  info: {
    id: "289264",
    name: "BOX8 - Desi Meals",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/0c8a87fb-14d0-416c-8f34-84d3fb3449e3_289264.jpg",
    locality: "Opp.Post Office",
    areaName: "Whitefield",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
    avgRating: 4.7,
    parentId: "10655",
    avgRatingString: "4.7",
    totalRatingsString: "6.2K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.6,
      serviceability: "SERVICEABLE",
      slaString: "20-30 mins",
      lastMileTravelString: "2.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-11-29 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-4ac8ec89-f42e-4169-94c0-a29d6eb8b73a",
  },
  cta: {
    link: "https://www.swiggy.com/city/bangalore/box8-desi-meals-opp-post-office-whitefield-rest289264",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}
        />
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer  */}
    </div>
  );
};

const roots = ReactDOM.createRoot(document.getElementById("root"));

// How to render functional component
roots.render(<AppLayout />);
