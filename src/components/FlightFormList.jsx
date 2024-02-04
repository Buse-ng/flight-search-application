import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FlightContext } from "../context/FlightContext";

const FlightFormList = () => {
  const { flights } = useContext(FlightContext);

  const handleFlightSearch = () => {};

  return (
    <>
      <Link to="/flights">
        <button
          type="button"
          onClick={handleFlightSearch}
          className="inline-flex items-center w-full font-medium text-white bg-green-600
          rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none 
          px-5 py-2.5 text-center text-sm"
        >
          Search
        </button>
      </Link>
      <Link to="/allflights">
        <button
          onClick={handleFlightSearch}
          className="mt-4 inline-flex items-center w-full font-medium text-white bg-green-600
          rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none 
          px-5 py-2.5 text-center text-sm"
        >
          All flights
        </button>
      </Link>
    </>
  );
};

export default FlightFormList;
