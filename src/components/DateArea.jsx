import React, { useContext } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { DateContext } from "../context/DateContext";

const DateArea = () => {
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    isOneWay,
    dateError,
    today,
  } = useContext(DateContext);

  return (
    <div className="col-span-2 md:flex">
      {/* departure date */}
      <div>
        <label
          htmlFor="departure_date"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Departure Date
        </label>

        <input
          id="departure_date"
          type="date"
          name="departure_date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className={`bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 
          text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5 
          ${dateError && "border-red-500"}`}
          min={today.toISOString().split("T")[0]}
        />

        {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
      </div>
      <span
        className={` ${
          isOneWay
            ? "hidden"
            : "mx-4 mt-6 text-xl text-gray-500 hidden md:flex items-center"
        }`}
      >
        <TbArrowsLeftRight />
      </span>

      {/* return date */}
      {!isOneWay && (
        <div className="mt-4 md:mt-0">
          <label
            htmlFor="return_date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Return Date
          </label>

          <input
            id="return_date"
            name="return_date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            min={departureDate}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full ps-10 p-2.5
            rounded-lg focus:ring-green-500 focus:border-green-500 block placeholder-gray-400"
          />
        </div>
      )}
    </div>
  );
};

export default DateArea;
