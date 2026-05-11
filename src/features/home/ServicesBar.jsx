import React from 'react';
import { Truck, CreditCard, Clock, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Truck size={40} strokeWidth={1.5} className="text-[#b3906c]" />,
    title: "Free Delivery",
    desc: "Free shipping on all order"
  },
  {
    icon: <CreditCard size={40} strokeWidth={1.5} className="text-[#b3906c]" />,
    title: "Money Return",
    desc: "Back guarantee under 7 day"
  },
  {
    icon: <Clock size={40} strokeWidth={1.5} className="text-[#b3906c]" />,
    title: "Online Support 24/7",
    desc: "Support online 24 hours a day"
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1.5} className="text-[#b3906c]" />,
    title: "Reliable",
    desc: "Trusted by 1000+ brands"
  }
];

const ServiceBar = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="f">
                {service.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBar;