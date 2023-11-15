// components/CustomCheckbox.tsx
'use client';
import React, { useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface CustomCheckboxProps {
  initialState: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ initialState }) => {
  const [checked, setChecked] = useState(initialState);

  const handleCheckboxClick = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return checked ? (
    <ImCheckboxChecked onClick={handleCheckboxClick} />
  ) : (
    <ImCheckboxUnchecked onClick={handleCheckboxClick} />
  );
};

export default CustomCheckbox;
