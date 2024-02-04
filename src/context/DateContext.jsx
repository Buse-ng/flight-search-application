import React, { createContext, useState } from "react";

export const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isOneWay, setIsOneWay] = useState(true);
  const [dateError, setDateError] = useState("");
  const today = new Date();

  const handleSubmitForDate = (e) => {
    e.preventDefault();

    const selectedDepartureDate = new Date(departureDate);
    const selectedReturnDate = new Date(returnDate);

    // Date control - Past dates cannot be selected
    if (isNaN(selectedDepartureDate) || selectedDepartureDate < today ||
       (!isOneWay && (isNaN(selectedReturnDate) || selectedReturnDate < today))) {
      setDateError("Please select a valid date.");
      return;
    } else {
      setDateError("");
    }
  };

  return (
    <DateContext.Provider
      value={{
        handleSubmitForDate,
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
        isOneWay,
        setIsOneWay,
        dateError,
        setDateError,
        today,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
