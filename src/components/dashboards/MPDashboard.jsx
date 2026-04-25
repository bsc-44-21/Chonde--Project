import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, AlertTriangle, MessageSquare, Clock, PlusCircle,
  Filter, ChevronUp, ChevronDown, Activity, Edit2, Users
} from 'lucide-react';

const MPDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#1e2336] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Chonde+ Logo" className="w-8 h-8 object-contain bg-white rounded-lg p-1 shadow-sm" />
            <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+ <span className="text-gray-400 text-[10px] tracking-widest font-bold ml-1">MP PORTAL</span></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button onClick={() => setTab('overview')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'overview' ? 'bg-[#2a3044] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
              Overview
            </button>
            <button onClick={() => setTab('manage-projects')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'manage-projects' ? 'bg-[#2a3044] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
              Manage Projects
            </button>
            <button onClick={() => setTab('community-voices')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'community-voices' ? 'bg-[#2a3044] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
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
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400 capitalize">{currentTab.replace('-', ' ')} Page</h2>
      </div>
    </div>
  );
};

export default MPDashboard;
