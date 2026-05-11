import React from 'react';

const PromoSection = () => {
  // 1. Data stored in an Array of Objects
  const promoData = [
    {
      id: 1,
      title: "Exclusive offers for you",
      description: "Get weekly deals, valuable health information and more.",
      buttonText: "SIGN UP",
      bgColor: "bg-[#e0f7fa]",
      textColor: "text-cyan-800",
      type: "button"
    },
    {
      id: 2,
      title: "Join Our Community",
      description: "Get weekly deals, valuable health information and more.",
      buttonText: "JOIN FREE NOW",
      bgColor: "bg-[#f9fbe7]",
      textColor: "text-lime-800",
      type: "button"
    },
    {
      id: 3,
      title: "Get our FREE app Now!",
      description: "Get weekly deals, valuable health information and more.",
      bgColor: "bg-[#fce4ec]",
      type: "app-links"
    }
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 2. Mapping through the array */}
        {promoData.map((item) => (
          <div 
            key={item.id} 
            className={`${item.bgColor} p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.02]`}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-6">
                {item.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {item.description}
              </p>
            </div>

            {item.type === "button" ? (
              <button className={`mt-8 border border-gray-800 py-2 px-4 w-max flex items-center gap-2 hover:bg-white transition-colors tracking-widest text-sm font-semibold ${item.textColor}`}>
                {item.buttonText} <span className="text-lg">›</span>
              </button>
            ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="bg-black p-1 rounded w-[120px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 mx-auto" />
                </button>
                <button className="bg-black p-1 rounded w-[120px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 mx-auto" />
                </button>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default PromoSection;