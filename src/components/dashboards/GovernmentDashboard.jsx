import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, Activity,
  TrendingUp, AlertTriangle, Settings2,
  MapPin, Brain, Calendar, DollarSign, Eye, Search, Layers,
  ChevronRight
} from 'lucide-react';
import { projectService } from '../../services/projectService';

const GovernmentDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'national-command';
  const [projects, setProjects] = useState([]);
  const [reports, setReports] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setProjects(projectService.getAllProjects());
    setReports(projectService.getAllReports());
    setSuggestions(projectService.getAllSuggestions());
  };

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-inter">
      {/* Top Header */}
      <header className="bg-[#1e2336] border-b border-[#2a3044] h-20 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setTab('national-command')}
          >
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none tracking-tight uppercase group-hover:text-blue-400 transition-colors">CHONDE+</span>
              <span className="text-blue-200 text-[9px] font-black tracking-widest uppercase mt-0.5">Central Oversight</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button onClick={() => setTab('national-command')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'national-command' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              National Command
            </button>
            <button onClick={() => setTab('mp-compliance')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'mp-compliance' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              MP Compliance
            </button>
            <button onClick={() => setTab('national-anomalies')} className={`h-full px-4 font-bold text-sm border-b-2 transition-colors flex items-center ${currentTab === 'national-anomalies' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              National Anomalies
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Director O. Phiri</p>
            <p className="text-blue-300 text-[10px] font-medium">Ministry of Development</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2a3044] bg-white">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-10 max-w-7xl mx-auto w-full">
        {currentTab === 'national-command' ? (
          <div className="space-y-10">
            {/* Command Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                  <Layers className="text-blue-600" size={32} />
                  National Command
                </h1>
                <p className="text-gray-500 font-medium mt-1">Sovereign oversight of all constituency development projects nationwide.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white border border-gray-200 p-3 rounded-xl hover:bg-gray-50 transition-all text-gray-400">
                  <Search size={20} />
                </button>
                <button className="bg-[#1e2336] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10">
                  Export Intelligence
                </button>
              </div>
            </div>

            {/* National Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Projects', value: projects.length, icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Active Capital', value: `MK ${(projects.reduce((sum, p) => sum + Number(p.budget), 0) / 1000000).toFixed(1)}M`, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Community Pulse', value: suggestions.length, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
                { label: 'National Anomalies', value: reports.length, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm">
                  <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <stat.icon size={24} />
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black text-gray-900 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Master Project Registry */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">National Project Registry</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Real-time Synchronization</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Live Feed</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Strategic Asset</th>
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Sector / Ministry</th>
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Location / MP</th>
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Capital allocation</th>
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Intelligence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {projects.length > 0 ? (
                      projects.map(project => (
                        <tr key={project.id} className="hover:bg-gray-50/30 transition-colors group">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Building2 size={24} />
                              </div>
                              <span className="font-black text-gray-900 text-sm tracking-tight">{project.name}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-lg tracking-widest">
                              {project.sector}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-gray-900 font-bold text-xs">
                                <MapPin size={14} className="text-blue-500" /> {project.village}
                              </div>
                              <p className="text-[10px] font-black text-gray-400 uppercase">{project.constituency}</p>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="text-emerald-600 font-black text-sm">
                              MK {Number(project.budget).toLocaleString()}
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{project.status}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <button className="text-blue-600 hover:text-blue-900 font-black text-xs uppercase tracking-widest flex items-center gap-2 ml-auto group-hover:gap-3 transition-all">
                              FULL DATA <ChevronRight size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-8 py-24 text-center">
                          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                            <Activity size={32} />
                          </div>
                          <p className="text-gray-400 font-black text-sm uppercase tracking-widest">No National Projects Registered</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : currentTab === 'national-anomalies' ? (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">National Anomaly Grid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map(r => (
                <div key={r.id} className="bg-white p-8 rounded-[32px] border-2 border-red-50 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 -mr-8 -mt-8 rounded-full opacity-50 flex items-center justify-center">
                    <AlertTriangle className="text-red-300 mt-6 mr-6" size={32} />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-gray-900 text-white text-[9px] font-black uppercase rounded-lg">ID: {r.id.split('-')[0]}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase">{r.projectName}</span>
                  </div>
                  <p className="text-gray-900 font-bold leading-relaxed mb-6 italic">"{r.issue}"</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase">Reporter Intent</p>
                      <p className="text-[10px] font-black text-gray-900 uppercase">{r.citizenName}</p>
                    </div>
                    <button className="bg-[#1e2336] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">Assign Investigator</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <Brain size={64} className="text-blue-100 mb-8" />
            <h2 className="text-4xl font-black text-[#1e2336] uppercase tracking-tighter">{currentTab.replace('-', ' ')}</h2>
            <p className="text-gray-400 font-medium mt-4 max-w-xl text-lg">National intelligence matrices are being analyzed.</p>
          </div>
        )}
      </main>
    </div>
  );
};


export default GovernmentDashboard;

