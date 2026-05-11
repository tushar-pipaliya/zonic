import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Gamepad2, Heart, ShoppingBag } from 'lucide-react'; // Optional: Lucide icons for the toggle
import Home from '../../features/home/Home';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `font-bold tracking-wide transition block lg:inline-block ${isActive
      ? 'text-[#b18b5e] '
      : 'text-black '
    }`;

  return (
    <nav className=" px-6 py-4 lg:px-12 relative z-50">
      <div className="flex items-center justify-between ">
        {/* LOGO */}
        <Link to="/" className="flex  items-center  gap-3  text-2xl font-black italic border-b-3 border-b-[#b18b5e] px-2">
          <Gamepad2 className='font-extrabold' />ZONIC
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className=" lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavLink to="/" className={linkStyle}>HOME</NavLink>
          <NavLink to="/about" className={linkStyle}>ABOUT</NavLink>
          <NavLink to="/shop" className={linkStyle}>SHOP</NavLink>
          <NavLink to="/pages" className={linkStyle}>PAGES</NavLink>
          <NavLink to="/blog" className={linkStyle}>BLOG</NavLink>
          <NavLink to="/contact" className={linkStyle}>CONTACT</NavLink>
        </div>

        {/* CART AND WISHLIST*/}
        <div className="hidden lg:block">
          <div className='flex gap-3'>
            <Link to="/wishlist" >
              <Heart />
            </Link>
            <Link to="/cart">
              <ShoppingBag />
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`${isOpen ? 'flex' : 'hidden'} lg:hidden flex-col gap-4 mt-6 pb-4 border-t border-purple-900/50 pt-4`}>
        <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>HOME</NavLink>
        <NavLink to="/match" className={linkStyle} onClick={() => setIsOpen(false)}>MATCH</NavLink>
        <NavLink to="/pages" className={linkStyle} onClick={() => setIsOpen(false)}>PAGES</NavLink>
        <NavLink to="/blog" className={linkStyle} onClick={() => setIsOpen(false)}>BLOG</NavLink>
        <NavLink to="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
         <div className='flex gap-3'>
            <Link to="/wishlist" >
              <Heart />
            </Link>
            <Link to="/car">
              <ShoppingBag />
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;