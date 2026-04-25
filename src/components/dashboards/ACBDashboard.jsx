import React from 'react';
import { 
  ShieldAlert, Database, Siren, Cpu, Send, FolderOpen, Filter, Search,
  Activity, Image as ImageIcon, Building, ChevronDown, CheckCircle2,
  AlertTriangle, FileText, Paperclip
} from 'lucide-react';

const ACBDashboard = ({ user }) => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#0f172a] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 border-b-[5px] border-[#dc2626] shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#dc2626] flex items-center justify-center">
              <ShieldAlert size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-red-500 text-[9px] font-black tracking-widest uppercase mt-0.5">ANTI-CORRUPTION BUREAU</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#1e293b] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1">
              Active Cases
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Complaint Database
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              AI Intelligence
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Government Directives
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Investigator K. Moyo</p>
            <p className="text-gray-400 text-[10px] font-medium mt-0.5">Financial Crimes Unit</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-600 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default ACBDashboard;
