import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";

window.banner = ReactDOM.render(<App />, document.getElementById("root"));
//check->瀏覽器console: window.banner.myRef.current.close();
