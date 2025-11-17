const heading = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "heading"}, "hello world using react.js")));

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
