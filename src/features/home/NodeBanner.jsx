import React from 'react';
import nodebannerbg from '../../assets/nodebannerbg.jpg';

const HeroSection = () => {
  return (
    <div className='p-6 bg-gray-100'>
      <div className="flex flex-col bg-gray-100 md:flex-row w-full font-sans items-center overflow-hidden max-w-7xl mx-auto">
        
        {/* Left Section: Promotional Card */}
        <div className="w-full md:w-[60%] bg-[#F9F6EE] justify-center md:mr-8 mb-6 md:mb-0">
          <div className="bg-[#B08D57] p-8 md:p-12 border-[1px] border-white/40 relative w-full">
            {/* Inner white border for styling */}
            <div className="absolute inset-2 border-[1px] border-white/60 pointer-events-none"></div>

            <div className="relative z-10 text-white">
              <p className="text-xs font-bold tracking-widest uppercase mb-4">
                Hot Deal Electronic
              </p>
              <h1 className="text-4xl md:text-2.5xl font-semibold leading-tight mb-8">
Premium gadgets for the modern pro.               </h1>
              <button className="bg-white text-black px-6 py-3 text-sm font-bold flex items-center hover:bg-gray-100 transition-colors">
                BUY NOW
                <span className="ml-2">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Product Image */}
        <div className="w-full md:w-[40%] relative overflow-hidden">
          <img
            src={nodebannerbg}
            alt="Modern Furniture"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;