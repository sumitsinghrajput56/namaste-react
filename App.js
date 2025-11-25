import React from "react";
import ReactDOM from "react-dom/client";


// react element 
const heading = (<h1 className="heading" tabIndex="1">Namaste react using jsx</h1>);

// React Component 
// Class Based Component - OLD
// Functioan Based Component - NEW
const roots = ReactDOM.createRoot(document.getElementById("root"));

// React Functional Component 

const heading1 = () => <h1 className="heading">Namaste react</h1>;

const heading2 = () => {
return <h1 className="heading1">Namaste react</h1>
};

const heading3 = () => {
 <h1 className="heading1">Namaste react</h1>
};


roots.render(heading);
