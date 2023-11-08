type children = {
  link: string;
  title: string;
};

const NavItem = ({ link, title }: children) => {
  return (
    <li>
      <a
        href={link}
        className='md:bg-transparent text-primaryLight hover:text-primaryDark hover:transition-colors duration-500 block pl-3 pr-4 py-2 md:p-0 rounded'
        aria-current='page'
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
