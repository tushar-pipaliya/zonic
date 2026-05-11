import React, { useState, useEffect } from 'react';
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react';
import { Tooltip } from '@mui/material';

const TrendyCollection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.slice(0, 8)); // Taking first 8 for the grid
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    if (loading) return <div className="text-center py-20">Loading Collection...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                <div>
                    <span className="uppercase text-xs font-bold tracking-widest bg-orange-50 px-2 py-1">
                        This Month
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Trendy Collection</h2>
                </div>

                <nav className="flex gap-6 text-sm font-semibold text-gray-500 mt-6 md:mt-0">
                    {['All Collection', 'New Arrivals', 'Top Rated', 'Trending Items'].map((tab, i) => (
                        <button key={tab} className={`hover:text-black transition-colors ${i === 0 ? 'text-black border-b-2 border-orange-400' : ''}`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        {/* Image Container */}
                        <div className="relative bg-[#f5f3ed] aspect-[4/5] overflow-hidden flex items-center justify-center p-8 transition-all duration-500">

                            {/* Badge */}
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
                                <Tooltip describeChild title="Add To Cart" placement="top" arrow>
                                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all">
                                        <ShoppingBag size={20} />
                                    </button>
                                </Tooltip>
                                <Tooltip describeChild title="Quick View" placement="top" arrow>
                                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#b18b5e] hover:text-white transition-all">
                                        <Eye size={20} />
                                    </button>
                                </Tooltip>
                                <Tooltip describeChild title="Add To Wishlist" placement="top" arrow>
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
                ))}
            </div>
        </div>
    );
};

export default TrendyCollection;