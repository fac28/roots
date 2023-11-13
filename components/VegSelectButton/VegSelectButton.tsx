'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface VegSelectButtonProps {
  veg: string;
}

const VegSelectButton: React.FC<VegSelectButtonProps> = ({ veg }) => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <button
      className={`text-xs w-20 h-20 md:w-24 md:h-24 md:text-base shadow text-center pt-2 ${
        isSelected ? 'bg-primaryGreen' : 'bg-secondaryGreen'
      }`}
      onClick={clickHandler}
    >
      <p>{veg}</p>
      <Image
        src={`/images/icons/${veg.toLowerCase()}.png`}
        alt={`${veg} image`}
        width={32}
        height={32}
        className='md:pt-2 m-auto'
      />
    </button>
  );
};

export default VegSelectButton;
