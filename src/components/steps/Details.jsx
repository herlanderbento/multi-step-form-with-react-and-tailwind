import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Details() {
  const { userData, setUserData } = useContext(StepperContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleInputChange}
            value={userData["address"] || ""}
            name="address"
            placeholder="address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          City
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleInputChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="city"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}
