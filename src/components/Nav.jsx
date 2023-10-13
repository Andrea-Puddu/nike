import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {xmark} from '../assets/icons';

import {useState} from 'react';

import {navLinks} from '../constants';

const NavLinks = ({handleClick, mobileMenuOpen}) => {
  return (
    <ul
      className={`${
        mobileMenuOpen ? 'flex flex-col' : 'hidden lg:flex '
      } justify-center items-center gap-16 flex-1`}
    >
      {navLinks.map((link) => (
        <li key={link.label} onClick={() => handleClick && handleClick()}>
          <a
            href={link.href}
            className={`${
              mobileMenuOpen ? 'text-xl font-semibold' : 'text-lg '
            } font-montserrat leading-normal text-slate-gray`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=' padding-x py-8 absolute w-full z-10'>
      {/* Desktop Nav */}
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <NavLinks />
        <div className=' lg:hidden'>
          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 left-0 h-screen w-full bg-pale-blue opacity-95 backdrop-blur-2xl z-50 p-10 flex flex-col justify-evenly items-center transition-all  ${
          mobileMenuOpen ? ' translate-x-0' : ' -translate-x-full'
        }`}
      >
        <div className=' lg:hidden'>
          <img
            src={xmark}
            alt='xmark'
            width={28}
            height={28}
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
        <NavLinks mobileMenuOpen={mobileMenuOpen} handleClick={() => setMobileMenuOpen(false)} />
      </nav>
    </header>
  );
};

export default Nav;
