import React, { useState } from 'react';
import { 
  Briefcase, CheckCircle2, AlertTriangle, 
  Brain, Download, Search, FileText, BarChart3,
  Globe, ShieldCheck, ArrowUpRight
} from 'lucide-react';

const GovernmentDashboard = ({ user }) => {
  const [nationalProjects, setNationalProjects] = useState([
    { id: 1, name: 'M1 Highway North', mp: 'Hon. Mphepo', status: 'Unverified', budget: 'MWK 78.5B' },
    { id: 2, name: 'Salima Solar Phase II', mp: 'Hon. Banda', status: 'Verified', budget: 'MWK 21.2B' },
    { id: 3, name: 'Mzuzu Health Center', mp: 'Hon. Phiri', status: 'Unverified', budget: 'MWK 4.2B' }
  ]);

  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runGlobalAI = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAiAnalysis({
        sentiment: "Growing concern in Northern Region",
        topRisk: "Construction Delay (Karonga)",
        recommendation: "Increase fiscal oversight on M1 contractors."
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleVerify = (id) => {
    setNationalProjects(nationalProjects.map(p => p.id === id ? { ...p, status: 'Verified' } : p));
  };

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white"><Globe size={32} /></div>
          <div>
            <h1 className="text-3xl font-black text-black tracking-tight">Central Oversight: {user?.department}</h1>
            <p className="text-gray-500 font-bold flex items-center gap-2 mt-1 underline decoration-primary-light">National Governance Hub</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button onClick={runGlobalAI} className="bg-emerald-50 text-emerald-600 px-6 py-4 rounded-2xl font-black transition-all flex items-center gap-3 border border-emerald-100 hover:bg-emerald-100">
            <Brain size={20} /> RUN AI AUDIT
          </button>
          <button className="bg-black text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl hover:bg-neutral-800">
            <Download size={20} /> NATIONAL EXPORT
          </button>
        </div>
      </div>

      {/* National Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Budgeted', val: 'MWK 4.2T', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Citizen Reports', val: '432', icon: <AlertTriangle size={16}/>, color: "text-red-500" },
          { label: 'Verify Queue', val: nationalProjects.filter(p=>p.status==='Unverified').length, icon: <ShieldCheck size={16}/>, color: "text-status-ongoing" },
          { label: 'Active MP Sites', val: '1,240', icon: <BarChart3 size={16}/>, color: "text-status-completed" }
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
               {s.icon} {s.label}
            </span>
            <span className={`text-2xl font-black ${s.color}`}>{s.val}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-black uppercase tracking-widest">Global Project Registry</h2>
              <div className="relative group">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search by MP Name..." className="pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold w-64" />
              </div>
           </div>

           <div className="space-y-4">
              {nationalProjects.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-black transition-all group">
                   <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-black text-lg text-black">{p.name}</h3>
                        <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-tight">Assigned MP: {p.mp}  •  Budget: {p.budget}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        {p.status === 'Unverified' ? (
                          <button 
                            onClick={() => handleVerify(p.id)}
                            className="bg-black text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-colors"
                          >
                            Verify Project
                          </button>
                        ) : (
                          <span className="flex items-center gap-1 text-status-completed font-black text-[10px] uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
                            <CheckCircle2 size={12} /> SECURE & VERIFIED
                          </span>
                        )}
                        <ArrowUpRight size={20} className="text-gray-300 group-hover:text-black" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* AI Sidebar */}
        <div className="space-y-8">
           <div className="flex items-center gap-3 font-black uppercase tracking-widest text-black">
             <Brain size={24} />
             <h2>AI Intelligence</h2>
           </div>
           
           <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm overflow-hidden relative">
              {isAnalyzing && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                  <Activity className="animate-pulse text-emerald-500 mb-2" size={32} />
                  <p className="text-[10px] font-black uppercase tracking-widest">Scanning National Data...</p>
                </div>
              )}
              
              {!aiAnalysis ? (
                <div className="text-center py-10">
                   <p className="text-sm font-bold text-gray-400 italic">Click "RUN AI AUDIT" to generate national project sentiment.</p>
                </div>
              ) : (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                   <div className="p-5 bg-gerald-50 rounded-2xl border border-emerald-100">
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2"><CheckCircle2 size={12}/> Analysis Verified</p>
                      <p className="text-lg font-black text-black leading-tight mb-4">{aiAnalysis.sentiment}</p>
                      <div className="space-y-3 pt-4 border-t border-emerald-100">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                           <span className="text-gray-400">Top Risk Point</span>
                           <span className="text-red-500">{aiAnalysis.topRisk}</span>
                        </div>
                        <p className="text-xs font-medium text-gray-600 leading-relaxed italic border-l-2 border-primary-light pl-3">
                           "{aiAnalysis.recommendation}"
                        </p>
                      </div>
                   </div>
                   <button className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                      <FileText size={14} /> Full Legislative Report
                   </button>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const Activity = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export default GovernmentDashboard;
