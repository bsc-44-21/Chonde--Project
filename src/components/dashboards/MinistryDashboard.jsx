import React from 'react';
import { 
  PlusCircle, Activity, Briefcase, 
  CheckCircle2, AlertTriangle, FileText, BarChart3
} from 'lucide-react';

const MinistryDashboard = ({ user }) => {
  const sectorProjects = [
    { id: 201, name: 'Ntcheu Primary School Block', status: 'Ongoing', progress: 45 },
    { id: 202, name: 'Karonga Teachers House', status: 'Delayed', progress: 12 }
  ];

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight">{user?.sector} Dashboard</h1>
          <p className="text-gray-500 font-bold flex items-center gap-2 mt-1"><Activity size={16} /> Sector Metrics: SYNCED</p>
        </div>
        <button className="bg-black hover:bg-status-completed text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95">
          <PlusCircle size={22} /> AUDIT SECTOR PROGRESS
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Sector Funds', val: 'MWK 410B', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Sector Delays', val: '5', icon: <AlertTriangle size={16}/>, color: "text-status-delayed" },
          { label: 'Ongoing School Units', val: '42', icon: <BarChart3 size={16}/>, color: "text-status-ongoing" },
          { label: 'Completed Jobs', val: '18', icon: <CheckCircle2 size={16}/>, color: "text-status-completed" }
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
           <h2 className="text-xl font-black text-black uppercase tracking-widest">Active Sector Monitoring</h2>
           <div className="space-y-4">
             {sectorProjects.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-black text-black group-hover:text-primary-light transition-colors">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-status-ongoing" style={{width: `${item.progress}%`}} />
                        </div>
                        <span className="text-[10px] font-black">{item.progress}% Progress</span>
                      </div>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      item.status === 'Ongoing' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
             ))}
           </div>
        </div>

        <div className="space-y-8">
           <div className="flex items-center gap-3 text-black font-black uppercase tracking-widest">
             <FileText size={24} />
             <h2>Complaints (Sector)</h2>
           </div>
           <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-black text-status-delayed mb-1">URGENT</p>
                <p className="text-sm font-bold text-black italic leading-relaxed">"Flooding damage at Ntcheu Primary Site remains unaddressed."</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryDashboard;
