import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative pt-24 pb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-4xl sm:text-[2.75rem] font-black text-white leading-tight tracking-tight mb-4">
              National Project Transparency
            </h1>
            <p className="text-lg text-gray-200 font-medium max-w-2xl leading-relaxed">
              Track development projects, hold leaders accountable, and report issues directly to the Anti-Corruption Bureau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
