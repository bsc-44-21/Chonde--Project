import React, { useState } from 'react';
import { 
  Building2, Activity, Briefcase, 
  CheckCircle2, AlertTriangle, FileText, BarChart3,
  Search, Info, ArrowUpRight, Check
} from 'lucide-react';

const MinistryDashboard = ({ user }) => {
  const [sectorProjects, setSectorProjects] = useState([
    { id: 201, name: 'Ntcheu Secondary Block', district: 'Ntcheu', progress: 45, status: 'Ongoing', category: 'Education' },
    { id: 202, name: 'Karonga Teachers House', district: 'Karonga', progress: 12, status: 'Delayed', category: 'Education' },
    { id: 203, name: 'Nkhata Bay Primary Unit', district: 'Nkhata Bay', progress: 100, status: 'Completed', category: 'Education' }
  ]);

  const [auditLog, setAuditLog] = useState([]);

  const handleAudit = (name) => {
    const newEntry = `Audit initiated for ${name} at ${new Date().toLocaleTimeString()}`;
    setAuditLog([newEntry, ...auditLog]);
  };

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-50">
            <Building2 size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-black tracking-tight">{user?.sector}</h1>
            <p className="text-gray-500 font-bold flex items-center gap-2 mt-1 uppercase text-[10px] tracking-widest"><Activity size={12} className="text-primary-light" /> SECTOR OVERSIGHT: SYNCED</p>
          </div>
        </div>
        <button 
          onClick={() => handleAudit('System Central')}
          className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95"
        >
          <BarChart3 size={22} /> GENERATE SECTOR AUDIT
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Sector Funds Allocation', val: 'MWK 410.5B', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Critical Delays', val: sectorProjects.filter(p=>p.status==='Delayed').length, icon: <AlertTriangle size={16}/>, color: "text-red-500" },
          { label: 'Active Sites', val: sectorProjects.filter(p=>p.status==='Ongoing').length, icon: <Activity size={16}/>, color: "text-primary-light" },
          { label: 'Completed Jobs', val: sectorProjects.filter(p=>p.status==='Completed').length, icon: <CheckCircle2 size={16}/>, color: "text-status-completed" }
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
              <h2 className="text-xl font-black text-black uppercase tracking-widest">Sector Monitoring Feed</h2>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Filter Area..." className="pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold" />
              </div>
           </div>

           <div className="space-y-4">
              {sectorProjects.map((item) => (
                 <div key={item.id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:border-primary-light transition-all group">
                   <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                           <h3 className="font-black text-lg text-black group-hover:text-primary-light transition-colors">{item.name}</h3>
                           <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                             item.status === 'Ongoing' ? 'bg-blue-50 text-blue-600' : 
                             item.status === 'Delayed' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                           }`}>
                             {item.status}
                           </span>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden max-w-[200px]">
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  item.status === 'Delayed' ? 'bg-red-500' : 'bg-primary-light'
                                }`} 
                                style={{width: `${item.progress}%`}} 
                              />
                           </div>
                           <span className="text-[10px] font-black">{item.progress}% COMPLETED</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleAudit(item.name)}
                        className="bg-gray-50 hover:bg-black hover:text-white p-3 rounded-xl text-gray-400 transition-all ml-6"
                      >
                         <ArrowUpRight size={20} />
                      </button>
                   </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Ministry Sidebar Actions */}
        <div className="space-y-8">
           <div className="flex items-center gap-3 font-black uppercase tracking-widest text-black">
             <FileText size={24} />
             <h2>Oversight Audit Log</h2>
           </div>
           
           <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="space-y-3 mb-8">
                 <div className="flex gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <Info className="text-primary-light shrink-0" size={20} />
                    <p className="text-xs font-bold text-primary-dark leading-relaxed">
                       Ministry intervention required for "Delayed" projects exceeding 30 days.
                    </p>
                 </div>
              </div>

              <div className="space-y-4">
                 <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Recent Activities</p>
                 {auditLog.length === 0 ? (
                   <p className="text-xs font-bold text-gray-400 italic py-4">No audits triggered this session.</p>
                 ) : (
                   auditLog.map((log, i) => (
                     <div key={i} className="flex items-start gap-3 animate-in slide-in-from-left-2 duration-300">
                        <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                           <Check size={14} />
                        </div>
                        <p className="text-xs font-bold text-gray-600 leading-tight">{log}</p>
                     </div>
                   ))
                 )}
              </div>

              <button className="w-full mt-10 bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors">
                 <FileText size={16} /> DOWNLOAD SECTOR BRIEF
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryDashboard;
