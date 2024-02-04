import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import FlightListPage from "./pages/FlightListPage";
import FlightsPage from "./pages/FlightsPage";

function SiteRoute() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<FlightListPage />} />
      <Route path="/allflights" element={<FlightsPage />} />
      <Route path="*" element={<NotFoundPage/>} /> 
    </Routes>
  </>
  )
}

export default SiteRoute