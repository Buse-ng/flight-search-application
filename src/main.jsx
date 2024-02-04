import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FlightProvider from "./context/FlightContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import DateProvider from "./context/DateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <FlightProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </FlightProvider>
  </Router>
);
