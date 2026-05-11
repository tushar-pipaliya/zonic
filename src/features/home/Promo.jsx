import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 1. Added missing axios import

const PromoSection = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "https://api.escuelajs.co/api/v1/categories/2/products"
                );
                setSlides(res.data.slice(6,8));
                setLoading(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="overflow-hidden p-6">
            <div className="flex gap-4">
                {slides.map((slide) => (
                    <div key={slide.id} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0">
                        <div className="bg-[#eef9fe]  rounded-xl p-8 flex items-center justify-between h-full">
                            
                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-[#b18b5e] text-xs font-bold tracking-widest mb-1 uppercase">
                                    Get 20% Off
                                </p>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight line-clamp-2">
                                    {slide.title}
                                </h2>
                                <button className="bg-[#b18b5e] text-white px-6 py-2 text-sm font-bold uppercase hover:bg-[#a07a50] transition-colors">
                                    Buy Now
                                </button>
                            </div>

                            <div className="flex-1 flex justify-end">
                                <img 
                                    src={slide.images} 
                                    alt={slide.title} 
                                    className="w-40 h-40 object-contain rounded-sm mix-blend-multiply" 
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromoSection;