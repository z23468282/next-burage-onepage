import Link from 'next/link';
import React from 'react';
import { BiCycling, BiShoppingBag } from 'react-icons/bi';
import { FaBurger } from 'react-icons/fa6';
import { HiBars3BottomRight } from 'react-icons/hi2';

export const NAV_ITEMS = [
  { link: '/', name: '首頁' },
  { link: '/', name: '商店' },
  { link: '/', name: '選單' },
  { link: '/', name: '部落格' },
  { link: '/', name: '聯絡我們' },
];

type Props = {
  openMobileNav: () => void;
};

const Nav = ({ openMobileNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white ">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
          <h1 className="text-xl sm:text-3xl font-semibold">漢堡王</h1>
        </div>
        {/* 導航列連接 */}
        <ul className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="text-xl font-medium hover:text-red-600">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* 按鈕 */}
        <div className="flex items-center space-x-4">
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-blue-950
          transition-all from-purple-200 hover:bg-red-600 flex 
          items-center rounded-md space-x-2 text-white"
          >
            <span>
              <BiCycling className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>
            <span className="font-bold">現在下單</span>
          </button>
          <button
            className="sm:px-6 sm:py-3 px-4 py-2 hover:bg-green-700 *
        transition-all duration-200 bg-orange-600 flex items-center
        rounded-md text-white"
          >
            <BiShoppingBag className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <HiBars3BottomRight
            onClick={openMobileNav}
            className="lg:hidden w-8 h-8 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
