import React from 'react';

const Newsletter = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">
          加入即可享受優惠
        </h1>
        <p className="text-black/70 w-[85%] md:w-[60%] mx-auto pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          minima suscipit adipisci ullam ad iste ea molestiae delectus sunt
          quaerat, ex, voluptatem omnis quis, perspiciatis saepe magni quibusdam
          ratione! Voluptatibus.
        </p>
        <div className="flex items-center space-x-2 mt-12 justify-center">
          <input
            type="email"
            placeholder="輸入電子郵件"
            className="px-5 py-4 bg-gray-400
        w-[40%] outline-none rounded-lg placeholder:text-black placeholder:text-center"
          />
          <button
            className="px-8 py-4 bg-green-700 hover:bg-green-900 transition-all
          duration-200 rounded-md text-white font-bold "
          >
            訂閱
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
