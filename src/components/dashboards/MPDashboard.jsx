import React from 'react';
import { 
  ShieldCheck, AlertTriangle, MessageSquare, Clock, PlusCircle,
  Filter, ChevronUp, ChevronDown, Activity, Edit2, Users
} from 'lucide-react';

const MPDashboard = ({ user }) => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#1e2336] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-blue-500" />
            <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+ <span className="text-gray-400 text-[10px] tracking-widest font-bold ml-1">MP PORTAL</span></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#2a3044] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1">
              Overview
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Manage Projects
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Community Voices
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Hon. Peter Banda</p>
            <p className="text-gray-400 text-[10px] font-medium">MP - Lilongwe City Centre</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-600 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default MPDashboard;
