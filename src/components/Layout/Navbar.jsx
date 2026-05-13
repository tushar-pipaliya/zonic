import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Gamepad2, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import Badge from '@mui/material/Badge';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `font-bold tracking-wide transition block lg:inline-block ${isActive ? 'text-[#b18b5e] ' : 'text-black hover:text-[#b18b5e]'
    }`;

  return (
    <nav className="px-6 py-4 lg:px-12 relative z-50 bg-white">
      <div className="flex items-center justify-between ">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 text-2xl font-black italic border-b-3 border-b-[#b18b5e] px-2">
          <Gamepad2 className='font-extrabold' />ZONIC
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavLink to="/" className={linkStyle}>HOME</NavLink>
          <NavLink to="/about" className={linkStyle}>ABOUT</NavLink>
          <NavLink to="/shop" className={linkStyle}>SHOP</NavLink>

          {/* PAGES DROPDOWN */}
          <div className="relative group cursor-pointer">
            <span className="font-bold tracking-wide flex items-center gap-1 group-hover:text-[#b18b5e]">
              PAGES
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#b18b5e] flex flex-col">
              <Link to="/faq" className="px-4 py-3 hover:bg-gray-100 font-bold text-sm">FAQ</Link>
              <Link to="/portfolio" className="px-4 py-3 hover:bg-gray-100 font-bold text-sm">PORTFOLIO</Link>
            </div>
          </div>

          <NavLink to="/blog" className={linkStyle}>BLOG</NavLink>
          <NavLink to="/contact" className={linkStyle}>CONTACT</NavLink>
        </div>

        {/* CART AND WISHLIST */}
        <div className="hidden lg:block">
          <div className='flex gap-3'>
            <Link to="/wishlist">
            <Badge badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#b18b5e",
                  color: "white"
                }
              }}
            >
              <Heart />
            </Badge>
            
      </Link>
            <Link to="/cart"><Badge badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#b18b5e",
                  color: "white"
                }
              }}
            >
              <ShoppingBag />
            </Badge></Link>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`${isOpen ? 'flex' : 'hidden'} lg:hidden flex-col gap-4 mt-6 pb-4 border-t border-gray-200 pt-4`}>
        <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>HOME</NavLink>
        <NavLink to="/faq" className={linkStyle} onClick={() => setIsOpen(false)}>FAQ</NavLink>
        <NavLink to="/portfolio" className={linkStyle} onClick={() => setIsOpen(false)}>PORTFOLIO</NavLink>
        <NavLink to="/blog" className={linkStyle} onClick={() => setIsOpen(false)}>BLOG</NavLink>
        <NavLink to="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
        <div className='flex gap-3 pt-2'>
          <Link to="/wishlist"><Heart /></Link>
          <Link to="/cart"><ShoppingBag /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;