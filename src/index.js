import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Thapa.css";
import Thapa from "./Thapa";


ReactDOM.render(
    <BrowserRouter>
        <Thapa />
    </BrowserRouter>
    ,document.getElementById("root"));
