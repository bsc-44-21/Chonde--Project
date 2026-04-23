import React from 'react';
import { 
  Briefcase, CheckCircle2, AlertTriangle, 
  Brain, Download, Search, FileText, BarChart3
} from 'lucide-react';

const GovernmentDashboard = ({ user }) => {
  const reports = [
    { id: 1, text: "Diversion of funds in M1 upgrade", severity: "High", district: "Karonga" },
    { id: 2, text: "Substandard materials in primary school roof", severity: "Critical", district: "Blantyre" }
  ];

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight">{user?.role} Oversight Portal</h1>
          <p className="text-gray-500 font-bold flex items-center gap-2 mt-1"><Brain size={16} className="text-primary-light" /> Central Intelligence: SYNCED</p>
        </div>
        <button className="bg-black hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95">
          <Download size={22} /> EXPORT NATIONAL AUDIT
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Budgeted', val: 'MWK 4.2T', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Critical Reports', val: '32', icon: <AlertTriangle size={16}/>, color: "text-red-600" },
          { label: 'Active Sites', val: '1,240', icon: <BarChart3 size={16}/>, color: "text-status-ongoing" },
          { label: 'Verified Progress', val: '88%', icon: <CheckCircle2 size={16}/>, color: "text-status-completed" }
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
            <h2 className="text-xl font-black text-black uppercase tracking-widest">Global Citizen Reports</h2>
            <div className="relative group">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Filter by District..." className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold" />
            </div>
          </div>
          <div className="space-y-4">
            {reports.map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-black text-black group-hover:text-primary-light transition-colors">{item.text}</h3>
                     <p className="text-xs font-bold text-gray-400 mt-1">Location: {item.district}</p>
                   </div>
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-red-50 text-red-600`}>
                     {item.severity}
                   </span>
                 </div>
               </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
           <div className="flex items-center gap-3">
             <Brain size={24} className="text-black" />
             <h2 className="text-xl font-black text-black uppercase tracking-widest">AI Intelligence</h2>
           </div>
           <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
             <div className="p-4 bg-primary-light/5 rounded-2xl border border-primary-light/10">
               <p className="text-xs font-bold text-primary-dark uppercase tracking-widest mb-2">Automated Insight</p>
               <p className="text-sm text-gray-600 leading-relaxed">AI Detects a 15% increase in delays in Northern Region. Directing investigators...</p>
             </div>
             <div className="space-y-3">
               <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest"><FileText size={14}/> Top Priority Trends</div>
               <div className="text-xs font-bold text-black border-l-2 border-red-500 pl-3 py-1">Missing Slates: Nsanje Primary Schools</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDashboard;
