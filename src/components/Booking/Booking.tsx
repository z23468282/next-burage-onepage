import React from 'react';
import { BiPhone } from 'react-icons/bi';
import BookingFrom from './BookingFrom';

const Booking = () => {
  return (
    <div className='py-20 bg-center bg-cover relative mt-8 mb-12 bg-[url("/images/bg-black.jpg")]'>
      <div
        className="absolute w-full h-full bg-black/50 top-0 left-0
        right-0 bottom-0"
      ></div>
      <div
        className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2
      items-center gap-12"
      >
        {/* 文本 */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-[3rem] md:leading-[4rem]">
            今天吃飯有戲嗎？來預訂餐點
          </h1>
          <p className="text-base mt-4 text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laudantium doloremque consectetur esse, hic sit vel, sed reiciendis
            error laboriosam porro voluptatem rem praesentium sapiente.
          </p>
          <div className="flex mt-8 items-center space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex flex-col items-center justify-center">
              <BiPhone className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-white font-semibold">快速訂購</h1>
              <h1 className="text-yellow-300 text-3xl font-bold">
                (02) 1234-5678
              </h1>
            </div>
          </div>
        </div>
        <BookingFrom />
      </div>
    </div>
  );
};

export default Booking;
