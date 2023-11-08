// HeaderClient.tsx
'use client';
import React, { useState } from 'react';
import Header from './Header';

// Assume you have some client-side toggle logic here
const HeaderClient = () => {
  const [toggle, setToggle] = useState(false);

  // Example toggle function
  //   const handleToggle = () => {
  //     setToggle(!toggle);
  //   };
  const handleToggle = () => {
    console.log('handletoggle ');
    setToggle((prevState) => !prevState);
  };

  return <Header isOpen={toggle} handleToggle={handleToggle} />;
};

export default HeaderClient;
