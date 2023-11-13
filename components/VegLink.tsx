import React from 'react';
import Link from 'next/link';

interface VegLinkProps {
  veg: string;
}

const VegLink: React.FC<VegLinkProps> = ({ veg }) => {
  return (
    <Link href={`/search/${veg}`} passHref>
      <a className='bg-primaryLight text-xs w-16 h-16 md:w-24 md:h-24 md:text-base shadow text-center pt-2'>
        <p>{veg}</p>
      </a>
    </Link>
  );
};

export default VegLink;
