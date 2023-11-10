'use client';
import React, { useState } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const MonthDropdown = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    new Date().getMonth()
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const rotatedMonths = [
    ...months.slice(selectedMonthIndex),
    ...months.slice(0, selectedMonthIndex),
  ];

  const handleMonthSelect = (monthName: string) => {
    const newMonthIndex = months.indexOf(monthName);
    setSelectedMonthIndex(newMonthIndex);
  };

  return (
    <button
      className='button gap-2 bg-slate-200 opacity-80 absolute m-2'
      onClick={() => setToggle(!toggle)}
    >
      <ul>
        {toggle ? (
          <li>
            {rotatedMonths[0]}
            <BsChevronCompactDown className='inline-block ml-2' />
          </li>
        ) : (
          <>
            <li>
              Months
              <BsChevronCompactUp className='inline-block ml-2' />
            </li>
            {rotatedMonths.map((month, index) => (
              <li key={index} onClick={() => handleMonthSelect(month)}>
                {month}
              </li>
            ))}
          </>
        )}
      </ul>
    </button>
  );
};

export default MonthDropdown;
