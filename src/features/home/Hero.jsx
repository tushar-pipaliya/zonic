import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import axios from "axios";
import bgmain from "../../assets/bgmain.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EmblaCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔹 Fetch Data
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

    // console.log(slides)
    // 🔹 Embla Setup
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

    // 🔹 Autoplay
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
        <div className="mx-auto">

            {/* 🔹 Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full">

                            {/* 🔥 Main Slide */}
                            <div
                                className="h-[500px] w-full flex items-center justify-between px-20"
                                style={{
                                    backgroundImage: `url(${bgmain})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundColor: '#f5f1e6',
                                }}
                            >

                                {/* LEFT CONTENT */}
                                <div className="max-w-md text-black space-y-4">
                                    <p className="text-sm tracking-widest text-gray-500">
                                        NEW ARRIVAL
                                    </p>

                                    <h1 className="text-4xl font-bold leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p>{slide.description}</p>
                                    <button className="border-2  mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black duration-300 ease-in-out hover:border-[#b18b5e]">
                                        Shop Now
                                    </button>
                                     <button className="mt-4 px-6 py-2 ml-4 bg-white text-black rounded-full   hover:bg-black transition hover:text-white  duration-300 ease-in-out">
                                        View Details
                                    </button>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="flex items-center justify-center w-1/2">
                                    <img
                                        src={slide.images?.[0]}
                                        alt={slide.title}
                                        className="h-[400px] w-[400px] object-contain rounded-full bg-white p-4 shadow-xl transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔹 Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-black text-white rounded-full hover:bg-gray-800"
            >
                <ArrowLeft />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-black text-white rounded-full hover:bg-gray-800"
            >
                <ArrowRight />
            </button>

            {/* 🔹 Dots */}
            <div className="flex justify-center gap-3 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-black scale-125" : "bg-gray-300"
                            } transition`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;