'use client';
import { BsChevronCompactDown } from 'react-icons/bs';
import { useState } from 'react';

const MonthDropdown = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      {toggle ? (
        <button className='button gap-2 bg-slate-200 opacity-80 absolute m-2'>
          September <BsChevronCompactDown onClick={handleToggle} />
        </button>
      ) : (
        <h1>After</h1>
      )}
    </>
  );
};

export default MonthDropdown;
