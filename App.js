import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => objcet => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "hello sumit");

console.log(heading);

// JSX - HTML-like  or XML-like syntex

const jsxHeading = <h1 id="heading">Namaste react using jsx</h1>;

console.log(jsxHeading);

const roots = ReactDOM.createRoot(document.getElementById("root"));

roots.render(heading);
