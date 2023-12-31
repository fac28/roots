'use client';
import Image from 'next/image';
import { useState } from 'react';

interface VegSelectButtonProps {
  vegName: string;
  key: string;
  id: number;
  selectedStateHandler: (selectedCrop: { id: number; name: string }) => void;
}

const VegSelectButton: React.FC<VegSelectButtonProps> = ({
  vegName,
  key,
  id,
  selectedStateHandler,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => {
    setIsSelected((prevState) => !prevState);
    selectedStateHandler({ name: vegName, id: id });
  };

  return (
    <button
      className={`text-xs w-20 h-20 md:w-24 md:h-24 md:text-base shadow text-center pt-2 ${
        isSelected ? 'bg-primaryGreen' : 'bg-secondaryGreen'
      }`}
      onClick={clickHandler}
      type='button'
    >
      <p>{vegName}</p>
      <Image
        src={`/images/icons/${vegName.toLowerCase()}.png`}
        alt={`${vegName} image`}
        width={32}
        height={32}
        className='md:pt-2 m-auto'
      />
    </button>
  );
};

export default VegSelectButton;
