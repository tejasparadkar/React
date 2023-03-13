import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "Hello Tejas"); //this will override everything inside the root!, means anything written will get overwritten
//React element is an Object 💯
const root = ReactDOM.createRoot(document.getElementById("root")); //whatever you passing becomes the root
//passing react element inside the root
root.render(heading); //just like appednChild()in JS!