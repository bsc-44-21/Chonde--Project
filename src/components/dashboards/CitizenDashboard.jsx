import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, FolderOpen, AlertTriangle, CheckCircle2,
  Lightbulb, Filter, Flag, MessageSquare, Plus,
  Clock, ShieldAlert, Send, Activity, ChevronDown,
  ArrowUp, Building2, MapPin, Calendar, DollarSign, Eye, AlertCircle,
  X, Lock, Unlock, Zap, Users, ThumbsUp
} from 'lucide-react';
import { projectService } from '../../services/projectService';

const CitizenDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'my-constituency';
  const [projects, setProjects] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransmitting, setIsTransmitting] = useState(false);

  // Form States
  const [reportData, setReportData] = useState({
    issue: '',
    isAnonymous: true,
    includeEvidence: false
  });

  const [suggestionData, setSuggestionData] = useState({
    need: '',
    location: '',
    village: '',
    impact: 'Low'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setProjects(projectService.getAllProjects());
    setSuggestions(projectService.getAllSuggestions());
  };

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    // Simulate transmission delay
    setTimeout(() => {
      projectService.createReport({
        projectId: selectedProject.id,
        projectName: selectedProject.name,
        sector: selectedProject.sector,
        constituency: selectedProject.constituency,
        ...reportData,
        citizenName: reportData.isAnonymous ? 'Anonymous' : (user?.name || 'Emmanuel Phiri')
      });
      
      setIsTransmitting(false);
      setIsReportModalOpen(false);
      setReportData({ issue: '', isAnonymous: true, includeEvidence: false });
    }, 2000);
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    projectService.createSuggestion({
      ...suggestionData,
      citizenName: user?.name || 'Emmanuel Phiri',
      constituency: 'Lilongwe City Centre'
    });
    setSuggestionData({ need: '', location: '', village: '', impact: 'Low' });
    setSuggestions(projectService.getAllSuggestions());
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-inter relative">
      {/* Top Header */}
      <header className="bg-[#1e2336] border-b border-[#2a3044] h-20 w-full flex items-center justify-between px-8 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setTab('my-constituency')}
          >
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm group-hover:scale-105 transition-transform" />
            <span className="text-white font-black text-[18px] leading-none tracking-tight uppercase group-hover:text-blue-400 transition-colors">CHONDE+</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full items-center">
            <button onClick={() => setTab('my-constituency')} className={`h-full px-5 font-bold text-[13px] transition-colors border-b-2 flex items-center ${currentTab === 'my-constituency' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              My Constituency
            </button>
            <button onClick={() => setTab('community-needs')} className={`h-full px-5 font-bold text-[13px] transition-colors border-b-2 flex items-center ${currentTab === 'community-needs' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              Community Needs
            </button>
            <button onClick={() => setTab('my-reports')} className={`h-full px-5 font-bold text-[13px] transition-colors border-b-2 flex items-center ${currentTab === 'my-reports' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              My Reports
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Emmanuel Phiri</p>
            <p className="text-blue-300 text-[10px] font-medium mt-0.5">Lilongwe City Centre</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2a3044] bg-white">
            <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-10 max-w-7xl mx-auto w-full">
        {currentTab === 'my-constituency' ? (
          <div className="space-y-10">
            {/* Page Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <MapPin size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Active Constituency Monitor</span>
                </div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Lilongwe City Centre</h1>
                <p className="text-gray-500 font-medium mt-2">Track projects and report anomalies directly to the MP, Ministry, and ACB.</p>
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-8">
                <div className="text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Projects</p>
                  <p className="text-xl font-black text-gray-900">{projects.length}</p>
                </div>
                <div className="w-px h-8 bg-gray-100"></div>
                <div className="text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Reports Sent</p>
                  <p className="text-xl font-black text-gray-900">{projectService.getAllReports().length}</p>
                </div>
              </div>
            </div>

            {/* Project Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
                    <div className="h-64 bg-gray-100 relative overflow-hidden">
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full shadow-lg tracking-widest">
                          {project.status}
                        </span>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
                        alt="Project" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-black uppercase tracking-wider">{project.sector}</div>
                        <div className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-[10px] font-black uppercase tracking-wider">{project.village}</div>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 leading-tight mb-6">{project.name}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Contractor</p>
                          <p className="text-xs font-bold text-gray-900">{project.contractor}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Budget</p>
                          <p className="text-xs font-black text-emerald-600">MK {Number(project.budget).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                          <Eye size={16} /> PROJECT INTEL
                        </button>
                        <button 
                          onClick={() => { setSelectedProject(project); setIsReportModalOpen(true); }}
                          className="flex-1 border-2 border-red-100 text-red-600 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                          <AlertCircle size={16} /> REPORT ANOMALY
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center bg-white rounded-[40px] border-2 border-dashed border-gray-100">
                  <FolderOpen size={40} className="mx-auto text-gray-200 mb-4" />
                  <h3 className="text-2xl font-black text-gray-900">No Active Projects</h3>
                </div>
              )}
            </div>
          </div>
        ) : currentTab === 'community-needs' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Suggestion Form */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-[#1e2336] p-8 rounded-[32px] text-white shadow-xl shadow-blue-900/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                  <Lightbulb size={28} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Suggest A Need</h2>
                <p className="text-blue-200/60 text-xs font-medium mb-8 uppercase tracking-widest">Sent to MP & Govt Oversight</p>
                
                <form onSubmit={handleSuggestionSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-blue-300/50 uppercase tracking-widest">Community Need</label>
                    <textarea 
                      required
                      value={suggestionData.need}
                      onChange={(e) => setSuggestionData({...suggestionData, need: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/50 outline-none min-h-[120px]"
                      placeholder="e.g. Area 18 needs a new community clinic due to distance to the city hospital..."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-blue-300/50 uppercase tracking-widest">Village</label>
                      <input 
                        required
                        type="text"
                        value={suggestionData.village}
                        onChange={(e) => setSuggestionData({...suggestionData, village: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium outline-none"
                        placeholder="e.g. Mpingu"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-blue-300/50 uppercase tracking-widest">Impact</label>
                      <select 
                        value={suggestionData.impact}
                        onChange={(e) => setSuggestionData({...suggestionData, impact: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium outline-none appearance-none"
                      >
                        <option value="Low" className="bg-[#1e2336]">Low</option>
                        <option value="Medium" className="bg-[#1e2336]">Medium</option>
                        <option value="High" className="bg-[#1e2336]">High</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                    TRANSMIT NEED <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

            {/* Suggestions Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Community Pulse</h3>
                <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                  <Users size={16} /> {suggestions.length} Active Voices
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {suggestions.length > 0 ? (
                  suggestions.map((s) => (
                    <div key={s.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                            <Users size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-900">{s.citizenName}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">{s.village} • {new Date(s.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${s.impact === 'High' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-500'}`}>
                          {s.impact} Impact
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed mb-6 italic">"{s.need}"</p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                          <ThumbsUp size={16} /> ENDORSE NEED
                        </button>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Zap size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">Sent to MP</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-100">
                    <p className="text-gray-400 font-bold">No community needs registered yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Activity size={48} className="text-blue-200 mb-8" />
            <h2 className="text-3xl font-black text-[#1e2336] uppercase tracking-tighter">{currentTab.replace('-', ' ')}</h2>
            <p className="text-gray-500 font-medium mt-2">This monitor module is currently being calibrated.</p>
          </div>
        )}
      </main>

      {/* Reporting Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsReportModalOpen(false)}></div>
          <div className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300">
            {isTransmitting ? (
              <div className="p-20 text-center space-y-8 bg-[#1e2336] text-white">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Transmitting Intel</h3>
                  <p className="text-blue-300/50 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Establishing Secure Link...</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                  <p className="text-[9px] font-mono text-blue-300/60 leading-relaxed uppercase">
                    > ENC_LEVEL: AES-256<br/>
                    > ROUTING: MP_OFFICE, ACB_HIVE, MINISTRY_SECTOR<br/>
                    > IDENTITY_STATUS: {reportData.isAnonymous ? 'MASKED' : 'EXPOSED'}<br/>
                    > UPLOADING_PACKETS...
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-[#1e2336] p-8 text-white flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight">Report Anomaly</h2>
                    <p className="text-blue-200/60 text-[10px] font-bold uppercase tracking-widest mt-1">Project Oversight Mission</p>
                  </div>
                  <button onClick={() => setIsReportModalOpen(false)} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleReportSubmit} className="p-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Building2 size={18} />
                      <span className="text-xs font-black uppercase tracking-widest">{selectedProject?.name}</span>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Describe The Issue</label>
                      <textarea 
                        required
                        value={reportData.issue}
                        onChange={(e) => setReportData({...reportData, issue: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[150px]"
                        placeholder="Detail any corruption, delays, or substandard work observed..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setReportData({...reportData, isAnonymous: !reportData.isAnonymous})}
                      className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${reportData.isAnonymous ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}
                    >
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest">Identity</p>
                        <p className="text-xs font-bold">{reportData.isAnonymous ? 'Anonymous' : 'Public'}</p>
                      </div>
                      {reportData.isAnonymous ? <Lock size={20} /> : <Unlock size={20} />}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setReportData({...reportData, includeEvidence: !reportData.includeEvidence})}
                      className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${reportData.includeEvidence ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}
                    >
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest">Evidence</p>
                        <p className="text-xs font-bold">{reportData.includeEvidence ? 'Attached' : 'None'}</p>
                      </div>
                      <Paperclip size={20} />
                    </button>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Automatic Routing</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} className="text-blue-500" /> MP (Muffled)
                      </span>
                      <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} className="text-red-500" /> ACB
                      </span>
                      <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} className="text-emerald-500" /> Ministry
                      </span>
                      <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={10} className="text-purple-500" /> Govt
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-[#1e2336] text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    TRANSMIT INTEL
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitizenDashboard;


