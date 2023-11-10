import NavItem from './NavItem';
import LogOutButton from '../LogOutButton';

type children = {
  toggle: boolean;
  isHomePage: boolean;
  isLoggedIn: boolean;
};

const NavList = ({ toggle, isHomePage, isLoggedIn }: children) => {
  return (
    <ul className='items-center flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium pr-4'>
      <NavItem link='/' title='Home' isHomePage={isHomePage} toggle={toggle} />
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
  );
};

export default NavList;
