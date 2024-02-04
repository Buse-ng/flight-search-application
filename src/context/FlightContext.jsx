import React, { createContext, useEffect, useState } from 'react'
import FlightApi from "../axios/FlightApi";

export const FlightContext = createContext();

const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        const fetchFlights = async () => {
          try {
            const response = await FlightApi.get("/flightApp");
            const data = response.data;
            setFlights(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchFlights();
      }, []);
      console.log("flights in provider:", flights);
  return (
    <FlightContext.Provider value={{ flights }}>
      {children}
    </FlightContext.Provider>
  )
}

export default FlightProvider