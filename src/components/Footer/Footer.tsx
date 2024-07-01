import React from 'react';
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-900">
      <div
        className="w-[80%] pb-8 border-b-2 border-b-gray-300/50 mx-auto
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 "
      >
        {/* 第1部分 */}
        <div>
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-xl sm:text-3xl font-semibold">漢堡王</h1>
          </div>
          <p className="text-white/60 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laboriosam.
          </p>
          <p className="mt-4 text-white">text11@gamil.com</p>
          <p className="text-red-300 text-xl font-bold ">(02) 1234-5678</p>
        </div>
        {/* 第2部分 */}
        <div>
          <h1 className="text-2xl font-semibold mb-8 text-white ">產品</h1>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            雞塊
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            漢堡包
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            薯條
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            飲料
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            蛋塔
          </p>
        </div>
        {/* 第3部分 */}
        <div>
          <h1 className="text-2xl font-semibold mb-8 text-white ">連結</h1>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            關於
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            菜單
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            產品
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            新聞
          </p>
          <p
            className="mt-3 text-white/60 hover:text-yellow-300 duration-200 
            transition-all cursor-pointer w-fit"
          >
            蛋塔
          </p>
        </div>
        {/* 第4部分 */}
        <div>
          <h1 className="text-2xl font-semibold mb-8 text-white ">營業時間</h1>
          <p className="text-white text-xl ">
            星期一 ~ 星期五 :{' '}
            <span className="text-yellow-300">08:00 - 16:00</span>
          </p>
          <p className="text-white text-xl ">
            星期六 : <span className="text-yellow-300">08:00 - 12:00</span>
          </p>
          {/* 圖示 */}
          <div className="flex mt-8 items-center space-x-6">
            <FaFacebook className="w-6 h-6 text-blue-400" />
            <FaInstagram className="w-6 h-6 text-red-400" />
            <FaTwitter className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>
      {/* 版權 */}
      <p className="text-center text-white/50 mt-6 ">
        漢堡王 TM & © 2024 <span className="text-yellow-300">漢堡王公司</span>
        。經許可使用。全部 保留權利。
      </p>
    </div>
  );
};

export default Footer;
