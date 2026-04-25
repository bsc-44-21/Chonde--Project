import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldAlert, Database, Siren, Cpu, Send, FolderOpen, Filter, Search,
  Activity, Image as ImageIcon, Building, ChevronDown, CheckCircle2,
  AlertTriangle, FileText, Paperclip
} from 'lucide-react';

const ACBDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'active-cases';

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#0f172a] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 border-b-[5px] border-[#dc2626] shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-red-500 text-[9px] font-black tracking-widest uppercase mt-0.5">ANTI-CORRUPTION BUREAU</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button onClick={() => setTab('active-cases')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'active-cases' ? 'bg-[#1e293b] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
              Active Cases
            </button>
            <button onClick={() => setTab('complaint-database')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'complaint-database' ? 'bg-[#1e293b] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
              Complaint Database
            </button>
            <button onClick={() => setTab('ai-intelligence')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'ai-intelligence' ? 'bg-[#1e293b] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
              AI Intelligence
            </button>
            <button onClick={() => setTab('government-directives')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center mt-2 pt-1 ${currentTab === 'government-directives' ? 'bg-[#1e293b] text-white rounded-t-lg' : 'text-gray-400 hover:text-white'}`}>
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
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400 capitalize">{currentTab.replace('-', ' ')} Page</h2>
      </div>
    </div>
  );
};

export default ACBDashboard;
