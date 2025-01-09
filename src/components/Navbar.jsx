import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import Theme from '../context/theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setThemeMode, themeMode } = Theme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchTheme = (theme) => {
    setThemeMode(theme);
  };

  return (
    <nav className='bg-navbar border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='https://flowbite.com/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img src={Logo} className='h-[100px]' alt='Flowbite Logo' />
        </a>
        <button
          onClick={toggleMenu}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded={isMenuOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id='navbar-default'
        >
          <ul className='font-medium flex flex-col items-center text-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-c-orange-500 rounded md:bg-transparent md:text-c-orange-500 md:p-0 md:dark:text-c-orange-500'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-mainText rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c-orange-500 md:p-0'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-mainText rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c-orange-500 md:p-0'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-mainText rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c-orange-500 md:p-0'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-mainText rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c-orange-500 md:p-0'
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-mainText rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c-orange-500 md:p-0'
              >
                Contract
              </a>
            </li>
          </ul>
        </div>
        {themeMode == 'light' ? (
          <button onClick={() => switchTheme('dark')}>
            <FaMoon className='text-mainText' size={20} />
          </button>
        ) : (
          <button onClick={() => switchTheme('light')}>
            <FaSun className='text-mainText' size={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
