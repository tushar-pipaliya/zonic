import React from 'react';
import brand01 from '../../assets/brand-01.png';
import brand02 from '../../assets/brand-02.png';
import brand03 from '../../assets/brand-03.png';
import brand04 from '../../assets/brand-04.png';
import brand05 from '../../assets/brand-05.png';

const Award = () => {
  const awards = [brand01, brand02, brand03, brand04, brand05];

  return (
    <div className="py-10 bg-white border-y border-gray-100">
      {/* Max-width container keeps logos from touching the screen edges on wide monitors */}
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
          {awards.map((src, index) => (
            <div key={index} className="">
              <img
                src={src}
                alt={`Award ${index}`}
                className="h-12 md:h-16 lg:h-20 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;