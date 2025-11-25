import React from "react";
import ReactDOM from "react-dom/client";


// react element 
const heading = (<h1 className="heading" tabIndex="1">Namaste react using jsx</h1>);

console.log(heading);


const roots = ReactDOM.createRoot(document.getElementById("root"));

roots.render(heading);
