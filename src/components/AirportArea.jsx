import React, { useContext } from "react";

import { AirportContext } from "../context/AirportContext";

const AirportArea = () => {
  const {
    departureAirport,
    arrivalAirport,
    filteredDepartureAirports,
    filteredArrivalAirports,
    handleAirportChange,
    handleAirportSelect,
  } = useContext(AirportContext);

  return (
    <div className="col-span-2 sm:col-span-1">
      {/* departure airport */}

      <label
        htmlFor="departure_airport"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Departure Airport
      </label>
      <input
        id="departure_airport"
        name="departure_airport"
        type="text"
        value={departureAirport}
        onChange={(e) => handleAirportChange(e, true)}
        className="block bg-gray-100 border border-gray-200 text-gray-900  
              rounded-lg text-sm w-full p-2.5 placeholder-gray-400"
        placeholder="Departure Airport"
        required=""
      />
      <div>
        {filteredDepartureAirports.length > 0 && (
          <ul className="airport-list">
            {filteredDepartureAirports.map((airport, id) => (
              <li
                key={`departure-${id}`}
                onClick={() => handleAirportSelect(airport, true)}
              >
                {airport.code} - {airport.city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* arrival airport */}
      <div className="col-span-2 sm:col-span-1">
        <label
          htmlFor="arrival_airport"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Arrival Airport
        </label>
        <input
          id="arrival_airport"
          name="arrival_airport"
          type="text"
          value={arrivalAirport}
          onChange={(e) => handleAirportChange(e, false)}
          className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg 
              block w-full p-2.5 placeholder-gray-400"
          placeholder="Arrival Airport"
          required=""
        />
        <div>
          {filteredArrivalAirports.length > 0 && (
            <ul className="airport-list">
              {filteredArrivalAirports.map((airport, id) => (
                <li
                  key={`arrival-${id}`}
                  onClick={() => handleAirportSelect(airport, false)}
                >
                  {airport.code} - {airport.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirportArea;
