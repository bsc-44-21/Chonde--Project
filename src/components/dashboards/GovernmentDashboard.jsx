import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, Activity,
  TrendingUp, AlertTriangle, Settings2,
  MapPin, Brain
} from 'lucide-react';

const GovernmentDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'national-command';

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] border-b border-[#1e2f5d] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-blue-200 text-[9px] font-black tracking-widest uppercase mt-0.5">Central Oversight</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button onClick={() => setTab('national-command')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'national-command' ? 'bg-[#314a8f] text-white border-white' : 'text-blue-200 hover:text-white border-transparent hover:border-blue-400'}`}>
              National Command
            </button>
            <button onClick={() => setTab('mp-compliance')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'mp-compliance' ? 'bg-[#314a8f] text-white border-white' : 'text-blue-200 hover:text-white border-transparent hover:border-blue-400'}`}>
              MP Compliance
            </button>
            <button onClick={() => setTab('ai-intelligence')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'ai-intelligence' ? 'bg-[#314a8f] text-white border-white' : 'text-blue-200 hover:text-white border-transparent hover:border-blue-400'}`}>
              AI Intelligence
            </button>
            <button onClick={() => setTab('citizen-needs')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'citizen-needs' ? 'bg-[#314a8f] text-white border-white' : 'text-blue-200 hover:text-white border-transparent hover:border-blue-400'}`}>
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
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400 capitalize">{currentTab.replace('-', ' ')} Page</h2>
      </div>
    </div>
  );
};

export default GovernmentDashboard;
