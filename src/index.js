import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./stylehome.css";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
   
     <App />
     </BrowserRouter>
   ,
  document.getElementById("root")
);
