import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <div className="pt-20 pb-12">
      <h1 className="heading">
        認識我們的<span className="text-red-600">團隊</span>
      </h1>
      <div
        className="mt-20 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-12 items-center"
      >
        {/* 團隊卡 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <TeamCard image="/images/t1.jpg" name="王大衛" position="洗碗工" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <TeamCard image="/images/t2.jpg" name="李國揚" position="主管" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <TeamCard image="/images/t3.png" name="周小明" position="主廚" />
        </div>
      </div>
    </div>
  );
};

export default Team;
