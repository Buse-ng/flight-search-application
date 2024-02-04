import React, { useContext, useState } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FlightContext } from "../context/FlightContext";
import { DateContext } from "../context/DateContext";

const FlightFormBody = () => {
  const { flights } = useContext(FlightContext);

  const {
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
  } = useContext(DateContext);


  return (
    <>
      {/* flight form body */}
      <form className="p-4 md:p-5" id="form" onSubmit={handleSubmitForDate}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          {/* departure airport */}
          <div className="col-span-2 sm:col-span-1">
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
              className="block bg-gray-100 border border-gray-200 text-gray-900  
              rounded-lg text-sm w-full p-2.5 placeholder-gray-400"
              placeholder="Departure Airport"
              required=""
            />
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
              className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg 
              block w-full p-2.5 placeholder-gray-400"
              placeholder="Arrival Airport"
              required=""
            />
          </div>
          {/* date area */}
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

              {dateError && (
                <p className="text-red-500 text-sm mt-2">{dateError}</p>
              )}
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
          {/* one way checkbox */}
          <div className="col-span-2">
            <div className="flex items-center me-4">
              <input
                id="checkbox_way"
                defaultChecked={true}
                type="checkbox"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 
                rounded focus:ring-green-500 focus:ring-2"
                onChange={() => setIsOneWay(!isOneWay)}
              />
              <label
                htmlFor="checkbox_way"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                One way
              </label>
            </div>
          </div>
        </div>
        {/* search button */}
        <button
          type="submit"
          className="inline-flex items-center w-full font-medium text-white bg-green-600
          rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none 
          px-5 py-2.5 text-center text-sm"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default FlightFormBody;
