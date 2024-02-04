import React, { useContext, useState } from "react";
import { FlightContext } from "../context/FlightContext";

// ALL FLIGHTS
const FlightsPage = () => {
  const { flights } = useContext(FlightContext);
  const [sortBy, setSortBy] = useState("departureTime");

  const sortFlights = (flights) => {
    return flights.slice().sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Sorting  */}
      <div className="my-20 border-2 border-green-400 rounded-lg p-2.5">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="departureTime">Departure Time</option>
            <option value="arrivalTime">Arrival Time</option>
            <option value="wayLength">Flight Duration</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>

      <div>
        <ul className="max-w-md divide-y divide-gray-700">
          {sortFlights(flights).map((flight) => (
            <li key={flight.id} className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Departure City: {flight.departureCity} -{" "}
                    {flight.departureTime} -{flight.departureHour}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Arrival City: {flight.arrivalCity} - {flight.arrivalTime} -{" "}
                    {flight.arrivalHour}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $ {flight.price}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightsPage;
