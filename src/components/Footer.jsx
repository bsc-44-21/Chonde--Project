import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] pt-16 pb-8 border-t border-[#2a3044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-black text-2xl tracking-tighter text-white uppercase">CHONDE+</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Empowering Malawians through transparency and accountability. The platform to track public funds and report development irregularities directly to the Anti-Corruption Bureau.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all cursor-pointer">
                 {/* Placeholder for circular icon styling as per mockup (dark circles) */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all cursor-pointer">
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all cursor-pointer">
              </a>
            </div>
          </div>

          {/* CITIZENS */}
          <div className="md:col-span-2 space-y-4 md:ml-4">
            <h3 className="font-black text-xs uppercase tracking-widest text-white mb-6">Citizens</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Track Constituency Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit Community Need</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How CHONDE+ Works</a></li>
            </ul>
          </div>

          {/* OFFICIALS & TRANSPARENCY */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-black text-xs uppercase tracking-widest text-white mb-6">Officials & Transparency</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">National Overview Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MP & Government Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anti-Corruption Bureau</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Data API</a></li>
            </ul>
          </div>

          {/* NEED HELP? */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-black text-xs uppercase tracking-widest text-white mb-6">Need Help?</h3>
            <div className="bg-[#2a3044]/50 border border-[#2a3044] rounded-xl p-5">
              <p className="text-white font-bold mb-2">Toll-Free Hotline</p>
              <p className="text-3xl font-black text-white mb-3">113</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct reporting line to the Anti-Corruption Bureau (ACB). Available 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a3044] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
          <p>&copy; 2026 CHONDE+ Platform. A national accountability initiative.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Chonde+ Support (Beta)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
