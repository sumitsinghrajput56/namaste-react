import React from "react";
import ReactDOM from 'react-dom/client'




const heading = React.createElement("div", {id: "parent"},[React.createElement("div", {id: "child"},[
    React.createElement("h1", {id: "heading"},"first"),
    React.createElement("h1", {id: "heading"},"second"),
]),React.createElement("div", {id: "child1"},[
    React.createElement("h1", {id: "heading"},"thired"),
    React.createElement("h1", {id: "heading"},"forth"),
])]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
