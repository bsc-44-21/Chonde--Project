import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] pt-16 pb-8 border-t border-[#2a3044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-black text-2xl tracking-tighter text-white uppercase">CHONDE+</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-md">
              Empowering Malawians through transparency and accountability. The platform to track public funds and report development irregularities directly to the Anti-Corruption Bureau.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#3b5998] transition-all cursor-pointer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1da1f2] transition-all cursor-pointer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2a3044] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e1306c] transition-all cursor-pointer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* NEED HELP? */}
          <div className="md:col-span-6 space-y-4 md:pl-12 flex flex-col md:items-end md:text-right">
            <div className="w-full md:max-w-sm">
              <h3 className="font-black text-xs uppercase tracking-widest text-white mb-6">Need Help?</h3>
              <div className="bg-[#2a3044]/50 border border-[#2a3044] rounded-xl p-5 text-left">
                <p className="text-white font-bold mb-2">Toll-Free Hotline</p>
                <p className="text-3xl font-black text-white mb-3">113</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Direct reporting line to the Anti-Corruption Bureau (ACB). Available 24/7.
                </p>
              </div>
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
