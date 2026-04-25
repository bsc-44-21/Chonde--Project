import React from 'react';
import { 
  Building2, Activity,
  TrendingUp, AlertTriangle, Settings2,
  MapPin, Brain
} from 'lucide-react';

const GovernmentDashboard = ({ user }) => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] border-b border-[#1e2f5d] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Building2 size={24} className="text-white" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-blue-200 text-[9px] font-black tracking-widest uppercase">Central Oversight</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button className="h-full px-4 bg-[#314a8f] text-white font-bold text-sm border-b-2 border-white transition-colors flex items-center">
              National Command
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              MP Compliance
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              AI Intelligence
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              Citizen Needs
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Director O. Phiri</p>
            <p className="text-blue-300 text-[10px] font-medium">Ministry of Development</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-400 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default GovernmentDashboard;
