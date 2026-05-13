import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const ProductCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.escuelajs.co/api/v1/categories/2/products");
                setSlides(res.data.slice(0, 6)); 
                setLoading(false);
            } catch (err) {
                console.error("Fetch Error:", err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="text-center py-20 animate-pulse">Loading New Arrivals...</div>;

    return (
        /* REMOVED 'group' from here so it doesn't trigger all children */
        <section className="py-16 px-4 max-w-7xl mx-auto relative"> 
            <div className="text-center mb-12">
                <span className="bg-[#fdf3e9] text-[#b18b5e] text-[11px] font-black px-4 py-1.5 uppercase tracking-[0.2em]">
                    Top Sale
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-5">New Arrivals</h2>
            </div>

            {/* Added 'group/carousel' here if you want arrows to appear on carousel hover only */}
            <div className="relative group/carousel"> 
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((product) => (
                            <div 
                                key={product.id} 
                                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-3"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows - Using group-hover/carousel */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-[-15px] top-[40%] -translate-y-1/2 w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-xl z-30 opacity-0 group-hover/carousel:opacity-100 hover:bg-[#b18b5e] hover:text-white transition-all duration-300"
                >
                    <ArrowLeft size={22} />
                </button>
                
                <button
                    onClick={scrollNext}
                    className="absolute right-[-15px] top-[40%] -translate-y-1/2 w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-xl z-30 opacity-0 group-hover/carousel:opacity-100 hover:bg-[#b18b5e] hover:text-white transition-all duration-300"
                >
                    <ArrowRight size={22} />
                </button>
            </div>
        </section>
    );
};

export default ProductCarousel;