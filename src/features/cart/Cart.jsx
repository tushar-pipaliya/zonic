import React from 'react';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    // API image clean karva mate nu helper function
    const getImageUrl = (images) => {
        try {
            if (images && images[0]?.startsWith('[') && images[0]?.endsWith(']')) {
                return JSON.parse(images[0])[0];
            }
            return images ? images[0] : 'https://via.placeholder.com/150';
        } catch (e) {
            return images ? images[0] : 'https://via.placeholder.com/150';
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
                <ShoppingBag size={70} className="text-gray-300 mb-4 animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
                <p className="text-sm sm:text-base text-gray-500 mb-6">Start shopping some amazing items today.</p>
                <Link to="/shop" className="w-full sm:w-auto px-6 py-3 bg-[#b18b5e] text-white font-bold rounded shadow hover:bg-[#967147] transition-all tracking-wider text-sm">
                    START SHOPPING
                </Link>
            </div>
        );
    }

    return (
        <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto min-h-[70vh] relative pt-[80px] lg:pt-[100px]">
            <h1 className="text-lg sm:text-xl font-black text-gray-900 mb-6 sm:mb-10 border-b pb-4 tracking-wide">
                SHOPPING CART ({cart.length})
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                
                {/* LEFT: Cart Items List */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
                        >
                            {/* Image and Info */}
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <img
                                    src={getImageUrl(item.images)}
                                    alt={item.title}
                                    className="w-20 h-24 sm:w-24 sm:h-28 object-contain bg-gray-50 p-2 rounded-lg flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-800 text-sm sm:text-base truncate hover:text-clip hover:whitespace-normal">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#b18b5e] font-black mt-1 text-base">${item.price}.00</p>
                                </div>
                            </div>

                            {/* Controls Panel (Mobile ma flex row and proper space sathe) */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                                
                                {/* Quantity Controls */}
                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 h-9">
                                    <button
                                        onClick={() => updateQuantity(item.id, 'minus')}
                                        className="px-3 h-full hover:bg-gray-200 text-gray-600 transition flex items-center justify-center"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus size={12} />
                                    </button>
                                    <span className="px-3 font-bold text-sm text-gray-800 min-w-[24px] text-center">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 'plus')}
                                        className="px-3 h-full hover:bg-gray-200 text-gray-600 transition flex items-center justify-center"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus size={12} />
                                    </button>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition sm:ml-2"
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={18} sm={20} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* RIGHT: Order Summary Panel */}
                <div className="bg-[#fdf3e9] p-5 sm:p-6 rounded-xl border border-[#f5e4d3] lg:sticky lg:top-[120px]">
                    <h2 className="font-bold text-gray-900 mb-4 text-sm sm:text-base tracking-wide">ORDER SUMMARY</h2>
                    <hr className="border-[#f5e4d3] my-3" />

                    <div className="space-y-3">
                        <div className="flex justify-between font-bold text-sm sm:text-base text-gray-700">
                            <span>Subtotal</span>
                            <span>${getCartTotal()}.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-sm sm:text-base text-gray-700">
                            <span>Shipping</span>
                            <span className="text-green-600">FREE</span>
                        </div>
                    </div>

                    <hr className="border-[#f5e4d3] my-4" />

                    <div className="flex justify-between font-black text-base sm:text-lg text-gray-900 mb-6">
                        <span>Total</span>
                        <span>${getCartTotal()}.00</span>
                    </div>

                    <button className="w-full py-3.5 sm:py-4 bg-[#b18b5e] font-bold text-sm text-white rounded-lg tracking-wider hover:bg-[#967147] shadow-md hover:shadow-lg transition-all">
                        PROCEED TO CHECKOUT
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;