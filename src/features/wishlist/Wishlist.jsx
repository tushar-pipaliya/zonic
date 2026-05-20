import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { Trash2, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Clean Image URL Helper
  const getCleanImg = (images) => {
    if (!images || images.length === 0) return 'https://via.placeholder.com/150';
    try {
      const firstImg = images[0];
      if (typeof firstImg === 'string' && firstImg.startsWith('[') && firstImg.endsWith(']')) {
        return JSON.parse(firstImg)[0];
      }
      return firstImg;
    } catch {
      return images[0];
    }
  };

  // Empty State
  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh]  flex flex-col items-center justify-center p-4 font-sans text-center">
        <Heart size={70} className="text-gray-300 mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty!</h2>
        <p className="text-gray-500 mb-6 max-w-sm">
          Tap the heart icon on your favorite items to save them here for later.
        </p>
        <Link to="/shop" className="px-6 py-3 bg-[#b18b5e] text-white font-bold rounded shadow hover:bg-[#967147] transition-all">
          EXPLORE PRODUCTS
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto min-h-[70vh] font-sans relative pt-[76px] lg:pt-[88px] ">
      <div className="flex items-center justify-between mb-10 border-b pb-4">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">MY WISHLIST</h1>
        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-between group relative transition-all duration-300 hover:shadow-md">

            {/* Image section */}
            <div className="bg-[#f5f3ed] aspect-[4/5] rounded-lg overflow-hidden flex items-center justify-center p-4 relative">
              <img
                src={getCleanImg(product.images)}
                alt={product.title}
                className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Direct Remove Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 p-2 bg-white text-gray-400 hover:text-red-500 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Info Section */}
            <div className="mt-4 text-left flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-gray-800 truncate hover:text-[#b18b5e] transition-colors">{product.title}</h3>
                </Link>
                <p className="text-[#b18b5e] font-black">${Number(product.price).toFixed(2)}</p>
              </div>

              {/* Direct Move to Cart Button (No Alerts) */}
              <button
                onClick={() => {
                  addToCart(product);
                  toggleWishlist(product);
                }}
                className="w-full mt-4 py-2.5 bg-black text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#b18b5e] transition-colors cursor-pointer tracking-wider"
              >
                <ShoppingCart size={14} />
                MOVE TO CART
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;