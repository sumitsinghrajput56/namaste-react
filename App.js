import React from "react";
import ReactDOM from "react-dom/client";

// functional component
const Title = () => (
  <h1 className="heading" tabIndex="1">
    Namaste react using jsx
  </h1>
);

// React Component
// Class Based Component - OLD
// Functioan Based Component - NEW

// React Functional Component

const Heading1 = () => <h1 className="heading">Namaste react</h1>;

const Heading2 = () => {
    return <h1 className="heading1">Namaste react</h1>;
};

const Heading3 = () => {
    <h1 className="heading1">Namaste react</h1>;
};

const Heading4 = () => (
    <div id="container">
        <Title/>
    <h1 className="heading1">Namaste react functiona component </h1>
  </div>
);

const roots = ReactDOM.createRoot(document.getElementById("root"));

// How to render functional component  
roots.render(<Heading4/>);
