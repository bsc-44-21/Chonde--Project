import React from 'react';
import { ShieldAlert, Facebook, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Chonde+ Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-black uppercase">CHONDE+</span>
            </div>
            <p className="text-gray-600 max-w-sm leading-relaxed font-medium">
              A dedicated portal for government project tracking, ensuring every kwacha 
              allocated to development projects is accounted for and delivered to the people of Malawi.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-black text-sm uppercase tracking-widest text-primary-light border-b-2 border-primary-light/10 pb-2 w-fit">Navigation</h3>
            <ul className="space-y-3 text-black font-bold text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">Home Dashboard</a></li>
              <li><a href="#projects" className="hover:text-primary-light transition-colors">Project Explorer</a></li>
              <li><a href="#reports" className="hover:text-primary-light transition-colors">Public Reports</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">About CHONDE+</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-black text-sm uppercase tracking-widest text-primary-light border-b-2 border-primary-light/10 pb-2 w-fit">Government</h3>
            <ul className="space-y-3 text-black font-bold text-sm">
              <li className="flex items-center gap-2"><a href="#" className="hover:text-primary-light transition-colors">Official Gazette</a> <ExternalLink size={14} className="text-gray-400" /></li>
              <li className="flex items-center gap-2"><a href="#" className="hover:text-primary-light transition-colors">Ministry of Finance</a> <ExternalLink size={14} className="text-gray-400" /></li>
              <li className="flex items-center gap-2"><a href="#" className="hover:text-primary-light transition-colors">Transparency Unit</a> <ExternalLink size={14} className="text-gray-400" /></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} CHONDE+ Portal. Built for transparency.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
