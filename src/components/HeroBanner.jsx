import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Tracking Development <br />
            <span className="text-primary-light">in Your Area</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-lg leading-relaxed">
            Ensuring transparency and accountability in government projects across Malawi. 
            See where your community stands.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-status-completed hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-emerald-500/20">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
