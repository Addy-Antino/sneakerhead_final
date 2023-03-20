import React from "react";
import { store } from "../src/components/Dashboard/app/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import './index.scss';

import App from "./App";
// import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
         <App />
     </Provider>
);
