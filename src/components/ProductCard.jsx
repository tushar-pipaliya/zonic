import React from 'react';
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react';
import { Tooltip } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative bg-[#f5f3ed] aspect-[4/5] overflow-hidden flex items-center justify-center p-8 transition-all duration-500">
        
        {/* Badge - (Optional: tame conditional pan rakhi shako) */}
        <span className="absolute top-4 left-4 bg-[#c2a27a] text-white text-[10px] font-bold px-3 py-1 rounded-full">
          15% OFF
        </span>

        <img
          src={product.images[0]}
          alt={product.title}
          className="object-contain w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Actions */}
        <div className="absolute bottom-[-50px] group-hover:bottom-6 left-0 right-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Tooltip title="Add To Cart" placement="top" arrow>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all">
              <ShoppingBag size={20} />
            </button>
          </Tooltip>
          <Tooltip title="Quick View" placement="top" arrow>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all">
              <Eye size={20} />
            </button>
          </Tooltip>
          <Tooltip title="Add To Wishlist" placement="top" arrow>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all">
              <Heart size={20} />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-left">
        <h3 className="text-lg font-bold text-gray-800 truncate cursor-pointer">
          {product.title}
        </h3>
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