import Image from 'next/image';
import DeliveryImg from '../../../public/images/delivery.svg';
import { RiEBike2Fill } from 'react-icons/ri';
import { IoFastFood } from 'react-icons/io5';
import { BsDoorOpen } from 'react-icons/bs';

const Delivery = () => {
  return (
    <div className="pt-32 pb-12 ">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 圖像 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={DeliveryImg} alt="" />
        </div>
        {/* 文本 */}
        <div>
          <h1 className="tracking-wider text-center lg:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[3rem] md:leading-[4rem]">
            你<span className="text-red-600">喜歡的漢堡</span>在路上
          </h1>
          <p className="mt-8 text-black/70 text-base ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium corporis asperiores harum quasi cumque totam amet, ut
            illum ratione at accusantium natus enim rem voluptates. Officiis
            autem earum sed distinctio.
          </p>
          <div className="flex items-center space-x-3 mt-8">
            <RiEBike2Fill className="w-8 h-8 text-red-600" />
            <h1 className="text-xl text-black font-medium">
              訂單約15-30分送達
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-4 ">
            <IoFastFood className="w-8 h-8 text-red-600" />
            <h1 className="text-xl text-black font-medium">
              金額超過150免運費
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <BsDoorOpen className="w-8 h-8 text-red-600" />
            <h1 className="text-xl text-black font-medium">送達至門口</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
