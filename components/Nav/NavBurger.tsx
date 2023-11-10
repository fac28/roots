type children = {
  toggle: boolean;
  isHomePage: boolean;
  handleToggle: () => void;
};

const NavBurger = ({ toggle, isHomePage, handleToggle }: children) => {
  return (
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
          className={`${toggle ? '' : 'hidden'} w-6 h-6 m-1 text-primaryLight`}
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
  );
};

export default NavBurger;
