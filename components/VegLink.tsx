import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface VegLinkProps {
  veg: string;
}

const VegLink: React.FC<VegLinkProps> = ({ veg }) => {
  return (
    <Link href={`/search/${veg}`} passHref>
      <div className='bg-primaryLight text-xs w-16 h-16 md:w-24 md:h-24 md:text-base shadow text-center pt-2'>
        <p>{veg}</p>
        <Image
          src={`/images/icons/${veg.toLowerCase()}.png`}
          alt={`${veg} image`}
          width={32}
          height={32}
          className='md:pt-2 m-auto'
        />
      </div>
    </Link>
  );
};

export default VegLink;
