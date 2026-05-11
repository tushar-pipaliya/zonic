import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import axios from "axios";
import bgmain from "../../assets/bgmain.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EmblaCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "https://api.escuelajs.co/api/v1/categories/2/products"
                );
                setSlides(res.data.slice(4, 7));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 8000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative mx-auto w-full">

            {/* 🔹 Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full">

                            {/* 🔥 Main Slide - Responsive Adjustments */}
                            <div
                                className="min-h-[400px] sm:h-[500px] w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-10 md:py-0"
                                style={{
                                    backgroundImage: `url(${bgmain})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundColor: '#f5f1e6',
                                }}
                            >

                                {/* LEFT CONTENT */}
                                <div className="max-w-md text-black space-y-3 sm:space-y-4 text-center md:text-left order-2 md:order-1">
                                    <p className="text-xs sm:text-sm tracking-widest text-gray-500">
                                        NEW ARRIVAL
                                    </p>

                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-sm sm:text-base line-clamp-2 md:line-clamp-none">
                                        {slide.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
                                        <button className="border-2 mt-2 px-4 sm:px-6 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black duration-300 ease-in-out hover:border-[#b18b5e] text-sm sm:text-base">
                                            Shop Now
                                        </button>
                                        <button className="mt-2 px-4 sm:px-6 py-2 bg-white text-black rounded-full hover:bg-black transition hover:text-white duration-300 ease-in-out border border-gray-200 text-sm sm:text-base">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="flex items-center justify-center w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
                                    <img
                                        src={slide.images?.[0]}
                                        alt={slide.title}
                                        className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] object-contain rounded-full bg-white p-4 shadow-xl transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔹 Navigation Buttons - Responsive Positioning */}
            <button
                onClick={scrollPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-black/50 sm:bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
                <ArrowLeft size={20} />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-black/50 sm:bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
                <ArrowRight size={20} />
            </button>

            {/* 🔹 Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === selectedIndex ? "bg-black scale-125" : "bg-gray-300"
                            } transition`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;