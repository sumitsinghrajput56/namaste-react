import React from "react";
import ReactDOM from 'react-dom/client'

// changing Object -> HTMLElemet using render method 


const heading = React.createElement("h1",{id:"heading"},"hello sumit");

const roots = ReactDOM.createRoot(document.getElementById("root"));

roots.render(heading);
