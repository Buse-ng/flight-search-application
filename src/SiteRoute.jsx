import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function SiteRoute() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage/>} /> 
    </Routes>
  </>
  )
}

export default SiteRoute