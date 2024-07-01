import React from 'react';
import { GrRestaurant } from 'react-icons/gr';

const BookingFrom = () => {
  return (
    <div className="bg-green-700 p-6 rounded-lg">
      <GrRestaurant className="w-20 h-20 text-white mt-8 mx-auto" />
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-2 text-white">
        預訂
      </h1>
      <p className="text-xl md:text-2xl text-white font-semibold text-center">
        預訂餐點
      </p>
      {/* 表單 */}
      <div className="mt-8">
        <div
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[80%] mx-auto
        justify-between space-x-4"
        >
          <select
            className="px-10 py-2.5 bg-transparent rounded-lg outline-none 
            font-bold text-base text-white border-2 border-gray-100"
            name="people"
            id="people"
          >
            <option value="1" className="text-black ">
              1 位
            </option>
            <option value="2" className="text-black">
              2 位
            </option>
            <option value="3" className="text-black">
              3 位
            </option>
            <option value="4" className="text-black">
              4 位
            </option>
          </select>
          <input
            type="date"
            className="px-10 py-2.5 bg-transparent rounded-lg outline-none
          font-bold text-base text-white border-2 border-gray-100"
          />
        </div>
        <input
          type="time"
          className="px-10 py-2.5 bg-transparent block w-[80%] mx-auto
        mt-4 rounded-lg outline-none font-bold text-base text-white border-2 border-gray-100"
        />
        <div className="mt-8 w-[80%] text-center mx-auto">
          <button
            className="px-8 py-3 rounded-lg mb-12 text-base w-full 
            bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white"
          >
            現在預訂
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFrom;
