import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, AlertTriangle, MessageSquare, Clock, PlusCircle,
  Filter, ChevronUp, ChevronDown, Activity, Edit2, Users,
  Building2, MapPin, Calendar, HardHat, DollarSign, X, CheckCircle2,
  Package, LayoutGrid, List, Plus, Search
} from 'lucide-react';
import { projectService } from '../../services/projectService';

const MPDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  
  // Deployment Form State
  const [formData, setFormData] = useState({
    name: '',
    sector: 'Infrastructure',
    type: '',
    village: '',
    contractor: '',
    startDate: '',
    endDate: '',
    budget: '',
    image: null
  });

  const sectors = ['Infrastructure', 'Education', 'Health', 'Agriculture', 'Water & Sanitation'];

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    // For now, using the hardcoded constituency of the demo MP
    const myProjects = projectService.getAllProjects(); 
    setProjects(myProjects);
  };

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = projectService.createProject({
      ...formData,
      createdBy: user?.id || 'demo_mp',
      constituency: 'Lilongwe City Centre', // Mock constituency
      district: 'Lilongwe'
    });
    
    setProjects([newProject, ...projects]);
    setIsPanelOpen(false);
    setFormData({
      name: '', sector: 'Infrastructure', type: '', village: '',
      contractor: '', startDate: '', endDate: '', budget: '', image: null
    });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-inter relative overflow-hidden">
      {/* Top Header */}
      <header className="bg-[#1e2336] border-b border-[#2a3044] h-20 w-full flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setTab('overview')}
          >
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none tracking-tight uppercase group-hover:text-blue-400 transition-colors">CHONDE+</span>
              <span className="text-gray-400 text-[10px] tracking-widest font-bold">MP PORTAL</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button onClick={() => setTab('overview')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'overview' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
              Overview
            </button>
            <button onClick={() => setTab('manage-projects')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'manage-projects' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
              Manage Projects
            </button>
            <button onClick={() => setTab('community-voices')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'community-voices' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
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
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2a3044] bg-white">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {currentTab === 'manage-projects' ? (
          <div className="space-y-6">
            {/* Tab Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Manage Projects</h1>
                <p className="text-sm text-gray-500 font-medium mt-1">Deploy and monitor development projects in Lilongwe City Centre</p>
              </div>
              <button 
                onClick={() => setIsPanelOpen(true)}
                className="bg-[#1e2336] text-white px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 active:scale-95"
              >
                <Plus size={20} />
                DEPLOY NEW PROJECT
              </button>
            </div>

            {/* Filters and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Projects</p>
                  <p className="text-2xl font-black text-gray-900">{projects.length}</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Completed</p>
                  <p className="text-2xl font-black text-gray-900">0</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 text-gray-300">
                <Search size={20} className="ml-auto" />
                <input type="text" placeholder="Search projects..." className="bg-transparent border-none focus:outline-none text-sm font-bold text-gray-900 w-full" />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
                    <div className="h-40 bg-gray-100 relative overflow-hidden">
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase rounded-full shadow-lg">
                          {project.status}
                        </span>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=400" 
                        alt="Project" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-grow">
                      <div className="flex items-center gap-2 mb-2 text-blue-600">
                        <Building2 size={14} />
                        <span className="text-[10px] font-black uppercase tracking-wider">{project.sector}</span>
                      </div>
                      <h3 className="text-lg font-black text-gray-900 leading-tight mb-3">{project.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin size={14} />
                          <span className="text-xs font-bold">{project.village}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-xs font-bold">{project.startDate} — {project.endDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-gray-900">
                        <DollarSign size={14} className="text-emerald-600" />
                        <span className="text-xs font-black">MK {Number(project.budget).toLocaleString()}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-black text-xs uppercase tracking-wider flex items-center gap-1">
                        DETAILS <Activity size={14} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                    <Package size={32} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">No Projects Deployed</h3>
                  <p className="text-gray-400 font-medium mt-1">Start by deploying a new development project for your constituency.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentTab === 'community-voices' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suggestions Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Community Needs</h3>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {projectService.getAllSuggestions().length} SUBMISSIONS
                </span>
              </div>
              <div className="space-y-4">
                {projectService.getAllSuggestions().map(s => (
                  <div key={s.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs uppercase">
                          {s.citizenName[0]}
                        </div>
                        <div>
                          <p className="text-xs font-black text-gray-900">{s.citizenName}</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.village} • {new Date(s.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest ${s.impact === 'High' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-500'}`}>
                        {s.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed italic border-l-4 border-gray-100 pl-4">"{s.need}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reports Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Anomaly Reports</h3>
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {projectService.getAllReports().length} ALERTS
                </span>
              </div>
              <div className="space-y-4">
                {projectService.getAllReports().map(r => (
                  <div key={r.id} className="bg-white p-6 rounded-2xl border-2 border-red-50 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={16} className="text-red-600" />
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project: {r.projectName}</p>
                      </div>
                      <span className="bg-gray-900 text-white px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest">
                        IDENTITY MUFFLED
                      </span>
                    </div>
                    <p className="text-gray-900 text-sm font-bold leading-relaxed mb-4">"{r.issue}"</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">STATUS: {r.status}</p>
                      <button className="text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline">Mark Investigating</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 bg-[#1e2336]/5 rounded-full flex items-center justify-center mb-6 text-[#1e2336]/20">
              <Activity size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{currentTab.replace('-', ' ')}</h2>
            <p className="text-gray-400 font-medium mt-1">This module is being optimized for tactical monitoring.</p>
          </div>
        )}

      </main>

      {/* Deployment Side Panel */}
      {isPanelOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={() => setIsPanelOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300">
            <div className="bg-[#1e2336] p-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">Project Deployment</h2>
                <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-1">New Mission Entry</p>
              </div>
              <button onClick={() => setIsPanelOpen(false)} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto p-8 space-y-8">
              {/* Section 1: Core Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-l-4 border-blue-500 pl-4">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm">01. Mission Brief</h3>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Project Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Area 18 Modern Health Centre"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Sector</label>
                    <select 
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 outline-none"
                    >
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Location (Village)</label>
                    <input 
                      required
                      type="text" 
                      value={formData.village}
                      onChange={(e) => setFormData({...formData, village: e.target.value})}
                      placeholder="e.g. Mpingu Village"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Logistics */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-l-4 border-emerald-500 pl-4">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm">02. Logistics & Operations</h3>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Primary Contractor</label>
                  <input 
                    required
                    type="text" 
                    value={formData.contractor}
                    onChange={(e) => setFormData({...formData, contractor: e.target.value})}
                    placeholder="e.g. Mota-Engil Construction"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Start Date</label>
                    <input 
                      required
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Estimated Completion</label>
                    <input 
                      required
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 font-bold text-gray-900 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Budget (MWK)</label>
                  <div className="relative">
                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      required
                      type="number" 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      placeholder="e.g. 50,000,000"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-11 pr-4 font-bold text-gray-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Visual Intel */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-gray-900 pl-4">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm">03. Visual Evidence</h3>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2 text-gray-300 group-hover:text-blue-500 transition-colors">
                    <Plus size={24} />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Upload Site Image</p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#1e2336] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-blue-900 transition-all active:scale-[0.98]"
                >
                  DEPLOY PROJECT
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default MPDashboard;

