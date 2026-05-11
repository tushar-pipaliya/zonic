import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider = () => {
  // Embla Hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1 
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 bg-[url(/src/assets/feedback.avif)]"
        // style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <span className="bg-white/10 text-white text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
            Testimonials
          </span>
          <h2 className="text-white text-4xl font-bold mt-4">Client Feedback</h2>
        </div>

        {/* Slider Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            
            {/* Card 1 */}
            <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-3">
              <div className="bg-white p-8 h-full shadow-xl">
                <div className="flex text-yellow-500 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} fill={i < 4 ? "currentColor" : "none"} size={16} />)}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Annette Black</h3>
                    <p className="text-xs text-gray-500 italic">Tech Reviewer</p>
                  </div>
                  <Quote className="text-gray-200" size={40} strokeWidth={1} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  The electronic gadgets I ordered are top-notch. Performance is better than expected!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-3">
              <div className="bg-white p-8 h-full shadow-xl">
                <div className="flex text-yellow-500 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} fill={i < 5 ? "currentColor" : "none"} size={16} />)}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Ralph Edwards</h3>
                    <p className="text-xs text-gray-500 italic">Software Engineer</p>
                  </div>
                  <Quote className="text-gray-200" size={40} strokeWidth={1} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Fast delivery and original products. Best electronics store in the city!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-3">
              <div className="bg-white p-8 h-full shadow-xl">
                <div className="flex text-yellow-500 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} fill={i < 4 ? "currentColor" : "none"} size={16} />)}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Jerome Bell</h3>
                    <p className="text-xs text-gray-500 italic">Gamer</p>
                  </div>
                  <Quote className="text-gray-200" size={40} strokeWidth={1} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  The gaming mouse has incredible DPI. I love the collection they have.
                </p>
              </div>
            </div>

            {/* Extra Card (To show scrolling) */}
            <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-3">
              <div className="bg-white p-8 h-full shadow-xl">
                <div className="flex text-yellow-500 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Leslie Alexander</h3>
                    <p className="text-xs text-gray-500 italic">Designer</p>
                  </div>
                  <Quote className="text-gray-200" size={40} strokeWidth={1} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Great UI on the website, easy to navigate and buy products!
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-[#b18b5e] flex items-center justify-center text-[#b18b5e]  hover:bg-[#b18b5e]  hover:text-white transition-all shadow-lg active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-[#b18b5e] flex items-center justify-center text-[#b18b5e]  hover:bg-[#b18b5e]  hover:text-white transition-all shadow-lg active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;