import React from 'react'
import FlightFormBody from './FlightFormBody'


const FlightForm = () => {
  
  return (
    <div>
       {/* Main */}
       <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 
        flex justify-end items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-lg max-h-full">
          {/* content */}
          <div className="relative bg-gray-50 rounded-lg shadow">
            {/* header */}
            <div 
              className="flex items-center justify-between p-4 md:p-5 border-b 
              rounded-t border-gray-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Flight
              </h3>
            </div>
            {/* body */}
            <>
              <FlightFormBody />
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightForm