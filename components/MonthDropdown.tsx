'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const MonthDropdown = ({ searchParams }: any) => {
  const router = useRouter();
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

  const updateURL = (month: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('month', month);
    router.push(currentUrl.href);
    // window.history.pushState({}, '', currentUrl.href);
  };

  useEffect(() => {
    const monthName = months[selectedMonthIndex];
    updateURL(monthName);
  }, [selectedMonthIndex]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const monthFromUrl = searchParams.get('month');
    if (monthFromUrl) {
      const monthIndex = months.indexOf(monthFromUrl);
      if (monthIndex >= 0) {
        setSelectedMonthIndex(monthIndex);
      }
    }
  }, []);

  const handleMonthSelect = (monthName: string) => {
    const newMonthIndex = months.indexOf(monthName);
    setSelectedMonthIndex(newMonthIndex);
  };

  const rotatedMonths = [
    ...months.slice(selectedMonthIndex),
    ...months.slice(0, selectedMonthIndex),
  ];

  return (
    <button
      className='button2 gap-2 bg-slate-200 absolute opacity-80 m-2'
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
