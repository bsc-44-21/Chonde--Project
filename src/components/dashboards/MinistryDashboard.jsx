import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Heart, Activity, FileText, Clock, AlertTriangle, ShieldAlert,
  MapPin, Bell, Paperclip, ChevronDown, CheckCircle2, MessageSquare
} from 'lucide-react';

const MinistryDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'sector-dashboard';

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-white text-[9px] font-black tracking-widest uppercase mt-0.5">MINISTRY OF HEALTH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button onClick={() => setTab('sector-dashboard')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'sector-dashboard' ? 'bg-[#314a8f] text-white rounded-t-lg shadow-sm' : 'text-blue-200 hover:text-white'}`}>
              Sector Dashboard
            </button>
            <button onClick={() => setTab('mp-compliance')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'mp-compliance' ? 'bg-[#314a8f] text-white rounded-t-lg shadow-sm' : 'text-blue-200 hover:text-white'}`}>
              MP Compliance
            </button>
            <button onClick={() => setTab('health-projects')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'health-projects' ? 'bg-[#314a8f] text-white rounded-t-lg shadow-sm' : 'text-blue-200 hover:text-white'}`}>
              Health Projects
            </button>
            <button onClick={() => setTab('citizen-reports')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'citizen-reports' ? 'bg-[#314a8f] text-white rounded-t-lg shadow-sm' : 'text-blue-200 hover:text-white'}`}>
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
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400 capitalize">{currentTab.replace('-', ' ')} Page</h2>
      </div>
    </div>
  );
};

export default MinistryDashboard;
