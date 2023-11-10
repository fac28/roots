'use client';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { useState } from 'react';

const MonthDropdown = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  function rotateMonthsToCurrentMonthFirst(months: string[]): string[] {
    const currentMonthIndex = new Date().getMonth();
    const rotatedMonths = [
      ...months.slice(currentMonthIndex),
      ...months.slice(0, currentMonthIndex),
    ];
    return rotatedMonths;
  }

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
  const rotatedMonths = rotateMonthsToCurrentMonthFirst(months);

  return (
    <button className='button gap-2 bg-slate-200 opacity-80 absolute m-2'>
      {toggle ? (
        <ul>
          <li>
            {rotatedMonths[0]}
            <BsChevronCompactDown
              className='inline-block ml-2'
              onClick={handleToggle}
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            {rotatedMonths[0]}
            <BsChevronCompactUp
              className='inline-block ml-2'
              onClick={handleToggle}
            />
          </li>
          <li>{rotatedMonths[1]}</li>
          <li>{rotatedMonths[2]}</li>
          <li>{rotatedMonths[3]}</li>
          <li>{rotatedMonths[4]}</li>
          <li>{rotatedMonths[5]}</li>
          <li>{rotatedMonths[6]}</li>
          <li>{rotatedMonths[7]}</li>
          <li>{rotatedMonths[8]}</li>
          <li>{rotatedMonths[9]}</li>
          <li>{rotatedMonths[10]}</li>
          <li>{rotatedMonths[11]}</li>
          <li>{rotatedMonths[12]}</li>
        </ul>
      )}
    </button>
  );
};

export default MonthDropdown;
