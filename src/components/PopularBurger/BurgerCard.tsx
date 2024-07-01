import Image from 'next/image';
import { BiShoppingBag } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

type Props = {
  title: string;
  image: string;
  price: string;
  reviews: string;
};

const BurgerCard = ({ title, image, price, reviews }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
      {/* 圖像 */}
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[100%] object-cover"
        />
      </div>
      <h1 className="mt-5 text-2xl text-black font-semibold">{title}</h1>
      <div className="flex items-center mt-2 space-x-3">
        <div className="flex items-center">
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
        </div>
        <div className="text-black opacity-80">({reviews})</div>
      </div>
      <p className="mt-2 text-black/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex mt-6 items-center justify-between">
        <h1 className="text-2xl font-bold text-red-600">${price}</h1>
        <button
          className="px-4 py-2 hover:bg-green-700 transition-all duration-200
        bg-orange-600 flex items-center rounded-md text-white"
        >
          <BiShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;
