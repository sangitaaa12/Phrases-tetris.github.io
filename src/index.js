import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./register";

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById("root"));
