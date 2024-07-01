'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import burgerImg1 from '../../../public/images/b1.png';
import burgerImg2 from '../../../public/images/b2.png';
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* 第一張幻燈片 */}
      <div
        className="w-[100%] h-[88vh] flex items-center justify-center flex-col 
      bg-blue-950 md:clip_path"
      >
        <div
          className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8
        mx-auto"
        >
          <Image src={burgerImg1} className="hidden md:block" alt="漢堡" />
          {/* 資訊 */}
          <div>
            <h1 className="text-4xl font-semibold text-yellow-400">速食漢堡</h1>
            <h1 className="text-7xl leading-[5rem] tracking-widest text-white font-bold pt-4">
              最好的
              <br />
              漢堡
            </h1>
            <p className="mt-4 text-white text-opacity-70 text-lg">
              以圓形麵包內夾絞肉的食物為公認的美式速食代表。
              餡料以漢堡排為主，並附夾上若干配料（以蔬菜和起司為主）和調味料。
              英語「hamburger」意為「來自漢堡城的包」
            </p>
            <button
              className="px-8 py-3 mt-8 text-sm  bg-green-500
          transition-all from-purple-200 hover:bg-green-700 flex 
          items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-7 h-7 " />
              </span>
              <span className="font-bold">現在下單</span>
            </button>
          </div>
        </div>
      </div>
      {/* 第二張幻燈片 */}
      <div
        className="w-[100%] h-[88vh] flex items-center justify-center flex-col 
      bg-red-950 md:clip_path "
      >
        <div
          className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8
        mx-auto"
        >
          <Image src={burgerImg2} alt="漢堡" className="hidden md:block" />
          {/* 資訊 */}
          <div>
            <h1 className="text-4xl font-semibold text-yellow-400">辣味漢堡</h1>
            <h1 className="text-7xl leading-[5rem] tracking-widest text-white font-bold pt-4">
              頂級的
              <br />
              漢堡
            </h1>
            <p className="mt-4 text-white text-opacity-70 text-lg">
              以圓形麵包內夾絞肉的食物為公認的美式速食代表。
              餡料以漢堡排為主，並附夾上若干配料（以蔬菜和起司為主）和調味料。
              英語「hamburger」意為「來自漢堡城的包」
            </p>
            <button
              className="px-8 py-3 mt-8 text-sm  bg-green-500
          transition-all from-purple-200 hover:bg-green-700 flex 
          items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-7 h-7 " />
              </span>
              <span className="font-bold">現在下單</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
