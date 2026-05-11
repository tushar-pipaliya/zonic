import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { Eye, Heart, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';


const ProductCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initialize Embla
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        slidesToScroll: 1
    });

    // Navigation buttons logic
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.escuelajs.co/api/v1/categories/2/products");
                setSlides(res.data.slice(1, 8)); // Fetching 10 items for a better slide experience
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="text-center py-20">Loading...</div>;

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto relative">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="bg-[#fdf3e9] text-[#b18b5e] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Top Sale
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4">New Arrivals</h2>
            </div>

            {/* Carousel Container */}
            <div className="relative group">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((product) => (
                            <div key={product.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3">
                                <div className="group/item cursor-pointer">
                                    {/* Image Box */}
                                    <div className="relative bg-[#f5f3ed] aspect-[4/5] flex items-center justify-center overflow-hidden mb-4">
                                        <span className="absolute top-4 left-4 bg-[#b18b5e] text-white text-[10px] px-2 py-1 rounded-full">
                                            10% Off
                                        </span>
                                        <img
                                            src={product.images}
                                            alt={product.title}
                                            className="w-4/5 h-4/5 object-contain mix-blend-multiply group-hover/item:scale-110 transition-transform duration-500"
                                        />
                                        {/* Hover Icons */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
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

                                    {/* Text Info */}
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
                                        {/* <div className="flex text-[#b18b5e] text-xs my-1">
                                            {[...Array(5)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                                        </div> */}
                                        <p className="text-gray-600 font-medium">USD {product.price}.00</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows - Matching image_f59f33.png style */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-[#b18b5e] hover:text-white transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-[#b18b5e] hover:text-white transition-all"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default ProductCarousel;

