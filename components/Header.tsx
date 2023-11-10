'use client';
import { useState, useEffect } from 'react';
import NavItem from './Nav/NavItem';
import LogOutButton from './LogOutButton';
import NavBurger from './Nav/NavBurger';

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
          <NavBurger
            toggle={toggle}
            isHomePage={isHomePage}
            handleToggle={handleToggle}
          />
          <div
            className={`${
              toggle ? 'hidden' : ''
            } notmd md:flex justify-between items-end w-full md:w-auto md:order-1`}
            id='mobile-menu-3'
          >
            <ul className='items-center flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium pr-4'>
              <NavItem
                link='/'
                title='Home'
                isHomePage={isHomePage}
                toggle={toggle}
              />
              <NavItem
                link='/search'
                title='Find a veggie'
                isHomePage={isHomePage}
                toggle={toggle}
              />
              <NavItem
                link='#'
                title='Take a survey'
                isHomePage={isHomePage}
                toggle={toggle}
              />
              {isLoggedIn ? (
                <>
                  <LogOutButton isHomePage={isHomePage} toggle={toggle} />
                  <NavItem
                    link='/mygarden'
                    title='My garden'
                    isHomePage={isHomePage}
                    toggle={toggle}
                  />
                </>
              ) : (
                <>
                  <NavItem
                    link='/signup'
                    title='Sign up'
                    isHomePage={isHomePage}
                    toggle={toggle}
                  />
                  <NavItem
                    link='/login'
                    title='Log in'
                    isHomePage={isHomePage}
                    toggle={toggle}
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
