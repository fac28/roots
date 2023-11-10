'use client';
import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import LogOutButton from './LogOutButton';

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
    <>
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
            <div className='flex md:hidden md:order-2 pr-4'>
              <button
                data-collapse-toggle='mobile-menu-3'
                type='button'
                className={`${
                  isHomePage ? '' : 'bg-primaryGreen'
                } md:hidden text-primaryLight-400 hover:transition-colors duration-400 rounded-lg inline-flex items-center justify-center scale-125`}
                aria-controls='mobile-menu-3'
                aria-expanded='false'
                onClick={handleToggle}
              >
                <span className='sr-only '>Open main menu</span>
                <svg
                  className={`${
                    toggle ? '' : 'hidden'
                  } w-6 h-6 m-1 text-primaryLight`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <svg
                  className={`${toggle ? 'hidden' : ''} w-6 h-6 m-2`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                toggle ? 'hidden' : ''
              } notmd md:flex justify-between items-end w-full md:w-auto md:order-1`}
              id='mobile-menu-3'
            >
              <ul className='items-center flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
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
      {/* <script src='https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js'></script> */}
    </>
  );
}
