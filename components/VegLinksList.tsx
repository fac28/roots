import React from 'react';
import VegLink from './VegLink';
interface VegLinksListProps {
  userVeg: (string | null)[];
}

const VegLinksList: React.FC<VegLinksListProps> = ({ userVeg }) => {
  return (
    <>
      {userVeg.map((veg, index) =>
        veg !== null ? <VegLink key={index} veg={veg} /> : null
      )}
    </>
  );
};

export default VegLinksList;
