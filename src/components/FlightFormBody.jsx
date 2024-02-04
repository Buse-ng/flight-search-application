import React, { useContext } from "react";
import { DateContext } from "../context/DateContext";
import FlightFormList from "./FlightFormList";
import DateArea from "./DateArea";
import AirportArea from "./AirportArea";

const FlightFormBody = () => {

  const { handleSubmitForDate, isOneWay, setIsOneWay } = useContext(DateContext);

  return (
    <>
      {/* flight form body */}
      <form className="p-4 md:p-5" id="form" onSubmit={handleSubmitForDate}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          {/* airport area */}
          <div className="col-span-2">
            <AirportArea />
          </div>
          {/* date area */}
          <div className="col-span-2 md:flex">
            <DateArea />
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
        <div>
          <FlightFormList />
        </div>
      </form>
    </>
  );
};

export default FlightFormBody;
