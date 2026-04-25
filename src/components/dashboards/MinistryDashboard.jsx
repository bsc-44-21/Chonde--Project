import React from 'react';
import { 
  Heart, Activity, FileText, Clock, AlertTriangle, ShieldAlert,
  MapPin, Bell, Paperclip, ChevronDown, CheckCircle2, MessageSquare
} from 'lucide-react';

const MinistryDashboard = ({ user }) => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Heart size={18} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-white text-[9px] font-black tracking-widest uppercase mt-0.5">MINISTRY OF HEALTH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#314a8f] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1 shadow-sm">
              Sector Dashboard
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              MP Compliance
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Health Projects
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Citizen Reports
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Dr. A. Nkhata</p>
            <p className="text-blue-300 text-[10px] font-medium mt-0.5">Director of Infrastructure</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#314a8f] bg-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default MinistryDashboard;
