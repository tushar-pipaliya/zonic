import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Toggle Wishlist: Direct add or remove without any browser alerts
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isExisting = prevWishlist.find((item) => item.id === product.id);
      
      if (isExisting) {
        // Direct remove, no alert
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        // Direct add, no alert
        return [...prevWishlist, product];
      }
    });
  };

  // Check if product is in wishlist (for changing Heart icon color)
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);