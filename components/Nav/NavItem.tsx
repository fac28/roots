type children = {
  link: string;
  title: string;
  isHomePage: boolean;
  toggle: boolean;
};

const NavItem = ({ link, title, isHomePage, toggle }: children) => {
  return (
    <li>
      <a
        href={link}
        className={`${
          isHomePage || !toggle ? 'text-primaryLight' : 'text-primaryDark'
        } md:bg-transparent hover:text-secondaryGreen hover:transition-colors duration-500 block pl-3 pr-4 py-2 md:p-0 rounded`}
        aria-current='page'
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
