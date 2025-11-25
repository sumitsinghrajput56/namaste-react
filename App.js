import React from "react";
import ReactDOM from "react-dom/client";


// React Functiona component
const Title = () => (
  <h1 className="heading" tabIndex="1">
    Namaste react using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
   {Title()}
   <Title/>
   <Title></Title>
    <h1 className="heading1">Namaste react functiona component </h1>
  </div>
);


const roots = ReactDOM.createRoot(document.getElementById("root"));

// How to render functional component
roots.render(<HeadingComponent/>);
