import Link from 'next/link';
import LogOutButton from './LogOutButton';

type ComponentProps = {
  user: {
    email: string | undefined;
  };
};

const AuthenticatedHeader: React.FC<ComponentProps> = ({ user }) => {
  const links = ['Home', 'My Garden', 'Find a Veg'];

  return (
    <header className='w-full'>
      <nav className='text-primaryLight w-full'>
        <div className='mx-auto bg-primaryGreen'>
          <div className='mx-2  flex flex-wrap items-center justify-between'>
            <div className='flex flex-col items-center p-2'>
              <a href='/' className='flex'>
                <span className='text-center text-lg font-playfair whitespace-nowrap'>
                  Roots
                </span>
              </a>
              <span className='text-xs italic'>My Garden</span>
              {user && <span>Hello {user.email}</span>}
            </div>
            <div className='flex md:hidden md:order-2'>
              <button
                data-collapse-toggle='mobile-menu-3'
                type='button'
                className='md:hidden text-primaryLight-400 hover:text-primaryDark hover:transition-colors duration-400 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center'
                aria-controls='mobile-menu-3'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <svg
                  className='hidden w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className='hidden md:flex justify-between items-end w-full md:w-auto md:order-1'
              id='mobile-menu-3'
            >
              <ul className='flex-col items-center md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
                {links.map((link) => {
                  return (
                    <li>
                      <Link
                        href='#'
                        className='md:bg-transparent text-primaryLight hover:text-primaryDark hover:transition-colors duration-500 block pl-3 pr-4 py-2 md:p-0 rounded'
                        aria-current='page'
                        key={link}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <LogOutButton />
            </div>
          </div>
        </div>
      </nav>
      <script src='https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js'></script>
    </header>
  );
};

export default AuthenticatedHeader;
