import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import videobg from '../../assets/videobg.webp'

const VideoShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  // FIXED: Changed /watch?v= to /embed/
  const videoId = "6QkTXiRJCJs";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;

  return (
    <section className="relative w-full bg-gray-100 overflow-hidden mb-10">
      {/* Background Container - Layout inspired by image_ee3dd8.png */}
      <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
        
        {/* Placeholder Thumbnail */}
        <img 
          src={videobg}
          alt="Premium Electronics" 
          className="absolute inset-0 w-full h-full "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Play Button - Matching the focal point of image_ee3dd8.png */}
        <button 
          onClick={() => setIsOpen(true)}
          className="relative group z-10"
        >
          <div className="absolute -inset-4 bg-white/30 rounded-full animate-ping group-hover:bg-white/50"></div>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-black fill-black ml-1" />
          </div>
        </button>
      </div>

      {/* Video Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
          >
            <X size={40} />
          </button>
          
          <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src={embedUrl}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;