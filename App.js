import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = (
  <h1 className="heading" tabIndex="1">
    Namaste react using jsx
  </h1>
);

// React Component
// Class Based Component - OLD
// Functioan Based Component - NEW
const roots = ReactDOM.createRoot(document.getElementById("root"));

// React Functional Component

const Heading1 = () => <h1 className="heading">Namaste react</h1>;

const Heading2 = () => {
  return <h1 className="heading1">Namaste react</h1>;
};

const Heading3 = () => {
  <h1 className="heading1">Namaste react</h1>;
};

const Heading4 = () => {
  <div id="container">
    <h1 className="heading1">Namaste react</h1>
  </div>;
};

roots.render(heading);
