import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "This is heading line.")

const JSXHeadingComponent = () => (
  <h1 id="heading">This is the heading using JSX 🚀.</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <JSXHeadingComponent />
        <h1 id="heading"> This is functional component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
