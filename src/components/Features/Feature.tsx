import Image from 'next/image';
import Img1 from '../../../public/images/f1.jpg';
import Img2 from '../../../public/images/f2.jpg';
import Img3 from '../../../public/images/f3.jpg';

const Feature = () => {
  return (
    <div className="pt-20 pb-12">
      {/* 標題 */}
      <h1 className="heading">
        <span className="text-red-600">用特製醬料</span>
        <br />
        製作出的漢堡
      </h1>
      {/* 卡片 */}
      <div
        className="w-[90%] md:w-[80%] mt-12 md:mt-20 mb-12 mx-auto grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-12"
      >
        {/* 第一張卡 */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img1} alt="漢堡" className="rounded-3xl" />
            <h1 className="mt-6 text-center text-2xl text-black font-semibold">
              我們的漢堡
            </h1>
            <p className="mt-1 text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              doloribus! Eligendi, porro? Placeat culpa doloribus sint
              dignissimos quam, ad necessitatibus.
            </p>
          </div>
        </div>
        {/* 第二張卡 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-12 rounded-lg transition-all duration-200">
            <Image src={Img2} alt="漢堡" className="rounded-3xl" />
            <h1 className="mt-6 text-center text-2xl text-black font-semibold">
              需要你的意見回饋
            </h1>
            <p className="mt-1 text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              doloribus! Eligendi, porro? Placeat culpa doloribus sint
              dignissimos quam, ad necessitatibus.
            </p>
          </div>
        </div>
        {/* 第三張卡 */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img3} alt="漢堡" className="rounded-3xl" />
            <h1 className="mt-6 text-center text-2xl text-black font-semibold">
              勁辣雞腿堡
            </h1>
            <p className="mt-1 text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              doloribus! Eligendi, porro? Placeat culpa doloribus sint
              dignissimos quam, ad necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
