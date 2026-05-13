import React from 'react';
import commonheoro from "../../assets/commonheoro.jpg";

// Title ane subtitle (Breadcrumb name) props tarike pass karo
const CommonHero = ({ title, breadcrumb }) => {
    return (
        <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${commonheoro})`,
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
                    <a href="/" className="hover:text-gray-300 transition-colors">
                        Home
                    </a>
                    <span className="w-1.5 h-1.5 bg-white rounded-full mx-1"></span>
                    <span className="text-gray-200">
                        {breadcrumb}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CommonHero;