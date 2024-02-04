import React, { createContext, useContext, useState } from "react";
import { FlightContext } from "./FlightContext";

export const AirportContext = createContext();

const AirportProvider = ({ children }) => {
  const { flights } = useContext(FlightContext);

  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [filteredDepartureAirports, setFilteredDepartureAirports] = useState([]);
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState(null);
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState(null);
  const [filteredArrivalAirports, setFilteredArrivalAirports] = useState([]);

  const searchAirports = (input, isDeparture) => {
    if (typeof input !== "string" || !flights) {
      return [];
    }

    const airports = flights.map((flight) => ({
      code: isDeparture
        ? flight.departureAirportCode
        : flight.arrivalAirportCode,
      city: isDeparture ? flight.departureCity : flight.arrivalCity,
    }));

    return airports.filter((airport) => {
      if (airport && airport.code && airport.city) {
        const lowerCaseInput = input.toLowerCase();
        return (
          airport.code.toLowerCase().includes(lowerCaseInput) ||
          airport.city.toLowerCase().includes(lowerCaseInput)
        );
      }
      return false;
    });
  };

  const handleAirportChange = (e, isDeparture) => {
    const input = e.target.value;
    const filteredAirports = searchAirports(input, isDeparture);

    if (isDeparture) {
      setDepartureAirport(input);
      setFilteredDepartureAirports(filteredAirports);
    } else {
      setArrivalAirport(input);
      setFilteredArrivalAirports(filteredAirports);
    }
  };

  const handleAirportSelect = (airport, isDeparture) => {
    if (isDeparture) {
      setSelectedDepartureAirport(airport);
      setDepartureAirport(`${airport.city} - ${airport.code}`); 
      setFilteredDepartureAirports([]);
    } else {
      setSelectedArrivalAirport(airport);
      setArrivalAirport(`${airport.city} - ${airport.code}`); 
      setFilteredArrivalAirports([]); 
    }
  };

  return (
    <AirportContext.Provider
      value={{
        departureAirport,
        setDepartureAirport,
        arrivalAirport,
        setArrivalAirport,
        filteredDepartureAirports,
        setFilteredDepartureAirports,
        selectedDepartureAirport,
        setSelectedDepartureAirport,
        selectedArrivalAirport,
        setSelectedArrivalAirport,
        filteredArrivalAirports,
        setFilteredArrivalAirports,
        handleAirportChange,
        handleAirportSelect,
      }}
    >
      {children}
    </AirportContext.Provider>
  );
};

export default AirportProvider;
