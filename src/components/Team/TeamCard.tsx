import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  name: string;
  position: string;
};

const TeamCard = ({ image, name, position }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        height={300}
        width={400}
        className="rounded-2xl mx-auto h-[300px] object-cover "
      />
      <h1 className="text-4xl text-gray-800 mt-6 text-center font-bold tracking-wider">
        {name}
      </h1>
      <p className="my-2 px-4 py-1 bg-green-600 rounded-md text-white mx-auto w-fit font-medium">
        {position}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ea.
      </p>
    </div>
  );
};

export default TeamCard;
