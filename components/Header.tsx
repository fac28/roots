'use client';
import { useState, useEffect } from 'react';
import NavBurger from './Nav/NavBurger';
import NavList from './Nav/NavList';
import { navProps } from './Nav/navTypes';

type loggedIn = {
  isLoggedIn: boolean;
};

export default function Header({ isLoggedIn }: loggedIn) {
  const [toggle, setToggle] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  const props = {
    toggle,
    isHomePage,
    handleToggle,
  };

  return (
    <nav
      className={`${
        isHomePage ? 'absolute' : ''
      }  font-playfair mb-10 w-full z-50`}
    >
      <div className='w-full mx-auto bg-transparent'>
        <div
          className={`${
            !toggle
              ? 'bg-primaryGreen'
              : isHomePage
              ? 'bg-transparent'
              : 'bg-primaryLight border-b border-primaryDark'
          } flex flex-wrap items-center justify-between p-2`}
        >
          <a href='/' className='flex'>
            <span
              className={`${
                isHomePage ? 'text-primaryLight' : 'text-primaryDark'
              } self-center text-4xl font-thin whitespace-nowrap m-2`}
            >
              Roots
            </span>
          </a>
          <NavBurger {...props} />
          <div
            className={`${
              toggle ? 'hidden' : ''
            } notmd md:flex justify-between items-end w-full md:w-auto md:order-1`}
            id='mobile-menu-3'
          >
            <NavList
              {...props}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
