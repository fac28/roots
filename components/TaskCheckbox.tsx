// components/CustomCheckbox.tsx
'use client';
import React, { useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

const CustomCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    console.log('bloop');
    setChecked((prevChecked) => !prevChecked);
  };

  return checked ? (
    <ImCheckboxChecked onClick={handleCheckboxClick} />
  ) : (
    <ImCheckboxUnchecked onClick={handleCheckboxClick} />
  );
};

export default CustomCheckbox;
