import React from 'react';

const CoreDivisions = () => {
  const skills = [
    { name: 'Smart Home IoT', percentage: 70 },
    { name: 'Audio Systems', percentage: 52 },
    { name: 'Mobile Computing', percentage: 80 },
  ];

  return (
    <section className="max-w-7xl mx-auto  py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Content & Small Image */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-[#b18b5e] uppercase">
              Innovation in Tech
            </h4>
            <h2 className="text-3xl font-bold  text-[#b18b5e]">
              Our Core Expertise
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We specialize in delivering high-performance electronics. Our engineering team 
              focuses on seamless integration, durability, and cutting-edge user interfaces 
              to redefine your digital lifestyle.
            </p>
          </div>

          {/* Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-gray-800">{skill.name}</span>
                  <span className="text-[#b18b5e]font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-orange-50 h-2">
                  <div 
                    className="bg-[#b18b5e] h-2 transition-all duration-1000" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Left Image (Reference from image_ff0b95.png) */}
          <div className="pt-4">
            <img 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
              alt="Electronics Hardware" 
              className="w-full h-64 object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Right Column: Large Hero Image */}
        <div className="h-full">
          <img 
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1000" 
            alt="Main Tech Showcase" 
            className="w-full h-full object-cover shadow-md min-h-[600px]"
          />
        </div>

      </div>
    </section>
  );
};

export default CoreDivisions;