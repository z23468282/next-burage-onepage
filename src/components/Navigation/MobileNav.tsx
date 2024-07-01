import React from 'react';
import { ImCross } from 'react-icons/im';
import { NAV_ITEMS } from './Nav';
import Link from 'next/link';

type Props = {
  closeMobileNav: () => void;
  showMobileNav: boolean;
};

const MobileNav = ({ closeMobileNav, showMobileNav }: Props) => {
  const navStyle = showMobileNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 
  left-0 top-0 bottom-0 h-screen bg-black/80 z-50`}
    >
      <ImCross
        onClick={closeMobileNav}
        className="absolute top-8 right-8 w-8 h-8 text-white"
      />
      {/* 導航連結 */}
      <div
        className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200
    flex flex-col items-center justify-center w-[70%] h-[100%]`}
      >
        <ul className="space-y-10">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="text-4xl font-medium hover:text-red-600">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
