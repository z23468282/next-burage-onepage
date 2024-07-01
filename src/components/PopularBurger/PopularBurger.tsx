'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';
import { BURGER_ITEMS } from '@/data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="py-12">
      <h1 className="heading tracking-[0.5em]">
        熱賣的<span className="text-red-600">漢堡</span>
      </h1>
      <div className="w-[80%] mt-16 mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {BURGER_ITEMS.map((item) => (
            <BurgerCard
              key={item.title}
              title={item.title}
              image={item.image}
              price={item.price}
              reviews={item.reviews}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
