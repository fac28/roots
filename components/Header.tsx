'use client';
import { useState } from 'react';
import NavItem from './NavItem';

export default function Header() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <nav className='text-primaryLight mb-10 w-full'>
        <div className='w-full mx-auto bg-transparent'>
          <div
            className={`${
              toggle ? 'bg-transparent' : 'bg-primaryGreen'
            } flex flex-wrap items-center justify-between`}
          >
            <a href='/' className='flex'>
              <span className='self-center text-lg font-semibold whitespace-nowrap p-4'>
                Roots
              </span>
            </a>
            <div className='flex md:hidden md:order-2 '>
              <button
                data-collapse-toggle='mobile-menu-3'
                type='button'
                className='md:hidden text-primaryLight-400 hover:transition-colors duration-400 rounded-lg inline-flex items-center justify-center'
                aria-controls='mobile-menu-3'
                aria-expanded='false'
                onClick={handleToggle}
              >
                <span className='sr-only '>Open main menu</span>
                <svg
                  className={`${toggle ? '' : 'hidden'} w-6 h-6`}
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
                  className={`${toggle ? 'hidden' : ''} w-6 h-6`}
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
              <ul className='flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
                <NavItem link='/' title='Home' />
                <NavItem link='/search' title='Find a veggie' />
                <NavItem link='#' title='Take a survey' />
                <NavItem link='/mygarden' title='My garden' />
                <NavItem link='/signup' title='Sign up' />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <script src='https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js'></script> */}
    </>
  );
}
