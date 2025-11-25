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

const RestaurantCard = () => {
  return (<div className="res-card" style={{
    backgroundColor: "#f0f0f0",
}}>
    <h3>Meghana Foods</h3>
  </div>);
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
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
