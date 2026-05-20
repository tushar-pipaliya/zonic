import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import Badge from '@mui/material/Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // મેનુ બંધ કરવા માટેનું ફંક્શન
  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false); // ડ્રોપડાઉન પણ બંધ થઈ જાય
  };

  const linkStyle = ({ isActive }) =>
    `font-bold tracking-wide transition-colors duration-200 text-sm lg:text-base py-2 lg:py-0 ${
      isActive ? 'text-[#b18b5e]' : 'text-black hover:text-[#b18b5e]'
    }`;

  return (
    <nav
      className={`px-4 sm:px-6 lg:px-12 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcf9f5] shadow-md py-3'
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-xl sm:text-2xl font-black italic border-b-2 border-b-[#b18b5e] px-1 sm:px-2">
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 font-extrabold text-[#b18b5e]" />
          ZONIC
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavLink to="/" className={linkStyle}>HOME</NavLink>
          <NavLink to="/about" className={linkStyle}>ABOUT</NavLink>
          <NavLink to="/shop" className={linkStyle}>SHOP</NavLink>

          {/* PAGES DROPDOWN (DESKTOP) */}
          <div className="relative group cursor-pointer py-2">
            <span className="font-bold tracking-wide flex items-center gap-1 group-hover:text-[#b18b5e] text-sm lg:text-base">
              PAGES <ChevronDown size={16} />
            </span>
            <div className={`absolute left-0 mt-2 w-48 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#b18b5e] flex flex-col rounded-b-md overflow-hidden ${
              isScrolled ? 'bg-[#fcf9f5]' : 'bg-white'
            }`}>
              <Link to="/faq" className="px-4 py-3 hover:bg-gray-100 font-bold text-sm text-black hover:text-[#b18b5e]">FAQ</Link>
              <Link to="/portfolio" className="px-4 py-3 hover:bg-gray-100 font-bold text-sm text-black hover:text-[#b18b5e]">PORTFOLIO</Link>
            </div>
          </div>

          <NavLink to="/blog" className={linkStyle}>BLOG</NavLink>
          <NavLink to="/contact" className={linkStyle}>CONTACT</NavLink>
        </div>

        {/* ICONS (CART & WISHLIST) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex gap-4 sm:gap-6 items-center">
            <Link to="/wishlist" onClick={closeMenu} className="text-black hover:text-[#b18b5e] transition-colors">
              <Badge badgeContent={wishlist.length} sx={{ "& .MuiBadge-badge": { backgroundColor: "#b18b5e", color: "white" } }}>
                <Heart size={22} />
              </Badge>
            </Link>

            <Link to="/cart" onClick={closeMenu} className="text-black hover:text-[#b18b5e] transition-colors">
              <Badge badgeContent={totalCartItems} sx={{ "& .MuiBadge-badge": { backgroundColor: "#b18b5e", color: "white" } }}>
                <ShoppingBag size={22} />
              </Badge>
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="lg:hidden focus:outline-none text-black p-1 hover:text-[#b18b5e] transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE & TABLET MENU */}
      <div className={`lg:hidden flex-col gap-2 mt-4 pb-4 border-t border-gray-200 pt-4 transition-all duration-300 ${
        isOpen ? 'flex' : 'hidden'
      }`}>
        <NavLink to="/" className={linkStyle} onClick={closeMenu}>HOME</NavLink>
        <NavLink to="/about" className={linkStyle} onClick={closeMenu}>ABOUT</NavLink>
        <NavLink to="/shop" className={linkStyle} onClick={closeMenu}>SHOP</NavLink>
        
        {/* PAGES ACCORDION FOR MOBILE */}
        <div className="flex flex-col">
          <button 
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} 
            className="font-bold tracking-wide flex items-center justify-between py-2 text-sm text-black hover:text-[#b18b5e]"
          >
            <span>PAGES</span>
            <ChevronDown size={16} className={`transform transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`flex flex-col pl-4 gap-2 border-l border-gray-200 mt-1 transition-all ${
            isMobileDropdownOpen ? 'block' : 'hidden'
          }`}>
            <Link to="/faq" className="font-semibold text-sm py-1 text-gray-700 hover:text-[#b18b5e]" onClick={closeMenu}>FAQ</Link>
            <Link to="/portfolio" className="font-semibold text-sm py-1 text-gray-700 hover:text-[#b18b5e]" onClick={closeMenu}>PORTFOLIO</Link>
          </div>
        </div>

        <NavLink to="/blog" className={linkStyle} onClick={closeMenu}>BLOG</NavLink>
        <NavLink to="/contact" className={linkStyle} onClick={closeMenu}>CONTACT</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;