import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate add karyu
import { X } from 'lucide-react'; // Lucide mathi X icon use kari sako

const ProductView = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Navigation mate initialization
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (loading) return <div className="text-center py-20 text-2xl font-sans">Loading Details...</div>;
    if (!product) return <div className="text-center py-20 font-sans">Product Not Found!</div>;

    return (
        <div className="relative max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 bg-gray-50 font-sans">
            
            {/* --- CANCEL / CLOSE BUTTON --- */}
            <button 
                onClick={() => navigate(-1)} // -1 etle user jya thi ayo hato tya pachho jato rahese
                className="absolute top-4 right-4 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-all duration-300 z-10"
            >
                <X size={28} />
            </button>

            {/* Left: Image Section */}
            <div className="flex-1 bg-[#f5f3ed] rounded-2xl p-10 flex items-center justify-center">
                <img 
                    // API mathi images array ave che, etle [0] index vapro
                    src={product.images[0]} 
                    alt={product.title} 
                    className="max-h-[500px] object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" 
                />
            </div>

            {/* Right: Details Section */}
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
                
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold text-[#b18b5e]">${product.price}.00</span>
                    <span className="text-gray-400 line-through text-lg">${product.price + 20}.00</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {product.description}
                </p>

                <div className="flex gap-4">
                    <button className="flex-1 bg-black text-white py-4 rounded-full font-bold hover:bg-[#b18b5e] transition-all duration-300">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductView;