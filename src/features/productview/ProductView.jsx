import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { ShoppingBag, Heart, X } from 'lucide-react'; 
import { useCart } from '../../context/CartContext'; 
import { useWishlist } from '../../context/WishlistContext';

const ProductView = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const { addToCart } = useCart(); 
    const { toggleWishlist, isInWishlist } = useWishlist(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => res.json())
            .then((data) => { setProduct(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [id]);

    // 🛠️ લોડિંગ અને નોટ ફાઉન્ડ સ્ટેટમાં પણ પેડિંગ ઉમેર્યું જેથી તે નબારની નીચે સેન્ટરમાં દેખાય
    if (loading) return <div className="pt-[150px] text-center text-xl animate-pulse text-gray-500 min-h-screen">Loading...</div>;
    if (!product) return <div className="pt-[150px] text-center font-bold text-red-500 min-h-screen">Product Not Found!</div>;

    const rawImage = product.images?.[0] || 'https://via.placeholder.com/150';
    const cleanImage = rawImage.startsWith('[') ? JSON.parse(rawImage)[0] : rawImage;
    const favorite = isInWishlist(product.id);

    return (
        /* 🛠️ મુખ્ય ફેરફાર: pt-[76px] lg:pt-[88px] અને min-h-screen માટે કન્ડીશન ઉમેરી */
        <div className="pt-[76px] lg:pt-[88px] bg-gray-50 min-h-screen w-full">
            <div className="relative max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 font-sans">
                
                {/* --- CANCEL CROSS BUTTON --- */}
                {/* 🛠️ બટનને નબારની નીચે સેટ કરવા top-4 માંથી top-[90px] lg:top-4 કર્યું */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="absolute top-[90px] lg:top-4 right-4 cursor-pointer p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition duration-200 z-10"
                    title="Cancel and go back"
                >
                    <X size={20} />
                </button>

                {/* Left: Product Image */}
                <div className="flex-1 bg-gray-100 rounded-xl p-8 flex items-center justify-center mt-10 md:mt-0">
                    <img src={cleanImage} alt={product.title} className="max-h-[400px] object-contain hover:scale-105 transition duration-300" />
                </div>

                {/* Right: Product Info & Actions */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
                    <p className="text-xl font-bold text-[#b18b5e] mb-4">${Number(product.price).toFixed(2)}</p>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>

                    {/* Actions */}
                    <div className="flex gap-4 max-w-xs">
                        <button 
                            onClick={() => addToCart(product)} 
                            className="flex-1 cursor-pointer bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 flex items-center justify-center gap-2 text-xs tracking-wider"
                        >
                            <ShoppingBag size={16} /> ADD TO CART
                        </button>

                        <button 
                            onClick={() => toggleWishlist(product)}
                            className={`p-3 rounded-xl border cursor-pointer transition ${favorite ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white text-gray-400 border-gray-200'}`}
                        >
                            <Heart size={20} fill={favorite ? "currentColor" : "none"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;