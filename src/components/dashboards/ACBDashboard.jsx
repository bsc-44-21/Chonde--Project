import React, { useState } from 'react';
import {
  ShieldCheck, AlertTriangle, Search,
  Brain, FileText, Download, Gavel, Eye,
  Camera, ArrowRight, Activity
} from 'lucide-react';

const ACBDashboard = ({ user }) => {
  const [inquiries, setInquiries] = useState([
    { id: 1, title: "Ghost Project: Chitipa Water Point", reportCount: 14, district: "Chitipa", status: "Open" },
    { id: 2, title: "Tender Inflation: Mangochi Bridge", reportCount: 8, district: "Mangochi", status: "Monitoring" },
    { id: 3, title: "Substandard Cement: Dedza Primary", reportCount: 22, district: "Dedza", status: "Critical" }
  ]);

  const [aiBrief, setAiBrief] = useState(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const generateAIBrief = () => {
    setIsSummarizing(true);
    setTimeout(() => {
      setAiBrief({
        riskLevel: "Critical",
        pattern: "Tender pre-allocation detected",
        action: "Direct Audit of Dedza District Council recommended."
      });
      setIsSummarizing(false);
    }, 1500);
  };

  const closeCase = (id) => {
    setInquiries(inquiries.filter(i => i.id !== id));
  };

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-100"><Gavel size={32} /></div>
          <div>
            <h1 className="text-3xl font-black text-black tracking-tight underline decoration-red-600 decoration-4 underline-offset-8">Anti-Corruption Terminal</h1>
            <p className="text-gray-500 font-bold flex items-center gap-2 mt-3 uppercase text-[10px] tracking-widest"><Activity size={12} className="text-red-600" /> Integrity Monitoring System: ACTIVE</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={generateAIBrief} className="bg-neutral-bg border border-gray-200 text-black px-6 py-4 rounded-2xl font-black transition-all flex items-center gap-3 hover:bg-neutral-200">
            <Brain size={20} className="text-primary-light" /> AI CASE SUMMARY
          </button>
          <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl hover:bg-red-700">
            <ShieldCheck size={20} /> INITIATE INQUIRY
          </button>
        </div>
      </div>

      {/* Crime/Accountability Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'High Priority Flags', val: '28', icon: <AlertTriangle size={16} />, color: "text-red-600" },
          { label: 'Citizen Reports', val: '1,042', icon: <FileText size={16} />, color: "text-black" },
          { label: 'Active Inquiry', val: inquiries.length, icon: <Search size={16} />, color: "text-status-ongoing" },
          { label: 'Evidence Gaps', val: '14%', icon: <Camera size={16} />, color: "text-gray-400" }
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
          <h2 className="text-xl font-black text-black uppercase tracking-widest">Citizen-Led Investigation Feed</h2>
          <div className="space-y-4">
            {inquiries.map((i) => (
              <div key={i.id} className="bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm hover:border-red-200 transition-all group overflow-hidden relative">
                {i.status === 'Critical' && <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                      <Eye size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-black group-hover:text-red-600 transition-colors uppercase tracking-tight">{i.title}</h3>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1">{i.district} • {i.reportCount} Verified Citizen Reports</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-black hover:bg-gray-100 transition-all">
                      <Camera size={18} />
                    </button>
                    <button onClick={() => closeCase(i.id)} className="text-[10px] font-black bg-black text-white px-5 py-2.5 rounded-xl uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACB Sidebar Intelligence */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 font-black uppercase tracking-widest text-black">
            <Brain size={24} />
            <h2>AI Summary Generator</h2>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm overflow-hidden relative min-h-[300px]">
            {isSummarizing && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <Activity size={32} className="animate-pulse text-red-600 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest text-red-600">Extracting Legal Patterns...</p>
              </div>
            )}

            {!aiBrief ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300"><FileText size={24} /></div>
                <p className="text-xs font-bold text-gray-400 text-center leading-relaxed italic">Select "AI Case Summary" to analyze incoming citizen evidence for legal irregularities.</p>
              </div>
            ) : (
              <div className="space-y-6 animate-in zoom-in-95 duration-500">
                <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">ACB-AI Intelligence</span>
                    <span className="px-3 py-1 bg-red-600 text-white text-[9px] font-black rounded-full uppercase tracking-widest">{aiBrief.riskLevel} Risk</span>
                  </div>
                  <p className="text-sm font-black text-black leading-relaxed mb-4">"{aiBrief.pattern}"</p>
                  <p className="text-xs font-medium text-red-900 border-l-2 border-red-200 pl-4 py-1 flex items-center gap-2">
                    <ArrowRight size={14} /> {aiBrief.action}
                  </p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                  <Download size={14} /> EXPORT FOR COURT
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACBDashboard;
