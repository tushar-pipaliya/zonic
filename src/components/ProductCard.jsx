import React from 'react';
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext'; // <-- Import Wishlist Hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist(); // <-- Get functions

  return (
    <div className="group">
      <div className="relative bg-[#f5f3ed] aspect-[4/5] overflow-hidden flex items-center justify-center p-8 transition-all duration-500">
        
        <span className="absolute top-4 left-4 bg-[#c2a27a] text-white text-[10px] font-bold px-3 py-1 rounded-full">
          15% OFF
        </span>

        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0].startsWith('[') && product.images[0].endsWith(']')
                ? JSON.parse(product.images[0])[0]
                : product.images[0]
              : 'https://via.placeholder.com/150'
          }
          alt={product.title}
          className="object-contain w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute bottom-[-50px] group-hover:bottom-6 left-0 right-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          
          <Tooltip title="Add To Cart" placement="top" arrow>
            <button 
              onClick={() => addToCart(product)}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all cursor-pointer"
            >
              <ShoppingBag size={20} />
            </button>
          </Tooltip>

          <Tooltip title="Quick View" placement="top" arrow>
            <Link 
              to={`/product/${product.id}`}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all cursor-pointer"
            >
              <Eye size={20}/>
            </Link>
          </Tooltip>

          {/* ---> WISHLIST HEART TOGGLE LOGIC INLINE <--- */}
          <Tooltip title={isInWishlist(product.id) ? "Remove Wishlist" : "Add To Wishlist"} placement="top" arrow>
            <button 
              onClick={() => toggleWishlist(product)}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all cursor-pointer"
            >
              <Heart 
                size={20} 
                className={isInWishlist(product.id) ? "text-red-500 fill-red-500" : " hover:text-white"} 
              />
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="mt-4 text-left">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-800 truncate cursor-pointer hover:text-[#b18b5e] transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex gap-1 my-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-orange-300 text-orange-300" />
          ))}
        </div>
        <p className="text-gray-900 font-bold">${product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;