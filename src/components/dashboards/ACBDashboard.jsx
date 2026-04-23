import React from 'react';
import {
  ShieldCheck, AlertTriangle, Search,
  Brain, FileText, Download, Gavel
} from 'lucide-react';

const ACBDashboard = ({ user }) => {
  const cases = [
    { id: 1, title: "Ghost Project: Chitipa Water Point", status: "Under Investigation", risk: "Critical" },
    { id: 2, title: "Tender Inflation: Mangochi Bridge", status: "Evidence Collection", risk: "High" }
  ];

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight">Anti-Corruption Bureau</h1>
          <p className="text-gray-500 font-bold flex items-center gap-2 mt-1"><Gavel size={16} /> Enforcement Status: READY</p>
        </div>
        <button className="bg-black hover:bg-status-issue text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95">
          <ShieldCheck size={22} /> INITIATE INVESTIGATION
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Inquiries', val: '45', icon: <Search size={16} />, color: "text-black" },
          { label: 'High Risk Flags', val: '12', icon: <AlertTriangle size={16} />, color: "text-red-600" },
          { label: 'Cases Resolved', val: '158', icon: <ShieldCheck size={16} />, color: "text-status-completed" },
          { label: 'Funds Recovered', val: 'MWK 1.2B', icon: <Gavel size={16} />, color: "text-status-ongoing" }
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
          <h2 className="text-xl font-black text-black uppercase tracking-widest">Priority Case Tracking</h2>
          <div className="space-y-4">
            {cases.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-black group-hover:text-red-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                    <p className="text-xs font-bold text-gray-400 mt-1">Status: {item.status}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-red-100 text-red-700">
                    {item.risk} RISK
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Brain size={24} className="text-black" />
            <h2 className="text-xl font-black text-black uppercase tracking-widest">ACB Analytics</h2>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Corruption Heatmap</p>
              <p className="text-sm text-gray-600 leading-relaxed italic">"Highest complaint density detected in Sector: Infrastructure. Focus: Tender allocation."</p>
            </div>
            <button className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-red-700 shadow-lg flex items-center justify-center gap-2">
              <Download size={18} /> GENERATE LEGAL BRIEF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACBDashboard;
