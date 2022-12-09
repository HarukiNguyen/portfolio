import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/main.css";
import ScrollRestoration from "./components/ScrollRestoration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration>
        <App />
      </ScrollRestoration>
    </BrowserRouter>
  </React.StrictMode>
);
