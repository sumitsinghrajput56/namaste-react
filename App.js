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
    const {resName,cuisine} = props;
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
        src="https://www.eggoz.com/cdn/shop/articles/WhatsApp_Image_2024-09-07_at_5.05.44_PM.jpg?v=1725713796&width=1100"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4> 38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghna Biryani" cuisine="Biryani, North Indian, Asian"/>
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
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
