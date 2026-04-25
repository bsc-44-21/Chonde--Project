import React from 'react';

const DashboardFooter = () => {
  return (
    <footer className="bg-[#1e2336] border-t border-[#2a3044] py-3 px-6">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-gray-500">
        <div className="flex items-center gap-4">
          <p>&copy; 2026 CHONDE+ SYSTEM</p>
          <span className="text-[#2a3044]">|</span>
          <p className="text-blue-400/60 font-black">Sovereign Accountability Platform</p>
        </div>

        <div className="flex-grow flex justify-center">
          <p className="text-gray-400/40 italic font-serif tracking-[0.3em] text-[11px]">Unity and Freedom</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <span className="text-[#2a3044]">|</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-500/80">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
