import React, { useState, useEffect } from 'react';

const ElectronicDeals = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 236, hours: 7, mins: 25, secs: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return prev; // Simple static logic for UI
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6 font-sans">
      
      {/* Left Banner: Product Offer */}
      <div className="relative w-full md:w-1/2 h-[450px] bg-[#222] overflow-hidden group">
        
        {/* White Border Frame */}
        <div className="absolute inset-6 border border-white/40 pointer-events-none"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
          <h4 className="text-sm font-bold tracking-widest uppercase mb-2">
            Hot Deal Electronics
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Premium Sound <br /> Limited Offer
          </h2>
          <p className="text-3xl font-light mb-8">
            <span className="font-bold">40% Off</span>
          </p>
          <button className="w-fit px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors flex items-center gap-2 uppercase text-sm font-bold">
            Buy Now <span>&gt;</span>
          </button>
        </div>
      </div>

      {/* Right Banner: Deals of the Week (Countdown) */}
      <div className="relative w-full md:w-1/2 h-[450px] bg-[#004d54] overflow-hidden">
        {/* White Border Frame */}
        <div className="absolute inset-6 border border-white/40"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-8">
          <div className="bg-white text-[#004d54] px-4 py-1 text-[10px] font-bold uppercase mb-4">
            Best Gadgets Store
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">Deals OF The Week</h2>

          {/* Timer Grid */}
          <div className="grid grid-cols-4 gap-2 mb-10 w-full">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HRS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.mins },
              { label: 'SECS', value: timeLeft.secs }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md flex flex-col items-center py-3 px-1 border border-white/20">
                <span className="text-xl font-bold">{item.value}</span>
                <span className="text-[10px] opacity-70 tracking-tighter">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="w-fit px-8 py-3 border border-white hover:bg-white hover:text-[#004d54] transition-colors flex items-center gap-2 uppercase text-sm font-bold">
            Buy Now <span>&gt;</span>
          </button>

          {/* Bottom Decoration Image (Optional) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 w-3/4">
             {/* Ahiya tame koi keyboard ke mouse nu png muki shako */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ElectronicDeals;