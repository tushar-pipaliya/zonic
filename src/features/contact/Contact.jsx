import React from 'react';
import ContactHero from './ContactHero';

const Contact = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.60627750815!2d71.1477052!3d21.1433638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2f538095bd15f%3A0xf44285fee5b64ba5!2z4Kqu4Kq-4Kqc4Kq-4Kq94Kry4Kre4Kq-!5e0!3m2!1sen!2sin!4v1715615637000!5m2!1sen!2sin&language=en";

  return (
    <div className="bg-white">
      <ContactHero />

      <div className="max-w-7xl mx-auto py-16  sm:px-6 ">
        {/* Grid: Columns Reversed - Map Left (Order 2 on mobile, Order 1 on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* 1. Left Side: English Google Map */}
          <div className="h-[400px] lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-100 order-2 lg:order-1">
            <iframe
              title="Tantaniya Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* 2. Right Side: Contact Details & Form */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Address Section */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-[#b18b5e]/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b18b5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">Tantaniya, Amreli, Gujarat</p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-[#b18b5e]/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b18b5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-sm text-gray-600">info@tantaniyajewels.com</p>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#b18b5e] outline-none transition-all"
                    placeholder="Your Name"
                  />
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#b18b5e] outline-none transition-all"
                    placeholder="Email Address"
                  />
                </div>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#b18b5e] outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
                <button className="w-full bg-[#b18b5e] hover:bg-[#96754f] text-white font-bold py-4 rounded-lg transition-all shadow-md tracking-wide uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;